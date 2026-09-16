import { PlayDefinition, RouteType, RouteWaypoint } from '../types';

export const PLAYBOOK: PlayDefinition[] = [
  {
    id: 'pass_slants',
    name: 'Quick Slants',
    type: 'PASS',
    description: 'Rapid 3-step drop. WRs cut inside at 45° across middle seam for fast rhythmic throws.',
    routes: {
      WR1: 'SLANT',
      WR2: 'SLANT',
      WR3: 'SLANT',
      RB: 'OUT',
    },
  },
  {
    id: 'pass_mesh',
    name: 'Mesh Under',
    type: 'PASS',
    description: 'Crossing drag routes create pick action underneath, while WR1 curls as safety valve.',
    routes: {
      WR1: 'CURL',
      WR2: 'DRAG',
      WR3: 'DRAG',
      RB: 'OUT',
    },
  },
  {
    id: 'pass_verts',
    name: 'Four Verticals',
    type: 'PASS',
    description: 'Deep aggressive attack. Outside receivers sprint streaks while slot attacks deep seam.',
    routes: {
      WR1: 'GO',
      WR2: 'GO',
      WR3: 'GO',
      RB: 'BLOCK',
    },
  },
  {
    id: 'run_inside_zone',
    name: 'Inside Zone',
    type: 'RUN',
    description: 'Direct interior run. Offensive line zone blocks to the right while RB presses the A-gap.',
    routes: {
      WR1: 'BLOCK',
      WR2: 'BLOCK',
      WR3: 'BLOCK',
      RB: 'HANDOFF_RUN',
    },
  },
];

/**
 * Predefined routes mapped to 3D waypoints relative to the receiver's pre-snap line of scrimmage position.
 * +Z is downfield (towards opponent end zone).
 * +X is right sideline, -X is left sideline.
 */
export function getRouteWaypoints(route: RouteType, side: 'LEFT' | 'SLOT' | 'RIGHT'): RouteWaypoint[] {
  const dir = side === 'LEFT' ? 1 : -1; // inside direction

  switch (route) {
    case 'GO':
      // Straight streak downfield
      return [
        { x: 0, z: 8, speedMult: 1.0 },
        { x: 0, z: 22, speedMult: 1.05 },
        { x: 0, z: 45, speedMult: 1.05 },
      ];

    case 'SLANT':
      // 3 yards straight, sharp 45 degree cut inside
      return [
        { x: 0, z: 3.5, speedMult: 1.0 },
        { x: dir * 5.0, z: 8.5, speedMult: 1.1 },
        { x: dir * 14.0, z: 14.0, speedMult: 1.0 },
      ];

    case 'OUT':
      // 6 yards straight, 90 degree cut towards sideline
      return [
        { x: 0, z: 6.5, speedMult: 1.0 },
        { x: -dir * 6.0, z: 7.0, speedMult: 0.95 },
        { x: -dir * 12.0, z: 7.5, speedMult: 1.0 },
      ];

    case 'CURL':
      // 8 yards straight, hard stop and come back 1.5 yards towards QB
      return [
        { x: 0, z: 8.5, speedMult: 1.0 },
        { x: dir * 0.5, z: 7.2, speedMult: 0.6 },
        { x: dir * 0.5, z: 7.0, speedMult: 0.2 },
      ];

    case 'DRAG':
      // Shallow crossing route 2.5 yards downfield across entire formation
      return [
        { x: 0, z: 2.2, speedMult: 1.0 },
        { x: dir * 12.0, z: 3.0, speedMult: 1.05 },
        { x: dir * 26.0, z: 4.2, speedMult: 1.0 },
      ];

    case 'HANDOFF_RUN':
      // RB tracks towards QB for handoff mesh, then bursts through right guard/tackle gap
      return [
        { x: 1.2, z: 1.0, speedMult: 0.8 }, // Mesh point near QB
        { x: 1.8, z: 6.0, speedMult: 1.1 }, // Hit the line
        { x: 2.5, z: 18.0, speedMult: 1.15 },// Second level
        { x: 2.0, z: 40.0, speedMult: 1.1 },
      ];

    case 'BLOCK':
    default:
      // Stalk block downfield
      return [
        { x: 0, z: 1.5, speedMult: 0.7 },
        { x: 0, z: 3.0, speedMult: 0.5 },
      ];
  }
}

/**
 * Pre-snap player offsets relative to center of line of scrimmage (LOS)
 * Z = 0 is the LOS.
 * -Z is offensive backfield.
 * +Z is defensive side / downfield.
 * X is left (-) to right (+).
 */
export interface AlignmentOffset {
  x: number;
  z: number;
}

export const OFFENSE_ALIGNMENTS: Record<string, AlignmentOffset> = {
  // Offensive Line: 1-yard spacing at LOS (-0.4 z)
  C:   { x:  0.0, z: -0.4 },
  LG:  { x: -1.2, z: -0.4 },
  LT:  { x: -2.4, z: -0.5 },
  RG:  { x:  1.2, z: -0.4 },
  RT:  { x:  2.4, z: -0.5 },

  // Backfield (Shotgun)
  QB:  { x:  0.0, z: -4.5 },
  RB:  { x: -1.5, z: -4.8 },

  // Receivers (Spread 3-WR)
  WR1: { x: -14.0, z: -0.5 }, // Wide Left
  WR2: { x:  -7.5, z: -0.6 }, // Slot Left
  WR3: { x:  14.0, z: -0.5 }, // Wide Right
};

export const DEFENSE_ALIGNMENTS: Record<string, AlignmentOffset> = {
  // Defensive Line (1 yard off LOS on defense side)
  LE:  { x: -2.8, z: 1.0 }, // Edge Left
  DT1: { x: -0.9, z: 0.9 }, // 1-Tech
  DT2: { x:  0.9, z: 0.9 }, // 3-Tech
  RE:  { x:  2.8, z: 1.0 }, // Edge Right

  // Linebackers (4.5 yards off LOS)
  MLB: { x:  0.0, z: 4.5 },
  OLB: { x: -4.0, z: 4.8 },

  // Secondary (Man coverage on WRs + Deep Safety)
  CB1: { x: -13.8, z: 6.0 }, // Over WR1
  CB2: { x:  13.8, z: 6.0 }, // Over WR3
  FS:  { x:  -4.5, z: 12.0 },// Over slot / Free safety center
};
