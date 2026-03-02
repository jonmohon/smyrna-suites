import ScrollReveal from "@/components/ScrollReveal";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal variant="fade-up" className={`mb-16 text-center ${className}`}>
      <h2 className="green-gradient-text font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div className="accent-line-center mx-auto mt-4" />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
