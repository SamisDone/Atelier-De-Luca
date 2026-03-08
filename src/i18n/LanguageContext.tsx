"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import en, { type Translations } from "./translations/en";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  // We keep the state for React tree consistency, but we won't rely on it for the instant animation
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync with googtrans cookie and HTML lang
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const currentTrans = getCookie("googtrans");
    if (currentTrans === "/en/fr") {
      setLanguage("fr");
      document.documentElement.lang = "fr";
    } else {
      setLanguage("en");
      document.documentElement.lang = "en";
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const nextLang = language === "en" ? "fr" : "en";
    
    // 1. DIRECT DOM MANIPULATION: Bypass React's render cycle completely for instant visual feedback.
    const overlay = document.querySelector('.lang-transition-overlay');
    if (overlay) {
      overlay.classList.add('active');
    }
    
    // Keep React state in sync 
    setIsTransitioning(true);
    
    // 2. YIELD TO BROWSER: Use a solid timeout to yield to the browser's paint thread. 
    // This absolutely guarantees the 'active' class is painted on screen before we lock the thread with translation work.
    setTimeout(() => {
      // 3. Set cookie
      document.cookie = `googtrans=/en/${nextLang}; path=/`; 
      
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        // 4. Trigger the heavy translation work
        select.value = nextLang;
        select.dispatchEvent(new Event("change"));
        
        setLanguage(nextLang);
        document.documentElement.lang = nextLang;

        // 5. EXTENDED HOLD: Wait 1.5 seconds to ensure the DOM is completely rewritten by Google
        setTimeout(() => {
          if (overlay) {
            overlay.classList.remove('active');
          }
          setIsTransitioning(false);
        }, 1500); 
      } else {
        window.location.reload();
      }
    }, 150); // 150ms is more than enough for a modern browser to paint a solid color div
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: en, // Always provide English keys; Google translates the DOM
        setLanguage,
        toggleLanguage,
      }}
    >
      <div className={`lang-transition-overlay notranslate ${isTransitioning ? "active" : ""}`} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
