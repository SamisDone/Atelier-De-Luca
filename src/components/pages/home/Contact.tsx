"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { messages } = useLanguage();

  return (
    <section id="contact" className="relative min-h-[100svh] md:min-h-[100svh] w-full flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden snap-start">
      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center pt-20 md:pt-28 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border/50 text-center w-full max-w-4xl mx-auto"
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {messages.contact.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-4 text-foreground tracking-tight">
            {messages.contact.title}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm md:text-base max-w-xl mx-auto">
            {messages.contact.description}
          </p>
          
          <form className="space-y-4 mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none text-foreground">{messages.contact.nameLabel}</label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={messages.contact.namePlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">{messages.contact.emailLabel}</label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={messages.contact.emailPlaceholder}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">{messages.contact.messageLabel}</label>
              <textarea
                id="message"
                className="flex min-h-[100px] w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                placeholder={messages.contact.messagePlaceholder}
                required
              />
            </div>
            
            <div className="text-center pt-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto px-12 text-xs">
                {messages.contact.submit}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
