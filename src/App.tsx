/**
 * Gridiron GM — 3D Physics Football Gameplay Engine MVP
 * Playable football field simulation with active ragdolls, ballistic spirals, and tactile mechanics.
 */

import React, { useEffect, useRef, useState } from 'react';
import { GameEngine } from './engine/GameEngine';
import { GameplayHUD } from './components/GameplayHUD';
import { DownState, PlayDefinition, PlayPhase, ThrowType, DebugTelemetry } from './types';
import { PLAYBOOK } from './football/Playbook';
import { CameraPreset } from './camera/GameplayCamera';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);

  const [downState, setDownState] = useState<DownState>({
    down: 1,
    distance: 10,
    lineOfScrimmage: 25,
    firstDownLine: 35,
    quarter: 1,
    clockSeconds: 900,
    offenseScore: 0,
    defenseScore: 0,
    playResultText: '1st & 10 at Own 25',
  });

  const [playPhase, setPlayPhase] = useState<PlayPhase>('PRE_SNAP');
  const [currentPlay, setCurrentPlay] = useState<PlayDefinition>(PLAYBOOK[0]);
  const [throwType, setThrowType] = useState<ThrowType>('TOUCH');
  const [debugMode, setDebugMode] = useState<boolean>(false);
  const [cameraMode, setCameraMode] = useState<CameraPreset>('TACTICAL');
  const [controlledPlayerId, setControlledPlayerId] = useState<string>('QB');

  const [telemetry, setTelemetry] = useState<DebugTelemetry>({
    fps: 60,
    activeRagdollCount: 0,
    ballCarrierId: 'QB',
    ballCarrierState: 'NORMAL',
    ballCarrierSpeed: 0,
    lastTackleForce: 0,
    passTarget: null,
    passAirTime: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;

    // Initialize 3D Physics Game Engine
    const engine = new GameEngine(container);
    engineRef.current = engine;

    engine.setOnStateChange((newDownState, newPhase, newTelemetry) => {
      if (disposed) return;
      setDownState({ ...newDownState });
      setPlayPhase(newPhase);
      setControlledPlayerId(engine.controlledPlayerId);
      setTelemetry({ ...newTelemetry });
    });

    engine.start();

    // Robust Resize handling with ResizeObserver for fullscreen and dynamic dimensions
    const handleResize = () => {
      if (disposed) return;
      engine.resize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (disposed) return;
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          engine.resize(width, height);
        }
      }
    });
    resizeObserver.observe(container);

    // Initial resize check after DOM paint
    const initialResizeFrame = requestAnimationFrame(() => {
      handleResize();
    });

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for game controls
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      if (disposed) return;
      const eng = engine;

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          eng.input.forward = 1;
          break;
        case 'KeyS':
        case 'ArrowDown':
          eng.input.forward = -1;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          eng.input.lateral = -1;
          break;
        case 'KeyD':
        case 'ArrowRight':
          eng.input.lateral = 1;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          eng.input.sprint = true;
          break;
        case 'Space':
          if (eng.playPhase === 'PRE_SNAP') {
            eng.snapBall();
          } else {
            eng.input.action = true;
          }
          break;
        case 'Digit1':
          eng.throwToReceiver('WR1', throwType);
          break;
        case 'Digit2':
          eng.throwToReceiver('WR2', throwType);
          break;
        case 'Digit3':
          eng.throwToReceiver('WR3', throwType);
          break;
        case 'KeyC':
          const nextCam = eng.cycleCameraMode();
          setCameraMode(nextCam);
          break;
        case 'Backquote':
          eng.toggleDebugMode();
          setDebugMode(eng.debugMode);
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (disposed) return;
      const eng = engine;

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          if (eng.input.forward === 1) eng.input.forward = 0;
          break;
        case 'KeyS':
        case 'ArrowDown':
          if (eng.input.forward === -1) eng.input.forward = 0;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          if (eng.input.lateral === -1) eng.input.lateral = 0;
          break;
        case 'KeyD':
        case 'ArrowRight':
          if (eng.input.lateral === 1) eng.input.lateral = 0;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          eng.input.sprint = false;
          break;
        case 'Space':
          eng.input.action = false;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      disposed = true;
      cancelAnimationFrame(initialResizeFrame);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      engine.destroy();
      if (engineRef.current === engine) {
        engineRef.current = null;
      }
    };
  }, []);

  const handleSelectPlay = (play: PlayDefinition) => {
    setCurrentPlay(play);
    if (engineRef.current) {
      engineRef.current.setPlay(play);
    }
  };

  const handleSnap = () => {
    if (engineRef.current) {
      engineRef.current.snapBall();
    }
  };

  const handleThrow = (receiver: 'WR1' | 'WR2' | 'WR3', type: ThrowType) => {
    if (engineRef.current) {
      engineRef.current.throwToReceiver(receiver, type);
    }
  };

  const handleChangeThrowType = (type: ThrowType) => {
    setThrowType(type);
    if (engineRef.current) {
      engineRef.current.throwType = type;
    }
  };

  const handleToggleDebug = () => {
    if (engineRef.current) {
      engineRef.current.toggleDebugMode();
      setDebugMode(engineRef.current.debugMode);
    }
  };

  const handleToggleCamera = () => {
    if (engineRef.current) {
      const nextCam = engineRef.current.cycleCameraMode();
      setCameraMode(nextCam);
    }
  };

  const handleVirtualMove = (lateral: number, forward: number, sprint: boolean) => {
    if (engineRef.current) {
      engineRef.current.input.lateral = lateral;
      engineRef.current.input.forward = forward;
      engineRef.current.input.sprint = sprint;
    }
  };

  return (
    <div id="gameplay-root" className="relative h-full w-full overflow-hidden bg-slate-950">
      {/* 3D WebGL Canvas Container */}
      <div id="gameplay-canvas-host" ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full" />

      {/* Broadcast Football Gameplay HUD */}
      <GameplayHUD
        downState={downState}
        playPhase={playPhase}
        telemetry={telemetry}
        currentPlay={currentPlay}
        controlledPlayerId={controlledPlayerId}
        onSelectPlay={handleSelectPlay}
        onSnap={handleSnap}
        onThrow={handleThrow}
        throwType={throwType}
        onChangeThrowType={handleChangeThrowType}
        onToggleDebug={handleToggleDebug}
        debugMode={debugMode}
        cameraMode={cameraMode}
        onToggleCamera={handleToggleCamera}
        onVirtualMove={handleVirtualMove}
      />
    </div>
  );
}
