import { MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { BUSINESS, JADE_SALON } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Visit Us */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/10 text-gold shadow-sm">
          <MapPin className="h-5 w-5" />
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
          <Phone className="h-5 w-5" />
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
          <Mail className="h-5 w-5" />
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
            <Sparkles className="h-5 w-5" />
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
