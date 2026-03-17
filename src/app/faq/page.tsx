import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { FAQ_ITEMS, BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle, HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Smyrna Salon Suites — pricing, amenities, access, location, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Smyrna Salon Suites",
    description:
      "Frequently asked questions about Smyrna Salon Suites — pricing, amenities, access, location, and more.",
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Custom FAQ Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-black px-4 text-white">
        {/* Background image */}
        <Image
          src="/images/stylist-working.webp"
          alt="Professional stylist at work"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-8 top-8 h-24 w-24 border-l-2 border-t-2 border-gold/25 sm:left-16 sm:top-16 sm:h-32 sm:w-32" />
          <div className="absolute bottom-8 right-8 h-24 w-24 border-b-2 border-r-2 border-gold/25 sm:bottom-16 sm:right-16 sm:h-32 sm:w-32" />

          {/* Floating diamond */}
          <svg className="animate-float absolute right-[15%] top-1/4 h-[180px] w-[180px] opacity-[0.06]" viewBox="0 0 180 180">
            <rect x="40" y="40" width="100" height="100" fill="none" stroke="#c5a355" strokeWidth="1.5" transform="rotate(45 90 90)" />
          </svg>

          {/* Dashed arc */}
          <svg className="absolute -left-8 bottom-1/3 h-[220px] w-[220px] opacity-[0.05]" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="100" fill="none" stroke="#c5a355" strokeWidth="1" strokeDasharray="8 14" />
          </svg>

          {/* Dot pattern */}
          <div
            className="absolute left-0 top-0 h-1/2 w-1/3 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #c5a355 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-white/80 backdrop-blur-sm">
              <HelpCircle className="h-4 w-4 text-gold" />
              Got Questions?
            </div>

            <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gold-gradient-text">Frequently Asked</span>
              <br />
              <span className="text-white">Questions</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Everything you need to know about renting a suite at Smyrna Salon Suites.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold-light" />

            {/* Quick links */}
            <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap items-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold/70" />
                Pricing &amp; Plans
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold/70" />
                Amenities
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold/70" />
                Access &amp; Security
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-muted rounded-full opacity-30 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-muted rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/4" />

        {/* Subtle dot patterns */}
        <div className="absolute top-20 left-10 w-28 h-28 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--gold) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--green-deep) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

        <div className="relative mx-auto max-w-3xl">
          <SectionHeading
            title="Common Questions"
            subtitle="Find answers to the most frequently asked questions about our salon suites, pricing, and amenities."
          />

          <div className="animate-fade-in-up delay-200">
            <FaqAccordion />
          </div>

          {/* Still need help? */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-green-deep">Call Us</p>
                <a href={`tel:${BUSINESS.phone}`} className="text-sm text-gold hover:text-gold-light">{BUSINESS.phone}</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-green-deep">Email Us</p>
                <a href={`mailto:${BUSINESS.email}`} className="text-sm text-gold hover:text-gold-light">{BUSINESS.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-green-deep px-4 py-20 sm:py-24 text-center overflow-hidden">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />

        {/* Decorative gold circles */}
        <div className="absolute top-8 left-8 w-32 h-32 rounded-full border border-gold/10" />
        <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full border border-gold/10" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border border-gold/5" />

        <div className="relative mx-auto max-w-2xl animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Book a tour and see everything in person. We&apos;re happy to answer
            any questions face to face.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-a-tour" variant="primary">
              Book a Tour
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
