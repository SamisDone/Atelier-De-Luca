export interface TranslationItem {
  title: string;
  description: string;
}

export interface ServiceItem extends TranslationItem {
  image: string;
}

export interface CraftmenshipWork {
  image: string,
  label: string
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

/**
 * SOURCE OF TRUTH: English Dictionary
 * All UI strings should be defined here. 
 * Note: French (fr.ts) is automatically kept in sync via AI-managed automation.
 */
export interface Translations {
  nav: { services: string; about: string; gallery: string; financing: string; craftsmanship: string; testimonials: string; contact: string };
  hero: { tagline: string; titleLine1: string; titleLine2: string; description: string; viewProjects: string; contactUs: string; scroll: string, image: {
    path: string,
    alt: string,
  } };
  services: { tagline: string; title: string; items: ServiceItem[] };
  about: { tagline: string; title: string; description1: string; description2: string; stats: StatItem[], image: {
    path: string,
    alt: string
  } };
  gallery: { tagline: string; title: string; description: string; filterAll: string; projects: ProjectItem[] };
  craftmenship: { tagline: string; title: string; description: string; works: CraftmenshipWork[] };
  testimonials: { tagline: string; title: string; description: string; items: TestimonialItem[] };
  contact: { tagline: string; title: string; description: string; nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; messageLabel: string; messagePlaceholder: string; submit: string };
  footer: { tagline: string; quickLinks: string; ourServices: string; contactTitle: string; servicesList: string[]; contactInfo: { email: string; phone: string; address: string }; copyright: string; privacyPolicy: string; termsOfService: string };
}

const en: Translations = {
  nav: {
    services: "Services",
    about: "About",
    gallery: "Gallery",
    financing: "Financing",
    craftsmanship: "Craftsmanship",
    testimonials: "Testimonials",
    contact: "Contact",
  },

  hero: {
    tagline: "DESIGN & BUILD",
    titleLine1: "The Next Horizon Of",
    titleLine2: "Modern Landscapes",
    description:
      "Elevating exterior spaces through visionary design and master craftsmanship . From private havens to grand commercial landscapes, defining the next horizon of outdoor excellence.",
    viewProjects: "View Projects",
    contactUs: "Contact Us",
    scroll: "Scroll",
    image: {
      path: "/images/hero/nolita.jpg",
      alt: "Premium exterior design and installation"
    }
  },

  about: {
    tagline: "About Us",
    title: "Who We Are",
    description1:
      "PIERRA represents the pinnacle of exterior architecture and specialized installation. Well structured environments are realized through a focus on structural integrity and aesthetic harmony, catering to the most sophisticated residential and commercial landscapes.",
    description2:
      "Technical innovation and artistic vision converge in every installation. Excellence is attained through the coordinated mastery of expert designers and construction specialists, ensuring each project becomes a landmark of external design.",
    stats: [
      { value: "500+", label: "Projects Completed" },
      { value: "50+", label: "Dedicated Team Members" },
      { value: "15+", label: "Years of Experience" },
    ],
    image: {
      path: "/images/about/londana.jpg",
      alt: "Aerial view of landscaping project"
    }
  },
  
  services: {
    tagline: "Expertise",
    title: "Our Services",
    items: [
      {
        title: "Design",
        description:
          "From initial concept to detailed plans, our design team creates tailored exterior environments that balance aesthetics, functionality, and the unique character of every site.",
        image: "/images/services/venza.jpg"
      },
      {
        title: "Residential Landscaping",
        description:
          "Complete exterior transformations for homes — specialized in driveways, walkways, pools, roof-top terrasses, garden landscaping, and tailored outdoor surfaces.",
        image: "/images/services/oslo.jpg"
      },
      {
        title: "Commercial & Municipal",
        description:
          "Large-scale exterior design and installation for public spaces, corporate plazas, hospitality venues, and commercial developments — built to last.",
        image: "/images/services/striato.jpg"
      },
    ],
  },

  gallery: {
    tagline: "Our Work",
    title: "Featured Projects",
    description:
      "Explore our featured landscaping and installation projects across residential and commercial spaces.",
    filterAll: "All",
    projects: [
      { title: "Modern Estate Patio", category: "Pool", location: "Montreal", image: "/images/gallery/pool.jpg" },
      { title: "Terraced Garden", category: "Walkway", location: "Outremont", image: "/images/gallery/walkway-2.jpg" },
      { title: "Multi-Level Retaining", category: "Landscape", location: "Mount Royal", image: "/images/gallery/landscape-1.jpg" },
      { title: "Contemporary", category: "Top Terrasse", location: "Brossard", image: "/images/gallery/terrasse-1.jpg" },
      { title: "Grand Entrance Driveway", category: "Driveway", location: "Westmount", image: "/images/gallery/driveway-2.jpg" },
      { title: "Contemporary Exterior", category: "Top Terrasse", location: "Brossard", image: "/images/gallery/terrasse-2.jpg" },
      { title: "Terraced Garden Retreat", category: "Walkway", location: "Outremont", image: "/images/gallery/walkway-3.jpg" },
      { title: "Multi-Level Retaining Wall", category: "Landscape", location: "Mount Royal", image: "/images/gallery/landscape-2.jpg" },
      { title: "Entrance Driveway", category: "Driveway", location: "Westmount", image: "/images/gallery/driveway-1.jpg" },
      { title: "Terraced", category: "Walkway", location: "Outremont", image: "/images/gallery/walkway-1.jpg" },
      { title: "Contemporary", category: "Top Terrasse", location: "Brossard", image: "/images/gallery/terrasse-3.jpg" },
      { title: "Modern Patio", category: "Pool", location: "Montreal", image: "/images/gallery/pool-1.jpg" },
      { title: "Grand Driveway", category: "Driveway", location: "Westmount", image: "/images/gallery/driveway-3.jpg" },
      { title: "Multi-Level Wall", category: "Landscape", location: "Mount Royal", image: "/images/gallery/landscape.jpg" },
    ],
  },

  craftmenship: {
    tagline: "See Our Work",
    title: "Craftsmanship in Motion",
    description: "A glimpse into spaces brought to life through expert craftsmanship.",
    works: [
      {
        image: "/images/craftmenship/proma-xl.jpg",
        label: "Floor"
      },
      {
        image: "/images/gallery/driveway-3.jpg",
        label: "Driveway",
      },
      {
        image: "/images/craftmenship/clayden.jpg",
        label: "Walkway",
      },
      {
        image: "/images/gallery/pool-1.jpg",
        label: "Pool",
      },
      {
        image: "/images/services/venza.jpg",
        label: "Driveway",
      },
      {
        image: "/images/gallery/landscape-1.jpg",
        label: "Landscape",
      },
      {
        image: "/images/hero/nolita.jpg",
        label: "Walkway"
      }
    ],
  },

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
