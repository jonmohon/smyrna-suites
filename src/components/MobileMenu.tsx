"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay with frosted glass */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-green-deep transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Gold accent line at top */}
        <div className="h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-xl font-bold gold-gradient-text">
            Menu
          </span>
          <button
            onClick={onClose}
            className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 hover:rotate-90"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-white/60 transition-colors duration-300 group-hover:text-white" />
          </button>
        </div>

        {/* Subtle divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Navigation links with staggered animation */}
        <nav className="flex flex-1 flex-col px-6 py-4">
          {NAV_LINKS.filter((link) => link.label !== "Book a Tour").map(
            (link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`group relative flex items-center py-4 text-base font-medium text-white/80 transition-all duration-300 hover:text-white hover:translate-x-2 ${
                  isOpen
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isOpen ? `${(index + 1) * 80}ms` : "0ms",
                  animationFillMode: "both",
                }}
              >
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover:bg-gold group-hover:scale-125" />
                {link.label}
                <span className="absolute bottom-3 left-0 right-0 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </Link>
            )
          )}
        </nav>

        {/* Book a Tour CTA */}
        <div
          className={`px-6 pb-8 ${
            isOpen ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{
            animationDelay: isOpen ? `${(NAV_LINKS.length + 1) * 80}ms` : "0ms",
            animationFillMode: "both",
          }}
        >
          <Link
            href="/book-a-tour"
            onClick={onClose}
            className="group relative block w-full overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-light py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(197,163,85,0.3)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(197,163,85,0.5)] hover:brightness-110 active:scale-[0.98]"
          >
            <span className="relative z-10">Book a Tour</span>
            <div className="absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Subtle tagline below CTA */}
          <p className="mt-4 text-center text-xs text-white/40">
            Premium Salon Suites in Smyrna, GA
          </p>
        </div>
      </div>
    </>
  );
}
