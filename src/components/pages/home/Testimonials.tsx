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
  hidden: { opacity: 0, y: 50, scale: 0.93, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-brand-tertiary overflow-hidden snap-start text-brand-secondary">
      {/* Skewed top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-background z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }}
      />

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-around pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-brand-accent font-sans text-base tracking-[0.4em] uppercase mb-4">
            {t.testimonials.tagline}
          </p>
          {/* Editorial oversized heading */}
          <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl text-brand-secondary mb-4 tracking-tight leading-[0.95]">
            {t.testimonials.title}
          </h2>
          <p className="text-brand-secondary/55 max-w-xl text-xl">
            {t.testimonials.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/5 border border-white/8 rounded-2xl p-8 flex flex-col hover:bg-white/8 hover:border-primary/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-brand-accent mb-6 opacity-40" />
              <p className="text-brand-secondary/80 text-base leading-relaxed italic flex-1 mb-8 font-sans">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="border-t border-brand-secondary/10 pt-5">
                <p className="font-serif text-lg text-brand-secondary">
                  {item.author}
                </p>
                <p className="text-brand-secondary/45 text-xs mt-1 tracking-wide uppercase">
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
