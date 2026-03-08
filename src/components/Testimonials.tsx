"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-brand-tertiary text-brand-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {t.testimonials.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-secondary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-brand-secondary/60 max-w-xl mx-auto">
            {t.testimonials.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-accent mb-6 opacity-60" />
              <p className="text-brand-secondary/80 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-lg text-brand-secondary">
                  {item.author}
                </p>
                <p className="text-brand-secondary/50 text-xs mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
