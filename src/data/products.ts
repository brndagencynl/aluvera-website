export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Aluminium Veranda",
    description: "Geniet het hele jaar door van uw tuin met onze luxe aluminium veranda's. Stijlvol, duurzaam en volledig op maat gemaakt.",
    image: "/images/veranda-1.jpg",
    slug: "aluminium-veranda",
    features: ["Poedercoating in elke RAL-kleur", "Geïntegreerde LED-verlichting", "10 jaar garantie"]
  },
  {
    id: "2",
    title: "Glazen Overkapping",
    description: "Maximaal licht en bescherming tegen weersinvloeden. Onze glazen overkappingen bieden het beste van beide werelden.",
    image: "/images/overkapping-1.jpg",
    slug: "glazen-overkapping",
    features: ["Gehard veiligheidsglas", "Zelfreinigende coating", "Discrete afwatering"]
  },
  {
    id: "3",
    title: "Glazen Schuifwanden",
    description: "Transformeer uw veranda naar een volwaardige leefruimte met onze premium glazen schuifwandsystemen.",
    image: "/images/schuifwanden-1.jpg",
    slug: "glazen-schuifwanden",
    features: ["Soepele geleiding", "Inbraakwerend glas", "Volledig weg te schuiven"]
  },
  {
    id: "4",
    title: "Zonwering",
    description: "Houd de warmte buiten en creëer schaduw wanneer u dat wilt. Geïntegreerde zonwering voor optimaal comfort.",
    image: "/images/zonwering-1.jpg",
    slug: "zonwering",
    features: ["Elektrisch bedienbaar", "Wind- en zonnesensor", "UV-werende doeken"]
  },
  {
    id: "5",
    title: "Terrasoverkapping",
    description: "Een stijlvolle beschutting voor uw terras. Ideaal voor horeca of particulier gebruik.",
    image: "/images/terras-1.jpg",
    slug: "terrasoverkapping",
    features: ["Vrijstaand of aangebouwd", "Diverse dakopties", "Robuuste constructie"]
  },
  {
    id: "6",
    title: "Maatwerk Oplossingen",
    description: "Heeft u specifieke wensen? Wij denken graag met u mee voor een volledig op maat gemaakte oplossing.",
    image: "/images/maatwerk-1.jpg",
    slug: "maatwerk",
    features: ["Persoonlijk advies", "3D visualisatie", "Uniek ontwerp"]
  }
];

export const verandaCategories = [
  {
    id: "klassiek",
    title: "Klassieke Veranda's",
    description: "Tijdloze elegantie met moderne materialen. Perfect voor traditionele woningen.",
    image: "/images/klassiek-veranda.jpg",
    products: ["Serre-veranda", "Victoriaanse stijl", "Landhuisstijl"]
  },
  {
    id: "modern",
    title: "Moderne Veranda's",
    description: "Strakke lijnen en minimalistische designs voor de hedendaagse woning.",
    image: "/images/modern-veranda.jpg",
    products: ["Plat dak veranda", "Lamellendak", "Glazen kubus"]
  },
  {
    id: "lamellen",
    title: "Lamellendak Veranda's",
    description: "Verstelbare lamellen voor perfecte controle over licht en ventilatie.",
    image: "/images/lamellen-veranda.jpg",
    products: ["Elektrische lamellen", "Kantelbare lamellen", "Geïntegreerd systeem"]
  },
  {
    id: "vrijstaand",
    title: "Vrijstaande Overkappingen",
    description: "Niet aan de woning vast, maar wel dezelfde kwaliteit en uitstraling.",
    image: "/images/vrijstaand-veranda.jpg",
    products: ["Tuinpaviljoen", "Poolhouse", "Buitenkeuken overkapping"]
  }
];
