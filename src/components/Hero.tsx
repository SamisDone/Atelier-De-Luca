"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] h-[120%] w-full z-0">
        <Image
          src="/images/hero-terrace.jpg"
          alt="Premium landscaping and porcelain installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-tertiary/70 via-brand-tertiary/50 to-brand-tertiary/80 z-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-left md:text-left max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-brand-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
        >
          Landscaping & Porcelain Installation
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            },
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-secondary leading-[1.1] mb-8"
        >
          Pioneering the Future of
          <br />
          <motion.span
            className="text-brand inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Outdoor Living
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-brand-secondary/80 font-sans text-lg md:text-xl max-w-2xl mb-10"
        >
          Where expert design meets flawless execution. Premium porcelain installations
          and landscape construction for discerning homeowners and architects.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="lg" className="text-base px-10" asChild>
            <a href="#gallery">View Projects</a>
          </Button>
          <Button
            variant="hero-outline"
            size="lg"
            className="text-base px-10 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-tertiary"
            asChild
          >
            <a href="#contact">Contact Us</a>
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
          <span className="text-brand-secondary/40 text-xs tracking-widest uppercase">Scroll</span>
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
