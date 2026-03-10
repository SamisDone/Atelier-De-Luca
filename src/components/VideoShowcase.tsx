"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const baseSrcs = [
  "/images/proma-xl.jpg",
  "/images/zuko-flex.jpg",
  "/images/clayden.jpg",
  "/images/oslo.jpg",
  "/images/striato.jpg",
  "/images/roxton.jpg",
  "/images/alonso.jpg",
  "/images/venza.jpg",
];

const VideoShowcase = () => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationRef = useRef<number>(undefined);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const currentScroll = useRef(0);
  const { t } = useLanguage();

  const baseImages = baseSrcs.map((src, i) => ({
    src,
    label: t.videoShowcase.labels[i],
  }));
  const showcaseImages = [...baseImages, ...baseImages];

  const animate = useCallback(() => {
    if (!stripRef.current || !isAutoScrolling) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    const el = stripRef.current;
    currentScroll.current += 1;
    if (currentScroll.current >= el.scrollWidth / 2) {
      currentScroll.current = 0;
    }
    el.scrollLeft = currentScroll.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isAutoScrolling]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!stripRef.current) return;
    isDragging.current = true;
    setIsAutoScrolling(false);
    startX.current = e.clientX;
    scrollLeftStart.current = stripRef.current.scrollLeft;
    stripRef.current.setPointerCapture(e.pointerId);
    stripRef.current.style.cursor = "grabbing";
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !stripRef.current) return;
    const dx = e.clientX - startX.current;
    stripRef.current.scrollLeft = scrollLeftStart.current - dx;
    currentScroll.current = stripRef.current.scrollLeft;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!stripRef.current) return;
    isDragging.current = false;
    stripRef.current.releasePointerCapture(e.pointerId);
    stripRef.current.style.cursor = "grab";
    setTimeout(() => setIsAutoScrolling(true), 2000);
  }, []);

  return (
    <section id="videos" className="bg-background relative overflow-hidden min-h-[100svh] w-full flex flex-col items-center justify-around pt-28 pb-12">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {t.videoShowcase.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            {t.videoShowcase.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.videoShowcase.description}
          </p>
        </motion.div>
      </div>

      <div
        ref={stripRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide select-none"
        style={{ cursor: "grab" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {showcaseImages.map((img, i) => (
          <motion.div
            key={`${img.label}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % baseImages.length) * 0.08 }}
            className="relative flex-shrink-0 w-[55vw] md:w-[30vw] lg:w-[22vw] aspect-[4/5] overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-tertiary/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-brand-secondary font-serif text-xl md:text-2xl pointer-events-none">
                {img.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
