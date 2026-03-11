"use client";

import { motion, Variants } from "framer-motion";
import { Ruler, ShieldCheck, Clock, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Ruler, ShieldCheck, Clock, Users];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-brand-tertiary/5 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-base tracking-[0.3em] uppercase mb-4">
            {t.features.tagline}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.features.description}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.features.items.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
