import React, { useEffect, useRef, useState } from 'react';
import { CalendarClock, Boxes, Rocket, ShieldCheck } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <CalendarClock className="w-7 h-7" />, value: 5, suffix: '+', label: 'Years of Engineering' },
  { icon: <Boxes className="w-7 h-7" />, value: 25, suffix: '+', label: 'Technologies & Tools' },
  { icon: <Rocket className="w-7 h-7" />, value: 5, suffix: '', label: 'Flagship Projects' },
  { icon: <ShieldCheck className="w-7 h-7" />, value: 100, suffix: '%', label: 'Smoke Test Pass Rate' },
];

const Counter: React.FC<{ target: number; suffix: string; active: boolean }> = ({
  target,
  suffix,
  active,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const duration = 1600;
    let raf = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutExpo for a snappy, decelerating count
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="modern-section py-14 md:py-16 bg-gradient-to-b from-slate-950/75 to-slate-900/80 dark:from-white dark:to-blue-50/70"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-tilt
              className="glow-card modern-panel card-sheen rounded-2xl p-6 text-center animate-fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-cyan-400/10 dark:bg-blue-100 text-cyan-300 dark:text-blue-700">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold gradient-text leading-none mb-2">
                <Counter target={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-300 dark:text-slate-600 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
