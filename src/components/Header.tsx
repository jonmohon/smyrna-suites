"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-white/10"
          : "bg-white/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/logo.webp"
              alt={BUSINESS.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-2 ring-gold/40" />
          </div>
          <span className="hidden font-serif text-xl font-bold text-green-deep transition-colors duration-300 group-hover:text-green-light sm:block">
            {BUSINESS.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.label === "Book a Tour" ? (
              <Link
                key={link.href}
                href={link.href}
                className="group relative ml-4 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_2px_12px_rgba(197,163,85,0.3)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(197,163,85,0.5)] hover:brightness-110 active:scale-95"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 animate-shimmer opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-green-deep"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-3/4" />
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-green-muted md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-green-deep" />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
