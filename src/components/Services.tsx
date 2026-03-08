"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Pool & Water Features",
    description:
      "From custom infinity pools to elegant water features, we design and build stunning aquatic environments that become the centerpiece of your outdoor living space. Our expert team handles every detail from engineering to finishing.",
    image: "/images/services-pools.jpg",
  },
  {
    title: "Residential Landscaping",
    description:
      "We create breathtaking residential landscapes combining premium porcelain installations, lush garden design, outdoor kitchens, and ambient lighting. Each project is tailored to your lifestyle and architectural vision.",
    image: "/images/services-residential.jpg",
  },
  {
    title: "Commercial & Municipal",
    description:
      "Delivering large-scale landscape solutions for corporate plazas, public spaces, and commercial developments. We focus on durability, safety, and timeless design that enhances the built environment.",
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
          className="text-center mb-20"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Full-service landscaping and installation — from concept to completion.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20 }}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-tertiary/30 to-transparent" />
                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="#gallery">View Projects</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
