import { useEffect } from 'react';

const ANIMATION_SELECTOR =
  '.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-rotate-in';

/**
 * Reveals elements with reveal-animation classes once they scroll into view.
 *
 * The page content mounts only after the loader finishes, so a one-shot
 * IntersectionObserver created on App mount would observe nothing. We re-run
 * whenever `ready` flips to true and also watch for nodes added later via a
 * MutationObserver, so every reveal target is observed exactly once.
 *
 * Honors `prefers-reduced-motion`: if the user opts out, everything is shown
 * immediately with no transition.
 */
export const useScrollAnimation = (ready: boolean = true) => {
  useEffect(() => {
    if (!ready) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      document
        .querySelectorAll(ANIMATION_SELECTOR)
        .forEach((el) => el.classList.add('animate-in'));
      return;
    }

    const observed = new WeakSet<Element>();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll(ANIMATION_SELECTOR).forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        // Reveal anything already on-screen at first paint immediately.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-in');
        } else {
          intersectionObserver.observe(el);
        }
      });
    };

    observeAll();

    // Catch reveal targets that mount after this effect runs.
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [ready]);
};
