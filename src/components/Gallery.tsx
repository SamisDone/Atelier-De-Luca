"use client";

import { useState } from "react";
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

// Scroll-triggered mask reveal animation
const maskReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.92,
    filter: "blur(8px)",
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      stiffness: 60, 
      damping: 20,
      duration: 0.9,
    }
  }
};

const Gallery = () => {
  const [active, setActive] = useState("All");
  const { t } = useLanguage();

  const projects = t.gallery.projects.map((p, i) => ({
    ...p,
    image: projectImages[i],
  }));

  const categories = [t.gallery.filterAll, ...new Set(projects.map((p) => p.category))];
  const filtered = active === t.gallery.filterAll ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="gallery" className="relative py-28 bg-background overflow-hidden">
      {/* Skewed top divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-card -translate-y-1/2" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary font-sans text-sm tracking-[0.4em] uppercase mb-4">
            {t.gallery.tagline}
          </p>
          {/* Editorial oversized heading */}
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[0.95] tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-sans transition-all duration-300 border",
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid with mask reveals */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                variants={maskReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                exit="hidden"
                transition={{ delay: idx * 0.08 }}
                data-cursor="view"
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Premium gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-7">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-2xl text-white leading-tight">{project.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{project.location}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
