import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const phases = [
  'Booting reliability systems',
  'Syncing GitOps deployments',
  'Streaming observability metrics',
  'Arming SOC security controls',
  'Welcome',
];

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 3 + 1.5;

        const idx = Math.floor((next / 100) * phases.length);
        setPhaseIndex(Math.min(idx, phases.length - 1));

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Circular progress geometry
  const size = 220;
  const stroke = 6;
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress / 100);
  const rounded = Math.round(progress);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#050816]">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-blue-600/15 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] bg-cyan-500/12 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] bg-emerald-500/10 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '9s' }}></div>
      </div>
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,170,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(120,170,255,0.5) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Progress ring */}
        <div className="relative" style={{ width: size, height: size }}>
          {/* Slow rotating accent ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-spin" style={{ animationDuration: '14s' }}>
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-glow"></div>
          </div>

          <svg width={size} height={size} className="-rotate-90">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#26d0ce" />
                <stop offset="50%" stopColor="#1a7af8" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={stroke}
            />
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              style={{ transition: 'stroke-dashoffset 0.1s linear', filter: 'drop-shadow(0 0 6px rgba(38,208,206,0.5))' }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-3 rounded-2xl animate-glow-pulse">
              <Logo className="w-14 h-14" />
            </div>
            <div className="text-4xl font-extrabold tabular-nums text-white tracking-tight">
              {rounded}
              <span className="text-xl align-top text-cyan-300">%</span>
            </div>
          </div>
        </div>

        {/* Identity */}
        <h1 className="mt-8 text-2xl md:text-3xl font-extrabold tracking-tight gradient-text">
          Pravin Abdul Kalam M
        </h1>
        <p className="mt-2 text-xs md:text-sm font-medium text-slate-400 tracking-wide text-center">
          SRE · DevOps &amp; GitOps · Full-Stack &amp; Data · Security &amp; SOC
        </p>

        {/* Cycling status */}
        <div className="mt-8 flex items-center gap-2.5 h-5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          <span className="text-sm font-mono text-slate-300">
            {phases[phaseIndex]}
            {phaseIndex < phases.length - 1 ? '…' : ' 🎉'}
          </span>
        </div>

        {/* Slim bar */}
        <div className="mt-6 w-60 sm:w-72 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 relative"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
