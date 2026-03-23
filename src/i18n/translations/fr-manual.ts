import type { Translations } from "@/i18n/translations/en";
import type { DeepPartial } from "@/lib/deep-merge";

// Add only the French fields you want to manage manually here.
// Plain objects can be overridden at any depth.
// Arrays should be replaced as a whole when you need manual control.
const frManual: DeepPartial<Translations> = {
  hero: {
    tagline: "Conception et réalisation",
  },
  about: {
    description2: "Innovation technique et vision artistique se conjuguent dans chaque installation. L'excellence est atteinte grâce à la maîtrise coordonnée de concepteurs et des manœuvres spécialisées, faisant de chaque projet une référence en matière de design extérieur."
  },
  services: {
    items: [
      {
        title: "Conception",
        description: "De l'idée initiale aux plans détaillés, notre équipe de conception crée des environnements extérieurs sur mesure qui alignent esthétique, fonctionnalité et caractère unique de chaque site.",
        image: "/images/services/venza.jpg"
      },
      {
        title: "Aménagement paysager résidentiel",
        description:
          "Transformations extérieures complètes pour les maisons .Spécialisées dans les allées, les chemins d'accès, les piscines, les terrasses sur le toit, l'aménagement paysager de jardins et les surfaces extérieures sur mesure.",
        image: "/images/services/oslo.jpg"
      },
      {
        title: "Commercial et municipal",
        description:
          "Conception et installation extérieures à grande échelle pour les espaces publics, les places d'entreprises, les établissements hôteliers et les développements commerciaux — conçues pour durer.",
        image: "/images/services/striato.jpg"
      },
    ]
  },
  gallery: {
    description: "Découvrez nos projets d'aménagement paysager et d'installation dans des espaces résidentiels et commerciaux.",
    projects: [
      {
        title: "Patio de propriété moderne",
        category: "Piscine",
        location: "Montréal",
        image: "/images/gallery/pool.jpg"
      },
      {
        title: "Jardin en terrasses",
        category: "Allée piétonne",
        location: "Outremont",
        image: "/images/gallery/walkway-2.jpg"
      },
      {
        title: "Retenue à plusieurs niveaux",
        category: "Paysagement",
        location: "Mont Royal",
        image: "/images/gallery/landscape-1.jpg"
      },
      {
        title: "Contemporain",
        category: "Toit Terrasse",
        location: "Brossard",
        image: "/images/gallery/terrasse-1.jpg"
      },
      {
        title: "Allée d'entrée principale",
        category: "Entrée Véhiculaire",
        location: "Westmount",
        image: "/images/gallery/driveway-2.jpg"
      },
      {
        title: "Extérieur contemporain",
        category: "Toit Terrasse",
        location: "Brossard",
        image: "/images/gallery/terrasse-2.jpg"
      },
      {
        title: "Retraite avec jardin en terrasses",
        category: "Allée piétonne",
        location: "Outremont",
        image: "/images/gallery/walkway-3.jpg"
      },
      {
        title: "Mur de soutènement à plusieurs niveaux",
        category: "Paysagement",
        location: "Mont Royal",
        image: "/images/gallery/landscape-2.jpg"
      },
      {
        title: "Allée d'entrée",
        category: "Entrée Véhiculaire",
        location: "Westmount",
        image: "/images/gallery/driveway-1.jpg"
      },
      {
        title: "Terrasses",
        category: "Allée piétonne",
        location: "Outremont",
        image: "/images/gallery/walkway-1.jpg"
      },
      {
        title: "Contemporain",
        category: "Toit Terrasse",
        location: "Brossard",
        image: "/images/gallery/terrasse-3.jpg"
      },
      {
        title: "Patio moderne",
        category: "Piscine",
        location: "Montréal",
        image: "/images/gallery/pool-1.jpg"
      },
      {
        title: "Grande allée",
        category: "Entrée Véhiculaire",
        location: "Westmount",
        image: "/images/gallery/driveway-3.jpg"
      },
      {
        title: "Mur à plusieurs niveaux",
        category: "Paysagement",
        location: "Mont Royal",
        image: "/images/gallery/landscape.jpg"
      },
    ],
  },
  craftmenship: {
    works: [
      {
        image: "/images/craftmenship/proma-xl.jpg",
        label: "Sol"
      },
      {
        image: "/images/gallery/driveway-3.jpg",
        label: "Entrée Véhiculaire",
      },
      {
        image: "/images/craftmenship/clayden.jpg",
        label: "Allée piétonne",
      },
      {
        image: "/images/gallery/pool-1.jpg",
        label: "Piscine",
      },
      {
        image: "/images/services/venza.jpg",
        label: "Entrée Véhiculaire",
      },
      {
        image: "/images/gallery/landscape-1.jpg",
        label: "Paysagement",
      },
      {
        image: "/images/hero/nolita.jpg",
        label: "Allée piétonne"
      }
    ],
  }
};

export default frManual;
