"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-brand-primary relative overflow-hidden flex items-center justify-center min-h-[80svh]">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          data-cursor="CONNECT"
          className="bg-brand-primary rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 text-center"
        >
          <p className="text-brand-tertiary/70 font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {t.contact.tagline}
          </p>
          <h2 className="font-serif text-4xl mb-6 text-brand-tertiary">
            {t.contact.title}
          </h2>
          <p className="text-brand-tertiary/60 mb-10 max-w-xl mx-auto">
            {t.contact.description}
          </p>
          
          <form className="space-y-6 mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none text-brand-tertiary">{t.contact.nameLabel}</label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-md border border-white/20 bg-brand-primary px-3 py-2 text-sm text-brand-tertiary ring-offset-brand-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-tertiary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tertiary/50 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t.contact.namePlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-brand-tertiary">{t.contact.emailLabel}</label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-white/20 bg-brand-primary px-3 py-2 text-sm text-brand-tertiary ring-offset-brand-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-tertiary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tertiary/50 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none text-brand-tertiary">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-brand-primary px-3 py-2 text-sm text-brand-tertiary ring-offset-brand-primary placeholder:text-brand-tertiary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tertiary/50 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                placeholder={t.contact.messagePlaceholder}
                required
              />
            </div>
            
            <div className="text-center pt-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto px-12 text-base bg-brand-tertiary text-brand-primary hover:bg-brand-tertiary/90">
                {t.contact.submit}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-tertiary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-tertiary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
