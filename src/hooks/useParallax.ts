"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Applies a parallax scroll effect to the referenced element.
 * The element's translateY is offset based on its scroll position,
 * creating a subtle depth effect.
 *
 * @param speed - Parallax intensity (0.05 = subtle, 0.15 = dramatic)
 * @returns ref to attach to the parallax container
 *
 * Disabled on touch devices and when prefers-reduced-motion is set.
 * Uses transform: translate3d for GPU compositing.
 */
export default function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.1,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on touch devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // Respect reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let ticking = false;
    let isVisible = false;

    // Only run parallax when element is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "100px 0px" },
    );
    observer.observe(el);

    function update() {
      if (!isVisible || !el) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // How far the element center is from the viewport center (-1 to 1)
      const centerOffset =
        (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
      const y = centerOffset * speed * windowHeight * -1;

      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      el.style.willChange = "transform";
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    // Set initial position
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (el) {
        el.style.transform = "";
        el.style.willChange = "";
      }
    };
  }, [speed]);

  return ref;
}
