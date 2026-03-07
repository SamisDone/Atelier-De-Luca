"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-terrace.jpg"
          alt="Terrace with pedestal system"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-brand-tertiary/60" />
      
      <motion.div 
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-brand-accent font-sans text-sm tracking-[0.3em] uppercase mb-6"
        >
          Exterior Porcelain Systems
        </motion.p>
        
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-secondary leading-tight mb-8"
        >
          Architectural Precision
          <br />
          <span className="text-brand">for Outdoor Living</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-brand-secondary/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Premium porcelain tile installations on adjustable pedestal systems. 
          Engineered for beauty, built to endure.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-10">
            Explore Systems
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-10 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-tertiary">
            Get a Quote
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-secondary/40 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
