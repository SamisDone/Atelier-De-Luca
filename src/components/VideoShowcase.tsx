"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand font-sans text-sm tracking-[0.3em] uppercase mb-4">
            See Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Craftsmanship in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Watch how we transform outdoor spaces with precision and artistry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-brand-tertiary/10"
        >
          {!playing ? (
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              {/* Video thumbnail using existing gallery image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/video-thumbnail.jpg)" }}
              />
              <div className="absolute inset-0 bg-brand-tertiary/40 group-hover:bg-brand-tertiary/30 transition-colors duration-500" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
                </motion.div>
              </motion.div>
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-secondary font-serif text-2xl md:text-3xl">
                  Project Showcase Reel
                </p>
                <p className="text-brand-secondary/60 text-sm mt-1">2:30 min</p>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="Project showcase video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
