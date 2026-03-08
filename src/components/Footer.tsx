import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-tertiary text-brand-secondary">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Image
              src="/images/image-removebg-preview.png"
              alt="Atelier De Luca"
              width={300}
              height={80}
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 mb-6"
            />
            <p className="text-brand-secondary/60 text-sm leading-relaxed">
              Exterior design and installation. Where expert vision meets flawless execution.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "About", "Features", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-brand-secondary/60 hover:text-brand-secondary text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-brand-secondary/60 text-sm">
              <li>Exterior Design</li>
              <li>Residential Installations</li>
              <li>Driveways & Patios</li>
              <li>Pool Surrounds & Terraces</li>
              <li>Commercial Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-brand-secondary/60 text-sm">
              <li>info@atelierdeluca.com</li>
              <li>+49 123 456 7890</li>
              <li>Berlin, Germany</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-secondary/40 text-xs">
            © {new Date().getFullYear()} Atelier De Luca. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-brand-secondary/40 hover:text-brand-secondary/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-brand-secondary/40 hover:text-brand-secondary/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
