import * as THREE from 'three';

export type CameraPreset = 'TACTICAL' | 'BROADCAST' | 'ACTION';

interface CameraConfig {
  height: number;
  backDist: number;
  lookAhead: number;
  lookHeight: number;
  fov: number;
}

const CAMERA_PRESETS: Record<CameraPreset, CameraConfig> = {
  TACTICAL: {
    height: 5.4,
    backDist: 7.2,
    lookAhead: 1.5,
    lookHeight: 1.1,
    fov: 44,
  },
  BROADCAST: {
    height: 8.2,
    backDist: 10.5,
    lookAhead: 3.0,
    lookHeight: 0.9,
    fov: 46,
  },
  ACTION: {
    height: 4.0,
    backDist: 5.4,
    lookAhead: 1.0,
    lookHeight: 1.2,
    fov: 42,
  },
};

export class GameplayCamera {
  public camera: THREE.PerspectiveCamera;
  public targetPos: THREE.Vector3 = new THREE.Vector3(0, 1.1, -21.0);
  public currentLookAt: THREE.Vector3 = new THREE.Vector3(0, 1.1, -21.0);

  // Active camera preset
  public mode: CameraPreset = 'TACTICAL';

  // Trauma / screen shake system
  private trauma: number = 0;
  private shakeOffset: THREE.Vector3 = new THREE.Vector3();

  // Smooth lerping parameters
  private desiredPos: THREE.Vector3 = new THREE.Vector3(0, 5.4, -34.0);
  private currentPos: THREE.Vector3 = new THREE.Vector3(0, 5.4, -34.0);
  private baseFov: number = 44;
  private targetFov: number = 44;
  private normalDesiredPos: THREE.Vector3 = new THREE.Vector3();
  private normalLookTarget: THREE.Vector3 = new THREE.Vector3();

  constructor(aspect: number) {
    const safeAspect = aspect && isFinite(aspect) && aspect > 0 ? aspect : 16 / 9;
    const config = CAMERA_PRESETS[this.mode];
    this.baseFov = config.fov;
    this.targetFov = config.fov;
    this.camera = new THREE.PerspectiveCamera(this.baseFov, safeAspect, 0.1, 400);
    this.camera.position.set(0, config.height, -34.0);
    this.targetPos.set(0, config.lookHeight, -21.0);
    this.currentLookAt.set(0, config.lookHeight, -21.0);
    this.camera.lookAt(this.currentLookAt);
  }

  public setMode(mode: CameraPreset) {
    this.mode = mode;
    const config = CAMERA_PRESETS[mode];
    this.targetFov = config.fov;
  }

  public cycleMode(): CameraPreset {
    const modes: CameraPreset[] = ['TACTICAL', 'BROADCAST', 'ACTION'];
    const nextIdx = (modes.indexOf(this.mode) + 1) % modes.length;
    this.setMode(modes[nextIdx]);
    return this.mode;
  }

  private calculateNormalTransform(focusPos: THREE.Vector3, config: CameraConfig) {
    this.normalDesiredPos.set(
      focusPos.x,
      config.height,
      focusPos.z - config.backDist
    );
    this.normalLookTarget.set(
      focusPos.x,
      config.lookHeight,
      focusPos.z + config.lookAhead
    );
  }

  /**
   * Instantly snaps camera behind the player without lerp lag (used on play resets)
   */
  public snapTo(focusPos: THREE.Vector3) {
    const config = CAMERA_PRESETS[this.mode];
    this.calculateNormalTransform(focusPos, config);
    this.desiredPos.copy(this.normalDesiredPos);
    this.currentPos.copy(this.desiredPos);
    this.targetPos.copy(this.normalLookTarget);
    this.currentLookAt.copy(this.targetPos);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
    this.camera.fov = config.fov;
    this.targetFov = config.fov;
    this.camera.updateProjectionMatrix();
  }

  /**
   * Triggers restrained cinematic camera shake on hard tackles or sacks
   */
  public addTrauma(amount: number = 0.4) {
    this.trauma = Math.min(1.0, this.trauma + amount);
  }

  /**
   * Updates camera following target, pass widening, and screen shake
   */
  public update(
    dt: number,
    focusPos: THREE.Vector3,
    isPassInAir: boolean,
    ballPos?: THREE.Vector3,
    receiverPos?: THREE.Vector3
  ) {
    const config = CAMERA_PRESETS[this.mode];

    // Determine target position and lookAt
    if (isPassInAir && ballPos && receiverPos) {
      // Pass in flight: smoothly track downfield midpoint between ball & receiver
      const passMidpoint = new THREE.Vector3()
        .addVectors(ballPos, receiverPos)
        .multiplyScalar(0.5);

      this.targetPos.lerp(
        new THREE.Vector3(passMidpoint.x * 0.75, 1.2, passMidpoint.z + 2.5),
        dt * 4.5
      );
      this.targetFov = config.fov + 2; // Subtle tightening, never wide fish-eye!

      // Camera sits moderately elevated behind pass trajectory
      this.desiredPos.set(
        passMidpoint.x * 0.35,
        config.height + 2.0,
        Math.max(focusPos.z - 4.0, passMidpoint.z - config.backDist)
      );
    } else {
      // Normal pocket / run camera: tightly centered behind ball carrier
      this.calculateNormalTransform(focusPos, config);
      this.targetPos.lerp(
        this.normalLookTarget,
        dt * 5.5
      );
      this.targetFov = config.fov;

      // Elevated behind player
      this.desiredPos.copy(this.normalDesiredPos);
    }

    // Smooth position interpolation
    this.currentPos.lerp(this.desiredPos, dt * 5.5);

    // Smooth FOV transition
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, this.targetFov, dt * 3.5);
    this.camera.updateProjectionMatrix();

    // Process camera trauma / shake
    if (this.trauma > 0.001) {
      const shakeMagnitude = this.trauma * this.trauma * 0.35; // Non-linear response
      this.shakeOffset.set(
        (Math.random() - 0.5) * shakeMagnitude,
        (Math.random() - 0.5) * shakeMagnitude,
        (Math.random() - 0.5) * shakeMagnitude * 0.5
      );
      this.trauma = Math.max(0, this.trauma - dt * 2.2); // Decay
    } else {
      this.shakeOffset.set(0, 0, 0);
    }

    this.camera.position.copy(this.currentPos).add(this.shakeOffset);

    // Smooth lookAt tracking
    this.currentLookAt.lerp(this.targetPos, dt * 6.0);
    this.camera.lookAt(this.currentLookAt.clone().add(this.shakeOffset.clone().multiplyScalar(0.5)));
  }

  public resize(aspect: number) {
    if (aspect && isFinite(aspect) && aspect > 0) {
      this.camera.aspect = aspect;
      this.camera.updateProjectionMatrix();
    }
  }
}
