import React, { useCallback, useEffect, useRef } from 'react';
import { sampleJoystick } from '../input/JoystickMath';

interface VirtualJoystickProps {
  onMove: (lateral: number, forward: number, sprint: boolean) => void;
  disabled?: boolean;
}

export const VirtualJoystick: React.FC<VirtualJoystickProps> = ({ onMove, disabled = false }) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const pointerIdRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    pointerIdRef.current = null;
    if (knobRef.current) knobRef.current.style.transform = 'translate3d(0, 0, 0)';
    onMove(0, 0, false);
  }, [onMove]);

  useEffect(() => reset, [reset]);

  const update = useCallback((clientX: number, clientY: number) => {
    const base = baseRef.current;
    if (!base) return;
    const rect = base.getBoundingClientRect();
    const radius = rect.width * 0.36;
    const sample = sampleJoystick(clientX - (rect.left + rect.width / 2), clientY - (rect.top + rect.height / 2), radius);
    if (knobRef.current) {
      knobRef.current.style.transform = `translate3d(${sample.knobX}px, ${sample.knobY}px, 0)`;
    }
    onMove(sample.lateral, sample.forward, sample.sprint);
  }, [onMove]);

  return (
    <div
      id="virtual-joystick"
      ref={baseRef}
      aria-label="Movement joystick. Drag farther to sprint."
      className="pointer-events-auto absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] h-32 w-32 touch-none rounded-full border-2 border-sky-300/35 bg-slate-950/30 shadow-[0_8px_30px_rgba(2,8,23,0.35)] backdrop-blur-sm sm:hidden"
      onPointerDown={(event) => {
        if (disabled || pointerIdRef.current !== null) return;
        pointerIdRef.current = event.pointerId;
        event.currentTarget.setPointerCapture(event.pointerId);
        update(event.clientX, event.clientY);
      }}
      onPointerMove={(event) => {
        if (event.pointerId === pointerIdRef.current) update(event.clientX, event.clientY);
      }}
      onPointerUp={(event) => {
        if (event.pointerId === pointerIdRef.current) reset();
      }}
      onPointerCancel={(event) => {
        if (event.pointerId === pointerIdRef.current) reset();
      }}
      onLostPointerCapture={(event) => {
        if (event.pointerId === pointerIdRef.current) reset();
      }}
    >
      <div className="absolute inset-[13%] rounded-full border border-white/10" />
      <div className="absolute inset-[5%] rounded-full border border-dashed border-amber-300/25" />
      <div
        ref={knobRef}
        className="absolute top-1/2 left-1/2 h-14 w-14 rounded-full border border-sky-200/60 bg-sky-500/60 shadow-[0_4px_18px_rgba(14,165,233,0.5)] will-change-transform"
        style={{ marginLeft: '-1.75rem', marginTop: '-1.75rem' }}
      />
    </div>
  );
};
