import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import BookTourForm from "@/components/BookTourForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Tour",
  description:
    "Schedule a tour of Smyrna Salon Suites. See our fully furnished salon suites in person. We'll get back to you within 24 hours.",
};

export default function BookTourPage() {
  return (
    <>
      <Hero
        title="Book a Tour"
        subtitle="See our premium suites in person. Fill out the form below and we'll reach out within 24 hours to schedule your visit."
      />

      {/* Form Section */}
      <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold-muted/40 via-white to-white" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-green-muted rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gold-muted rounded-full opacity-30 blur-3xl" />

        {/* Decorative dot grid */}
        <div className="absolute top-16 right-16 w-32 h-32 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--green-deep) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
        <div className="absolute bottom-16 left-16 w-32 h-32 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--gold) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column — form */}
            <div>
              <div className="animate-fade-in-up rounded-2xl bg-white p-8 sm:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Gold top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

                <div className="text-center mb-8">
                  <h2 className="font-serif text-2xl font-bold text-green-deep sm:text-3xl">
                    Schedule Your Visit
                  </h2>
                  <span className="accent-line-center mt-4" />
                  <p className="mt-4 text-gray-500">
                    Tell us a bit about yourself and we&apos;ll set up a time that works for you.
                  </p>
                </div>

                <BookTourForm />
              </div>

              {/* Phone CTA */}
              <div className="animate-fade-in-up delay-300 mt-10 text-center">
                <div className="inline-flex items-center gap-3 rounded-full bg-gold-muted px-6 py-3 border border-gold/20">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Prefer to call?{" "}
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="font-semibold text-gold hover:text-gold-light transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right column — image gallery */}
            <div className="hidden lg:flex flex-col gap-6">
              <div className="animate-fade-in-up delay-200 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/salon-suite.jpg"
                  alt="Modern beauty suite ready for move-in"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="animate-fade-in-up delay-400 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/barber-chair.jpg"
                  alt="Professional barber chair in a private suite"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="animate-fade-in-up delay-500 rounded-xl bg-green-muted/60 p-6 text-center border border-green-deep/10">
                <p className="font-serif text-lg font-semibold text-green-deep">
                  See it for yourself
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Our suites are fully furnished, move-in ready, and waiting for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
