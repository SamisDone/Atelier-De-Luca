interface TranslationItem {
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ProjectItem {
  title: string;
  category: string;
  location: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface Translations {
  nav: { services: string; about: string; gallery: string; testimonials: string; contact: string };
  hero: { tagline: string; titleLine1: string; titleLine2: string; description: string; viewProjects: string; contactUs: string; scroll: string };
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
      { title: "Skyline Rooftop Terrace", category: "Rooftop", location: "Manhattan, NY" },
      { title: "Villa Garden Patio", category: "Patio", location: "Provence, France" },
      { title: "Penthouse Balcony", category: "Balcony", location: "London, UK" },
      { title: "Mediterranean Pool Deck", category: "Pool", location: "Mallorca, Spain" },
      { title: "Corporate Plaza Entrance", category: "Commercial", location: "Berlin, Germany" },
      { title: "Modern Garden Pathway", category: "Garden", location: "Kyoto, Japan" },
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
} as const;

export type Translations = typeof en;
export default en;
