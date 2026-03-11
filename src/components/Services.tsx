"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceImages = [
  "/images/venza.jpg",
  "/images/oslo.jpg",
  "/images/striato.jpg",
];

const maskReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.95,
    filter: "blur(6px)",
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 20,
    }
  }
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-background snap-start">
      <div className="container mx-auto px-6 h-full w-full flex flex-col justify-around pt-28 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-primary font-sans text-base tracking-[0.4em] uppercase mb-4 transition-[font-variation-settings] duration-500 hover:[font-variation-settings:'wght'_700]">
            {t.services.tagline}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <motion.div
              key={idx}
              variants={maskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/4.5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={serviceImages[idx]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Title overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-serif text-3xl text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
