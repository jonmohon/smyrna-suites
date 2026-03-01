import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Smyrna Salon Suites — pricing, amenities, access, location, and more.",
};

export default function FaqPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about renting a suite at Smyrna Salon Suites."
      />

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
                <a href="tel:(470) 662-8690" className="text-sm text-gold hover:text-gold-light">(470) 662-8690</a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/15 to-gold-light/10 text-gold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-green-deep">Email Us</p>
                <a href="mailto:Baldemjsalon@gmail.com" className="text-sm text-gold hover:text-gold-light">Baldemjsalon@gmail.com</a>
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
