export interface TranslationItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  location: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface SpecItem {
  property: string;
  value: string;
  standard: string;
  rating: string;
}

export interface SystemBenefit {
  title: string;
  description: string;
}

/**
 * SOURCE OF TRUTH: English Dictionary
 * All UI strings should be defined here. 
 * Note: French (fr.ts) is automatically kept in sync via AI-managed automation.
 */
export interface Translations {
  nav: { services: string; about: string; gallery: string; testimonials: string; contact: string };
  hero: { tagline: string; titleLine1: string; titleLine2: string; description: string; viewProjects: string; contactUs: string; scroll: string };
  systems: { tagline: string; title: string; description: string; items: SystemBenefit[] };
  specs: { tagline: string; title: string; description: string; columns: { property: string; value: string; standard: string; rating: string }; items: SpecItem[] };
  calculator: {
    tagline: string;
    title: string;
    description: string;
    areaLabel: string;
    areaPlaceholder: string;
    tileLabel: string;
    tilePlaceholder: string;
    heightLabel: string;
    heightPlaceholder: string;
    wastageLabel: string;
    submit: string;
    resultTiles: string;
    resultPedestals: string;
    loading: string;
  };
  services: { tagline: string; items: TranslationItem[] };
  about: { tagline: string; title: string; description1: string; description2: string; stats: StatItem[] };
  features: { tagline: string; title: string; description: string; items: TranslationItem[] };
  gallery: { tagline: string; title: string; description: string; filterAll: string; projects: ProjectItem[] };
  videoShowcase: { tagline: string; title: string; description: string; labels: string[] };
  testimonials: { tagline: string; title: string; description: string; items: TestimonialItem[] };
  contact: { tagline: string; title: string; description: string; nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; messageLabel: string; messagePlaceholder: string; submit: string };
  footer: { tagline: string; quickLinks: string; ourServices: string; contactTitle: string; servicesList: string[]; contactInfo: { email: string; phone: string; address: string }; copyright: string; privacyPolicy: string; termsOfService: string };
}

