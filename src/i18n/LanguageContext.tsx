"use client";

import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import en, { type Translations } from "@/i18n/translations/en";
import frManual from "@/i18n/translations/fr-manual";
import { deepMerge } from "@/lib/deep-merge";

type Language = "en" | "fr";

interface LanguageContextType {
	language: Language;
	messages: Translations;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const getInitialLanguage = (): Language => {
		if (typeof document === "undefined") return "fr";

		const value = `; ${document.cookie}`;
		const parts = value.split(`; googtrans=`);
		const currentTrans =
			parts.length === 2 ? parts.pop()?.split(";").shift() : undefined;

		if (currentTrans === "/en/en") return "en";
		return "fr";
	};

	const [language, setLanguageState] = useState<Language>(getInitialLanguage);

	// Sync with googtrans cookie and HTML lang
	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	useEffect(() => {
		if (language !== "fr") return;

		document.cookie = "googtrans=/en/fr; path=/";

		let attempts = 0;
		const maxAttempts = 40;

		const interval = window.setInterval(() => {
			const select = document.querySelector(".goog-te-combo");

			if (select instanceof HTMLSelectElement) {
				if (select.value !== "fr") {
					select.value = "fr";
					select.dispatchEvent(new Event("change"));
				}
				window.clearInterval(interval);
				return;
			}

			attempts += 1;
			if (attempts >= maxAttempts) {
				window.clearInterval(interval);
			}
		}, 250);

		return () => window.clearInterval(interval);
	}, [language]);

	const applyLanguage = useCallback((nextLanguage: Language) => {
		document.cookie = `googtrans=/en/${nextLanguage}; path=/`;
		setLanguageState(nextLanguage);

		const select = document.querySelector(".goog-te-combo");
		if (select instanceof HTMLSelectElement) {
			if (select.value !== nextLanguage) {
				select.value = nextLanguage;
				select.dispatchEvent(new Event("change"));
			}
			return;
		}

		window.location.reload();
	}, []);

	const toggleLanguage = useCallback(() => {
		applyLanguage(language === "en" ? "fr" : "en");
	}, [language, applyLanguage]);

	const messages = useMemo<Translations>(
		() => (language === "fr" ? deepMerge<Translations>(en, frManual) : en),
		[language],
	);

	const value = useMemo(
		() => ({
			language,
			messages,
			setLanguage: applyLanguage,
			toggleLanguage,
		}),
		[language, messages, applyLanguage, toggleLanguage],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context)
		throw new Error("useLanguage must be used within LanguageProvider");
	return context;
}
