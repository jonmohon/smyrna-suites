import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ContactInfo from "@/components/ContactInfo";
import GoogleMap from "@/components/GoogleMap";
import Button from "@/components/Button";
import { BUSINESS } from "@/lib/constants";
import { MapPin, Clock, Car, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Get in touch with Smyrna Salon Suites. Visit us at ${BUSINESS.address.full} or call ${BUSINESS.phone}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Smyrna Salon Suites",
    description:
      `Get in touch with Smyrna Salon Suites. Visit us at ${BUSINESS.address.full} or call ${BUSINESS.phone}.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Custom Contact Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-black px-4 text-white">
        {/* Background image */}
        <Image
          src="/images/plaza-exterior.png"
          alt="Smyrna Salon Suites at Highlands Plaza"
          fill
          className="object-cover opacity-35"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-8 top-8 h-24 w-24 border-l-2 border-t-2 border-gold/25 sm:left-16 sm:top-16 sm:h-32 sm:w-32" />
          <div className="absolute bottom-8 right-8 h-24 w-24 border-b-2 border-r-2 border-gold/25 sm:bottom-16 sm:right-16 sm:h-32 sm:w-32" />

          {/* Floating ring */}
          <svg className="animate-float absolute -right-12 top-1/3 h-[250px] w-[250px] opacity-[0.07]" viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="110" fill="none" stroke="#c5a355" strokeWidth="1.5" strokeDasharray="6 10" />
          </svg>

          {/* Dot pattern */}
          <div
            className="absolute bottom-0 right-0 h-1/2 w-1/4 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #c5a355 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-white/80 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-gold" />
              Smyrna, GA
            </div>

            <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gold-gradient-text">Contact Us</span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              We&apos;d love to hear from you. Reach out with questions or stop by for a visit.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold-light" />

            {/* Contact quick actions */}
            <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/15"
              >
                <Phone className="h-4 w-4 text-gold" />
                {BUSINESS.phone}
              </a>
              <a
                href="https://maps.google.com/?q=3020+Highlands+Parkway+Suite+G+Smyrna+GA+30082"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/15"
              >
                <MapPin className="h-4 w-4 text-gold" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-muted rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-muted rounded-full opacity-40 blur-3xl translate-y-1/3 translate-x-1/4" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Whether you have questions about our suites or want to schedule a visit, we're here to help."
          />

          {/* Plaza exterior image */}
          <div className="animate-fade-in-up mt-10 mb-14 overflow-hidden rounded-2xl shadow-lg">
            <div className="relative h-[240px] sm:h-[320px]">
              <Image
                src="/images/plaza-exterior.png"
                alt="Smyrna Salon Suites at Highlands Plaza exterior view"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-14 grid gap-4 sm:grid-cols-3">
            {[
              { icon: <MapPin className="h-5 w-5" />, text: "Integrity Heights Plaza, off I-285" },
              { icon: <Clock className="h-5 w-5" />, text: "Full-time renters: 24/7 access" },
              { icon: <Car className="h-5 w-5" />, text: "Free parking directly in front" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
                <span className="text-gold">{item.icon}</span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
            {/* Contact Info */}
            <div className="animate-slide-left">
              <ContactInfo />
            </div>

            {/* Map */}
            <div className="animate-slide-right delay-200">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative accent divider */}
      <div className="flex items-center justify-center py-4">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold/30" />
        <div className="mx-4 w-2 h-2 rounded-full bg-gold/40" />
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold/30" />
      </div>

      {/* CTA Banner */}
      <section className="relative bg-green-deep px-4 py-20 sm:py-24 text-center overflow-hidden">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />

        {/* Decorative gold circles */}
        <div className="absolute top-6 left-10 w-28 h-28 rounded-full border border-gold/10" />
        <div className="absolute bottom-6 right-10 w-40 h-40 rounded-full border border-gold/10" />

        <div className="relative mx-auto max-w-2xl animate-fade-in-up">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Want to See the Suites in Person?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule a tour and find the perfect space for your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-a-tour" variant="primary">
              Book a Tour
            </Button>
            <Button href="/faq" variant="outline">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
