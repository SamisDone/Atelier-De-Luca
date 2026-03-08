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
    } else {
      setLanguage("en");
    }

    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const nextLang = language === "en" ? "fr" : "en";
    
    // Start transition
    setIsTransitioning(true);
    
    setTimeout(() => {
      // Set Google Translate cookie
      document.cookie = `googtrans=/en/${nextLang}; path=/`; 
      
      setLanguage(nextLang);
      
      // Trigger Google Translate change if initialized
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = nextLang;
        select.dispatchEvent(new Event("change"));
        
        // Wait for translation engine to work before revealing
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      } else {
        // If the engine isn't ready, a reload will happen (natural transition)
        window.location.reload();
      }
    }, 300);
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
      <div className={`lang-transition-overlay ${isTransitioning ? "active" : ""}`} />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
