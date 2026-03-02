"use client";

import Image, { type ImageProps } from "next/image";
import useParallax from "@/hooks/useParallax";

type ParallaxImageProps = ImageProps & {
  /** Parallax intensity — 0.05 = subtle, 0.15 = dramatic */
  speed?: number;
  /** Extra classes on the outer container */
  containerClassName?: string;
};

/**
 * Next.js Image wrapped in a parallax container.
 * The image shifts vertically as the user scrolls.
 * Disabled on touch devices automatically.
 */
export default function ParallaxImage({
  speed = 0.1,
  containerClassName = "",
  className = "",
  ...imageProps
}: ParallaxImageProps) {
  const ref = useParallax<HTMLDivElement>(speed);

  return (
    <div className={`overflow-hidden ${containerClassName}`}>
      <div ref={ref}>
        <Image className={className} {...imageProps} />
      </div>
    </div>
  );
}
