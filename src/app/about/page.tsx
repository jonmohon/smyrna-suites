import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { BUSINESS, JADE_SALON } from "@/lib/constants";
import { HeartHandshake, Globe, Droplets, CalendarDays, Star, ExternalLink, Phone, Link as LinkIcon, Award, Users, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.name} — premium salon suite rentals for independent beauty professionals in Smyrna, GA.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Smyrna Salon Suites",
    description: `Learn about ${BUSINESS.name} — premium salon suite rentals for independent beauty professionals in Smyrna, GA.`,
    url: "/about",
  },
};

const differentiators = [
  {
    number: "01",
    title: "Owner Support",
    icon: <HeartHandshake className="h-7 w-7" />,
    description:
      "We are hands-on owners who care about your success. Need help with marketing, setup, or logistics? We're here for you.",
  },
  {
    number: "02",
    title: "Dual-Site Listing",
    icon: <Globe className="h-7 w-7" />,
    description:
      "Get listed on both our website and Jade Salon of Atlanta's site, doubling your online visibility and reach.",
  },
  {
    number: "03",
    title: "Head Spa Access",
    icon: <Droplets className="h-7 w-7" />,
    description:
      "Rent our private head spa room by the hour to offer authentic Japanese head spa treatments to your own clients. Or refer them to Jade Head Spa and earn commission discounts toward your rent.",
  },
  {
    number: "04",
    title: "Flexible Scheduling",
    icon: <CalendarDays className="h-7 w-7" />,
    description:
      "Choose from day pass, part-time, or full-time plans. Pick the option that works best for your schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Custom About Hero — full image with layered content */}
      {/* Keep load-based animations (above the fold) */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black px-4 text-white">
        {/* Background image with parallax */}
        <ParallaxImage
          src="/images/suite-interior.webp"
          alt="Inside a premium salon suite"
          fill
          sizes="100vw"
          className="object-cover opacity-55"
          priority
          speed={0.4}
          containerClassName="absolute inset-0"
        />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />

        {/* Animated shimmer */}
        <div className="animate-shimmer pointer-events-none absolute inset-0" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Gold corner accents */}
          <div className="absolute left-8 top-8 h-24 w-24 border-l-2 border-t-2 border-gold/25 sm:left-16 sm:top-16 sm:h-32 sm:w-32" />
          <div className="absolute bottom-8 right-8 h-24 w-24 border-b-2 border-r-2 border-gold/25 sm:bottom-16 sm:right-16 sm:h-32 sm:w-32" />

          {/* Floating rings */}
          <svg className="animate-float absolute -right-16 top-1/4 h-[300px] w-[300px] opacity-[0.06]" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="140" fill="none" stroke="#c5a355" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="#c5a355" strokeWidth="1" strokeDasharray="8 12" />
          </svg>

          {/* Dotted pattern left side */}
          <div
            className="absolute left-0 top-0 h-full w-1/3 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #c5a355 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Content — keeps load-based animations */}
        <div className="relative z-10 mx-auto max-w-6xl py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-white/80 backdrop-blur-sm">
              <Star className="h-4 w-4 text-gold" fill="currentColor" />
              Our Story
            </div>

            {/* Title */}
            <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gold-gradient-text">About Us</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Discover the vision behind {BUSINESS.name} and what makes us the right home for your beauty business.
            </p>

            {/* Accent line */}
            <div className="animate-fade-in-up delay-300 mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold-light" />

            {/* Quick stats row */}
            <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap gap-8">
              {[
                { label: "Fully Furnished", icon: <Gem className="h-4 w-4" /> },
                { label: "Flexible Plans", icon: <CalendarDays className="h-4 w-4" /> },
                { label: "Move-In Ready", icon: <Award className="h-4 w-4" /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="text-gold">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-muted rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-muted rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading title="Our Story" />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text */}
            <ScrollReveal variant="fade-up">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {BUSINESS.name} was founded with a simple vision: to give
                  independent stylists and barbers a premium, hassle-free space to
                  grow their business. Located in {BUSINESS.plaza} at{" "}
                  {BUSINESS.address.full}, we offer fully furnished suites in a
                  modern, professional setting.
                </p>
                <p>
                  We understand the challenges of running your own beauty
                  business. That&apos;s why we handle the overhead — WiFi, utilities,
                  parking, furnishings, complimentary salon laundry services, and
                  access to a private head spa room — so you can focus on what you
                  do best: serving your clients and building your brand. We are
                  here to help you every step of the way.
                </p>
              </div>
              <span className="accent-line-center mt-10 lg:!mx-0 lg:after:left-0 lg:after:translate-x-0" />
            </ScrollReveal>

            {/* Right column — image */}
            <ScrollReveal variant="slide-right" delay={200}>
              <Image
                src="/images/suite-mirror.webp"
                alt="Elegant salon suite interior with large mirror"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { icon: <Gem className="h-6 w-6" />, stat: "Premium", label: "Fully Furnished Suites" },
            { icon: <Users className="h-6 w-6" />, stat: "Independent", label: "Be Your Own Boss" },
            { icon: <Award className="h-6 w-6" />, stat: "Trusted", label: "Backed by Jade Salon" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} variant="fade-up" delay={i * 100} className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                {item.icon}
              </div>
              <span className="font-serif text-2xl font-bold text-green-deep">{item.stat}</span>
              <span className="text-sm text-gray-500">{item.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Our Space — Staggered offset editorial gallery */}
      <section className="px-4 py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Space"
            subtitle="A premium environment designed for independent beauty professionals."
          />

          {/* 12-column staggered grid */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {/* Large — salon interior, 7 cols, with parallax */}
            <ScrollReveal variant="fade-up" className="col-span-12 sm:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <ParallaxImage
                  src="/images/suite-interior.webp"
                  alt="Premium salon suite interior with styling stations"
                  fill
                  sizes="(max-width: 640px) 100vw, 58vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  speed={0.3}
                  containerClassName="absolute inset-0"
                />
              </div>
            </ScrollReveal>

            {/* Medium — barber chair, 5 cols, offset down */}
            <ScrollReveal variant="fade-up" delay={200} className="col-span-12 sm:col-span-5 sm:mt-16">
              <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/barber-chair.webp"
                  alt="Professional barber chair in a private suite"
                  fill
                  sizes="(max-width: 640px) 100vw, 42vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Suite with chandelier — portrait, 5 cols, offset up */}
            <ScrollReveal variant="fade-up" delay={300} className="col-span-12 sm:col-span-5 sm:-mt-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/suite-chandelier.webp"
                  alt="Luxury salon suite with chandelier and tall windows"
                  fill
                  sizes="(max-width: 640px) 100vw, 42vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Suite mirror view — 7 cols */}
            <ScrollReveal variant="fade-up" delay={400} className="col-span-12 sm:col-span-7 sm:mt-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/suite-mirror.webp"
                  alt="Elegant salon suite interior with large mirror and styling area"
                  fill
                  sizes="(max-width: 640px) 100vw, 58vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Wide — head spa, centered below, overlapping upward */}
            <ScrollReveal variant="fade-up" delay={500} className="col-span-12 sm:col-span-8 sm:col-start-3 sm:-mt-16">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/head-spa.webp"
                  alt="Japanese head spa treatment room"
                  fill
                  sizes="(max-width: 640px) 100vw, 67vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <p className="text-sm tracking-[0.15em] uppercase text-white/80">
                    Head spa treatments by Jade Salon
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Jade Salon */}
      <section className="relative bg-gray-light px-4 py-20 sm:py-28 overflow-hidden">
        {/* Subtle decorative dots */}
        <div className="absolute top-10 right-10 w-24 h-24 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, var(--gold) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }} />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            title="Jade Salon of Atlanta & Head Spa"
            subtitle="Our Anchor Salon"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text card */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border-l-4 border-gold">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {JADE_SALON.name} specializes in premium hair services and authentic
                  Japanese head spa treatments. Suite renters have their own separate
                  private entrance and operate independently from Jade Salon. Their
                  renowned head spa treatments are a unique draw that sets our
                  location apart.
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href={JADE_SALON.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    jadesalonofatlanta.com
                  </a>
                  <a
                    href={`tel:${JADE_SALON.phone}`}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-green-deep transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {JADE_SALON.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column — building image */}
            <ScrollReveal variant="slide-right" delay={300}>
              <Image
                src="/images/courtyard-exterior.webp"
                alt="Smyrna Salon Suites courtyard exterior"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-muted rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold-muted rounded-full opacity-40 blur-3xl translate-y-1/3 translate-x-1/4" />

        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="More than just a salon suite — a true partner in your success."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {differentiators.map((item, index) => (
              <ScrollReveal
                key={item.title}
                variant="fade-up"
                delay={(index + 1) * 100}
              >
                <div className="group hover-lift rounded-2xl border border-gray-100 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
                  {/* Gold number accent */}
                  <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-300 select-none">
                    {item.number}
                  </span>

                  {/* Gold top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-green-deep sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border border-gold/5" />

        <ScrollReveal variant="fade-up" className="relative mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Join Our Community?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            See the space in person and find the perfect suite for your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-a-tour" variant="primary">
              Book a Tour
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
