import * as THREE from 'three';

export function predictRoutePosition(
  startPosition: THREE.Vector3,
  waypoints: THREE.Vector3[] | undefined,
  speedMultipliers: number[] | undefined,
  currentWaypointIndex: number,
  baseSpeed: number,
  seconds: number,
  fallbackVelocity: THREE.Vector3
): THREE.Vector3 {
  if (!waypoints || waypoints.length === 0) {
    return startPosition.clone().addScaledVector(fallbackVelocity, Math.max(0, seconds));
  }

  const predicted = startPosition.clone();
  let remainingTime = Math.max(0, seconds);
  let waypointIndex = currentWaypointIndex;

  while (remainingTime > 0.001 && waypointIndex < waypoints.length) {
    const waypoint = waypoints[waypointIndex];
    const distance = predicted.distanceTo(waypoint);
    const speedMultiplier = speedMultipliers?.[waypointIndex] ?? 1;
    const speed = Math.max(0.5, baseSpeed * speedMultiplier);
    const segmentTime = distance / speed;

    if (segmentTime > remainingTime) {
      predicted.lerp(waypoint, remainingTime / segmentTime);
      remainingTime = 0;
    } else {
      predicted.copy(waypoint);
      remainingTime -= segmentTime;
      waypointIndex++;
    }
  }

  return predicted;
}
