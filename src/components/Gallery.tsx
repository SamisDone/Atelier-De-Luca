"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";

const projectImages = [
  "/images/proma-xl.jpg",
  "/images/zuko-flex.jpg",
  "/images/ora-step.jpg",
  "/images/clayden.jpg",
  "/images/roxton.jpg",
  "/images/alonso.jpg",
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const { t } = useLanguage();

  const projects = t.gallery.projects.map((p, i) => ({
    ...p,
    image: projectImages[i],
  }));

  const categories = [t.gallery.filterAll, ...new Set(projects.map((p) => p.category))];
  const filtered = active === t.gallery.filterAll ? projects : projects.filter((p) => p.category === active);

  // Duplicate the items for seamless infinite scroll
  const carouselItems = useMemo(() => [...filtered, ...filtered], [filtered]);

  return (
    <section id="gallery" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Skewed top divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-card" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }} />

      <div className="w-full flex flex-col pt-28 pb-16 relative z-10">
        {/* Header section with container */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex flex-col items-start"
          >
            <p className="text-primary font-sans text-sm tracking-[0.4em] uppercase mb-4">
              {t.gallery.tagline}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-4 leading-[0.95] tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="text-muted-foreground max-w-xl text-sm md:text-lg leading-relaxed">
              {t.gallery.description}
            </p>
          </motion.div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-sans transition-all duration-300 border",
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Auto-scrolling horizontal carousel — full-width, no container */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -(filtered.length * (400 + 24))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: filtered.length * 4,
                ease: "linear",
              },
            }}
            key={active} // Reset animation when filter changes
          >
            {carouselItems.map((project, idx) => (
              <div
                key={`${project.title}-${idx}`}
                className="group relative flex-shrink-0 w-[320px] sm:w-[400px] aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Premium gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-7">
                  <p className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl text-white leading-tight">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
