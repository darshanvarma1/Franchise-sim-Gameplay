import React, { useState } from 'react';
import { DownState, PlayDefinition, PlayPhase, ThrowType, DebugTelemetry } from '../types';
import { PLAYBOOK } from '../football/Playbook';
import { sounds } from '../audio/SoundEffects';
import { Volume2, VolumeX, Eye, Play, Sparkles, Activity, ShieldAlert, Camera } from 'lucide-react';
import { CameraPreset } from '../camera/GameplayCamera';

interface GameplayHUDProps {
  downState: DownState;
  playPhase: PlayPhase;
  telemetry: DebugTelemetry;
  currentPlay: PlayDefinition;
  controlledPlayerId: string;
  onSelectPlay: (play: PlayDefinition) => void;
  onSnap: () => void;
  onThrow: (receiver: 'WR1' | 'WR2' | 'WR3', type: ThrowType) => void;
  throwType: ThrowType;
  onChangeThrowType: (type: ThrowType) => void;
  onToggleDebug: () => void;
  debugMode: boolean;
  cameraMode: CameraPreset;
  onToggleCamera: () => void;
  onVirtualMove: (lateral: number, forward: number, sprint: boolean) => void;
}

export const GameplayHUD: React.FC<GameplayHUDProps> = ({
  downState,
  playPhase,
  telemetry,
  currentPlay,
  controlledPlayerId,
  onSelectPlay,
  onSnap,
  onThrow,
  throwType,
  onChangeThrowType,
  onToggleDebug,
  debugMode,
  cameraMode,
  onToggleCamera,
  onVirtualMove,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    sounds.setMuted(next);
  };

  const getDownSuffix = (d: number) => {
    if (d === 1) return '1ST';
    if (d === 2) return '2ND';
    if (d === 3) return '3RD';
    return '4TH';
  };

  return (
    <div id="gameplay-hud-root" className="pointer-events-none absolute inset-0 select-none overflow-hidden font-sans">
      {/* 1. TOP SCOREBOARD & BROADCAST BANNER */}
      <div id="scoreboard-banner" className="pointer-events-auto absolute top-2 left-1/2 flex max-w-[calc(100%-1rem)] -translate-x-1/2 items-center gap-1 rounded-xl border border-slate-700/80 bg-slate-900/90 px-2 py-2 text-white shadow-2xl backdrop-blur-md sm:top-4 sm:gap-3 sm:px-4">
        {/* Home Team */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 font-black text-xs text-white">
            WIL
          </div>
          <span className="hidden font-extrabold text-sm tracking-wide text-blue-400 sm:inline">WILDCATS</span>
          <span className="font-mono font-black text-xl text-white">{downState.offenseScore}</span>
        </div>

        <div className="h-6 w-px bg-slate-700" />

        {/* Away Team */}
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-xl text-white">{downState.defenseScore}</span>
          <span className="hidden font-extrabold text-sm tracking-wide text-red-400 sm:inline">TITANS</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-red-700 font-black text-xs text-white">
            TIT
          </div>
        </div>

        <div className="h-6 w-px bg-slate-700" />

        {/* Quarter & Game Clock */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
          <span className="rounded bg-slate-800 px-1.5 py-0.5 font-bold text-amber-400">Q{downState.quarter}</span>
          <span className="font-semibold">02:45</span>
        </div>

        {/* Audio, Camera & Debug Toggles */}
        <div className="flex items-center gap-1 pl-1 sm:gap-1.5 sm:pl-2">
          <button
            id="hud-camera-btn"
            onClick={onToggleCamera}
            className="flex h-8 w-8 items-center justify-center gap-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 transition hover:bg-slate-700 hover:text-white sm:w-auto sm:px-2.5"
            title="Toggle Camera View (Key: C) - Tactical / Broadcast / Action"
          >
            <Camera size={14} className="text-amber-400" />
            <span className="hidden font-bold text-[10px] tracking-wide text-amber-400 sm:inline">{cameraMode}</span>
          </button>
          <button
            id="hud-mute-btn"
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <button
            id="hud-debug-btn"
            onClick={onToggleDebug}
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
              debugMode ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="Toggle Physics Debug Overlay (Key: ` or ~)"
          >
            <Activity size={15} />
          </button>
        </div>
      </div>

      {/* 2. DOWN & DISTANCE CHYRON (BOTTOM LEFT) */}
      <div
        id="down-distance-chyron"
        className={`absolute left-2 max-w-[calc(100%-1rem)] rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 text-white shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:p-3.5 ${
          playPhase === 'PRE_SNAP' ? 'top-20 bottom-auto sm:top-auto' : 'bottom-4'
        }`}
      >
        <div className="flex items-baseline gap-2.5">
          <span className="font-black text-2xl tracking-tight text-amber-400">
            {getDownSuffix(downState.down)} & {downState.distance}
          </span>
          <span className="font-mono text-xs text-slate-400">
            BALL ON <span className="font-bold text-white">{downState.lineOfScrimmage}</span> YD
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="rounded bg-blue-950/80 px-2 py-0.5 font-semibold text-blue-300 border border-blue-800/60">
            {currentPlay.name}
          </span>
          {downState.playResultText && (
            <span className="font-medium text-amber-300 italic">{downState.playResultText}</span>
          )}
        </div>
      </div>

      {/* 3. RECEIVER PASS TARGETS OVERLAY (DURING ACTIVE PASS PLAY) */}
      {playPhase === 'PLAY_ACTIVE' && controlledPlayerId === 'QB' && currentPlay.type === 'PASS' && (
        <div id="pass-target-indicators" className="pointer-events-auto absolute top-24 left-1/2 flex -translate-x-1/2 items-center gap-4">
          <div className="rounded-xl border border-slate-700/90 bg-slate-900/90 px-4 py-2.5 text-center shadow-xl backdrop-blur-md">
            <div className="mb-2 font-bold text-xs uppercase tracking-wider text-slate-400">
              Target Receiver (Keys: 1, 2, 3)
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                id="pass-target-wr1"
                onClick={() => onThrow('WR1', throwType)}
                className="group flex flex-col items-center justify-center rounded-lg border border-sky-500/50 bg-sky-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-sky-600 hover:text-white"
              >
                <span className="font-black text-sm text-sky-300 group-hover:text-white">[1] WR1</span>
                <span className="text-[10px] text-sky-400/90 group-hover:text-sky-100">{currentPlay.routes.WR1}</span>
              </button>

              <button
                id="pass-target-wr2"
                onClick={() => onThrow('WR2', throwType)}
                className="group flex flex-col items-center justify-center rounded-lg border border-rose-500/50 bg-rose-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-rose-600 hover:text-white"
              >
                <span className="font-black text-sm text-rose-300 group-hover:text-white">[2] WR2</span>
                <span className="text-[10px] text-rose-400/90 group-hover:text-rose-100">{currentPlay.routes.WR2}</span>
              </button>

              <button
                id="pass-target-wr3"
                onClick={() => onThrow('WR3', throwType)}
                className="group flex flex-col items-center justify-center rounded-lg border border-purple-500/50 bg-purple-950/80 px-3 py-1.5 transition hover:scale-105 hover:bg-purple-600 hover:text-white"
              >
                <span className="font-black text-sm text-purple-300 group-hover:text-white">[3] WR3</span>
                <span className="text-[10px] text-purple-400/90 group-hover:text-purple-100">{currentPlay.routes.WR3}</span>
              </button>
            </div>

            {/* Throw Trajectory Selector */}
            <div className="mt-2 flex items-center justify-center gap-2 border-t border-slate-800 pt-2 text-[11px]">
              <span className="text-slate-400">Pass Arc:</span>
              {(['BULLET', 'TOUCH', 'LOB'] as ThrowType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => onChangeThrowType(t)}
                  className={`rounded px-2 py-0.5 font-semibold transition ${
                    throwType === t
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. PRE-SNAP PLAY SELECTOR & SNAP BUTTON */}
      {playPhase === 'PRE_SNAP' && (
        <div id="pre-snap-panel" className="pointer-events-auto absolute bottom-4 left-1/2 flex w-[calc(100%-1rem)] max-w-3xl -translate-x-1/2 flex-col items-center gap-3 sm:bottom-6">
          {/* Play Selector Cards */}
          <div className="flex w-full items-center gap-2.5 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-md">
            {PLAYBOOK.map((play) => (
              <button
                key={play.id}
                id={`play-select-${play.id}`}
                onClick={() => onSelectPlay(play)}
                className={`flex shrink-0 flex-col items-start rounded-xl px-3.5 py-2 text-left transition ${
                  currentPlay.id === play.id
                    ? 'border border-blue-500 bg-blue-600/30 text-white ring-1 ring-blue-400'
                    : 'border border-transparent bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`rounded px-1.5 py-0.2 font-extrabold text-[10px] ${
                      play.type === 'PASS' ? 'bg-sky-500/30 text-sky-300' : 'bg-amber-500/30 text-amber-300'
                    }`}
                  >
                    {play.type}
                  </span>
                  <span className="font-bold text-xs">{play.name}</span>
                </div>
                <span className="mt-0.5 line-clamp-1 max-w-[140px] text-[10px] text-slate-400">
                  {play.description}
                </span>
              </button>
            ))}
          </div>

          {/* Snap Ball Button */}
          <button
            id="snap-ball-btn"
            onClick={onSnap}
            className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-black text-sm uppercase tracking-wider text-slate-950 shadow-xl transition hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <Play size={16} fill="currentColor" />
            SNAP BALL (SPACE)
          </button>
        </div>
      )}

      {/* 5. TOUCHDOWN BANNER */}
      {playPhase === 'TOUCHDOWN_CELEBRATION' && (
        <div id="touchdown-celebration-banner" className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-bounce rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-blue-900 to-slate-950 px-12 py-6 text-center shadow-[0_0_50px_rgba(250,204,21,0.5)]">
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <Sparkles size={28} />
              <span className="font-black text-4xl tracking-wider uppercase">TOUCHDOWN!</span>
              <Sparkles size={28} />
            </div>
            <p className="mt-1 font-bold text-sm text-slate-200">WILDCATS SCORE 7 POINTS</p>
          </div>
        </div>
      )}

      {/* 6. DEBUG TELEMETRY OVERLAY */}
      {debugMode && (
        <div id="debug-telemetry-panel" className="pointer-events-auto absolute top-16 right-6 w-64 rounded-xl border border-amber-500/40 bg-slate-950/90 p-3.5 font-mono text-xs text-amber-300 shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-1 font-bold text-amber-400">
            <ShieldAlert size={14} />
            PHYSICS & RAGDOLL DEBUG
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Engine FPS:</span>
              <span className="text-emerald-400 font-bold">{telemetry.fps}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Ball Carrier:</span>
              <span className="font-bold text-white">{telemetry.ballCarrierId || 'None'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Carrier State:</span>
              <span
                className={`font-bold ${
                  telemetry.ballCarrierState === 'FULL_RAGDOLL'
                    ? 'text-red-400'
                    : telemetry.ballCarrierState === 'STUMBLE'
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}
              >
                {telemetry.ballCarrierState}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Speed:</span>
              <span>{telemetry.ballCarrierSpeed.toFixed(1)} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Active Ragdolls:</span>
              <span className="font-bold text-white">{telemetry.activeRagdollCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Last Tackle Impact:</span>
              <span className="text-red-400 font-bold">{telemetry.lastTackleForce} N</span>
            </div>
            {telemetry.passTarget && (
              <div className="flex justify-between">
                <span className="text-slate-400">Pass Air Time:</span>
                <span>{telemetry.passAirTime}s</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. VIRTUAL ON-SCREEN D-PAD / TOUCH CONTROLS (WHEN PLAY IS ACTIVE) */}
      {(playPhase === 'PLAY_ACTIVE' || playPhase === 'RUN_AFTER_CATCH') && (
        <div id="virtual-dpad-controls" className="pointer-events-auto absolute bottom-24 right-6 flex flex-col items-center gap-1 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-md sm:hidden">
          <div className="font-bold text-[10px] text-slate-400 uppercase tracking-wider mb-1">D-PAD</div>
          <button
            onPointerDown={() => onVirtualMove(0, 1, false)}
            onPointerUp={() => onVirtualMove(0, 0, false)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600"
          >
            ▲
          </button>
          <div className="flex items-center gap-1">
            <button
              onPointerDown={() => onVirtualMove(-1, 0, false)}
              onPointerUp={() => onVirtualMove(0, 0, false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600"
            >
              ◀
            </button>
            <button
              onPointerDown={() => onVirtualMove(0, -1, false)}
              onPointerUp={() => onVirtualMove(0, 0, false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600"
            >
              ▼
            </button>
            <button
              onPointerDown={() => onVirtualMove(1, 0, false)}
              onPointerUp={() => onVirtualMove(0, 0, false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 font-bold text-sm text-white active:bg-blue-600"
            >
              ▶
            </button>
          </div>
        </div>
      )}

      {/* 8. CONTROLS GUIDE (BOTTOM RIGHT) */}
      <div id="controls-legend" className="pointer-events-auto absolute bottom-6 right-6 hidden sm:block rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 text-[11px] text-slate-300 shadow-xl backdrop-blur-md">
        <div className="mb-1 font-bold text-slate-400 uppercase tracking-wider text-[10px]">Controls</div>
        <div className="space-y-0.5 font-mono">
          <div><span className="font-bold text-amber-400">WASD / Arrows</span>: Move QB / Runner</div>
          <div><span className="font-bold text-amber-400">SHIFT</span>: Sprint</div>
          <div><span className="font-bold text-amber-400">SPACE</span>: Snap / Cut</div>
          <div><span className="font-bold text-amber-400">1, 2, 3</span>: Pass to WR1, WR2, WR3</div>
          <div><span className="font-bold text-amber-400">C</span>: Camera Angle (Tactical/Broadcast/Action)</div>
          <div><span className="font-bold text-amber-400">` / ~</span>: Toggle Physics Debug</div>
        </div>
      </div>
    </div>
  );
};
