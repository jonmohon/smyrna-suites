import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 active:scale-[0.97]";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-gold-light text-white shadow-[0_2px_16px_rgba(197,163,85,0.3)] hover:shadow-[0_6px_24px_rgba(197,163,85,0.5)] hover:brightness-110",
    secondary:
      "bg-green-deep text-white border border-gold/20 shadow-[0_2px_12px_rgba(26,92,42,0.2)] hover:shadow-[0_6px_20px_rgba(26,92,42,0.35)] hover:bg-green-light",
    outline:
      "border-2 border-white/80 text-white backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-gold/60 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Shimmer overlay on hover */}
      <div className="absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
