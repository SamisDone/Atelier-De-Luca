"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "financing", label: "Financing" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const iconY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center h-[50vh]">
      {/* Track line */}
      <div className="relative w-px h-full bg-foreground/10">
        {/* Filled progress */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary origin-top"
          style={{ height: iconY }}
        />

        {/* Floating "P" indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
          style={{ top: iconY }}
        >
          <span className="text-primary-foreground text-xs font-serif font-bold select-none">
            P
          </span>
        </motion.div>

        {/* Section dots */}
        {sections.map((section, idx) => {
          const dotPosition = `${((idx + 0.5) / sections.length) * 100}%`;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="absolute left-1/2 -translate-x-1/2 group flex items-center"
              style={{ top: dotPosition }}
              aria-label={`Jump to ${section.label}`}
            >
              <div className="w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
              <span className="absolute right-6 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-sans tracking-widest uppercase">
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
