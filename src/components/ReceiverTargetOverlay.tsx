import React, { useEffect, useRef } from 'react';
import { GameEngine } from '../engine/GameEngine';
import { classifyThrowGesture, throwChargeProgress } from '../input/ThrowGesture';

type ReceiverId = 'WR1' | 'WR2' | 'WR3';

interface ReceiverTargetOverlayProps {
  active: boolean;
  getEngine: () => GameEngine | null;
}

const RECEIVERS: ReceiverId[] = ['WR1', 'WR2', 'WR3'];

export const ReceiverTargetOverlay: React.FC<ReceiverTargetOverlayProps> = ({ active, getEngine }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<ReceiverId, HTMLButtonElement | null>>({ WR1: null, WR2: null, WR3: null });
  const gestureRef = useRef<{ pointerId: number; receiver: ReceiverId; startedAt: number } | null>(null);

  useEffect(() => {
    if (!active) {
      gestureRef.current = null;
      RECEIVERS.forEach((id) => buttonRefs.current[id]?.classList.add('hidden'));
      return;
    }

    let frame = 0;
    const draw = (time: number) => {
      const root = rootRef.current;
      const engine = getEngine();
      if (root && engine) {
        const rect = root.getBoundingClientRect();
        for (const marker of engine.getReceiverScreenPositions(rect.width, rect.height)) {
          const button = buttonRefs.current[marker.id];
          if (!button) continue;
          button.classList.toggle('hidden', marker.behindCamera);
          button.classList.toggle('ring-2', !marker.onScreen && !marker.behindCamera);
          button.style.transform = `translate3d(${marker.x}px, ${marker.y}px, 0) translate(-50%, -50%)`;
          button.dataset.route = marker.route;
          const route = button.querySelector('[data-route-label]');
          if (route) route.textContent = marker.onScreen ? marker.route : `◀ ${marker.route}`;
        }

        const gesture = gestureRef.current;
        if (gesture) {
          const button = buttonRefs.current[gesture.receiver];
          if (button) {
            const elapsed = time - gesture.startedAt;
            button.style.setProperty('--throw-charge', `${throwChargeProgress(elapsed) * 100}%`);
            const type = button.querySelector('[data-throw-type]');
            if (type) type.textContent = classifyThrowGesture(elapsed);
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [active, getEngine]);

  const finishGesture = (event: React.PointerEvent<HTMLButtonElement>, receiver: ReceiverId, shouldThrow: boolean) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId || gesture.receiver !== receiver) return;
    gestureRef.current = null;
    event.currentTarget.style.setProperty('--throw-charge', '0%');
    const label = event.currentTarget.querySelector('[data-throw-type]');
    if (label) label.textContent = 'TAP / HOLD';
    if (shouldThrow) getEngine()?.throwToReceiver(receiver, classifyThrowGesture(performance.now() - gesture.startedAt));
  };

  return (
    <div ref={rootRef} id="receiver-target-overlay" className="pointer-events-none absolute inset-0 z-20">
      {RECEIVERS.map((receiver) => (
        <button
          key={receiver}
          ref={(node) => { buttonRefs.current[receiver] = node; }}
          aria-label={`Throw to ${receiver}. Tap to lob, hold for touch or bullet.`}
          className="pointer-events-auto absolute top-0 left-0 hidden h-16 min-w-16 touch-none flex-col items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-sky-600/75 px-2 text-white shadow-[0_4px_18px_rgba(2,8,23,0.55)] ring-amber-300 backdrop-blur-sm before:absolute before:inset-x-0 before:bottom-0 before:h-[var(--throw-charge)] before:bg-amber-300/45 before:transition-[height]"
          style={{ '--throw-charge': '0%' } as React.CSSProperties}
          onPointerDown={(event) => {
            if (gestureRef.current) return;
            gestureRef.current = { pointerId: event.pointerId, receiver, startedAt: performance.now() };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerUp={(event) => finishGesture(event, receiver, true)}
          onPointerCancel={(event) => finishGesture(event, receiver, false)}
          onLostPointerCapture={(event) => finishGesture(event, receiver, false)}
        >
          <span className="relative z-10 text-sm font-black leading-none">{receiver}</span>
          <span data-route-label className="relative z-10 mt-1 text-[9px] font-bold tracking-wide" />
          <span data-throw-type className="relative z-10 mt-0.5 text-[8px] font-semibold text-sky-100">TAP / HOLD</span>
        </button>
      ))}
    </div>
  );
};
