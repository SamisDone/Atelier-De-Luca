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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden pt-32 pb-24">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%] w-full z-0">
        <Image
          src="/images/londana.jpg"
          alt="Aerial view of landscaping project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-tertiary/60 z-0" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Asymmetric two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          {/* Left column — tagline & large heading */}
          <motion.div
            className="lg:col-span-5 [&_[data-in-view]]:revealed"
            style={{ y: textY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            onViewportEnter={() => {
              // Add revealed class to children with ink-reveal
              setTimeout(() => {
                const els = document.querySelectorAll('#about .ink-reveal');
                els.forEach(el => el.classList.add('revealed'));
              }, 100);
            }}
          >
            <p className="text-brand-accent font-sans text-sm tracking-[0.4em] uppercase mb-6">
              {t.about.tagline}
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-secondary leading-[0.9] tracking-tight ink-reveal transition-[font-variation-settings] duration-500 hover:[font-variation-settings:'wght'_700]"
                {...( { "data-in-view": true } as object ) /* Hack to trigger revealed class from motion parent */}
            >
              {t.about.title}
            </h2>
          </motion.div>

          {/* Right column — descriptions, offset downward for asymmetry */}
          <motion.div
            className="lg:col-span-7 lg:pt-20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-brand-secondary/85 text-xl leading-relaxed mb-8 font-sans">
              {t.about.description1}
            </p>
            <p className="text-brand-secondary/65 text-base leading-relaxed font-sans">
              {t.about.description2}
            </p>
          </motion.div>
        </div>

        {/* Stats row with staggered reveal */}
        <motion.div
          className="grid grid-cols-3 gap-8 border-t border-brand-secondary/15 pt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {t.about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 80, damping: 15 },
                },
              } as any}
              className="text-center"
            >
              <p className="font-serif text-5xl md:text-7xl text-brand-secondary font-bold mb-3 tracking-tight">
                {stat.value}
              </p>
              <p className="text-brand-secondary/45 text-sm font-sans tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skewed bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background z-20"
        style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
};

export default About;
