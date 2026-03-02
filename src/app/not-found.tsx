import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
        404 — Page Not Found
      </p>
      <h1 className="font-serif text-4xl font-bold text-green-deep sm:text-5xl">
        We can&apos;t find that page
      </h1>
      <p className="mx-auto mt-4 max-w-md text-gray-500">
        The page you&apos;re looking for may have been moved or no longer exists.
        Let&apos;s get you back on track.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-green-deep/20 px-7 py-3 text-sm font-semibold text-green-deep transition-colors hover:bg-green-muted"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Or call us at{" "}
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-flex items-center gap-1 font-semibold text-gold hover:text-gold-light transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          {BUSINESS.phone}
        </a>
      </p>
    </section>
  );
}
