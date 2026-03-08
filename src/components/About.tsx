"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} id="about" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%] w-full z-0">
        <Image
          src="/images/about-aerial.jpg"
          alt="Aerial view of landscaping project"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-tertiary/70 z-0" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          >
            <p className="text-brand-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-secondary mb-8 leading-tight">
              Who We Are
            </h2>
            <p className="text-brand-secondary/80 text-lg leading-relaxed mb-6">
              Atelier De Luca is a premier landscaping and porcelain installation firm with a team of over 50 skilled professionals. We specialize in crafting exceptional outdoor environments that combine architectural landscaping with premium porcelain pedestal systems.
            </p>
            <p className="text-brand-secondary/70 text-base leading-relaxed">
              Every project is driven by a commitment to craftsmanship, quality, and timeless design — executed by our dedicated team of landscape architects, builders, and tile specialists. From private residences to commercial spaces, we deliver refined, functional, and enduring results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/process-craftsmanship.jpg"
                alt="Expert craftsmanship in porcelain installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-brand p-6 rounded-xl shadow-xl"
            >
              <p className="font-serif text-3xl text-primary-foreground font-bold">15+</p>
              <p className="text-primary-foreground/80 text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
