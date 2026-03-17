import Image from "next/image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import AmenityCard from "@/components/AmenityCard";
import PricingCard from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
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
      {/* Keep load-based animations (above the fold)                     */}
      {/* ================================================================ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#111111] to-[#0a0a0a] px-4 text-center text-white">
        {/* Real photograph background with parallax */}
        <ParallaxImage
          src="/images/jade-courtyard.webp"
          alt="Salon interior"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
          speed={0.4}
          containerClassName="absolute inset-0"
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

        {/* Hero content — keeps load-based animations */}
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Overline badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide text-white/80 backdrop-blur-sm">
            <Star className="h-4 w-4 text-gold" fill="currentColor" />
            Premium Salon Suites in {BUSINESS.address.city}, {BUSINESS.address.state}
          </div>

          {/* Main heading — keyword-rich for SEO */}
          <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="gold-gradient-text">Premium Salon Suites for Rent in Smyrna, Ga.</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-100 mx-auto mt-4 font-serif text-xl text-gold-light/80 sm:text-2xl lg:text-3xl">
            {BUSINESS.tagline}
          </p>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
            Private, fully furnished salon suites for independent beauty professionals.
            Move in and start building your dream business with access to head spa room today.
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
            <ScrollReveal variant="fade-up">
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
            </ScrollReveal>

            {/* Right column — image */}
            <ScrollReveal variant="fade-up" delay={200}>
              <Image
                src="/images/suite-interior.webp"
                alt="Premium salon suite interior with styling chairs"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SPLIT-SCREEN — Full-bleed editorial section                    */}
      {/* ================================================================ */}
      {/* Mobile: stacked image then content. Desktop: true 50/50 split */}
      <section className="w-full overflow-hidden">
        {/* Mobile image — visible, stacked on top */}
        <div className="relative w-full aspect-[4/3] lg:hidden">
          <Image
            src="/images/suite-chandelier.webp"
            alt="Premium private salon suite interior with chandelier"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative lg:flex lg:min-h-[80vh]">
          {/* Left — full-bleed image with parallax (desktop only) */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <ParallaxImage
              src="/images/suite-chandelier.webp"
              alt="Premium private salon suite interior with chandelier"
              fill
              sizes="50vw"
              className="object-cover"
              speed={0.5}
              containerClassName="absolute inset-0"
            />
            {/* Subtle right-edge fade so image meets content cleanly */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          {/* Right — content */}
          <div className="w-full lg:w-1/2 flex items-center bg-white">
            <ScrollReveal variant="fade-up" className="px-6 sm:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-0 max-w-xl mx-auto lg:mx-0">
              {/* Accent */}
              <div className="h-px w-16 bg-gradient-to-r from-gold to-gold-light mb-8" />

              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
                Your Space, Your Rules
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-snug text-green-deep">
                Private Suites Built for Independence
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Every suite is fully furnished, lockable, and move-in ready. Set your own hours, set your own prices, and build your brand in a premium space designed around you.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/book-a-tour" variant="primary" className="px-8 py-3">
                  Book a Tour
                </Button>
                <Button href="#pricing" variant="outline" className="px-8 py-3">
                  View Pricing
                </Button>
              </div>

              {/* Bottom accent */}
              <div className="mt-12 flex items-center gap-3">
                <div className="h-px w-8 bg-gold/40" />
                <Star className="h-3.5 w-3.5 text-gold/50" fill="currentColor" />
                <div className="h-px w-8 bg-gold/40" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — Simple 3-step process with textured background */}
      <section
        className="relative overflow-hidden px-4 py-24 sm:py-32"
        style={{
          backgroundColor: "#1a5c2a",
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(197,163,85,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(197,163,85,0.06) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.15) 100%)
          `,
        }}
      >
        {/* Dotted grid pattern — slowly drifting */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(197,163,85,0.3) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
            animation: "drift 8s linear infinite",
          }}
        />

        {/* Crosshatch lines — drifting opposite direction */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(197,163,85,0.1) 20px,
                rgba(197,163,85,0.1) 21.5px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(197,163,85,0.06) 20px,
                rgba(197,163,85,0.06) 21.5px
              )
            `,
            animation: "drift-reverse 14s linear infinite",
          }}
        />

        {/* Large decorative corner brackets */}
        <div className="pointer-events-none absolute left-6 top-6 h-24 w-24 border-l-2 border-t-2 border-gold/20 sm:left-12 sm:top-12" />
        <div className="pointer-events-none absolute bottom-6 right-6 h-24 w-24 border-b-2 border-r-2 border-gold/20 sm:bottom-12 sm:right-12" />

        {/* Floating geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="animate-float absolute -left-12 top-1/4 h-[250px] w-[250px] opacity-[0.08]" viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="100" fill="none" stroke="#c5a355" strokeWidth="1.5" strokeDasharray="8 12" />
            <circle cx="125" cy="125" r="60" fill="none" stroke="#c5a355" strokeWidth="1" strokeDasharray="4 8" />
          </svg>
          <svg className="animate-float absolute -right-8 bottom-1/4 h-[200px] w-[200px] opacity-[0.08]" style={{ animationDelay: "3s" }} viewBox="0 0 200 200">
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="#c5a355" strokeWidth="1.5" transform="rotate(45 100 100)" />
          </svg>
          <svg className="absolute left-1/3 bottom-8 h-[120px] w-[120px] opacity-[0.06]" viewBox="0 0 120 120">
            <polygon points="60,5 115,60 60,115 5,60" fill="none" stroke="#c5a355" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <ScrollReveal variant="fade-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Simple Process</p>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
            <span className="accent-line-center mt-4" />
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", icon: <Phone className="h-8 w-8" />, title: "Book a Tour", desc: "Fill out our quick form or give us a call. We'll schedule a time to show you the space." },
              { step: "02", icon: <MapPin className="h-8 w-8" />, title: "Choose Your Suite", desc: "Pick the suite and plan that fits your schedule and budget. Day pass, part-time, or full-time." },
              { step: "03", icon: <Sparkles className="h-8 w-8" />, title: "Move In & Grow", desc: "Bring your tools and start seeing clients. We handle everything else so you can focus on your craft." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} variant="fade-up" delay={(i + 1) * 100} className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-white/10 text-gold shadow-lg shadow-black/10 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <span className="mb-2 block font-mono text-sm font-bold text-gold/60">{item.step}</span>
                <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
                {i < 2 && (
                  <ChevronRight className="absolute -right-4 top-10 hidden h-6 w-6 text-gold/30 sm:block" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CHOOSE US — Amenity cards in a 3-column grid                */}
      {/* ================================================================ */}
      <section className="relative bg-gray-light px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Everything you need to build your independent beauty business — all under one roof."
          />
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity, i) => (
              <ScrollReveal
                key={amenity.title}
                variant="fade-up"
                delay={(i + 1) * 100}
              >
                <AmenityCard {...amenity} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INTERSTITIAL — Full-bleed atmospheric photo break               */}
      {/* ================================================================ */}
      <section className="relative w-full h-[50vh] min-h-[320px] overflow-hidden vignette">
        <ParallaxImage
          src="/images/head-spa.webp"
          alt="Japanese head spa treatment"
          fill
          sizes="100vw"
          className="object-cover scale-[1.3]"
          speed={0.4}
          containerClassName="absolute inset-0"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        {/* Centered accent + caption */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Gold accent line */}
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mb-4" />
          <p className="text-sm tracking-[0.2em] uppercase text-white/70 font-light">
            Authentic Head Spa Treatments Available On-Site
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>
      </section>

      {/* ================================================================ */}
      {/* PRICING — Clean 3-column pricing cards                          */}
      {/* ================================================================ */}
      <section id="pricing" className="scroll-mt-20 px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Flexible Pricing Plans"
            subtitle="WiFi, utilities, and parking included in every plan. Call for details."
          />
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING.map((tier, i) => (
              <ScrollReveal
                key={tier.name}
                variant="fade-up"
                delay={(i + 1) * 100}
              >
                <PricingCard {...tier} />
              </ScrollReveal>
            ))}
          </div>

          {/* Contact note */}
          <ScrollReveal variant="fade-up" delay={400} className="mt-12 text-center">
            <div className="mx-auto inline-flex max-w-lg items-start gap-3 rounded-xl border border-gold/20 bg-gold-muted px-6 py-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-gray-600">
                <span className="font-semibold text-green-deep">Call us at {BUSINESS.phone}</span>{" "}
                to discuss pricing, availability, and find the perfect plan for your business.
              </p>
            </div>
          </ScrollReveal>
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {STATS.map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                variant="fade-up"
                delay={(i + 1) * 100}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  {statIcons[stat.icon]}
                </div>
                <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                  {stat.label}
                </span>
              </ScrollReveal>
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
              { icon: <Clock className="h-6 w-6" />, title: "Flexible Hours", desc: "Set your own schedule and work when it suits you" },
              { icon: <Building2 className="h-6 w-6" />, title: "Private Waiting Area", desc: "A comfortable space for your clients to relax" },
              { icon: <Calendar className="h-6 w-6" />, title: "Towel Service", desc: "Fresh, clean towels supplied and ready for use" },
              { icon: <Sparkles className="h-6 w-6" />, title: "Head Spa Access", desc: "Rent our private head spa room by the hour for your clients, or refer them to Jade Head Spa and earn commission discounts toward your rent" },
            ].map((item, i) => (
              <ScrollReveal
                key={item.title}
                variant="fade-up"
                delay={((i % 4) + 1) * 100}
              >
                <div className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/20 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold transition-colors duration-300 group-hover:from-gold/25 group-hover:to-gold-light/15">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-deep">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ANCHOR SALON — Overlapping editorial card layout                */}
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
          <ScrollReveal variant="fade-up" className="mb-12 text-center">
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
          </ScrollReveal>

          {/* Overlapping editorial layout */}
          <ScrollReveal variant="fade-up" delay={200} className="relative">
            {/* Image — takes ~65% width on desktop, with parallax */}
            <div className="lg:w-[65%]">
              <ParallaxImage
                src="/images/courtyard-exterior.webp"
                alt="Smyrna Salon Suites courtyard exterior at Integrity Heights Plaza"
                width={800}
                height={500}
                className="rounded-2xl object-cover w-full shadow-lg"
                speed={0.45}
              />
            </div>

            {/* Overlapping card — positioned to overlap the image on desktop */}
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%] mt-[-2rem] mx-4 lg:mt-0 lg:mx-0 z-10">
              <div className="rounded-2xl border border-gold/20 bg-white p-8 sm:p-10 shadow-xl">
                {/* Gold top accent */}
                <div className="h-0.5 w-12 bg-gradient-to-r from-gold to-gold-light mb-6" />

                <p className="text-base leading-relaxed text-gray-600">
                  {JADE_SALON.name} specializes in premium hair services and authentic Japanese head spa treatments.
                  Suite renters have their own separate private entrance and create their own independent space,
                  not affiliated with Jade Salon.
                </p>

                <div className="my-6 h-px w-full bg-gradient-to-r from-gold/20 via-gold/10 to-transparent" />

                <div className="flex flex-col items-start gap-3">
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
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA BANNER — Full-bleed image with compelling call-to-action     */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden px-4 py-28 text-center sm:py-36">
        {/* Background image with parallax */}
        <ParallaxImage
          src="/images/stylist-working.webp"
          alt="Stylist at work in a salon suite"
          fill
          sizes="100vw"
          className="object-cover"
          speed={0.45}
          containerClassName="absolute inset-0"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Decorative gold corner brackets */}
        <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-gold/30 sm:left-12 sm:top-12 sm:h-24 sm:w-24" />
        <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-gold/30 sm:bottom-12 sm:right-12 sm:h-24 sm:w-24" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollReveal variant="fade-up">
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
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
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
          </ScrollReveal>

          {/* Trust row */}
          <ScrollReveal variant="fade-up" delay={400} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
