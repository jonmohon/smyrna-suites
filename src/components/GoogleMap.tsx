import { BUSINESS } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/15 shadow-xl">
      <iframe
        src={BUSINESS.googleMapsUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${BUSINESS.name}`}
      />
    </div>
  );
}
