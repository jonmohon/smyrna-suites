{/* TODO: Replace with actual photo using next/image when client provides photos */}

import { Monitor, Home, Heart, Building2 } from "lucide-react";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  icon?: "salon" | "suite" | "spa" | "building";
};

const icons = {
  salon: <Monitor className="h-20 w-20" />,
  suite: <Home className="h-20 w-20" />,
  spa: <Heart className="h-20 w-20" />,
  building: <Building2 className="h-20 w-20" />,
};

export default function PlaceholderImage({
  label,
  className = "",
  icon = "salon",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-br from-green-deep via-[#1a6b30] to-[#0d3518] shadow-lg ${className}`}
    >
      {/* Inner glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-gold/20 rounded-tr-lg" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold/20 rounded-bl-lg" />

      {/* Icon */}
      <div className="relative text-gold/60">
        {icons[icon]}
      </div>

      {/* Label */}
      {label && (
        <span className="relative mt-3 text-sm font-medium tracking-wide text-white/50">
          {label}
        </span>
      )}
    </div>
  );
}
