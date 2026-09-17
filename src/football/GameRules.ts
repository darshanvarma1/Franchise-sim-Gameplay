import { DownState } from '../types';

export interface PlayResolution {
  nextState: DownState;
  yardsGained: number;
  firstDown: boolean;
  turnoverOnDowns: boolean;
}

export function resetDrive(state: DownState, playResultText: string): DownState {
  return {
    ...state,
    down: 1,
    distance: 10,
    lineOfScrimmage: 25,
    firstDownLine: 35,
    playResultText,
  };
}

export function resolveOffensivePlay(
  state: DownState,
  spotYard: number,
  reason: string
): PlayResolution {
  const clampedSpot = Math.max(1, Math.min(99, Math.round(spotYard)));
  const yardsGained = clampedSpot - state.lineOfScrimmage;

  if (clampedSpot >= state.firstDownLine) {
    return {
      nextState: {
        ...state,
        down: 1,
        distance: Math.min(10, 100 - clampedSpot),
        lineOfScrimmage: clampedSpot,
        firstDownLine: Math.min(100, clampedSpot + 10),
        playResultText: `FIRST DOWN! +${yardsGained} YDS (${reason})`,
      },
      yardsGained,
      firstDown: true,
      turnoverOnDowns: false,
    };
  }

  if (state.down >= 4) {
    return {
      nextState: resetDrive(state, 'TURNOVER ON DOWNS — RESET TO 25'),
      yardsGained,
      firstDown: false,
      turnoverOnDowns: true,
    };
  }

  return {
    nextState: {
      ...state,
      down: state.down + 1,
      distance: state.firstDownLine - clampedSpot,
      lineOfScrimmage: clampedSpot,
      playResultText: reason === 'Incomplete Pass'
        ? 'INCOMPLETE PASS'
        : `${yardsGained >= 0 ? '+' : ''}${yardsGained} YDS (${reason})`,
    },
    yardsGained,
    firstDown: false,
    turnoverOnDowns: false,
  };
}

export function formatGameClock(clockSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(clockSeconds));
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
