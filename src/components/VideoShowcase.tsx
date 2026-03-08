"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseImages = [
  { src: "/images/gallery-pool.jpg", label: "Pool Design" },
  { src: "/images/gallery-rooftop.jpg", label: "Rooftop Terrace" },
  { src: "/images/gallery-patio.jpg", label: "Patio Living" },
  { src: "/images/gallery-garden.jpg", label: "Garden Retreat" },
];

const VideoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxX = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!stripRef.current) return;
    const cardWidth = stripRef.current.firstElementChild?.clientWidth ?? 400;
    const scrollAmount = cardWidth + 24; // card width + gap
    stripRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

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

      {/* Carousel with arrow buttons */}
      <div className="relative overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-brand hover:text-primary-foreground hover:border-brand transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border text-foreground hover:bg-brand hover:text-primary-foreground hover:border-brand transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={stripRef}
          className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        >
            {showcaseImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex-shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] rounded-2xl overflow-hidden group snap-center"
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
