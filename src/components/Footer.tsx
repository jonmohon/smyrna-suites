import Link from "next/link";
import { BUSINESS, JADE_SALON, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Animated gold accent line above footer */}
      <div className="h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold animate-gradient bg-[length:200%_100%]" />

      <div className="bg-gradient-to-b from-green-deep to-[#0d3518]">
        {/* Tagline banner */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center font-serif text-2xl font-bold tracking-wide text-white/90 sm:text-3xl">
              Premium Salon Suites in{" "}
              <span className="gold-gradient-text">Smyrna, GA</span>
            </p>
            <p className="mt-2 text-center text-sm text-white/50">
              {BUSINESS.tagline}
            </p>
          </div>
        </div>

        {/* Main footer content */}
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {/* Column 1 -- Business info */}
            <div className="group">
              <h3 className="mb-5 font-serif text-lg font-bold gold-gradient-text">
                {BUSINESS.name}
              </h3>
              <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-gold/60 to-transparent" />
              <p className="mb-3 text-sm leading-relaxed text-white/70">
                {BUSINESS.address.full}
              </p>
              <p className="text-sm text-white/70">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-white/70">
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </div>

            {/* Column 2 -- Quick links */}
            <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
              <h3 className="mb-5 font-serif text-lg font-bold gold-gradient-text">
                Quick Links
              </h3>
              <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-gold/60 to-transparent" />
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group/link flex items-center py-1.5 text-sm text-white/70 transition-all duration-300 hover:text-gold hover:translate-x-2"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-gold/40 transition-all duration-300 group-hover/link:bg-gold group-hover/link:scale-150" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3 -- Anchor salon */}
            <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-t-0">
              <h3 className="mb-5 font-serif text-lg font-bold gold-gradient-text">
                Anchor Salon
              </h3>
              <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-gold/60 to-transparent" />
              <p className="mb-3 text-sm font-semibold text-white/90">
                {JADE_SALON.name}
              </p>
              <p className="text-sm text-white/70">
                <a
                  href={`tel:${JADE_SALON.phone}`}
                  className="transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block"
                >
                  {JADE_SALON.phone}
                </a>
              </p>
              <p className="mt-2 text-sm">
                <a
                  href={JADE_SALON.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-light transition-all duration-300 hover:text-gold hover:gap-2"
                >
                  jadesalonofatlanta.com
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-xs tracking-wide text-white/40">
              &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
