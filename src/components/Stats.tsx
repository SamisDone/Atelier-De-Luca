"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years of Experience" },
  { value: "30+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-brand/10 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  transition: { type: "spring", stiffness: 120, damping: 15 } 
                }
              } as any}
              className="text-center"
            >
              <p className="font-serif text-5xl md:text-7xl text-brand mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-base font-sans tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
