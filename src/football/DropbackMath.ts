import { DropbackConfig } from '../types';

export interface DropbackSample {
  phase: 'RETREAT' | 'PLANT' | 'COMPLETE';
  progress: number;
  depthYards: number;
  complete: boolean;
}

function smoothStep(value: number): number {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

export function sampleDropback(config: DropbackConfig, elapsedSeconds: number): DropbackSample {
  const retreatDuration = Math.max(0.05, config.durationSeconds);
  const plantDuration = Math.max(0, config.plantSeconds);
  const elapsed = Math.max(0, elapsedSeconds);

  if (elapsed < retreatDuration) {
    const progress = smoothStep(elapsed / retreatDuration);
    return {
      phase: 'RETREAT',
      progress,
      depthYards: config.depthYards * progress,
      complete: false,
    };
  }

  if (elapsed < retreatDuration + plantDuration) {
    return {
      phase: 'PLANT',
      progress: 1,
      depthYards: config.depthYards,
      complete: false,
    };
  }

  return {
    phase: 'COMPLETE',
    progress: 1,
    depthYards: config.depthYards,
    complete: true,
  };
}
