import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const delayClasses = [
  "",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
  "delay-500",
  "delay-600",
];

export default function FaqAccordion() {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {FAQ_ITEMS.map((item, i) => (
        <details
          key={i}
          className={`group animate-fade-in-up hover-lift rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 open:border-l-4 open:border-l-gold open:shadow-md ${
            delayClasses[i % delayClasses.length]
          }`}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-6 text-left font-serif text-[1.05rem] font-semibold text-green-deep transition-colors duration-200 hover:text-green-light [&::-webkit-details-marker]:hidden">
            <span className="leading-snug">{item.question}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 ease-in-out group-open:rotate-180" />
          </summary>
          <div className="border-t border-gray-100 px-7 pb-6 pt-4 text-[0.925rem] leading-relaxed text-gray-600">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
