import React from 'react';
import { Activity, Camera, Menu, Play, Volume2, VolumeX, X } from 'lucide-react';
import { CameraPreset } from '../camera/GameplayCamera';

interface PauseMenuProps {
  paused: boolean;
  onTogglePause: () => void;
  cameraMode: CameraPreset;
  onToggleCamera: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  debugMode: boolean;
  onToggleDebug: () => void;
}

export const PauseMenu: React.FC<PauseMenuProps> = ({
  paused, onTogglePause, cameraMode, onToggleCamera, isMuted, onToggleMute, debugMode, onToggleDebug,
}) => (
  <>
    <button
      id="pause-menu-btn"
      onClick={onTogglePause}
      className="pointer-events-auto absolute top-[max(.5rem,env(safe-area-inset-top))] right-[max(.5rem,env(safe-area-inset-right))] z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600/80 bg-slate-950/85 text-white shadow-xl backdrop-blur-md"
      aria-label={paused ? 'Resume game' : 'Pause game'}
    >
      {paused ? <X size={20} /> : <Menu size={20} />}
    </button>

    {paused && (
      <div id="pause-menu" className="pointer-events-auto absolute inset-0 z-40 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-3xl border border-slate-600/70 bg-slate-900/95 p-5 text-white shadow-2xl">
          <div className="text-center text-xs font-black uppercase tracking-[.3em] text-amber-400">Game paused</div>
          <button onClick={onTogglePause} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 font-black text-slate-950 active:scale-[.98]">
            <Play size={18} fill="currentColor" /> Resume
          </button>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <button onClick={onToggleCamera} className="rounded-xl bg-slate-800 p-3 text-xs font-bold"><Camera className="mx-auto mb-1 text-sky-400" size={18} />{cameraMode}</button>
            <button onClick={onToggleMute} className="rounded-xl bg-slate-800 p-3 text-xs font-bold">{isMuted ? <VolumeX className="mx-auto mb-1 text-rose-400" size={18} /> : <Volume2 className="mx-auto mb-1 text-emerald-400" size={18} />}{isMuted ? 'Muted' : 'Sound'}</button>
            <button onClick={onToggleDebug} className={`rounded-xl p-3 text-xs font-bold ${debugMode ? 'bg-amber-400 text-slate-950' : 'bg-slate-800'}`}><Activity className="mx-auto mb-1" size={18} />Debug</button>
          </div>
          <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-950/65 p-3"><b className="text-white">Touch</b><br />Drag the left stick to move; outer ring sprints. Tap a receiver to lob, hold briefly for touch, hold longer for bullet.</div>
            <div className="rounded-xl bg-slate-950/65 p-3"><b className="text-white">Keyboard</b><br />WASD/arrows move, Shift sprints, Space snaps, 1–3 throw, C changes camera, P/Esc pauses.</div>
          </div>
        </div>
      </div>
    )}
  </>
);
