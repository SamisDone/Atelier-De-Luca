"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Atelier De Luca's pedestal system transformed our rooftop terrace into a stunning outdoor retreat. The precision and quality are unmatched.",
    author: "Maria Hansen",
    role: "Architect, Studio Verte",
  },
  {
    quote:
      "We've specified Atelier De Luca on over 20 commercial projects. Their technical support and product reliability make them our go-to choice.",
    author: "James Carter",
    role: "Project Manager, UrbanScape Construction",
  },
  {
    quote:
      "The installation was seamless and the end result exceeded our client's expectations. Truly a premium product.",
    author: "Sofia Müller",
    role: "Landscape Designer, Atelier Grün",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-tertiary text-brand-secondary">
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
            Trusted by Professionals
          </h2>
          <p className="text-brand-secondary/60 max-w-xl mx-auto">
            Hear from the architects, designers, and builders who rely on Atelier De Luca for their most demanding projects.
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
