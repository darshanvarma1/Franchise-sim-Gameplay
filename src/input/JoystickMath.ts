export interface JoystickSample {
  lateral: number;
  forward: number;
  magnitude: number;
  sprint: boolean;
  knobX: number;
  knobY: number;
}

export const JOYSTICK_DEAD_ZONE = 0.12;
export const JOYSTICK_SPRINT_THRESHOLD = 0.85;

export function sampleJoystick(
  deltaX: number,
  deltaY: number,
  radius: number,
  deadZone: number = JOYSTICK_DEAD_ZONE,
  sprintThreshold: number = JOYSTICK_SPRINT_THRESHOLD
): JoystickSample {
  const safeRadius = Math.max(1, radius);
  const rawMagnitude = Math.hypot(deltaX, deltaY);
  const clampedMagnitude = Math.min(rawMagnitude, safeRadius);
  const normalizedMagnitude = clampedMagnitude / safeRadius;
  const directionX = rawMagnitude > 0 ? deltaX / rawMagnitude : 0;
  const directionY = rawMagnitude > 0 ? deltaY / rawMagnitude : 0;

  if (normalizedMagnitude <= deadZone) {
    return {
      lateral: 0,
      forward: 0,
      magnitude: 0,
      sprint: false,
      knobX: directionX * clampedMagnitude,
      knobY: directionY * clampedMagnitude,
    };
  }

  const scaledMagnitude = Math.min(
    1,
    (normalizedMagnitude - deadZone) / Math.max(0.001, 1 - deadZone)
  );

  return {
    lateral: directionX * scaledMagnitude,
    forward: -directionY * scaledMagnitude,
    magnitude: scaledMagnitude,
    sprint: normalizedMagnitude >= sprintThreshold,
    knobX: directionX * clampedMagnitude,
    knobY: directionY * clampedMagnitude,
  };
}
