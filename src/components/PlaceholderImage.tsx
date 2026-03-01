{/* TODO: Replace with actual photo using next/image when client provides photos */}

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  icon?: "salon" | "suite" | "spa" | "building";
};

const icons = {
  salon: (
    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  suite: (
    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
    </svg>
  ),
  spa: (
    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  building: (
    <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
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
