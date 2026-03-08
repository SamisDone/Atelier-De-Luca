"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%] w-full z-0">
        <Image
          src="/images/about-aerial.jpg"
          alt="Aerial view of landscaping project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-tertiary/75 z-0" />

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              {t.about.tagline}
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-secondary mb-8 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-brand-secondary/80 text-lg leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-brand-secondary/70 text-base leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-8 border-t border-brand-secondary/20 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {t.about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              } as any}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-6xl text-brand-secondary font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-brand-secondary/50 text-sm font-sans tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
