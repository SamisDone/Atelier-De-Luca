"use client";

import { motion } from "framer-motion";
import { Hammer, Leaf, SunDim } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Unmatched Durability",
    description: "Built to withstand extreme weather, heavy loads, and everyday wear, ensuring a long-lasting outdoor space.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Manufactured using sustainable practices, our porcelain tiles are 100% recyclable and environmentally conscious.",
  },
  {
    icon: SunDim,
    title: "Fade Resistance",
    description: "UV-resistant technology keeps the vibrant colors of your tiles looking fresh and new, year after year.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-brand-tertiary/5 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Superior Quality
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Our Materials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our porcelain paver systems combine elegant aesthetics with robust engineering, providing the perfect foundation for any outdoor project.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
