import React, { useEffect, useRef } from 'react';
import { GameEngine } from '../engine/GameEngine';
import { classifyThrowGesture } from '../input/ThrowGesture';

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
    const draw = () => {
      const root = rootRef.current;
      const engine = getEngine();
      if (root && engine) {
        const rect = root.getBoundingClientRect();
        for (const marker of engine.getReceiverScreenPositions(rect.width, rect.height)) {
          const button = buttonRefs.current[marker.id];
          if (!button) continue;
          button.classList.toggle('hidden', marker.behindCamera);
          button.style.transform = `translate3d(${marker.x}px, ${marker.y}px, 0) translate(-50%, -50%)`;
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
    if (shouldThrow) getEngine()?.throwToReceiver(receiver, classifyThrowGesture(performance.now() - gesture.startedAt));
  };

  return (
    <div ref={rootRef} id="receiver-target-overlay" className="pointer-events-none absolute inset-0 z-20">
      {RECEIVERS.map((receiver) => (
        <button
          key={receiver}
          ref={(node) => { buttonRefs.current[receiver] = node; }}
          aria-label={`Throw to ${receiver}. Tap to lob, hold for touch or bullet.`}
          className="pointer-events-auto absolute top-0 left-0 hidden h-16 w-16 touch-none rounded-full bg-transparent"
          onPointerDown={(event) => {
            if (gestureRef.current) return;
            gestureRef.current = { pointerId: event.pointerId, receiver, startedAt: performance.now() };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerUp={(event) => finishGesture(event, receiver, true)}
          onPointerCancel={(event) => finishGesture(event, receiver, false)}
          onLostPointerCapture={(event) => finishGesture(event, receiver, false)}
        />
      ))}
    </div>
  );
};
