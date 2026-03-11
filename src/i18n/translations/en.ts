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
  nav: { services: string; about: string; gallery: string; financing: string; craftsmanship: string; testimonials: string; contact: string };
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
  services: { tagline: string; title: string; items: TranslationItem[] };
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
    financing: "Financing",
    craftsmanship: "Craftsmanship",
    testimonials: "Testimonials",
    contact: "Contact",
  },

  // Hero
  hero: {
    tagline: "Design & Exterior Installation",
    titleLine1: "The Next Horizon Of",
    titleLine2: "Modern Landscapes",
    description:
      "Elevating exterior spaces through visionary design and masterful installation. From private retreats to grand commercial landscapes, defining the next horizon of outdoor excellence.",
    viewProjects: "View Projects",
    contactUs: "Contact Us",
    scroll: "Scroll",
  },

  // System
  systems: {
    tagline: "The System",
    title: "Why PIERRA Pedestals",
    description: "Engineered advantages that make the PIERRA pedestal system the choice of architects worldwide.",
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
    description: "Every PIERRA installation exceeds international standards for exterior applications.",
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

  services: {
    tagline: "Expertise",
    title: "Our Services",
    items: [
      {
        title: "Design",
        description:
          "From initial concept to detailed plans, our design team creates tailored exterior environments that balance aesthetics, functionality, and the unique character of every site.",
      },
      {
        title: "Residential Landscaping",
        description:
          "Complete exterior transformations for homes — specialized in driveways, walkways, pools, roof-top terrasses, garden landscaping, and tailored outdoor surfaces.",
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
      "PIERRA represents the pinnacle of exterior architecture and specialized installation. Masterful environments are realized through a focus on structural integrity and aesthetic harmony, catering to the most sophisticated residential and commercial landscapes.",
    description2:
      "Technical innovation and artistic vision converge in every installation. Excellence is attained through the coordinated mastery of expert designers and construction specialists, ensuring each project becomes a landmark of external design.",
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
      "From concept to completion, every detail of the outdoor transformation is handled with precision.",
    items: [
      {
        title: "Precision Craftsmanship",
        description:
          "Every project is executed with meticulous attention to detail — from grading and drainage to the final tile placement.",
      },
      {
        title: "Built to Last",
        description:
          "Premium materials and proven construction techniques ensure every outdoor space endures for decades.",
      },
      {
        title: "On-Time Delivery",
        description:
          "Our experienced crews follow tight project timelines, keeping you informed at every stage from excavation to completion.",
      },
      {
        title: "Full-Service Team",
        description:
          "Landscape architects, skilled installers, and project managers work in unison to provide a single point of contact.",
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
      { title: "Modern Estate Patio", category: "Pool", location: "Montreal" },
      { title: "Grand Entrance Driveway", category: "Driveway", location: "Westmount" },
      { title: "Terraced Garden Retreat", category: "Walkway", location: "Outremont" },
      { title: "Classic Stone Facade", category: "Roof", location: "Laval" },
      { title: "Contemporary Exterior", category: "Top Terrasse", location: "Brossard" },
      { title: "Multi-Level Retaining Wall", category: "Landscape", location: "Mount Royal" },
    ],
  },

  // Video Showcase
  videoShowcase: {
    tagline: "See Our Work",
    title: "Craftsmanship in Motion",
    description: "A glimpse into spaces brought to life through expert craftsmanship.",
    labels: [
      "Driveway",
      "Walkway",
      "Pool",
      "Roof",
      "Top Terrasse",
      "Custom Patios",
      "Retaining Walls",
      "Exterior Living",
    ],
  },

  // Testimonials
  testimonials: {
    tagline: "Client Stories",
    title: "Trusted by Homeowners & Builders",
    description:
      "Hear from clients who trusted PIERRA to design and build their outdoor spaces.",
    items: [
      {
        quote:
          "PIERRA completely transformed our backyard. From the initial design consultation to the final walkthrough, their team was professional and the craftsmanship is outstanding.",
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
      "Ready to transform an outdoor space? Project details can be shared to schedule a site visit and discuss design and installation needs.",
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
      "Residential Landscaping",
      "Driveways & Walkways",
      "Pools & Terraces",
      "Roofs & Top Terrasses",
    ],
    contactInfo: {
      email: "info@pierra.com",
      phone: "+1 514 555 1234",
      address: "Montreal, Canada",
    },
    copyright: "© {year} PIERRA. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};
export default en;
