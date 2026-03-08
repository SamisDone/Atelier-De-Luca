"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, PanInfo } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const showcaseImages = [
  { src: "/images/gallery-pool.jpg", label: "Pool Design" },
  { src: "/images/gallery-rooftop.jpg", label: "Rooftop Terrace" },
  { src: "/images/gallery-patio.jpg", label: "Patio Living" },
  { src: "/images/gallery-garden.jpg", label: "Garden Retreat" },
];

const VideoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const dragX = useMotionValue(0);
  const combinedX = useSpring(0, { stiffness: 100, damping: 30 });

  // Update combined position from both scroll parallax and drag
  useEffect(() => {
    const unsubScroll = scrollX.on("change", (v) => {
      combinedX.set(v + dragX.get());
    });
    const unsubDrag = dragX.on("change", (v) => {
      combinedX.set(scrollX.get() + v);
    });
    return () => {
      unsubScroll();
      unsubDrag();
    };
  }, [scrollX, dragX, combinedX]);

  // Calculate drag constraints based on strip width
  useEffect(() => {
    const updateConstraints = () => {
      if (stripRef.current) {
        const stripWidth = stripRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setDragConstraints({
          left: -(stripWidth - viewportWidth + 24),
          right: 100,
        });
      }
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Keep the drag offset where the user left it
    dragX.set(dragX.get() + info.offset.x);
  };

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

      {/* Draggable + scroll-parallax image strip */}
      <motion.div
        ref={stripRef}
        style={{ x: combinedX }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="flex gap-6 pl-6 pr-6 cursor-grab active:cursor-grabbing"
      >
        {showcaseImages.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex-shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] rounded-2xl overflow-hidden group pointer-events-none"
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
