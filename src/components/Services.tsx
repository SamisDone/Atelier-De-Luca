"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Custom Pools",
    description:
      "We design and build custom concrete pools with a dedicated in-house team. From private estates to rooftop installations, we focus on structural integrity, durability, and flawless execution.",
    image: "/images/services-pools.jpg",
  },
  {
    title: "Residential",
    description:
      "We create stunning, functional landscapes for residential properties, combining craftsmanship with cutting-edge design. Our team collaborates closely with clients to bring each vision to life.",
    image: "/images/services-residential.jpg",
  },
  {
    title: "Commercial & Municipal",
    description:
      "We specialize in large-scale landscaping and construction, delivering durable, high-quality builds for public spaces, corporate plazas, and commercial developments.",
    image: "/images/services-commercial.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-tertiary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
