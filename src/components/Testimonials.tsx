"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Atelier De Luca completely transformed our backyard. From the initial design consultation to the final walkthrough, their team was professional and the craftsmanship is outstanding.",
    author: "Maria Hansen",
    role: "Homeowner, Westmount, Montrealunt, Montreal",
  },
  {
    quote:
      "We hired them for a large commercial plaza installation and they delivered on time, on budget, and with incredible attention to detail. Our go-to landscaping partner.",
    author: "James Carter",
    role: "ProjGriffintown, Montreale Development",
  },
  {
    quote:
      "Their landscape design brought our vision to life — the patio, pool deck, and garden pathways all flow together beautifully. A truly full-service team.",
    author: "Sofia Müller",
    role: "Homeowner, Berlin",
  },
];

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
            Client Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-secondary mb-4">
            Trusted by Homeowners & Builders
          </h2>
          <p className="text-brand-secondary/60 max-w-xl mx-auto">
            Hear from the clients who trusted us to design and build their outdoor spaces.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-accent mb-6 opacity-60" />
              <p className="text-brand-secondary/80 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-lg text-brand-secondary">
                  {t.author}
                </p>
                <p className="text-brand-secondary/50 text-xs mt-1">
                  {t.role}
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
