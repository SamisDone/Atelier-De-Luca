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
    
    // 1. PHASE 1: Show Mask INSTANTLY
    setIsTransitioning(true);
    
    // 2. PHASE 2: Wait for two animation frames to guarantee the mask is drawn on screen
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // 3. PHASE 3: Set cookie and trigger engine
        document.cookie = `googtrans=/en/${nextLang}; path=/`; 
        
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (select) {
          select.value = nextLang;
          select.dispatchEvent(new Event("change"));
          
          // Apply local state change for UI components
          setLanguage(nextLang);
          document.documentElement.lang = nextLang;

          // 4. PHASE 4: Extended hold to let the script finish DOM work
          // Google Translate is notoriously slow at re-rendering the whole page
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1800); // Robust hold
        } else {
          // If the engine isn't ready at all, we must reload
          // The overlay will remain visible during reload if we handle it in layout
          window.location.reload();
        }
      });
    });
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
      {/* Permanent overlay, opacity controlled by class */}
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
