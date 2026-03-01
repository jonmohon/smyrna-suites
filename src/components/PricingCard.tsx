import Button from "./Button";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  features: readonly string[];
  popular?: boolean;
};

export default function PricingCard({
  name,
  price,
  period,
  features,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`animate-fade-in-up hover-lift relative flex flex-col rounded-2xl p-8 text-center transition-all duration-300 ${
        popular
          ? "border-2 border-gold/40 bg-white shadow-xl shadow-gold/10 ring-2 ring-gold/20"
          : "border border-gray-200 bg-white shadow-lg"
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/25">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="mt-2 font-serif text-xl font-bold text-green-deep">{name}</h3>

      {/* Decorative line */}
      <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Price */}
      <div className="mt-5">
        <span
          className={`text-5xl font-bold tracking-tight ${
            popular ? "text-gold" : "text-green-deep"
          }`}
        >
          {price}
        </span>
        <span className="ml-1 text-base text-gray-500">{period}</span>
      </div>

      {/* Features */}
      <ul className="mt-8 flex-1 space-y-4 text-left">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                className={popular ? "fill-gold/10" : "fill-green-deep/10"}
              />
              <path
                d="M8 12l2.5 2.5L16 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={popular ? "text-gold" : "text-green-deep"}
              />
            </svg>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-8">
        <Button
          href="/book-a-tour"
          variant={popular ? "primary" : "secondary"}
          className="w-full justify-center"
        >
          Book a Tour
        </Button>
      </div>
    </div>
  );
}
