"use client";

import useRevealOnScroll from "@/hooks/useRevealOnScroll";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRevealOnScroll<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
