"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const showcaseImages = [
  { src: "/images/gallery-pool.jpg", label: "Pool Design" },
  { src: "/images/gallery-rooftop.jpg", label: "Rooftop Terrace" },
  { src: "/images/gallery-patio.jpg", label: "Patio Living" },
  { src: "/images/gallery-garden.jpg", label: "Garden Retreat" },
];

const VideoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            See Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Craftsmanship in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the spaces we've brought to life.
          </p>
        </motion.div>
      </div>

      {/* Scrolling image strip */}
      <motion.div style={{ x }} className="flex gap-6 pl-6">
        {showcaseImages.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex-shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] rounded-2xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-tertiary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-brand-secondary font-serif text-xl md:text-2xl">
                {img.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VideoShowcase;
