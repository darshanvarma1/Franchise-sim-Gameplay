import assert from 'node:assert/strict';
import * as THREE from 'three';
import { FootballEntity } from '../src/entities/FootballEntity.ts';
import {
  calculateBallisticTrajectory,
  distancePointToSegment,
} from '../src/physics/PhysicsMath.ts';
import {
  formatGameClock,
  resolveOffensivePlay,
} from '../src/football/GameRules.ts';
import { GameplayCamera } from '../src/camera/GameplayCamera.ts';
import { predictRoutePosition } from '../src/football/RouteMath.ts';

const throwTypes = ['BULLET', 'TOUCH', 'LOB'];
const distances = [8, 20, 40];
const apexByType = new Map();

for (const throwType of throwTypes) {
  for (const distance of distances) {
    const origin = new THREE.Vector3(0, 1.9, 0);
    const target = new THREE.Vector3(0, 0, distance);
    const trajectory = calculateBallisticTrajectory(
      origin,
      target,
      new THREE.Vector3(),
      throwType,
      new THREE.Vector3(),
      28.68
    );

    const ball = new FootballEntity();
    ball.launch(origin, trajectory.velocity);
    let elapsed = 0;
    let apex = origin.y;
    while (elapsed < trajectory.flightTime - 1e-9) {
      const step = Math.min(1 / 240, trajectory.flightTime - elapsed);
      ball.update(step, -100);
      elapsed += step;
      apex = Math.max(apex, ball.position.y);
    }

    assert.ok(
      ball.position.distanceTo(trajectory.targetLeadPoint) < 1e-6,
      `${throwType} at ${distance}m did not arrive at its solved catch point`
    );
    if (distance === 20) apexByType.set(throwType, apex);
  }
}

assert.ok(apexByType.get('LOB') > apexByType.get('TOUCH'));
assert.ok(apexByType.get('TOUCH') > apexByType.get('BULLET'));

assert.equal(
  distancePointToSegment(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(-2, 1, 0),
    new THREE.Vector3(2, 1, 0)
  ),
  0
);
assert.equal(
  distancePointToSegment(
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(-2, 1, 0),
    new THREE.Vector3(2, 1, 0)
  ),
  1
);

const baseState = {
  down: 1,
  distance: 10,
  lineOfScrimmage: 25,
  firstDownLine: 35,
  quarter: 1,
  clockSeconds: 900,
  offenseScore: 0,
  defenseScore: 0,
  playResultText: '',
};

const incomplete = resolveOffensivePlay(baseState, 25, 'Incomplete Pass');
assert.equal(incomplete.nextState.down, 2);
assert.equal(incomplete.nextState.distance, 10);
assert.equal(incomplete.nextState.lineOfScrimmage, 25);

const firstDown = resolveOffensivePlay(baseState, 37, 'Tackled');
assert.equal(firstDown.nextState.down, 1);
assert.equal(firstDown.nextState.lineOfScrimmage, 37);

const goalToGo = resolveOffensivePlay(
  { ...baseState, lineOfScrimmage: 88, firstDownLine: 95 },
  95,
  'Tackled'
);
assert.equal(goalToGo.nextState.distance, 5);
assert.equal(goalToGo.nextState.firstDownLine, 100);

const turnover = resolveOffensivePlay(
  { ...baseState, down: 4 },
  30,
  'Tackled'
);
assert.equal(turnover.turnoverOnDowns, true);
assert.equal(turnover.nextState.lineOfScrimmage, 25);

assert.equal(formatGameClock(165), '02:45');
assert.equal(formatGameClock(-2), '00:00');

const predictedRoutePosition = predictRoutePosition(
  new THREE.Vector3(0, 0, 0),
  [new THREE.Vector3(0, 0, 2), new THREE.Vector3(4, 0, 2)],
  [1, 0.5],
  0,
  4,
  1,
  new THREE.Vector3()
);
assert.deepEqual(predictedRoutePosition.toArray(), [1, 0, 2]);

const camera = new GameplayCamera(16 / 9);
const focus = new THREE.Vector3(4, 0, 10);
camera.snapTo(focus, -1);
assert.ok(camera.camera.position.z > focus.z, 'Defense camera must sit behind a -Z returner');
camera.snapTo(focus, 1);
assert.ok(camera.camera.position.z < focus.z, 'Offense camera must sit behind a +Z runner');

console.log('Gameplay foundation regression: PASS');
console.table(
  throwTypes.map((throwType) => ({
    throwType,
    apexAt20m: apexByType.get(throwType).toFixed(2),
  }))
);
