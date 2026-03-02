import { Armchair, Users, Wifi } from "lucide-react";

type AmenityCardProps = {
  title: string;
  description: string;
  icon: string;
};

const iconMap: Record<string, React.ReactNode> = {
  chair: <Armchair className="h-8 w-8" />,
  support: <Users className="h-8 w-8" />,
  amenities: <Wifi className="h-8 w-8" />,
};

export default function AmenityCard({
  title,
  description,
  icon,
}: AmenityCardProps) {
  return (
    <div className="rounded-2xl border border-gold/10 bg-white p-8 text-center shadow-lg transition-all duration-300">
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
