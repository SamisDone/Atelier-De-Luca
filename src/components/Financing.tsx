"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CreditCard, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Financing() {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax layering for depth
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const content = {
    en: {
      tagline: "Flexible Payment Options",
      title: "Realize Your Dream Project Today",
      description: "We offer tailored financing solutions to help you achieve the outdoor living space you've always wanted — without compromising on quality or design.",
      features: [
        {
          title: "Simple Approval",
          description: "Fast and easy application process with quick decisions.",
          icon: ShieldCheck,
        },
        {
          title: "Adjustable Terms",
          description: "Choose a payment plan that works perfectly for your budget.",
          icon: Clock,
        },
        {
          title: "Zero Hidden Fees",
          description: "Transparent pricing with clear, upfront terms from day one.",
          icon: CreditCard,
        },
      ],
      cta: "Apply for Financing"
    },
    fr: {
      tagline: "Options de Paiement Flexibles",
      title: "Réalisez Votre Projet de Rêve Aujourd'hui",
      description: "Nous offrons des solutions de financement sur mesure pour vous aider à obtenir l'espace extérieur que vous avez toujours voulu sans compromettre la qualité.",
      features: [
        {
          title: "Approbation Simple",
          description: "Processus de demande rapide et facile avec des décisions rapides.",
          icon: ShieldCheck,
        },
        {
          title: "Termes Ajustables",
          description: "Choisissez un plan de paiement adapté à votre budget.",
          icon: Clock,
        },
        {
          title: "Zéro Frais Cachés",
          description: "Tarification transparente avec des conditions claires dès le premier jour.",
          icon: CreditCard,
        },
      ],
      cta: "Demander un Financement"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <section ref={sectionRef} id="financing" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-brand-tertiary text-brand-secondary">
      {/* Skewed top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-background z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />

      {/* Dynamic parallax background glow */}
      <motion.div className="absolute inset-0 opacity-15 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-around pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full h-full">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-accent font-sans text-sm tracking-[0.4em] uppercase mb-6 block">
                {t.tagline}
              </span>
              {/* Editorial oversized heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-secondary leading-[0.95] tracking-tight transition-[font-variation-settings] duration-500 hover:[font-variation-settings:'wght'_700]">
                {t.title}
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-brand-secondary/80 font-sans max-w-2xl leading-relaxed"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button className="group relative px-10 py-4 bg-primary text-primary-foreground text-sm font-sans tracking-widest uppercase overflow-hidden mt-4 rounded-full">
                <span className="relative z-10 flex items-center gap-3">
                  {t.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/15 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
              </button>
            </motion.div>
          </div>

          {/* Cards with parallax depth */}
          <motion.div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" style={{ y: cardY }}>
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + index * 0.12 }}
                  className={`bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-serif text-brand-secondary mb-3">{feature.title}</h3>
                  <p className="text-brand-secondary/65 font-sans text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Skewed bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background z-10"
        style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
