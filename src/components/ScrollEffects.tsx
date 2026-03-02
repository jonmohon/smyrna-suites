"use client";

import useScrollProgress from "@/hooks/useScrollProgress";

/**
 * Client component that activates scroll-based CSS custom properties.
 * Renders nothing visible — just runs the hook.
 * Place in layout.tsx alongside the scroll progress bar markup.
 */
export default function ScrollEffects() {
  useScrollProgress();
  return null;
}
