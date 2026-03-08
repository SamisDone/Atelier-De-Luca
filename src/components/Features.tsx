"use client";

import { motion, Variants } from "framer-motion";
import { Ruler, ShieldCheck, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Precision Craftsmanship",
    description: "Every project is executed with meticulous attention to detail — from grading and drainage to the final tile placement.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description: "We use only premium materials and proven construction techniques, ensuring your outdoor space endures for decades.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our experienced crews follow tight project timelines, keeping you informed at every stage from excavation to completion.",
  },
  {
    icon: Users,
    title: "Full-Service Team",
    description: "Landscape architects, skilled installers, and project managers work together so you have a single point of contact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
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
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Expert Installation & Landscaping
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, our dedicated team handles every detail of your outdoor transformation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
