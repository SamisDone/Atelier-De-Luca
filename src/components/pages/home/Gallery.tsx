"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [active, setActive] = useState("All");
  const { t } = useLanguage();

  const projects = t.gallery.projects

  const categories = [t.gallery.filterAll, ...new Set(projects.map((p) => p.category))];
  const filtered = active === t.gallery.filterAll ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="gallery" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-background overflow-hidden snap-start">
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
            <p className="text-primary font-sans text-base tracking-[0.4em] uppercase mb-4">
              {t.gallery.tagline}
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 leading-[0.95] tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="text-muted-foreground max-w-xl text-base md:text-xl leading-relaxed">
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

        {/* Grid layout showing all images */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <div
                key={`${project.title}-${idx}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  translate="no"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Premium gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-7">
                  <p className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-1.5">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-3xl text-white leading-tight">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
