import * as THREE from 'three';
import { BALL_GRAVITY } from '../physics/PhysicsMath';

export class FootballEntity {
  public group: THREE.Group;
  public ballMesh: THREE.Mesh;
  public lacesMesh: THREE.Mesh;
  public stripesMesh: THREE.Group;

  // Real-time physics properties
  public position: THREE.Vector3 = new THREE.Vector3();
  public previousPosition: THREE.Vector3 = new THREE.Vector3();
  public velocity: THREE.Vector3 = new THREE.Vector3();
  public angularVelocity: THREE.Vector3 = new THREE.Vector3();
  public isHeld: boolean = true;
  public carrier: THREE.Object3D | null = null;
  public carrierOffset: THREE.Vector3 = new THREE.Vector3(0.25, 1.25, 0.2);

  public isAirborne: boolean = false;
  public hasBounced: boolean = false;
  public spinRate: number = 28.0; // rad/s for tight spiral
  public spiralAngle: number = 0;

  constructor() {
    this.group = new THREE.Group();

    // Spheroid prolate geometry
    const ballGeo = new THREE.SphereGeometry(0.14, 16, 12);
    // Stretch along Z to make prolate football shape (approx 28cm x 17cm)
    ballGeo.scale(0.85, 0.85, 1.55);

    // Leather texture / material
    const leatherMat = new THREE.MeshStandardMaterial({
      color: 0x7c2d12, // Rich dark pigskin brown
      roughness: 0.65,
      metalness: 0.1,
    });

    this.ballMesh = new THREE.Mesh(ballGeo, leatherMat);
    this.ballMesh.castShadow = true;
    this.group.add(this.ballMesh);

    // Two white ring stripes near tips
    this.stripesMesh = new THREE.Group();
    const stripeGeo = new THREE.TorusGeometry(0.095, 0.012, 6, 16);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const frontStripe = new THREE.Mesh(stripeGeo, stripeMat);
    frontStripe.position.z = 0.12;
    this.stripesMesh.add(frontStripe);

    const backStripe = new THREE.Mesh(stripeGeo, stripeMat);
    backStripe.position.z = -0.12;
    this.stripesMesh.add(backStripe);

    this.ballMesh.add(this.stripesMesh);

    // White laces on top
    const laceMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
    const laceCenterGeo = new THREE.BoxGeometry(0.015, 0.01, 0.14);
    this.lacesMesh = new THREE.Mesh(laceCenterGeo, laceMat);
    this.lacesMesh.position.set(0, 0.118, 0);
    this.ballMesh.add(this.lacesMesh);

    for (let i = -2; i <= 2; i++) {
      const crossLaceGeo = new THREE.BoxGeometry(0.045, 0.008, 0.012);
      const crossLace = new THREE.Mesh(crossLaceGeo, laceMat);
      crossLace.position.set(0, 0.12, i * 0.025);
      this.ballMesh.add(crossLace);
    }
  }

  /**
   * Physics update step: gravity, aerodynamics, spiral rotation, ground bounce
   */
  public update(dt: number, groundY: number = 0.09) {
    if (this.isHeld && this.carrier) {
      // Attached to ball carrier's body/hands
      const worldPos = new THREE.Vector3();
      this.carrier.getWorldPosition(worldPos);

      const worldRotation = new THREE.Quaternion();
      this.carrier.getWorldQuaternion(worldRotation);
      const worldOffset = this.carrierOffset.clone().applyQuaternion(worldRotation);

      this.previousPosition.copy(this.position);
      this.position.copy(worldPos).add(worldOffset);
      this.group.position.copy(this.position);
      this.group.quaternion.copy(worldRotation);
      return;
    }

    if (this.isAirborne) {
      this.previousPosition.copy(this.position);

      // Integrate using the same gravity assumed by the launch solver.
      this.position.addScaledVector(this.velocity, dt);
      this.position.y -= 0.5 * BALL_GRAVITY * dt * dt;
      this.velocity.y -= BALL_GRAVITY * dt;

      // Aerodynamic alignment: ball points in direction of travel
      if (this.velocity.lengthSq() > 1.0) {
        const flightDir = this.velocity.clone().normalize();
        this.group.lookAt(this.position.clone().add(flightDir));

        // Tight spiral rotation around its longitudinal axis (Z)
        this.spiralAngle += this.spinRate * dt;
        this.ballMesh.rotation.z = this.spiralAngle;
      }

      // Check ground collision
      if (this.position.y <= groundY) {
        this.position.y = groundY;
        this.hasBounced = true;

        // Bounce physics (coefficient of restitution ~0.55)
        if (Math.abs(this.velocity.y) > 1.0) {
          this.velocity.y = -this.velocity.y * 0.52;
          this.velocity.x *= 0.65;
          this.velocity.z *= 0.65;
          // Random tumble spin upon impact
          this.angularVelocity.set(
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15
          );
        } else {
          // Ball rolling / dead on turf
          this.velocity.set(0, 0, 0);
          this.isAirborne = false;
        }
      }

      this.group.position.copy(this.position);
    } else if (this.hasBounced) {
      // Settled on ground
      this.position.y = groundY;
      this.group.position.copy(this.position);
    }
  }

  /**
   * Launch ball with ballistic velocity
   */
  public launch(startPos: THREE.Vector3, initialVelocity: THREE.Vector3) {
    this.isHeld = false;
    this.carrier = null;
    this.isAirborne = true;
    this.hasBounced = false;
    this.position.copy(startPos);
    this.previousPosition.copy(startPos);
    this.velocity.copy(initialVelocity);
    this.spiralAngle = 0;
    this.spinRate = 32.0; // Fast spiral spin
    this.group.position.copy(this.position);
  }

  /**
   * Secure ball into receiver / carrier hands
   */
  public attachTo(carrier: THREE.Object3D, offset: THREE.Vector3 = new THREE.Vector3(0.25, 1.2, 0.2)) {
    this.isHeld = true;
    this.isAirborne = false;
    this.hasBounced = false;
    this.carrier = carrier;
    this.carrierOffset.copy(offset);
    this.previousPosition.copy(this.position);
  }
}
