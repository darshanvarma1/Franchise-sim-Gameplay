import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GameplayCamera } from '../src/camera/GameplayCamera.ts';
import { GameEngine } from '../src/engine/GameEngine.ts';

global.cancelAnimationFrame = () => {};
global.window = {};

function createHost() {
  return {
    children: [],
    appendChild(canvas) {
      canvas.parentElement = this;
      this.children.push(canvas);
    },
    removeChild(canvas) {
      const index = this.children.indexOf(canvas);
      assert.notEqual(index, -1, 'engine tried to remove a canvas it does not own');
      this.children.splice(index, 1);
      canvas.parentElement = null;
    },
  };
}

function mountEngineStub(host) {
  const canvas = { parentElement: null };
  let disposeCount = 0;
  const engine = Object.create(GameEngine.prototype);
  Object.assign(engine, {
    animationFrameId: 0,
    destroyed: false,
    isRunning: false,
    onStateChangeCallback: () => {},
    renderer: {
      domElement: canvas,
      dispose() {
        disposeCount += 1;
      },
    },
  });

  host.appendChild(canvas);
  window.__engine = engine;
  return { canvas, engine, getDisposeCount: () => disposeCount };
}

const host = createHost();
const first = mountEngineStub(host);
first.engine.destroy();
assert.equal(host.children.length, 0, 'cleanup must remove the first owned canvas');
assert.equal(first.getDisposeCount(), 1, 'cleanup must dispose its renderer once');
assert.equal(window.__engine, undefined, 'cleanup must clear its own diagnostic reference');

const stale = mountEngineStub(host);
const active = mountEngineStub(host);
assert.equal(host.children.length, 2, 'test setup must model a stale and active canvas');
stale.engine.destroy();
assert.deepEqual(host.children, [active.canvas], 'stale cleanup must leave the active canvas attached');
assert.equal(window.__engine, active.engine, 'stale cleanup must not clear the active engine reference');
stale.engine.destroy();
assert.equal(stale.getDisposeCount(), 1, 'destroy must be idempotent');
active.engine.destroy();
assert.equal(host.children.length, 0, 'final cleanup must leave no owned canvas attached');

const resizeCalls = [];
const resizeEngine = Object.create(GameEngine.prototype);
Object.assign(resizeEngine, {
  destroyed: false,
  cameraManager: {
    resize(aspect) {
      resizeCalls.push(['camera', aspect]);
    },
  },
  renderer: {
    setSize(width, height, updateStyle) {
      resizeCalls.push(['renderer', width, height, updateStyle]);
    },
  },
});
resizeEngine.resize(0, 844);
resizeEngine.resize(Number.NaN, 844);
assert.equal(resizeCalls.length, 0, 'invalid observations must retain the last valid viewport size');
resizeEngine.resize(390, 844);
assert.deepEqual(resizeCalls, [
  ['camera', 390 / 844],
  ['renderer', 390, 844, false],
], 'camera and renderer must use the same valid CSS dimensions without rewriting canvas styles');

const focus = new THREE.Vector3(0, 0, -26.97);
const modes = ['TACTICAL', 'BROADCAST', 'ACTION'];
const projectionResults = {};

for (const mode of modes) {
  const manager = new GameplayCamera(390 / 844);
  manager.setMode(mode);
  manager.snapTo(focus);
  manager.camera.updateMatrixWorld(true);

  const project = (height) => {
    const projected = focus.clone();
    projected.y += height;
    projected.project(manager.camera);
    return {
      x: (projected.x + 1) / 2,
      y: (1 - projected.y) / 2,
      depth: projected.z,
    };
  };

  const feet = project(0);
  const body = project(1);
  projectionResults[mode] = { feet, body };
  assert.ok(Math.abs(feet.x - 0.5) < 0.001, `${mode} must center the controlled player laterally`);
  assert.ok(feet.y > 0.6 && feet.y < 0.85, `${mode} feet must remain inside the usable portrait frame`);
  assert.ok(body.y > 0.5 && body.y < 0.7, `${mode} torso must remain in the central/lower-central frame`);
  assert.ok(feet.depth > -1 && feet.depth < 1, `${mode} controlled player must be in front of the camera`);
}

console.log('Lifecycle regression: PASS');
console.table(
  Object.entries(projectionResults).map(([mode, result]) => ({
    mode,
    feetX: result.feet.x.toFixed(3),
    feetY: result.feet.y.toFixed(3),
    bodyY: result.body.y.toFixed(3),
    depth: result.feet.depth.toFixed(3),
  }))
);
