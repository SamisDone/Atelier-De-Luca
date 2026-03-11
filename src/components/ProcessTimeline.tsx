"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Consultation",
    description: "We visit your site, understand your vision, and assess the space to create a tailored plan.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our design team creates detailed 3D renderings so you can visualize the finished space before we begin.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Our skilled crew executes the build with precision, using only premium materials and proven techniques.",
  },
  {
    icon: CheckCircle2,
    title: "Completion",
    description: "Final walkthrough, quality inspection, and handover of your transformed outdoor living space.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-24 bg-brand-tertiary/5 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-brand font-sans text-base tracking-[0.3em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xl">
            A seamless journey from initial concept to stunning completion.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
                className="relative text-center"
              >
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto rounded-full bg-brand/10 border-2 border-brand/30 flex items-center justify-center mb-6 relative z-10 bg-background"
                >
                  <step.icon className="w-8 h-8 text-brand" />
                </motion.div>
                <span className="text-brand/40 font-serif text-6xl absolute -top-4 left-1/2 -translate-x-1/2 z-0 select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
