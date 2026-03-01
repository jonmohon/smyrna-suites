type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  fullHeight?: boolean;
};

export default function Hero({ title, subtitle, children, fullHeight }: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#0a0a0a] px-4 text-center text-white animate-gradient ${
        fullHeight ? "flex min-h-screen items-center py-20" : "py-24 sm:py-32"
      }`}
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Large circle top-right */}
        <svg
          className="absolute -right-40 -top-40 h-[500px] w-[500px] opacity-[0.06] animate-float"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="250" fill="url(#heroGrad1)" />
          <defs>
            <radialGradient id="heroGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c5a355" />
              <stop offset="100%" stopColor="#c5a355" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Medium circle bottom-left */}
        <svg
          className="absolute -bottom-20 -left-32 h-[400px] w-[400px] opacity-[0.05]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" stroke="#c5a355" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="140" stroke="#c5a355" strokeWidth="0.75" />
        </svg>

        {/* Small decorative ring center-right */}
        <svg
          className="absolute right-1/4 top-1/3 h-[200px] w-[200px] opacity-[0.04] animate-float delay-300"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="#c5a355" strokeWidth="1" />
        </svg>

        {/* Diagonal lines accent */}
        <svg
          className="absolute bottom-1/4 left-1/4 h-[150px] w-[150px] opacity-[0.04]"
          viewBox="0 0 150 150"
          fill="none"
        >
          <line x1="0" y1="0" x2="150" y2="150" stroke="#c5a355" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="150" y2="120" stroke="#c5a355" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="150" y2="90" stroke="#c5a355" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="gold-gradient-text font-serif text-4xl font-bold leading-tight tracking-tight animate-fade-in-up sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 animate-fade-in-up delay-200 sm:text-xl sm:leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Children */}
        {children && (
          <div className="mt-10 animate-fade-in-up delay-400">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
