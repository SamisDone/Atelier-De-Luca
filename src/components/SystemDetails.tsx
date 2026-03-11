"use client";

import { motion, Variants } from "framer-motion";
import { Droplets, Ruler, Thermometer, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const benefits = [
  { icon: Droplets, key: 0 },
  { icon: Ruler, key: 1 },
  { icon: Thermometer, key: 2 },
  { icon: Shield, key: 3 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const SystemDetails = () => {
  const { t } = useLanguage();

  return (
    <section id="systems" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-background snap-start">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {t.systems.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t.systems.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.systems.description}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => {
            const translatedBenefit = t.systems.items[idx];
            return (
              <motion.div
                key={translatedBenefit.title}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl p-8 hover:border-brand/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{translatedBenefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {translatedBenefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDetails;
