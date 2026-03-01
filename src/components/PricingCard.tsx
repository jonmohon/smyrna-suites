import { Check, Star } from "lucide-react";
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
            <Star className="h-3.5 w-3.5 fill-current" />
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
            <Check
              className={`mt-0.5 h-5 w-5 shrink-0 ${popular ? "text-gold" : "text-green-deep"}`}
            />
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
