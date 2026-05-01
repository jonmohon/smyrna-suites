import type { Metadata, Viewport } from "next";
import { Inter, Cardo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazyCanvasCursor from "@/components/LazyCanvasCursor";
import ScrollEffects from "@/components/ScrollEffects";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cardo = Cardo({
  variable: "--font-cardo",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a5c2a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Luxury Salon Suites in Smyrna, GA | Smyrna Salon Suites",
    template: "%s | Smyrna Salon Suites",
  },
  description:
    "Luxury salon suites for rent in Smyrna, GA. Private, fully furnished suites + exclusive Head Spa access. Boutique setting with a limited number of professionals. Book a tour or check availability today.",
  keywords: [
    "luxury salon suites Smyrna GA",
    "salon suites for rent Smyrna",
    "salon suite rental Smyrna GA",
    "hair salon Smyrna",
    "barber suite rental Smyrna",
    "beauty salon Smyrna GA",
    "salon suites near me",
    "private salon suite Atlanta",
    "booth rental Smyrna GA",
    "head spa Smyrna",
    "beauty professional space Smyrna",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Salon Suites in Smyrna, GA",
    description:
      "Private, fully furnished suites + exclusive Head Spa access. Boutique setting in Smyrna, GA — book a tour today.",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Smyrna Salon Suites — Luxury salon suites for rent in Smyrna, GA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Salon Suites in Smyrna, GA",
    description:
      "Private, fully furnished suites + exclusive Head Spa access. Boutique setting in Smyrna, GA.",
    images: ["/images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  description:
    "Premium private salon suites for rent in Smyrna, GA. Fully furnished, move-in ready suites for stylists, barbers, and beauty professionals.",
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: `${BUSINESS.url}/images/og-image.webp`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cardo.variable} antialiased`}>
        <div className="scroll-progress-bar" aria-hidden="true" />
        <ScrollEffects />
        <LazyCanvasCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
