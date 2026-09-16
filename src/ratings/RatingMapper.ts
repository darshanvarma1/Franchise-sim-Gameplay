import { GameplayRatings } from '../types';

export interface PhysicalAttributes {
  maxSpeed: number;        // in meters per second (e.g., 6.5 to 10.2 m/s)
  acceleration: number;    // m/s^2 (e.g., 10 to 24 m/s^2)
  deceleration: number;    // m/s^2
  turnRate: number;        // radians per second (agility: 4.5 to 11.0 rad/s)
  mass: number;            // kg (effective tackle mass: 85kg to 145kg based on strength/position)
  strengthImpulse: number; // multiplier for collision resistance and push power
  throwVelocity: number;   // m/s for bullet pass (18 to 32 m/s)
  throwAccuracyVar: number;// error variance radius in meters (1.8m down to 0.25m)
  catchRadius: number;     // reach envelope radius in meters (1.2m to 2.2m)
  breakTackleChance: number; // 0.05 to 0.45
  tackleReach: number;     // 1.2m to 2.0m
}

/**
 * Maps 0-100 ratings into realistic football physics values.
 * NFL top speeds range roughly 18-22 mph (~8.0 - 9.8 m/s).
 * Linemen are heavier and slower; WRs/DBs are lighter and faster.
 */
export function mapRatingsToPhysics(
  ratings: GameplayRatings,
  positionType: 'SKILL' | 'LINEMAN' | 'QB' = 'SKILL'
): PhysicalAttributes {
  const spd = Math.max(0, Math.min(100, ratings.speed));
  const acc = Math.max(0, Math.min(100, ratings.acceleration));
  const agi = Math.max(0, Math.min(100, ratings.agility));
  const str = Math.max(0, Math.min(100, ratings.strength));
  const cth = Math.max(0, Math.min(100, ratings.catching ?? 65));
  const thP = Math.max(0, Math.min(100, ratings.throwPower ?? 75));
  const thA = Math.max(0, Math.min(100, ratings.throwAccuracy ?? 75));

  // Base speeds:
  // 50 rating = ~7.5 m/s, 99 rating = ~9.8 m/s
  let baseSpeedMin = 6.2;
  let baseSpeedMax = 9.8;
  let massMin = 82;
  let massMax = 115;

  if (positionType === 'LINEMAN') {
    baseSpeedMin = 5.2;
    baseSpeedMax = 7.6;
    massMin = 125;
    massMax = 150;
  } else if (positionType === 'QB') {
    baseSpeedMin = 5.8;
    baseSpeedMax = 8.8;
    massMin = 95;
    massMax = 112;
  }

  const maxSpeed = baseSpeedMin + (spd / 100) * (baseSpeedMax - baseSpeedMin);
  const acceleration = 10 + (acc / 100) * 15; // 10 - 25 m/s^2
  const deceleration = acceleration * 1.5;
  const turnRate = 4.8 + (agi / 100) * 6.2; // 4.8 - 11.0 rad/s
  const mass = massMin + (str / 100) * (massMax - massMin);
  const strengthImpulse = 0.8 + (str / 100) * 0.8;

  // Passing: 70 rating -> ~22 m/s, 95 rating -> ~28 m/s bullet
  const throwVelocity = 18 + (thP / 100) * 12;
  const throwAccuracyVar = Math.max(0.2, 1.8 - (thA / 100) * 1.5);

  const catchRadius = 1.2 + (cth / 100) * 0.9; // 1.2 to 2.1m
  const breakTackleChance = 0.08 + (str / 100) * 0.32;
  const tackleReach = 1.3 + ((ratings.tackling ?? 70) / 100) * 0.6;

  return {
    maxSpeed,
    acceleration,
    deceleration,
    turnRate,
    mass,
    strengthImpulse,
    throwVelocity,
    throwAccuracyVar,
    catchRadius,
    breakTackleChance,
    tackleReach,
  };
}

/**
 * Default team rosters with distinct ratings for realistic game flow
 */
export const DEFAULT_OFFENSE_RATINGS: Record<string, GameplayRatings> = {
  QB: {
    speed: 74,
    acceleration: 78,
    agility: 80,
    strength: 70,
    awareness: 88,
    throwPower: 89,
    throwAccuracy: 86,
  },
  RB: {
    speed: 88,
    acceleration: 91,
    agility: 89,
    strength: 84,
    awareness: 80,
    catching: 74,
  },
  WR1: {
    speed: 93,
    acceleration: 92,
    agility: 90,
    strength: 65,
    awareness: 85,
    catching: 90,
    routeRunning: 92,
  },
  WR2: {
    speed: 90,
    acceleration: 90,
    agility: 93,
    strength: 62,
    awareness: 82,
    catching: 86,
    routeRunning: 89,
  },
  WR3: {
    speed: 89,
    acceleration: 88,
    agility: 86,
    strength: 68,
    awareness: 78,
    catching: 82,
    routeRunning: 81,
  },
  LT: { speed: 62, acceleration: 65, agility: 60, strength: 92, awareness: 84, passBlocking: 88, runBlocking: 86 },
  LG: { speed: 60, acceleration: 62, agility: 58, strength: 90, awareness: 80, passBlocking: 84, runBlocking: 88 },
  C:  { speed: 61, acceleration: 63, agility: 62, strength: 89, awareness: 86, passBlocking: 85, runBlocking: 85 },
  RG: { speed: 59, acceleration: 60, agility: 58, strength: 91, awareness: 82, passBlocking: 83, runBlocking: 89 },
  RT: { speed: 63, acceleration: 66, agility: 61, strength: 91, awareness: 83, passBlocking: 87, runBlocking: 87 },
};

export const DEFAULT_DEFENSE_RATINGS: Record<string, GameplayRatings> = {
  LE:  { speed: 78, acceleration: 84, agility: 75, strength: 89, awareness: 82, tackling: 86 },
  DT1: { speed: 65, acceleration: 72, agility: 64, strength: 94, awareness: 80, tackling: 88 },
  DT2: { speed: 64, acceleration: 70, agility: 63, strength: 95, awareness: 81, tackling: 89 },
  RE:  { speed: 82, acceleration: 86, agility: 80, strength: 88, awareness: 85, tackling: 87 },
  MLB: { speed: 84, acceleration: 86, agility: 84, strength: 86, awareness: 88, tackling: 91, coverage: 78 },
  OLB: { speed: 86, acceleration: 88, agility: 85, strength: 84, awareness: 85, tackling: 88, coverage: 80 },
  CB1: { speed: 92, acceleration: 92, agility: 92, strength: 65, awareness: 88, tackling: 75, coverage: 90 },
  CB2: { speed: 90, acceleration: 90, agility: 89, strength: 64, awareness: 84, tackling: 73, coverage: 85 },
  FS:  { speed: 91, acceleration: 91, agility: 88, strength: 72, awareness: 89, tackling: 82, coverage: 88 },
};
