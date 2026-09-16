import * as THREE from 'three';
import { Position, RagdollState, TeamSide } from '../types';

export interface PlayerUniform {
  jerseyColor: number;
  pantsColor: number;
  helmetColor: number;
  numberColor: number;
  stripeColor: number;
}

export const OFFENSE_UNIFORM: PlayerUniform = {
  jerseyColor: 0x1d4ed8, // Royal Blue (Home)
  pantsColor: 0xffffff,  // White
  helmetColor: 0xf59e0b, // Gold
  numberColor: 0xffffff,
  stripeColor: 0xf59e0b,
};

export const DEFENSE_UNIFORM: PlayerUniform = {
  jerseyColor: 0xb91c1c, // Crimson Red (Away)
  pantsColor: 0x1f2937,  // Dark Charcoal
  helmetColor: 0xffffff, // White
  numberColor: 0xffffff,
  stripeColor: 0xb91c1c,
};

export class PlayerModel {
  public group: THREE.Group;
  public position: Position;
  public side: TeamSide;
  public uniform: PlayerUniform;

  // Hierarchical Body Parts
  public root: THREE.Group;
  public pelvis: THREE.Mesh;
  public torso: THREE.Group;
  public torsoMesh: THREE.Mesh;
  public shoulderPads: THREE.Mesh;
  public headGroup: THREE.Group;
  public helmetMesh: THREE.Mesh;
  public facemask: THREE.Mesh;

  // Limbs
  public leftShoulder: THREE.Group;
  public leftUpperArm: THREE.Mesh;
  public leftElbow: THREE.Group;
  public leftForearm: THREE.Mesh;

  public rightShoulder: THREE.Group;
  public rightUpperArm: THREE.Mesh;
  public rightElbow: THREE.Group;
  public rightForearm: THREE.Mesh;

  public leftHip: THREE.Group;
  public leftThigh: THREE.Mesh;
  public leftKnee: THREE.Group;
  public leftCalf: THREE.Mesh;

  public rightHip: THREE.Group;
  public rightThigh: THREE.Mesh;
  public rightKnee: THREE.Group;
  public rightCalf: THREE.Mesh;

  // Ragdoll & Animation state
  public ragdollState: RagdollState = 'NORMAL';
  public ragdollBlend: number = 0; // 0 = 100% animation, 1 = 100% ragdoll
  public ragdollAngularVel: THREE.Vector3 = new THREE.Vector3();
  public ragdollTilt: THREE.Vector3 = new THREE.Vector3(); // Euler tilt angles
  public stumbleTime: number = 0;
  public groundContactTime: number = 0;

  // Stride animation phase
  public runCycle: number = 0;
  public isHoldingBall: boolean = false;

