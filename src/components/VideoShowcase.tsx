"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";

const showcaseImages = [
  { src: "/images/gallery-pool.jpg", label: "Pool Design" },
  { src: "/images/gallery-rooftop.jpg", label: "Rooftop Terrace" },
  { src: "/images/gallery-patio.jpg", label: "Patio Living" },
  { src: "/images/gallery-garden.jpg", label: "Garden Retreat" },
  { src: "/images/gallery-balcony.jpg", label: "Balcony Living" },
  { src: "/images/gallery-commercial.jpg", label: "Commercial Space" },
  { src: "/images/services-residential.jpg", label: "Residential Design" },
  { src: "/images/services-pools.jpg", label: "Pool Installation" },
  { src: "/images/hero-terrace.jpg", label: "Terrace Living" },
  { src: "/images/about-aerial.jpg", label: "Aerial View" },
  // Duplicates for infinite loop
  { src: "/images/gallery-pool.jpg", label: "Pool Design" },
  { src: "/images/gallery-rooftop.jpg", label: "Rooftop Terrace" },
  { src: "/images/gallery-patio.jpg", label: "Patio Living" },
  { src: "/images/gallery-garden.jpg", label: "Garden Retreat" },
  { src: "/images/gallery-balcony.jpg", label: "Balcony Living" },
  { src: "/images/gallery-commercial.jpg", label: "Commercial Space" },
  { src: "/images/services-residential.jpg", label: "Residential Design" },
  { src: "/images/services-pools.jpg", label: "Pool Installation" },
  { src: "/images/hero-terrace.jpg", label: "Terrace Living" },
  { src: "/images/about-aerial.jpg", label: "Aerial View" },
];

const VideoShowcase = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>(undefined);

  const animate = useCallback(() => {
    if (!stripRef.current || isHovered) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    const el = stripRef.current;
    el.scrollLeft += 0.5;
    // Loop: when scrolled past half (duplicate set), reset
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <section className="py-24 bg-background overflow-hidden">
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

      {/* Full-bleed carousel — no whitespace, no arrows, auto + manual scroll */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={stripRef}
          className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {showcaseImages.map((img, i) => (
            <motion.div
              key={`${img.label}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[33.334vw] aspect-[4/5] overflow-hidden group snap-center"
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
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
