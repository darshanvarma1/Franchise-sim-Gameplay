import { ThrowType } from '../types';

export const TOUCH_THROW_THRESHOLD_MS = 180;
export const BULLET_THROW_THRESHOLD_MS = 450;

export function classifyThrowGesture(durationMs: number): ThrowType {
  if (durationMs < TOUCH_THROW_THRESHOLD_MS) return 'LOB';
  if (durationMs < BULLET_THROW_THRESHOLD_MS) return 'TOUCH';
  return 'BULLET';
}

export function throwChargeProgress(durationMs: number): number {
  return Math.max(0, Math.min(1, durationMs / BULLET_THROW_THRESHOLD_MS));
}
