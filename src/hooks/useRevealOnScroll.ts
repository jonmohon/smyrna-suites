"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Observes the referenced element and sets data-revealed="true"
 * when it scrolls into the viewport. Once revealed, the observer
 * disconnects (reveal is one-shot).
 *
 * @param threshold - Fraction of element visible to trigger (default 0.15)
 * @returns ref to attach to the element you want to reveal
 */
export default function useRevealOnScroll<
  T extends HTMLElement = HTMLDivElement,
>(threshold: number = 0.15): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: reveal immediately
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.setAttribute("data-revealed", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-revealed", "true");
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
