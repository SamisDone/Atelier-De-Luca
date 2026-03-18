"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import en, { type Translations } from "@/i18n/translations/en";

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
    
    // Set cookie
    document.cookie = `googtrans=/en/${nextLang}; path=/`; 
    
    // Manage state
    setLanguage(nextLang);
    document.documentElement.lang = nextLang;

    // Trigger Google Translate engine
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = nextLang;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
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
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
