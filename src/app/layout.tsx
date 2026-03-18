import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";

import Providers from "@/components/providers";
import { SkipToContent } from "@/components/SkipToContent";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-playfair", // Keep the CSS variable name identical to avoid breaking Tailwind config
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "PIERRA — Exterior Design & Installation",
  description:
    "Expert exterior design and installation services. From terraces and driveways to commercial landscapes — craftsmanship meets precision.",
  keywords: ["exterior design", "pedestal system", "terrace installation", "landscaping montreal", "outdoor architecture"],
  authors: [{ name: "PIERRA" }],
  openGraph: {
    title: "PIERRA — Exterior Design & Installation",
    description: "Expert exterior design and installation services. Craftsmanship meets precision.",
    url: "https://pierra.com",
    siteName: "PIERRA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PIERRA — Exterior Design & Installation",
    description: "Expert exterior design and installation services. Craftsmanship meets precision.",
  },
  alternates: {
    canonical: "https://pierra.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <div className="grain-overlay" />

        <SkipToContent />

        <Providers>
          <main id="main-content">
            {children}
          </main>
        </Providers>

        <div id="google_translate_element" style={{ display: 'none' }} />

        <Script
          id="google-translate-init"
          strategy="afterInteractive"
        >
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true
              }, 'google_translate_element');
              
              // Signal readiness
              document.body.classList.add('google-translate-ready');
            }
          `}
        </Script>
        
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