const en: Translations = {
  // Navbar
  nav: {
    services: "Services",
    about: "About",
    gallery: "Gallery",
    testimonials: "Testimonials",
    contact: "Contact",
  },

  // Hero
  hero: {
    tagline: "Design & Exterior Installation",
    titleLine1: "Pioneering the Future of",
    titleLine2: "Outdoor Living",
    description:
      "Where expert design meets flawless execution. Complete exterior installations and landscape construction for discerning homeowners and architects.",
    viewProjects: "View Projects",
    contactUs: "Contact Us",
    scroll: "Scroll",
  },

  // Systems
  systems: {
    tagline: "The System",
    title: "Why Atelier De Luca Pedestals",
    description: "Engineered advantages that make our pedestal system the choice of architects worldwide.",
    items: [
      {
        title: "Superior Drainage",
        description: "The elevated pedestal system creates a void beneath tiles, allowing rainwater to flow freely to drainage points — eliminating pooling and surface damage.",
      },
      {
        title: "Precision Leveling",
        description: "Adjustable pedestals compensate for uneven substrates, delivering a perfectly flat finished surface with slope correction up to 5%.",
      },
      {
        title: "Thermal Insulation",
        description: "The air gap beneath tiles acts as natural insulation, reducing heat transfer to the structure below and keeping surfaces cooler underfoot.",
      },
      {
        title: "Zero-Maintenance Access",
        description: "Individual tiles lift out for easy access to waterproofing membranes, cables, and drainage — no demolition required.",
      },
    ],
  },

  // Specs
  specs: {
    tagline: "Performance Data",
    title: "Technical Specifications",
    description: "Every Atelier De Luca installation exceeds international standards for exterior applications.",
    columns: {
      property: "Property",
      value: "Value",
      standard: "Standard",
      rating: "Rating",
    },
    items: [
      { property: "Tile Thickness", value: "20mm", standard: "EN 14411", rating: "Class BIa" },
      { property: "Load-Bearing Capacity", value: "≥ 1,000 kg", standard: "ISO 10545-4", rating: "Superior" },
      { property: "Slip Resistance", value: "R11 / C", standard: "DIN 51130", rating: "Anti-slip" },
      { property: "Water Absorption", value: "< 0.5%", standard: "ISO 10545-3", rating: "Frost-proof" },
      { property: "Flexural Strength", value: "≥ 45 N/mm²", standard: "ISO 10545-4", rating: "Heavy duty" },
      { property: "Abrasion Resistance", value: "Class 5", standard: "ISO 10545-7", rating: "Maximum" },
      { property: "Chemical Resistance", value: "UA / ULA", standard: "ISO 10545-13", rating: "Highest" },
      { property: "Thermal Shock", value: "Resistant", standard: "ISO 10545-9", rating: "All climates" },
    ],
  },

  // Calculator
  calculator: {
    tagline: "Project Planning",
    title: "Installation Calculator",
    description: "Estimate the tiles and pedestals required for your exterior project.",
    areaLabel: "Project Area (m²)",
    areaPlaceholder: "e.g. 50",
    tileLabel: "Tile Size",
    tilePlaceholder: "Select tile size",
    heightLabel: "Pedestal Height Range",
    heightPlaceholder: "Select height",
    wastageLabel: "Wastage Allowance",
    submit: "Calculate Requirements",
    resultTiles: "Tiles Required",
    resultPedestals: "Pedestals Required",
    loading: "Loading Calculator...",
  },

  // Services
  services: {
    tagline: "Our Services",
    items: [
      {
        title: "Design",
        description:
          "From initial concept to detailed plans, our design team creates tailored exterior environments that balance aesthetics, functionality, and the unique character of every site.",
      },
      {
        title: "Residential",
        description:
          "Complete exterior transformations for homes — driveways, patios, terraces, garden landscaping, pool surrounds, and every type of outdoor surface installation.",
      },
      {
        title: "Commercial & Municipal",
        description:
          "Large-scale exterior design and installation for public spaces, corporate plazas, hospitality venues, and commercial developments — built to last.",
      },
    ],
  },

  // About
  about: {
    tagline: "About Us",
    title: "Who We Are",
    description1:
      "Atelier De Luca is a premier exterior design and installation firm with a team of over 50 skilled professionals. We design and build exceptional outdoor environments — from private gardens and terraces to large-scale commercial landscapes.",
    description2:
      "Every project is driven by a commitment to craftsmanship, quality, and timeless design — executed by our dedicated team of designers, landscape architects, builders, and installation specialists.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "50+", label: "Dedicated Team Members" },
      { value: "15+", label: "Years of Experience" },
    ],
  },

  // Features
  features: {
    tagline: "Why Choose Us",
    title: "Expert Installation & Landscaping",
    description:
      "From concept to completion, our dedicated team handles every detail of your outdoor transformation.",
    items: [
      {
        title: "Precision Craftsmanship",
        description:
          "Every project is executed with meticulous attention to detail — from grading and drainage to the final tile placement.",
      },
      {
        title: "Built to Last",
        description:
          "We use only premium materials and proven construction techniques, ensuring your outdoor space endures for decades.",
      },
      {
        title: "On-Time Delivery",
        description:
          "Our experienced crews follow tight project timelines, keeping you informed at every stage from excavation to completion.",
      },
      {
        title: "Full-Service Team",
        description:
          "Landscape architects, skilled installers, and project managers work together so you have a single point of contact.",
      },
    ],
  },

  // Gallery
  gallery: {
    tagline: "Our Work",
    title: "Featured Projects",
    description:
      "Explore our featured landscaping and installation projects across residential and commercial spaces.",
    filterAll: "All",
    projects: [
      { title: "Modern Estate Patio", category: "Landscape", location: "Montreal • Proma XL" },
      { title: "Grand Entrance Driveway", category: "Landscape", location: "Westmount • Zuko Flex" },
      { title: "Terraced Garden Retreat", category: "Landscape", location: "Outremont • Ora Step" },
      { title: "Classic Stone Facade", category: "Masonry", location: "Laval • Clayden" },
      { title: "Contemporary Exterior", category: "Masonry", location: "Brossard • Roxton" },
      { title: "Multi-Level Retaining Wall", category: "Alternative Masonry", location: "Mount Royal • Alonso" },
    ],
  },

  // Video Showcase
  videoShowcase: {
    tagline: "See Our Work",
    title: "Craftsmanship in Motion",
    description: "A glimpse into the spaces we've brought to life.",
    labels: [
      "Pool Design",
      "Rooftop Terrace",
      "Patio Living",
      "Garden Retreat",
      "Balcony Living",
      "Commercial Space",
      "Residential Design",
      "Pool Installation",
    ],
  },

  // Testimonials
  testimonials: {
    tagline: "Client Stories",
    title: "Trusted by Homeowners & Builders",
    description:
      "Hear from the clients who trusted us to design and build their outdoor spaces.",
    items: [
      {
        quote:
          "Atelier De Luca completely transformed our backyard. From the initial design consultation to the final walkthrough, their team was professional and the craftsmanship is outstanding.",
        author: "Maria Hansen",
        role: "Homeowner, Westmount, Montreal",
      },
      {
        quote:
          "We hired them for a large commercial plaza installation and they delivered on time, on budget, and with incredible attention to detail. Our go-to landscaping partner.",
        author: "James Carter",
        role: "Project Manager, Griffintown, Montreal",
      },
      {
        quote:
          "Their landscape design brought our vision to life — the patio, pool deck, and garden pathways all flow together beautifully. A truly full-service team.",
        author: "Sofia Müller",
        role: "Homeowner, Outremont, Montreal",
      },
    ],
  },

  // Contact
  contact: {
    tagline: "Start Your Project",
    title: "Request a Free Consultation",
    description:
      "Ready to transform your outdoor space? Tell us about your project and our team will schedule a site visit to discuss your design and installation needs.",
    nameLabel: "Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email",
    emailPlaceholder: "john@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your project...",
    submit: "Request Consultation",
  },

  // Footer
  footer: {
    tagline:
      "Exterior design and installation. Where expert vision meets flawless execution.",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    contactTitle: "Contact",
    servicesList: [
      "Exterior Design",
      "Residential Installations",
      "Driveways & Patios",
      "Pool Surrounds & Terraces",
      "Commercial Projects",
    ],
    contactInfo: {
      email: "info@atelierdeluca.com",
      phone: "+1 514 555 1234",
      address: "Montreal, Canada",
    },
    copyright: "© {year} Atelier De Luca. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};
export default en;
