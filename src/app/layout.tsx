import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { SkipToContent } from "@/components/SkipToContent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Atelier De Luca — Exterior Design & Installation",
  description:
    "Expert exterior design and installation services. From terraces and driveways to commercial landscapes — craftsmanship meets precision.",
  keywords: ["exterior design", "pedestal system", "terrace installation", "landscaping montreal", "outdoor architecture"],
  authors: [{ name: "Atelier De Luca" }],
  openGraph: {
    title: "Atelier De Luca — Exterior Design & Installation",
    description: "Expert exterior design and installation services. Craftsmanship meets precision.",
    url: "https://atelierdeluca.com",
    siteName: "Atelier De Luca",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier De Luca — Exterior Design & Installation",
    description: "Expert exterior design and installation services. Craftsmanship meets precision.",
  },
  alternates: {
    canonical: "https://atelierdeluca.com",
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SkipToContent />
        <Providers>
          <main id="main-content">
            {children}
          </main>
        </Providers>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
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
                autoDisplay: false
              }, 'google_translate_element');
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
