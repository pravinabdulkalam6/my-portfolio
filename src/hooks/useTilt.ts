import { useEffect } from 'react';

/**
 * Adds a subtle 3D "tilt toward cursor" effect to every element carrying a
 * `data-tilt` attribute. Works on elements that mount after this hook runs
 * (via a MutationObserver) and is disabled on touch devices and when the user
 * prefers reduced motion.
 *
 * `ready` lets callers defer wiring until the main content is mounted.
 */
export const useTilt = (ready: boolean = true) => {
  useEffect(() => {
    if (!ready) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouch) return;

    const MAX_TILT = 6; // degrees
    const wired = new WeakSet<HTMLElement>();

    const handleMove = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      const e = event as MouseEvent;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(
        2
      )}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) translateZ(0)`;
    };

    const handleLeave = (event: Event) => {
      const el = event.currentTarget as HTMLElement;
      el.style.transform = '';
    };

    const wireAll = () => {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        if (wired.has(el)) return;
        wired.add(el);
        el.style.transition = 'transform 0.2s ease-out';
        el.style.willChange = 'transform';
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
      });
    };

    wireAll();

    const mutationObserver = new MutationObserver(() => wireAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', handleLeave);
        el.style.transform = '';
      });
    };
  }, [ready]);
};
