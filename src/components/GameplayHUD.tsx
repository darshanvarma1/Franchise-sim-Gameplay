import React, { useState } from 'react';
import { Play, ShieldAlert, Sparkles } from 'lucide-react';
import { DownState, PlayDefinition, PlayPhase, DebugTelemetry } from '../types';
import { PLAYBOOK } from '../football/Playbook';
import { sounds } from '../audio/SoundEffects';
import { CameraPreset } from '../camera/GameplayCamera';
import { formatGameClock } from '../football/GameRules';
import { GameEngine } from '../engine/GameEngine';
import { PauseMenu } from './PauseMenu';
import { ReceiverTargetOverlay } from './ReceiverTargetOverlay';
import { VirtualJoystick } from './VirtualJoystick';

interface GameplayHUDProps {
  downState: DownState;
  playPhase: PlayPhase;
  telemetry: DebugTelemetry;
  currentPlay: PlayDefinition;
  controlledPlayerId: string;
  onSelectPlay: (play: PlayDefinition) => void;
  onSnap: () => void;
  onToggleDebug: () => void;
  debugMode: boolean;
  cameraMode: CameraPreset;
  onToggleCamera: () => void;
  onVirtualMove: (lateral: number, forward: number, sprint: boolean) => void;
  getEngine: () => GameEngine | null;
  isPaused: boolean;
  onTogglePause: () => void;
}

