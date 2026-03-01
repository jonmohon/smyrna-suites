import { BUSINESS, JADE_SALON } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Visit Us */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/10 text-gold shadow-sm">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-green-deep">
            Visit Us
          </h3>
          <p className="mt-1.5 leading-relaxed text-gray-700">{BUSINESS.address.full}</p>
          <p className="mt-0.5 text-sm text-gray-500">({BUSINESS.plaza})</p>
        </div>
      </div>

      {/* Call Us */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/10 text-gold shadow-sm">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-green-deep">
            Call Us
          </h3>
          <p className="mt-1.5">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-lg font-semibold text-gold transition-colors duration-200 hover:text-gold-light"
            >
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Email Us */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/10 text-gold shadow-sm">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-green-deep">
            Email Us
          </h3>
          <p className="mt-1.5">
            <a
              href={`mailto:${BUSINESS.email}`}
              className="text-gold transition-colors duration-200 hover:text-gold-light"
            >
              {BUSINESS.email}
            </a>
          </p>
        </div>
      </div>

      {/* Anchor Salon Card */}
      <div className="rounded-2xl border-l-4 border-l-gold bg-green-muted/30 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-deep/10 to-green-light/10 text-green-deep">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-green-deep">
              Anchor Salon
            </h3>
            <p className="mt-1 font-semibold text-gray-800">{JADE_SALON.name}</p>
            <p className="mt-2 text-sm text-gray-600">
              <a
                href={`tel:${JADE_SALON.phone}`}
                className="transition-colors duration-200 hover:text-green-deep"
              >
                {JADE_SALON.phone}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href={JADE_SALON.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold transition-colors duration-200 hover:text-gold-light"
              >
                jadesalonofatlanta.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
