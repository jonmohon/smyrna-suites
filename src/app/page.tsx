import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import AmenityCard from "@/components/AmenityCard";
import PricingCard from "@/components/PricingCard";
import { BUSINESS, JADE_SALON, PRICING, AMENITIES, STATS } from "@/lib/constants";
import { Star, Phone, Clock, ParkingCircle, Wifi, Zap, ArrowDown, ExternalLink, Info, ChevronRight, Sparkles, MapPin, Building2, Shield, Calendar } from "lucide-react";

const statIcons: Record<string, React.ReactNode> = {
  clock: <Clock className="h-8 w-8" />,
  parking: <ParkingCircle className="h-8 w-8" />,
  wifi: <Wifi className="h-8 w-8" />,
  utilities: <Zap className="h-8 w-8" />,
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
            <Star className="h-4 w-4 text-gold" fill="currentColor" />
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
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </p>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-600 mt-16 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/30">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 animate-float text-white/30" />
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
                <Sparkles className="h-10 w-10 text-gold/30" />
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
                <Star className="h-4 w-4 text-gold/60" fill="currentColor" />
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

      {/* HOW IT WORKS — Simple 3-step process */}
      <section className="bg-green-deep px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Simple Process</p>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <span className="accent-line-center mt-4" />

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", icon: <Phone className="h-8 w-8" />, title: "Book a Tour", desc: "Fill out our quick form or give us a call. We'll schedule a time to show you the space." },
              { step: "02", icon: <MapPin className="h-8 w-8" />, title: "Choose Your Suite", desc: "Pick the suite and plan that fits your schedule and budget. Day pass, part-time, or full-time." },
              { step: "03", icon: <Sparkles className="h-8 w-8" />, title: "Move In & Grow", desc: "Bring your tools and start seeing clients. We handle everything else so you can focus on your craft." },
            ].map((item, i) => (
              <div key={item.step} className={`animate-fade-in-up delay-${(i + 1) * 100} relative`}>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-white/10 text-gold backdrop-blur-sm">
                  {item.icon}
                </div>
                <span className="mb-2 block font-mono text-sm font-bold text-gold/60">{item.step}</span>
                <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
                {i < 2 && (
                  <ChevronRight className="absolute -right-4 top-10 hidden h-6 w-6 text-gold/30 sm:block" />
                )}
              </div>
            ))}
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
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
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

      {/* WHAT'S INCLUDED — Detailed amenities grid */}
      <section className="px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Everything You Need, Included"
            subtitle="Focus on your craft — we handle the rest. Every suite comes with these amenities at no extra cost."
          />
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Wifi className="h-6 w-6" />, title: "High-Speed WiFi", desc: "Fast, reliable internet for you and your clients" },
              { icon: <Zap className="h-6 w-6" />, title: "Utilities Included", desc: "Electric, water, and AC — all covered in your rent" },
              { icon: <ParkingCircle className="h-6 w-6" />, title: "Free Parking", desc: "Plenty of spaces directly in front of the building" },
              { icon: <Shield className="h-6 w-6" />, title: "Security System", desc: "24/7 monitored security for your peace of mind" },
              { icon: <Clock className="h-6 w-6" />, title: "Flexible Hours", desc: "Full-time renters get 24/7 access to their suite" },
              { icon: <Building2 className="h-6 w-6" />, title: "Private Waiting Area", desc: "A comfortable space for your clients to relax" },
              { icon: <Calendar className="h-6 w-6" />, title: "Towel Service", desc: "Fresh, clean towels supplied and ready for use" },
              { icon: <Sparkles className="h-6 w-6" />, title: "Head Spa Access", desc: "Rent our private head spa space by the hour" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`animate-fade-in-up delay-${((i % 4) + 1) * 100} group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/20 hover:shadow-md`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold transition-colors duration-300 group-hover:from-gold/25 group-hover:to-gold-light/15">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-green-deep">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
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
              <Star className="h-5 w-5 text-gold" fill="currentColor" />
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
                    <ExternalLink className="h-4 w-4" />
                    Visit jadesalonofatlanta.com
                  </a>
                  <a
                    href={`tel:${JADE_SALON.phone}`}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-green-deep"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {JADE_SALON.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA BANNER — Full-bleed image with compelling call-to-action     */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden px-4 py-28 text-center sm:py-36">
        {/* Background image */}
        <Image
          src="/images/stylist-working.jpg"
          alt="Stylist at work in a salon suite"
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Decorative gold corner brackets */}
        <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-gold/30 sm:left-12 sm:top-12 sm:h-24 sm:w-24" />
        <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-gold/30 sm:bottom-12 sm:right-12 sm:h-24 sm:w-24" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Limited Suites Available
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to See Your<br />
              <span className="gold-gradient-text">New Suite?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Walk through our fully furnished suites, meet the team, and see why independent beauty professionals choose Smyrna Salon Suites.
            </p>
          </div>

          <div className="animate-fade-in-up delay-200 mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/book-a-tour" variant="primary" className="px-10 py-4 text-base">
              Schedule a Free Tour
            </Button>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {BUSINESS.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold/70" />
              {BUSINESS.plaza}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold/70" />
              Tours 7 days a week
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-gold/70" />
              No obligation
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
