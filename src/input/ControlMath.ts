export interface ControlDirection {
  x: number;
  z: number;
}

/** Maps screen-relative controls into the offense/defense world direction. */
export function mapControlDirection(
  lateral: number,
  forward: number,
  attackDirection: 1 | -1
): ControlDirection {
  return {
    x: -lateral * attackDirection,
    z: forward * attackDirection,
  };
}