  constructor(position: Position, side: TeamSide, uniform: PlayerUniform) {
    this.position = position;
    this.side = side;
    this.uniform = uniform;
    this.group = new THREE.Group();

    // Base materials (PBR Standard materials)
    const jerseyMat = new THREE.MeshStandardMaterial({
      color: uniform.jerseyColor,
      roughness: 0.5,
      metalness: 0.1,
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: uniform.pantsColor,
      roughness: 0.6,
      metalness: 0.05,
    });
    const helmetMat = new THREE.MeshStandardMaterial({
      color: uniform.helmetColor,
      roughness: 0.2,
      metalness: 0.4,
    });
    const padsMat = new THREE.MeshStandardMaterial({
      color: uniform.jerseyColor,
      roughness: 0.4,
      metalness: 0.1,
    });
    const facemaskMat = new THREE.MeshStandardMaterial({
      color: 0x4b5563,
      metalness: 0.8,
      roughness: 0.2,
    });
    const cleatMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.8,
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xd49b77,
      roughness: 0.6,
    });

    // Hierarchy root
    this.root = new THREE.Group();
    this.group.add(this.root);

    // Pelvis (Center of Mass)
    const pelvisGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.25, 8);
    this.pelvis = new THREE.Mesh(pelvisGeo, pantsMat);
    this.pelvis.position.y = 0.95;
    this.pelvis.castShadow = true;
    this.root.add(this.pelvis);

    // Torso Group
    this.torso = new THREE.Group();
    this.torso.position.y = 0.15;
    this.pelvis.add(this.torso);

    // Chest / Athletic Jersey
    const torsoGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.45, 8);
    this.torsoMesh = new THREE.Mesh(torsoGeo, jerseyMat);
    this.torsoMesh.position.y = 0.22;
    this.torsoMesh.castShadow = true;
    this.torso.add(this.torsoMesh);

    // Shoulder Pads (Broad athletic silhouette)
    const padsGeo = new THREE.BoxGeometry(0.72, 0.18, 0.36);
    this.shoulderPads = new THREE.Mesh(padsGeo, padsMat);
    this.shoulderPads.position.y = 0.42;
    this.shoulderPads.castShadow = true;
    this.torso.add(this.shoulderPads);

    // Neck & Head
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 0.52;
    this.torso.add(this.headGroup);

    // Helmet
    const helmetGeo = new THREE.SphereGeometry(0.2, 10, 10);
    this.helmetMesh = new THREE.Mesh(helmetGeo, helmetMat);
    this.helmetMesh.castShadow = true;
    this.headGroup.add(this.helmetMesh);

    // Facemask
    const maskGeo = new THREE.TorusGeometry(0.12, 0.02, 6, 8, Math.PI);
    this.facemask = new THREE.Mesh(maskGeo, facemaskMat);
    this.facemask.rotation.x = -Math.PI / 2;
    this.facemask.position.set(0, -0.05, 0.15);
    this.headGroup.add(this.facemask);

    // --- ARMS ---
    // Left Arm
    this.leftShoulder = new THREE.Group();
    this.leftShoulder.position.set(-0.38, 0.36, 0);
    this.torso.add(this.leftShoulder);

    const armGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.28, 6);
    this.leftUpperArm = new THREE.Mesh(armGeo, jerseyMat);
    this.leftUpperArm.position.y = -0.14;
    this.leftShoulder.add(this.leftUpperArm);

    this.leftElbow = new THREE.Group();
    this.leftElbow.position.y = -0.28;
    this.leftShoulder.add(this.leftElbow);

    const forearmGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.28, 6);
    this.leftForearm = new THREE.Mesh(forearmGeo, skinMat);
    this.leftForearm.position.y = -0.14;
    this.leftElbow.add(this.leftForearm);

    // Right Arm
    this.rightShoulder = new THREE.Group();
    this.rightShoulder.position.set(0.38, 0.36, 0);
    this.torso.add(this.rightShoulder);

    this.rightUpperArm = new THREE.Mesh(armGeo, jerseyMat);
    this.rightUpperArm.position.y = -0.14;
    this.rightShoulder.add(this.rightUpperArm);

    this.rightElbow = new THREE.Group();
    this.rightElbow.position.y = -0.28;
    this.rightShoulder.add(this.rightElbow);

    this.rightForearm = new THREE.Mesh(forearmGeo, skinMat);
    this.rightForearm.position.y = -0.14;
    this.rightElbow.add(this.rightForearm);

    // --- LEGS ---
    const thighGeo = new THREE.CylinderGeometry(0.12, 0.09, 0.42, 6);
    const calfGeo = new THREE.CylinderGeometry(0.085, 0.07, 0.42, 6);

    // Left Leg
    this.leftHip = new THREE.Group();
    this.leftHip.position.set(-0.16, -0.1, 0);
    this.pelvis.add(this.leftHip);

    this.leftThigh = new THREE.Mesh(thighGeo, pantsMat);
    this.leftThigh.position.y = -0.21;
    this.leftThigh.castShadow = true;
    this.leftHip.add(this.leftThigh);

    this.leftKnee = new THREE.Group();
    this.leftKnee.position.y = -0.42;
    this.leftHip.add(this.leftKnee);

    this.leftCalf = new THREE.Mesh(calfGeo, cleatMat);
    this.leftCalf.position.y = -0.21;
    this.leftCalf.castShadow = true;
    this.leftKnee.add(this.leftCalf);

    // Right Leg
    this.rightHip = new THREE.Group();
    this.rightHip.position.set(0.16, -0.1, 0);
    this.pelvis.add(this.rightHip);

    this.rightThigh = new THREE.Mesh(thighGeo, pantsMat);
    this.rightThigh.position.y = -0.21;
    this.rightThigh.castShadow = true;
    this.rightHip.add(this.rightThigh);

    this.rightKnee = new THREE.Group();
    this.rightKnee.position.y = -0.42;
    this.rightHip.add(this.rightKnee);

    this.rightCalf = new THREE.Mesh(calfGeo, cleatMat);
    this.rightCalf.position.y = -0.21;
    this.rightCalf.castShadow = true;
    this.rightKnee.add(this.rightCalf);
  }

  /**
   * Updates procedural animation and active ragdoll physics blend.
   */
  public update(dt: number, speed: number, turning: number, isMoving: boolean) {
    if (this.ragdollState === 'NORMAL') {
      this.ragdollBlend = Math.max(0, this.ragdollBlend - dt * 3.0);
      this.stumbleTime = 0;
      this.groundContactTime = 0;
      this.pelvis.position.y = 0.95;

      // Normal athletic movement animation
      if (isMoving && speed > 0.3) {
        const strideFreq = 7.5 + (speed / 9.0) * 8.5; // Stride scales with speed
        this.runCycle += dt * strideFreq;

        const armSwing = Math.sin(this.runCycle) * 0.75;
        const legSwing = Math.sin(this.runCycle) * 0.85;

        // Legs
        this.leftHip.rotation.x = legSwing;
        this.leftKnee.rotation.x = Math.max(0, -Math.sin(this.runCycle + 0.3) * 1.1);

        this.rightHip.rotation.x = -legSwing;
        this.rightKnee.rotation.x = Math.max(0, -Math.sin(this.runCycle + Math.PI + 0.3) * 1.1);

        // Arms (opposite to legs)
        if (this.isHoldingBall) {
          // Tuck ball in right arm against chest
          this.rightShoulder.rotation.set(0.6, -0.3, -0.4);
          this.rightElbow.rotation.set(1.4, 0, 0);

          this.leftShoulder.rotation.x = armSwing * 0.8;
          this.leftElbow.rotation.x = 0.5;
        } else {
          this.leftShoulder.rotation.x = -armSwing;
          this.leftElbow.rotation.x = 0.4 + Math.abs(armSwing) * 0.3;

          this.rightShoulder.rotation.x = armSwing;
          this.rightElbow.rotation.x = 0.4 + Math.abs(armSwing) * 0.3;
        }

        // Torso athletic lean & banking into turns
        const forwardLean = 0.18 + (speed / 10.0) * 0.22;
        this.torso.rotation.x = forwardLean;
        this.torso.rotation.z = -turning * 0.25; // Bank into turn
        this.torso.rotation.y = Math.sin(this.runCycle) * 0.12;

        // Pelvis bobbing
        this.pelvis.position.y = 0.95 + Math.abs(Math.cos(this.runCycle)) * 0.06;
      } else {
        // Idle athletic stance (pre-snap / stationary)
        this.leftHip.rotation.x = 0.1;
        this.rightHip.rotation.x = 0.1;
        this.leftKnee.rotation.x = -0.2;
        this.rightKnee.rotation.x = -0.2;
        this.torso.rotation.set(0.12, 0, 0);
        this.leftShoulder.rotation.set(0.15, 0, 0);
        this.rightShoulder.rotation.set(0.15, 0, 0);
      }
    } else if (this.ragdollState === 'STUMBLE') {
      // Stumble: off-balance wobble, flailing arms, losing forward momentum
      this.stumbleTime += dt;
      this.ragdollBlend = Math.min(0.65, this.ragdollBlend + dt * 2.0);

      const wobble = Math.sin(this.stumbleTime * 14.0) * 0.45;
      this.torso.rotation.x = 0.65 + Math.sin(this.stumbleTime * 8) * 0.2;
      this.torso.rotation.z = wobble;

      this.leftShoulder.rotation.set(-0.8, -0.6, -0.8 + wobble);
      this.rightShoulder.rotation.set(-0.8, 0.6, 0.8 - wobble);

      this.leftHip.rotation.x = 0.4 + wobble * 0.5;
      this.rightHip.rotation.x = -0.3 - wobble * 0.5;
      this.pelvis.position.y = 0.78;

      if (this.stumbleTime > 1.2) {
        // Stumble recovered or turned into fall
        this.ragdollState = 'NORMAL';
      }
    } else if (this.ragdollState === 'PARTIAL_RAGDOLL' || this.ragdollState === 'FULL_RAGDOLL') {
      // Full physics ragdoll: joints lose motor control, body folds under inertia
      this.ragdollBlend = Math.min(1.0, this.ragdollBlend + dt * 4.0);
      this.groundContactTime += dt;

      // Integrate angular velocities
      this.ragdollTilt.addScaledVector(this.ragdollAngularVel, dt);
      this.ragdollAngularVel.multiplyScalar(Math.pow(0.92, dt * 60)); // Angular damping

      // Drop pelvis to ground
      this.pelvis.position.y = Math.max(0.24, this.pelvis.position.y - dt * 2.2);

      // Limp joints
      this.torso.rotation.x = Math.sin(this.ragdollTilt.x) * 1.2;
      this.torso.rotation.z = Math.sin(this.ragdollTilt.z) * 1.1;
      this.headGroup.rotation.x = -0.4;

      this.leftShoulder.rotation.set(1.2, 0.4, 0.8);
      this.rightShoulder.rotation.set(1.2, -0.4, -0.8);
      this.leftElbow.rotation.set(1.4, 0, 0);
      this.rightElbow.rotation.set(1.4, 0, 0);

      this.leftHip.rotation.set(-0.6, 0.3, 0.4);
      this.rightHip.rotation.set(-0.4, -0.3, -0.4);
      this.leftKnee.rotation.set(0.8, 0, 0);
      this.rightKnee.rotation.set(0.6, 0, 0);
    } else if (this.ragdollState === 'RECOVERING') {
      // Smoothly blend back to standing
      this.ragdollBlend = Math.max(0, this.ragdollBlend - dt * 2.5);
      this.pelvis.position.y = 0.24 + (1.0 - this.ragdollBlend) * (0.95 - 0.24);
      this.torso.rotation.x *= 0.9;
      this.torso.rotation.z *= 0.9;
      if (this.ragdollBlend <= 0.05) {
        this.ragdollState = 'NORMAL';
      }
    }
  }

  /**
   * Applies physics collision impulse directly into ragdoll joints
   */
  public applyTackleImpulse(impulse: THREE.Vector3, state: RagdollState) {
    this.ragdollState = state;
    this.ragdollAngularVel.set(
      (Math.random() - 0.5) * 8.0 + impulse.z * 0.8,
      (Math.random() - 0.5) * 6.0,
      -impulse.x * 0.8
    );
  }

  public resetRagdoll() {
    this.ragdollState = 'NORMAL';
    this.ragdollBlend = 0;
    this.ragdollAngularVel.set(0, 0, 0);
    this.ragdollTilt.set(0, 0, 0);
    this.stumbleTime = 0;
    this.groundContactTime = 0;
    this.pelvis.position.y = 0.95;
    this.torso.rotation.set(0, 0, 0);
    this.headGroup.rotation.set(0, 0, 0);
  }
}
