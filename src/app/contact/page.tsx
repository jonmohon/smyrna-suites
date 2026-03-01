import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactInfo from "@/components/ContactInfo";
import GoogleMap from "@/components/GoogleMap";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Smyrna Salon Suites. Visit us at 3020 Highlands Parkway, Suite G, Smyrna, GA 30082 or call (470) 662-8690.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions or stop by for a visit."
      />

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
