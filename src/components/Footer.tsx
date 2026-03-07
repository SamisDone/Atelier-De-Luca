const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-2xl text-foreground mb-2">Grefino</p>
        <p className="text-muted-foreground text-sm">
          Exterior Porcelain Systems — Architectural precision for outdoor living.
        </p>
        <p className="text-muted-foreground/60 text-xs mt-6">
          © {new Date().getFullYear()} Grefino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
