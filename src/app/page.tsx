import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import AmenityCard from "@/components/AmenityCard";
import PricingCard from "@/components/PricingCard";
import { BUSINESS, JADE_SALON, PRICING, AMENITIES, STATS } from "@/lib/constants";

const statIcons: Record<string, React.ReactNode> = {
  clock: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  parking: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h3a4 4 0 010 8H8V7zm0 8v4" />
    </svg>
  ),
  wifi: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
  utilities: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* ================================================================ */}
      {/* HERO — Full viewport, animated gradient, decorative SVG shapes  */}
      {/* ================================================================ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#0a0a0a] px-4 text-center text-white">
        {/* Real photograph background */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Salon interior"
          fill
          className="object-cover opacity-50"
          priority
        />

        {/* Animated gradient overlay */}
        <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-black/60 via-[#111]/40 to-black/70 bg-[length:200%_200%]" />

        {/* Decorative SVG shapes — abstract circles and arcs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large circle top-right */}
          <svg className="animate-float absolute -right-32 -top-32 h-[500px] w-[500px] opacity-[0.05]" viewBox="0 0 500 500">
            <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Small circle bottom-left */}
          <svg className="animate-float absolute -bottom-16 -left-16 h-[300px] w-[300px] opacity-[0.06]" style={{ animationDelay: "2s" }} viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="140" fill="none" stroke="#c5a355" strokeWidth="2" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="#c5a355" strokeWidth="1.5" />
          </svg>

          {/* Diagonal lines top-left */}
          <svg className="absolute left-8 top-1/4 h-[200px] w-[200px] opacity-[0.04]" viewBox="0 0 200 200">
            <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="80" x2="120" y2="200" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Dotted arc right side */}
          <svg className="absolute bottom-1/3 right-12 h-[250px] w-[250px] opacity-[0.05]" viewBox="0 0 250 250">
            <path d="M 125 10 A 115 115 0 0 1 240 125" fill="none" stroke="#c5a355" strokeWidth="2" strokeDasharray="8 12" />
            <path d="M 125 40 A 85 85 0 0 1 210 125" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 10" />
          </svg>

          {/* Gold diamond shape center-left */}
          <svg className="animate-float absolute left-[10%] top-[60%] h-[100px] w-[100px] opacity-[0.07]" style={{ animationDelay: "4s" }} viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#c5a355" strokeWidth="1.5" transform="rotate(45 50 50)" />
          </svg>
        </div>

        {/* Subtle shimmer overlay */}
        <div className="animate-shimmer absolute inset-0" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Overline badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-white/80 backdrop-blur-sm">
            <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Premium Salon Suites in {BUSINESS.address.city}, {BUSINESS.address.state}
          </div>

          {/* Main tagline */}
          <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="gold-gradient-text">{BUSINESS.tagline}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
            Private, fully furnished salon suites for independent beauty professionals.
            Move in and start building your dream business today.
          </p>

          {/* Accent line */}
          <span className="accent-line-center delay-300 mt-8" />

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Button href="/book-a-tour" variant="primary" className="animate-pulse-gold px-9 py-4 text-base">
              Book a Tour
            </Button>
            <Button href="#pricing" variant="outline" className="px-9 py-4 text-base">
              View Pricing
            </Button>
          </div>

          {/* Phone number */}
          <p className="animate-fade-in delay-500 mt-8 text-sm tracking-wide text-white/50">
            Or call us directly{" "}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="ml-1 inline-flex items-center gap-1.5 font-semibold text-gold transition-colors hover:text-gold-light"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </p>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-600 mt-16 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/30">Scroll to explore</span>
            <svg className="animate-float h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INTRO — Elegant welcome with decorative quote styling           */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden px-4 py-24 sm:py-32">
        {/* Subtle background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-deep" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text */}
            <div className="animate-fade-in-up">
              {/* Decorative quotation mark */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <svg className="h-12 w-12 text-gold/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Thin gold rule */}
              <div className="mb-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto lg:mx-0 lg:from-gold lg:to-transparent" />

              <h2 className="text-center font-serif text-3xl font-bold leading-snug text-green-deep sm:text-4xl lg:text-left lg:text-[2.75rem]">
                Welcome to {BUSINESS.name}
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold lg:mx-0" />

              <p className="mt-8 text-lg leading-relaxed text-gray-600">
                Located in{" "}
                <span className="font-semibold text-green-deep">{BUSINESS.plaza}</span>,
                we provide premium private salon suites for beauty professionals who want
                to be their own boss. Our suites are fully furnished and move-in ready — just
                bring your talent and your clients.
              </p>

              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Whether you&apos;re a stylist, barber, esthetician, or nail tech, we give you
                the space and freedom to run your business on your terms.
              </p>

              {/* Bottom decorative accent */}
              <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-12 bg-gold/40" />
                <svg className="h-4 w-4 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="h-px w-12 bg-gold/40" />
              </div>
            </div>

            {/* Right column — image */}
            <div className="animate-fade-in-up delay-200">
              <Image
                src="/images/salon-interior.jpg"
                alt="Premium salon suite interior with styling chairs"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CHOOSE US — Amenity cards in a 3-column grid                */}
      {/* ================================================================ */}
      <section className="relative bg-gray-light px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="animate-fade-in-up">
            <SectionHeading
              title="Why Choose Us"
              subtitle="Everything you need to build your independent beauty business — all under one roof."
            />
          </div>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity, i) => (
              <div
                key={amenity.title}
                className={`animate-fade-in-up hover-lift delay-${(i + 1) * 100}`}
              >
                <AmenityCard {...amenity} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING — Clean 3-column pricing cards                          */}
      {/* ================================================================ */}
      <section id="pricing" className="scroll-mt-20 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="animate-fade-in-up">
            <SectionHeading
              title="Simple, Transparent Pricing"
              subtitle="No hidden fees. WiFi, utilities, and parking included in every plan."
            />
          </div>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING.map((tier, i) => (
              <div
                key={tier.name}
                className={`animate-fade-in-up hover-lift delay-${(i + 1) * 100}`}
              >
                <PricingCard {...tier} />
              </div>
            ))}
          </div>

          {/* Deposit note */}
          <div className="animate-fade-in-up delay-400 mt-12 text-center">
            <div className="mx-auto inline-flex max-w-lg items-start gap-3 rounded-xl border border-gold/20 bg-gold-muted px-6 py-4">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-sm leading-relaxed text-gray-600">
                <span className="font-semibold text-green-deep">$500 security deposit required.</span>{" "}
                Full-time renters receive <span className="font-semibold text-gold">1 free week</span> after 6 months of continuous rental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* STATS BAR — Green gradient with gold icons                      */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-deep to-[#14481f] px-4 py-20">
        {/* Subtle decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -right-20 top-1/2 h-[200px] w-[200px] -translate-y-1/2 opacity-[0.04]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#c5a355" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#c5a355" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`animate-fade-in-up delay-${(i + 1) * 100} flex flex-col items-center gap-3 text-center`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  {statIcons[stat.icon]}
                </div>
                <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ANCHOR SALON — Jade Salon feature section                       */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-green-muted px-4 py-24 sm:py-32">
        {/* Subtle decorative corner elements */}
        <div className="pointer-events-none absolute left-8 top-8 opacity-[0.06]">
          <svg className="h-24 w-24 text-gold" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
            <path d="M 0 40 L 0 0 L 40 0" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-8 right-8 opacity-[0.06]">
          <svg className="h-24 w-24 text-gold" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
            <path d="M 60 100 L 100 100 L 100 60" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Section header */}
          <div className="animate-fade-in-up mb-12 text-center">
            <div className="mx-auto mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Our Anchor Salon
            </p>

            <h2 className="font-serif text-3xl font-bold text-green-deep sm:text-4xl">
              Home of {JADE_SALON.name}
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          </div>

          {/* 2-column: image + card */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — plaza image */}
            <div className="animate-slide-left">
              <Image
                src="/images/plaza-exterior.png"
                alt="Smyrna Salon Suites plaza exterior at Highlands Plaza"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Right column — text card */}
            <div className="animate-slide-right delay-200">
              <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-base leading-relaxed text-gray-600">
                  {JADE_SALON.description} As a suite renter, you benefit from the
                  established foot traffic and reputation that {JADE_SALON.name} brings
                  to our location.
                </p>

                <div className="mx-auto my-6 h-px w-20 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <div className="flex flex-col items-center gap-3">
                  <a
                    href={JADE_SALON.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-muted px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Visit jadesalonofatlanta.com
                  </a>
                  <a
                    href={`tel:${JADE_SALON.phone}`}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-green-deep"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {JADE_SALON.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA BANNER — Gold gradient with compelling call-to-action        */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gold to-gold-light px-4 py-20 text-center sm:py-24">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute -left-20 -top-20 h-[300px] w-[300px] opacity-[0.08]" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="140" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          <svg className="absolute -bottom-16 -right-16 h-[250px] w-[250px] opacity-[0.08]" viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="115" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        {/* Shimmer effect */}
        <div className="animate-shimmer absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
              Ready to See Your New Suite?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/80">
              Schedule a tour today and take the first step toward your own independent beauty business.
            </p>
          </div>

          <div className="animate-fade-in-up delay-200 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-a-tour" variant="secondary" className="px-9 py-4 text-base shadow-lg">
              Book a Tour
            </Button>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Or call {BUSINESS.phone}
            </a>
          </div>

          {/* Address line */}
          <p className="animate-fade-in delay-400 mt-8 text-xs tracking-wide text-white/50">
            {BUSINESS.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
