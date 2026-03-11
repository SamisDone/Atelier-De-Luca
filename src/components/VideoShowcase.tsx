"use client";

import { motion } from "framer-motion";
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
  const { t } = useLanguage();

  const baseImages = baseSrcs.map((src, i) => ({
    src,
    label: t.videoShowcase.labels[i],
  }));
  const showcaseImages = [...baseImages, ...baseImages];

  return (
    <section id="craftsmanship" className="bg-background relative overflow-hidden min-h-[100svh] w-full flex flex-col items-center justify-around pt-28 pb-12 snap-start">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-brand font-sans text-base tracking-[0.3em] uppercase mb-4">
            {t.videoShowcase.tagline}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
            {t.videoShowcase.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.videoShowcase.description}
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden mt-8">
        <motion.div
          className="flex gap-3 px-3 w-max"
          animate={{
            x: [0, `calc(-50% - 0.375rem)`], // -50% of total width (since items are duplicated) minus half a gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: showcaseImages.length * 3, // speed
              ease: "linear",
            },
          }}
        >
          {showcaseImages.map((img, i) => (
            <motion.div
              key={`${img.label}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 1000px" }} // load early
              transition={{ duration: 0.6, delay: (i % baseImages.length) * 0.08 }}
              className="relative flex-shrink-0 w-[55vw] md:w-[30vw] lg:w-[22vw] aspect-[4/5] overflow-hidden group rounded-xl"
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
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
