import type { Metadata } from "next";
import { Inter, Cardo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CanvasCursor from "@/components/CanvasCursor";
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

export const metadata: Metadata = {
  title: {
    default: "Smyrna Salon Suites | Premium Salon Suite Rentals in Smyrna, GA",
    template: "%s | Smyrna Salon Suites",
  },
  description:
    "Rent a fully furnished salon suite in Smyrna, GA. Private suites for stylists, barbers, and beauty professionals. Flexible pricing starting at $75/day. Home of Jade Salon of Atlanta & Head Spa.",
  keywords: [
    "salon suites for rent Smyrna",
    "hair salon Smyrna",
    "salon suite rental Smyrna GA",
    "barber suite rental",
    "beauty salon Smyrna GA",
    "salon suites near me",
  ],
  openGraph: {
    title: "Smyrna Salon Suites | Premium Salon Suite Rentals",
    description:
      "Rent a fully furnished salon suite in Smyrna, GA. Private suites for stylists, barbers, and beauty professionals.",
    type: "website",
    locale: "en_US",
    images: ["/images/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cardo.variable} antialiased`}>
        <CanvasCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
