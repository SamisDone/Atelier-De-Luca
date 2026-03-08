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

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
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
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            {t.gallery.tagline}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-sans transition-all duration-300",
                active === cat
                  ? "bg-brand text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-brand/10 hover:text-brand-tertiary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-tertiary/80 via-brand-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-brand-accent text-xs tracking-widest uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl text-brand-secondary">{project.title}</h3>
                  <p className="text-brand-secondary/70 text-sm">{project.location}</p>
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
