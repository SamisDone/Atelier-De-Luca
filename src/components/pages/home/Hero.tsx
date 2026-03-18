"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { useLanguage } from "@/i18n/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fontWeight = useTransform(scrollYProgress, [0, 0.3], [400, 700]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 -top-[20%] h-[120%] w-full z-0"
        initial={{ scale: 1.1, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={t.hero.image.path}
          alt={t.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-tertiary/80 via-brand-tertiary/60 to-brand-tertiary/80 backdrop-blur-[2px] z-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-left md:text-left max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="text-brand-accent font-sans text-xs sm:text-sm tracking-[0.4em] uppercase mb-2 md:mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-secondary leading-[1.1] md:leading-[0.95] mb-4 md:mb-6 tracking-tight text-balance"
          style={{ fontVariationSettings: `\"wght\" ${fontWeight.get()}` }}
        >
          <motion.span 
            className="inline-block overflow-hidden pb-1"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ fontVariationSettings: useTransform(fontWeight, w => `\"wght\" ${w}`) }}
          >
            {t.hero.titleLine1}
          </motion.span>
          <br />
          <motion.span
            className="text-brand-accent inline-block overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            {t.hero.titleLine2}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-brand-secondary/80 font-sans text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 md:mb-8"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="lg" className="text-base px-10" asChild>
            <a href="#gallery">{t.hero.viewProjects}</a>
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            className="text-base px-10 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-tertiary"
            asChild
          >
            <a href="#contact">{t.hero.contactUs}</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-brand-secondary/40 text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <div className="w-6 h-10 border-2 border-brand-secondary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-brand-secondary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
