import * as THREE from 'three';
import { ThrowType, RagdollState } from '../types';

export const BALL_GRAVITY = 9.81;

const THROW_SPEED_MULTIPLIER: Record<ThrowType, number> = {
  BULLET: 1.15,
  TOUCH: 0.88,
  LOB: 0.68,
};

export interface TackleResult {
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  impactStrength: number;
  impulseRunner: THREE.Vector3;
  impulseDefender: THREE.Vector3;
  nextState: RagdollState;
}

/**
 * Calculates physics-based tackle interaction between ball carrier and tackler.
 * impactStrength = relativeVelocity * effectiveMass * tackleAngleModifier * strengthModifier
 */
export function computeTackleImpact(
  carrierPos: THREE.Vector3,
  carrierVel: THREE.Vector3,
  carrierMass: number,
  carrierStr: number,
  tacklerPos: THREE.Vector3,
  tacklerVel: THREE.Vector3,
  tacklerMass: number,
  tacklerStr: number
): TackleResult {
  // Relative velocity
  const relVel = new THREE.Vector3().subVectors(tacklerVel, carrierVel);
  const relSpeed = relVel.length();

  // Contact vector (tackler towards runner)
  const contactDir = new THREE.Vector3().subVectors(carrierPos, tacklerPos).setY(0).normalize();
  if (contactDir.lengthSq() < 0.001) contactDir.set(0, 0, 1);

  // Tackler heading vs runner velocity angle
  const runnerSpeed = carrierVel.length();
  let angleModifier = 1.0;
  if (runnerSpeed > 0.5) {
    const runnerHeading = carrierVel.clone().normalize();
    const dot = runnerHeading.dot(contactDir);
    // Head-on collision (dot < 0) has highest impact; pursuit from behind (dot > 0.5) has drag effect
    angleModifier = 0.8 + 0.6 * (-dot + 1) * 0.5;
  }

  // Mass & Strength ratio
  const effectiveMass = (tacklerMass / (carrierMass + 1e-3));
  const strengthModifier = (tacklerStr / (carrierStr + 1e-3));

  // Impact strength calculation
  let impactStrength = (relSpeed + 1.2) * effectiveMass * angleModifier * strengthModifier * 42;
  // Clamp extreme impulses to prevent explosive physics launches
  impactStrength = Math.min(impactStrength, 950);

  // Impulse directions
  const impulseRunner = contactDir.clone().multiplyScalar(impactStrength * 0.016);
  // Tackler gets equal and opposite pushback / wrap-up momentum
  const impulseDefender = contactDir.clone().multiplyScalar(-impactStrength * 0.010);

  let severity: 'LOW' | 'MEDIUM' | 'HIGH';
  let nextState: RagdollState;

  if (impactStrength < 220) {
    severity = 'LOW';
    nextState = 'NORMAL'; // Shoulder bump / absorb
  } else if (impactStrength < 480) {
    severity = 'MEDIUM';
    nextState = 'STUMBLE';
  } else {
    severity = 'HIGH';
    nextState = 'FULL_RAGDOLL';
  }

  return {
    severity,
    impactStrength,
    impulseRunner,
    impulseDefender,
    nextState,
  };
}

/**
 * Ballistic trajectory calculation to lead receiver.
 * Computes initial launch velocity vector for the football given target velocity and throw type.
 */
export function calculateBallisticTrajectory(
  origin: THREE.Vector3,
  targetPos: THREE.Vector3,
  targetVel: THREE.Vector3,
  throwType: ThrowType,
  accuracyOffset: THREE.Vector3,
  qbRatingVelocity: number = 24
): { velocity: THREE.Vector3; flightTime: number; targetLeadPoint: THREE.Vector3 } {
  // Throw types differ by horizontal velocity. With a single, shared gravity value,
  // slower throws naturally require a higher launch angle and produce a higher arc.
  const minimumSpeed = throwType === 'BULLET' ? 24 : throwType === 'TOUCH' ? 20 : 15;
  const speed = Math.max(minimumSpeed, qbRatingVelocity * THROW_SPEED_MULTIPLIER[throwType]);

  // Iteratively estimate flight time to lead moving receiver
  const horizontalDistance = (from: THREE.Vector3, to: THREE.Vector3) =>
    Math.hypot(to.x - from.x, to.z - from.z);

  let estimatedTime = Math.max(0.25, horizontalDistance(origin, targetPos) / speed);
  // Refine the lead against the receiver's current velocity.
  for (let i = 0; i < 3; i++) {
    const projectedPos = targetPos.clone().addScaledVector(targetVel, estimatedTime);
    estimatedTime = Math.max(0.25, horizontalDistance(origin, projectedPos) / speed);
  }

  // Future catch point with accuracy variance
  const targetLeadPoint = targetPos
    .clone()
    .addScaledVector(targetVel, estimatedTime);

  targetLeadPoint.x += accuracyOffset.x;
  targetLeadPoint.z += accuracyOffset.z;

  // Preserve vertical accuracy variation around a chest-level target.
  targetLeadPoint.y = THREE.MathUtils.clamp(1.35 + accuracyOffset.y, 0.9, 2.1);

  const deltaX = targetLeadPoint.x - origin.x;
  const deltaZ = targetLeadPoint.z - origin.z;
  const horizontalDist = Math.sqrt(deltaX * deltaX + deltaZ * deltaZ);
  const deltaY = targetLeadPoint.y - origin.y;

  // Horizontal velocity
  const flightTime = Math.max(0.25, horizontalDist / speed);
  const vx = deltaX / flightTime;
  const vz = deltaZ / flightTime;
  // Vertical velocity from kinematic formula: y = vy*t - 0.5*g*t^2 => vy = (y + 0.5*g*t^2)/t
  const vy = (deltaY + 0.5 * BALL_GRAVITY * flightTime * flightTime) / flightTime;

  const velocity = new THREE.Vector3(vx, vy, vz);

  return {
    velocity,
    flightTime,
    targetLeadPoint,
  };
}

/** Returns the shortest distance from a point to a swept line segment. */
export function distancePointToSegment(
  point: THREE.Vector3,
  segmentStart: THREE.Vector3,
  segmentEnd: THREE.Vector3
): number {
  const segment = new THREE.Vector3().subVectors(segmentEnd, segmentStart);
  const lengthSq = segment.lengthSq();
  if (lengthSq < 1e-8) return point.distanceTo(segmentStart);

  const t = THREE.MathUtils.clamp(
    new THREE.Vector3().subVectors(point, segmentStart).dot(segment) / lengthSq,
    0,
    1
  );
  return point.distanceTo(segmentStart.clone().addScaledVector(segment, t));
}

/**
 * Active Ragdoll joint configuration
 */
export interface RagdollJoint {
  name: string;
  bone: THREE.Object3D;
  targetRot: THREE.Euler;
  currentRot: THREE.Euler;
  angularVel: THREE.Vector3;
  stiffness: number; // motor spring constant (k)
  damping: number;   // motor damping (c)
  limits: { min: THREE.Vector3; max: THREE.Vector3 };
}
