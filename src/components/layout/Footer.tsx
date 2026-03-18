"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerNavKeys = Object.keys(t.nav) as (keyof typeof t.nav)[]

  return (
    <footer className="bg-brand-tertiary text-brand-secondary snap-end relative z-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Image
              src="/images/pierra-logo.png"
              alt="PIERRA"
              width={280}
              height={100}
              className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-90 mb-1"
            />
           
            <p className="text-brand-secondary/60 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {footerNavKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-brand-secondary/60 hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2 text-brand-secondary/60 text-sm">
              {t.footer.servicesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-brand-secondary/60 text-sm">
              <li>{t.footer.contactInfo.email}</li>
              <li>{t.footer.contactInfo.phone}</li>
              <li>{t.footer.contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-secondary/40 text-xs">
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-brand-secondary/40 hover:text-brand-secondary/70 text-xs transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-brand-secondary/40 hover:text-brand-secondary/70 text-xs transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