export const GameplayHUD: React.FC<GameplayHUDProps> = ({
  downState, playPhase, telemetry, currentPlay, controlledPlayerId, onSelectPlay, onSnap,
  onToggleDebug, debugMode, cameraMode, onToggleCamera, onVirtualMove, getEngine,
  isPaused, onTogglePause,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    sounds.setMuted(next);
  };
  const downSuffix = downState.down === 1 ? '1ST' : downState.down === 2 ? '2ND' : downState.down === 3 ? '3RD' : '4TH';
  const playerControlsVisible = !isPaused && (playPhase === 'PLAY_ACTIVE' || playPhase === 'RUN_AFTER_CATCH');
  const receiverTargetsVisible = !isPaused && playPhase === 'PLAY_ACTIVE' && controlledPlayerId === 'QB' && currentPlay.type === 'PASS';

  return (
    <div id="gameplay-hud-root" className="pointer-events-none absolute inset-0 select-none overflow-hidden font-sans">
      <div id="scoreboard-banner" className="absolute top-[max(.5rem,env(safe-area-inset-top))] left-1/2 z-30 flex max-w-[calc(100%-7rem)] -translate-x-1/2 items-center gap-1 rounded-xl border border-slate-700/80 bg-slate-900/90 px-2 py-2 text-white shadow-2xl backdrop-blur-md sm:top-4 sm:gap-3 sm:px-4">
        <div className="flex items-center gap-1.5"><div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-[10px] font-black">WIL</div><span className="hidden text-sm font-extrabold tracking-wide text-blue-400 md:inline">WILDCATS</span><span className="font-mono text-xl font-black">{downState.offenseScore}</span></div>
        <div className="h-6 w-px bg-slate-700" />
        <div className="flex items-center gap-1.5"><span className="font-mono text-xl font-black">{downState.defenseScore}</span><span className="hidden text-sm font-extrabold tracking-wide text-red-400 md:inline">TITANS</span><div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-700 text-[10px] font-black">TIT</div></div>
        <div className="h-6 w-px bg-slate-700" />
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300"><span className="rounded bg-slate-800 px-1.5 py-0.5 font-bold text-amber-400">Q{downState.quarter}</span><span className="font-semibold">{formatGameClock(downState.clockSeconds)}</span></div>
      </div>

      <div id="down-distance-chyron" className="absolute top-20 left-[max(.5rem,env(safe-area-inset-left))] z-20 max-w-[calc(100%-1rem)] rounded-xl border border-slate-700/80 bg-slate-900/88 p-2.5 text-white shadow-xl backdrop-blur-md sm:top-auto sm:bottom-6 sm:left-6 sm:p-3.5">
        <div className="flex items-baseline gap-2"><span className="text-xl font-black tracking-tight text-amber-400 sm:text-2xl">{downSuffix} &amp; {downState.distance}</span><span className="font-mono text-[10px] text-slate-400">BALL ON <b className="text-white">{downState.lineOfScrimmage}</b></span></div>
        <div className="mt-1 flex max-w-[18rem] items-center gap-2 text-[10px]"><span className="shrink-0 rounded border border-blue-800/60 bg-blue-950/80 px-2 py-0.5 font-semibold text-blue-300">{currentPlay.name}</span>{downState.playResultText && <span className="truncate italic text-amber-300">{downState.playResultText}</span>}</div>
      </div>

      <ReceiverTargetOverlay active={receiverTargetsVisible} getEngine={getEngine} />

      {playPhase === 'PRE_SNAP' && !isPaused && (
        <div id="pre-snap-panel" className="pointer-events-auto absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-30 flex w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 flex-col items-center gap-2 sm:bottom-6">
          <div className="flex w-full snap-x items-center gap-2 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md">
            {PLAYBOOK.map((play) => (
              <button key={play.id} id={`play-select-${play.id}`} onClick={() => onSelectPlay(play)} className={`min-w-[9.5rem] shrink-0 snap-center rounded-xl border px-3 py-2 text-left transition ${currentPlay.id === play.id ? 'border-blue-400 bg-blue-600/30 text-white ring-1 ring-blue-400' : 'border-transparent bg-slate-800/80 text-slate-300'}`}>
                <div className="flex items-center gap-1.5"><span className={`rounded px-1.5 text-[9px] font-extrabold ${play.type === 'PASS' ? 'bg-sky-500/30 text-sky-300' : 'bg-amber-500/30 text-amber-300'}`}>{play.type}</span><span className="text-xs font-bold">{play.name}</span></div>
                <span className="mt-0.5 block truncate text-[9px] text-slate-400">{play.description}</span>
              </button>
            ))}
          </div>
          <button id="snap-ball-btn" onClick={onSnap} className="flex min-h-12 items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-sm font-black uppercase tracking-wider text-slate-950 shadow-xl active:scale-95"><Play size={16} fill="currentColor" /> Snap ball <span className="hidden sm:inline">(Space)</span></button>
        </div>
      )}

      {playerControlsVisible && <VirtualJoystick onMove={onVirtualMove} />}

      {playPhase === 'TOUCHDOWN_CELEBRATION' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center"><div className="animate-bounce rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-blue-900 to-slate-950 px-8 py-5 text-center shadow-[0_0_50px_rgba(250,204,21,.5)]"><div className="flex items-center justify-center gap-2 text-amber-400"><Sparkles size={26} /><span className="text-3xl font-black uppercase tracking-wider">Touchdown!</span><Sparkles size={26} /></div><p className="mt-1 text-sm font-bold text-slate-200">{downState.playResultText}</p></div></div>
      )}

      {debugMode && !isPaused && (
        <div id="debug-telemetry-panel" className="pointer-events-auto absolute top-20 right-2 z-30 w-60 rounded-xl border border-amber-500/40 bg-slate-950/90 p-3 font-mono text-[11px] text-amber-300 shadow-2xl backdrop-blur-md sm:right-6">
          <div className="mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-1 font-bold"><ShieldAlert size={14} /> PHYSICS DEBUG</div>
          <div className="space-y-1"><div className="flex justify-between"><span className="text-slate-400">FPS</span><b className="text-emerald-400">{telemetry.fps}</b></div><div className="flex justify-between"><span className="text-slate-400">Carrier</span><b className="text-white">{telemetry.ballCarrierId || 'None'}</b></div><div className="flex justify-between"><span className="text-slate-400">State</span><b>{telemetry.ballCarrierState}</b></div><div className="flex justify-between"><span className="text-slate-400">Speed</span><span>{telemetry.ballCarrierSpeed.toFixed(1)} m/s</span></div><div className="flex justify-between"><span className="text-slate-400">Ragdolls</span><b className="text-white">{telemetry.activeRagdollCount}</b></div><div className="flex justify-between"><span className="text-slate-400">Impact</span><b className="text-red-400">{telemetry.lastTackleForce} N</b></div></div>
        </div>
      )}

      <PauseMenu paused={isPaused} onTogglePause={onTogglePause} cameraMode={cameraMode} onToggleCamera={onToggleCamera} isMuted={isMuted} onToggleMute={toggleMute} debugMode={debugMode} onToggleDebug={onToggleDebug} />
    </div>
  );
};
