export type TeamSide = 'OFFENSE' | 'DEFENSE';

export type Position =
  | 'QB'
  | 'RB'
  | 'WR1'
  | 'WR2'
  | 'WR3'
  | 'LT'
  | 'LG'
  | 'C'
  | 'RG'
  | 'RT'
  | 'LE'
  | 'DT1'
  | 'DT2'
  | 'RE'
  | 'MLB'
  | 'OLB'
  | 'CB1'
  | 'CB2'
  | 'FS';

export type RagdollState =
  | 'NORMAL'
  | 'STUMBLE'
  | 'PARTIAL_RAGDOLL'
  | 'FULL_RAGDOLL'
  | 'RECOVERING';

export type PlayType = 'PASS' | 'RUN';

export type RouteType = 'GO' | 'SLANT' | 'OUT' | 'CURL' | 'DRAG' | 'BLOCK' | 'HANDOFF_RUN';

export type ThrowType = 'LOB' | 'TOUCH' | 'BULLET';

export interface RouteWaypoint {
  x: number; // Lateral offset from snap point
  z: number; // Downfield distance (yards or meters)
  speedMult?: number;
}

export interface PlayDefinition {
  id: string;
  name: string;
  type: PlayType;
  description: string;
  routes: {
    WR1: RouteType;
    WR2: RouteType;
    WR3: RouteType;
    RB: RouteType;
  };
}

export interface GameplayRatings {
  speed: number;        // 0 - 100
  acceleration: number; // 0 - 100
  agility: number;      // 0 - 100
  strength: number;     // 0 - 100
  awareness: number;    // 0 - 100

  throwPower?: number;
  throwAccuracy?: number;

  catching?: number;
  routeRunning?: number;

  tackling?: number;
  coverage?: number;

  runBlocking?: number;
  passBlocking?: number;
}

export interface PlayerStats {
  passingYards: number;
  passingTds: number;
  completions: number;
  attempts: number;
  rushingYards: number;
  rushingTds: number;
  carries: number;
  receptions: number;
  receivingYards: number;
  tackles: number;
  sacks: number;
}

export type PlayPhase =
  | 'PRE_SNAP'
  | 'PLAY_ACTIVE'
  | 'BALL_IN_AIR'
  | 'RUN_AFTER_CATCH'
  | 'TACKLE_RESOLVED'
  | 'PLAY_OVER'
  | 'TOUCHDOWN_CELEBRATION';

export interface DownState {
  down: number;          // 1 - 4
  distance: number;      // yards to gain for first down
  lineOfScrimmage: number;// yard line (e.g. 25 = own 25 yard line, 50 = midfield, 80 = opponent 20)
  firstDownLine: number; // yard line
  quarter: number;
  clockSeconds: number;
  offenseScore: number;
  defenseScore: number;
  playResultText?: string;
}

export interface DebugTelemetry {
  fps: number;
  activeRagdollCount: number;
  ballCarrierId: string | null;
  ballCarrierState: RagdollState;
  ballCarrierSpeed: number;
  lastTackleForce: number;
  passTarget: string | null;
  passAirTime: number;
}
