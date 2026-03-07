"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/images/image.png" alt="Grefino" width={240} height={64} className="h-14 md:h-16 w-auto object-contain" />
        <div className="hidden md:flex items-center gap-8">
          {["Systems", "Specifications", "Gallery", "Calculator"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-foreground text-sm font-sans tracking-wide transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
