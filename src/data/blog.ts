export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 redenen om te kiezen voor een aluminium veranda",
    excerpt: "Aluminium veranda's worden steeds populairder. Ontdek waarom dit materiaal de beste keuze is voor uw buitenruimte en welke voordelen het biedt ten opzichte van hout.",
    image: "/images/blog/blog-1.jpg",
    date: "15 december 2024",
    slug: "redenen-aluminium-veranda",
    category: "Tips"
  },
  {
    id: "2",
    title: "Veranda verwarming: welke opties zijn er?",
    excerpt: "Met de juiste verwarming geniet u ook in de koudere maanden van uw veranda. We bespreken infrarood panelen, terrasheaters en vloerverwarming.",
    image: "/images/blog/blog-2.jpg",
    date: "8 december 2024",
    slug: "veranda-verwarming-opties",
    category: "Advies"
  },
  {
    id: "3",
    title: "Onderhoudstips voor uw glazen veranda dak",
    excerpt: "Een glazen dak vraagt weinig onderhoud, maar met deze tips blijft het er jarenlang prachtig uitzien. Lees onze praktische onderhoudshandleiding.",
    image: "/images/blog/blog-3.jpg",
    date: "1 december 2024",
    slug: "onderhoud-glazen-veranda-dak",
    category: "Onderhoud"
  }
];
