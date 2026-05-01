import { Playfair_Display, Manrope } from "next/font/google";
import SalonLandingContent from "@/components/SalonLandingContent";

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

export default function Home() {
  return <SalonLandingContent fontClass={`${playfair.variable} ${manrope.variable}`} />;
}
