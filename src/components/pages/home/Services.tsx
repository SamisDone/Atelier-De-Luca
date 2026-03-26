"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
  const { messages } = useLanguage();

  return (
    <section id="services" className="relative w-full flex flex-col items-center justify-center py-0 pt-4 md:py-16 bg-background snap-start">
      <div className="container mx-auto px-6 h-full w-full flex flex-col justify-around pt-8 md:pt-12 pb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="section-tagline">
            {messages.services.tagline}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-foreground mb-4 tracking-tight">
            {messages.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {messages.services.items.map((service, idx) => (
            <motion.div
              key={idx}
              variants={maskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/4.5] rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Title overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
