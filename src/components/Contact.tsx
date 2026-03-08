"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden flex items-center justify-center">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 text-center"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Start Your Project
          </p>
          <h2 className="font-serif text-4xl mb-6 text-foreground">
            Request a Free Consultation
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Ready to transform your outdoor space? Tell us about your project and our team will schedule a site visit to discuss your landscaping and installation needs.
          </p>
          
          <form className="space-y-6 mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none text-foreground">Name</label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">Message</label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            
            <div className="text-center pt-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto px-12 text-base">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
