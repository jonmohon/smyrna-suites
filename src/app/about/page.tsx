import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { BUSINESS, JADE_SALON } from "@/lib/constants";
import { HeartHandshake, Globe, Droplets, CalendarDays, Star, ExternalLink, Phone, Link as LinkIcon, Award, Users, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.name} — premium salon suite rentals for independent beauty professionals in Smyrna, GA.`,
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
      "Your clients can enjoy authentic Japanese head spa treatments from our anchor salon — an exclusive perk of our location.",
  },
  {
    number: "04",
    title: "Flexible Scheduling",
    icon: <CalendarDays className="h-7 w-7" />,
    description:
      "Choose from day pass, part-time, or full-time plans. Full-time renters enjoy 24/7 access to their suite.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle={`Discover the vision behind ${BUSINESS.name} and what makes us the right home for your beauty business.`}
      />

      {/* Our Story */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-muted rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-muted rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl">
          <div className="animate-fade-in-up mb-8 text-center">
            <SectionHeading title="Our Story" />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text */}
            <div className="animate-fade-in-up">
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
                  parking, and furnishings — so you can focus on what you do best:
                  serving your clients and building your brand.
                </p>
              </div>
              <span className="accent-line-center mt-10 lg:!mx-0 lg:after:left-0 lg:after:translate-x-0" />
            </div>

            {/* Right column — image */}
            <div className="animate-slide-right delay-200">
              <Image
                src="/images/stylist-working.jpg"
                alt="Professional stylist at work in a salon suite"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
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
          ].map((item) => (
            <div key={item.label} className="animate-fade-in-up flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                {item.icon}
              </div>
              <span className="font-serif text-2xl font-bold text-green-deep">{item.stat}</span>
              <span className="text-sm text-gray-500">{item.label}</span>
            </div>
          ))}
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
          <div className="animate-fade-in-up delay-200 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — text card */}
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-sm border-l-4 border-gold">
              <p className="text-gray-600 text-lg leading-relaxed">
                {JADE_SALON.description} As our anchor tenant, Jade Salon brings
                established clientele and foot traffic that benefits every suite
                renter in the building. Their renowned head spa treatments are a
                unique draw that sets our location apart.
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

            {/* Right column — building image */}
            <div className="animate-slide-right delay-300">
              <Image
                src="/images/plaza-exterior.png"
                alt="Highlands Plaza exterior, home of Smyrna Salon Suites"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
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
              <div
                key={item.title}
                className={`group hover-lift animate-fade-in-up delay-${(index + 1) * 100} rounded-2xl border border-gray-100 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden`}
              >
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

        <div className="relative mx-auto max-w-2xl animate-fade-in-up">
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
        </div>
      </section>
    </>
  );
}
