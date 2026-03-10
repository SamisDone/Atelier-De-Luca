"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["about", "services", "gallery", "financing", "testimonials", "contact"] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navKeys.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
  }));

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-primary/95 backdrop-blur-md border-b border-brand-tertiary/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
          <Link
            href="/"
            className={`flex flex-col items-center justify-center transition-colors duration-500 notranslate ${
              scrolled ? "text-brand-tertiary hover:text-brand-tertiary/80" : "text-brand-tertiary hover:text-brand-tertiary/80"
            }`}
          >
            <Image
              src="/images/pierra-logo.png"
              alt="PIERRA"
              width={280}
              height={100}
              className={`h-20 md:h-24 w-auto object-contain transition-all duration-500 mb-0.5 brightness-0 invert`}
            />
            
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-sans tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-brand-tertiary/80 hover:text-brand-tertiary"
                    : "text-brand-tertiary/80 hover:text-brand-tertiary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-sm font-sans tracking-wide transition-colors duration-200 px-3 py-1.5 rounded-full border ${
                scrolled
                  ? "text-brand-tertiary/80 hover:text-brand-tertiary border-brand-tertiary/30"
                  : "text-brand-tertiary/80 hover:text-brand-tertiary border-brand-tertiary/30"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="notranslate">{language === "en" ? "FR" : "EN"}</span>
            </button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-sans px-2.5 py-1 rounded-full border ${
                scrolled
                  ? "text-brand-tertiary/80 border-brand-tertiary/30"
                  : "text-brand-tertiary/80 border-brand-tertiary/30"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="notranslate">{language === "en" ? "FR" : "EN"}</span>
            </button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 text-brand-tertiary`} />
              ) : (
                <Menu className={`w-6 h-6 text-brand-tertiary`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-primary/98 backdrop-blur-lg pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="font-serif text-3xl text-brand-tertiary hover:text-brand-tertiary/70 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
