import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-tertiary text-brand-secondary">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/image-removebg-preview.png"
              alt="Atelier De Luca"
              width={180}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert opacity-90 mb-4"
            />
            <p className="text-brand-secondary/60 text-sm leading-relaxed">
              Premium porcelain tile installations on adjustable pedestal systems. Engineered for beauty, built to endure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Systems", "Features", "Specifications", "Gallery", "Calculator", "Contact"].map((item) => (
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

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-brand-secondary/60 text-sm">
              <li>Rooftop Terrace Systems</li>
              <li>Patio Installations</li>
              <li>Pool Surrounds</li>
              <li>Balcony Solutions</li>
              <li>Commercial Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
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
            <Link href="#" className="text-brand-secondary/40 hover:text-brand-secondary/70 text-xs transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
