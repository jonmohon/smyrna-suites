type AmenityCardProps = {
  title: string;
  description: string;
  icon: string;
};

const iconMap: Record<string, React.ReactNode> = {
  chair: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
    </svg>
  ),
  support: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  amenities: (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
};

export default function AmenityCard({
  title,
  description,
  icon,
}: AmenityCardProps) {
  return (
    <div className="animate-fade-in-up hover-lift rounded-2xl border border-gold/10 bg-white p-8 text-center shadow-lg transition-all duration-300">
      {/* Icon with gold gradient background */}
      <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-gold-light/5 text-gold shadow-sm">
        {iconMap[icon] || iconMap.chair}
      </div>

      <h3 className="font-serif text-xl font-bold text-green-deep lg:text-[1.35rem]">
        {title}
      </h3>

      {/* Decorative line */}
      <div className="mx-auto mt-3 h-px w-10 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}
