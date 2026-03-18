"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Sparkle, Loader2 } from "lucide-react";
import { PROFESSIONS, BUSINESS } from "@/lib/constants";

export default function BookTourForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          profession: data.get("profession"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-scale-in rounded-3xl border border-gold/20 bg-gradient-to-br from-green-deep/5 via-white to-gold/5 p-12 text-center shadow-xl">
        {/* Animated checkmark with gold ring */}
        <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
          {/* Outer gold ring */}
          <div className="absolute inset-0 animate-pulse-gold rounded-full border-4 border-gold/30" />
          {/* Inner circle */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-deep to-green-light shadow-lg shadow-green-deep/20">
            <CheckCircle2 className="h-10 w-10 text-white animate-fade-in delay-200" />
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="relative mx-auto mb-2 w-fit">
          <Sparkle className="absolute -left-6 -top-2 h-4 w-4 text-gold animate-pulse-gold delay-100" />
          <Sparkle className="absolute -right-8 top-0 h-3 w-3 text-gold/60 animate-pulse-gold delay-300" />
          <h3 className="font-serif text-3xl font-bold text-green-deep">
            Thank You!
          </h3>
        </div>

        <p className="mx-auto mt-3 max-w-sm text-gray-600 leading-relaxed">
          We&apos;ll contact you within 24 hours to schedule your tour.
        </p>

        {/* Decorative line */}
        <div className="accent-line-center mx-auto mt-6" />
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-800 transition-all duration-200 placeholder:text-gray-400 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:shadow-sm focus:shadow-gold/5 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-fade-in-up rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-green-deep">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputBase}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-green-deep">
            Phone Number <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={inputBase}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-green-deep">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputBase}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="profession" className="mb-2 block text-sm font-semibold text-green-deep">
            Profession <span className="text-gold">*</span>
          </label>
          <select
            id="profession"
            name="profession"
            required
            className={inputBase}
            defaultValue=""
          >
            <option value="" disabled>
              Select your profession
            </option>
            {PROFESSIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-green-deep">
            Message <span className="text-sm font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputBase}
            placeholder="Tell us about yourself or ask a question..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 w-full rounded-full bg-gradient-to-r from-gold to-gold-light py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-gold/30 disabled:opacity-60 disabled:hover:brightness-100"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          "Request a Tour"
        )}
      </button>

      {status === "error" && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center">
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or call us at{" "}
            <a href={`tel:${BUSINESS.phone}`} className="font-bold underline transition-colors hover:text-red-900">
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
