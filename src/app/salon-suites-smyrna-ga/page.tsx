import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import LandingContent from "./LandingContent";
import "./salon-landing.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salon Suites Smyrna GA | Private Suites + Head Spa Access",
  description:
    "Luxury salon suites for rent in Smyrna, GA near Vinings and I-285. Fully furnished, move-in ready, with exclusive head spa access. Flexible plans. Book your private tour today.",
  alternates: {
    canonical: "/salon-suites-smyrna-ga",
  },
  openGraph: {
    title: "Salon Suites Smyrna GA | Private Suites + Head Spa Access",
    description:
      "Luxury salon suites for rent in Smyrna, GA near Vinings and I-285. Fully furnished, move-in ready, with exclusive head spa access.",
    type: "website",
    url: "/salon-suites-smyrna-ga",
  },
};

export default function SalonSuitesSmyrnaGaPage() {
  return <LandingContent fontClass={`${playfair.variable} ${manrope.variable}`} />;
}
