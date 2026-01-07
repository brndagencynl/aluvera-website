export interface Project {
  id: string;
  title: string;
  location: string;
  type: "veranda" | "overkapping" | "schuifwanden" | "zonwering" | "maatwerk";
  color: "antraciet" | "wit" | "creme" | "zwart" | "grijs";
  roofType: "glas" | "polycarbonaat" | "lamellen" | "geïsoleerd";
  image: string;
  images: string[];
  description: string;
  specs: {
    width: string;
    depth: string;
    height: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Moderne Veranda Helmond",
    location: "Helmond",
    type: "veranda",
    color: "antraciet",
    roofType: "glas",
    image: "/mock/project-1.jpg",
    images: ["/mock/project-1.jpg", "/mock/detail-1.jpg"],
    description: "Een prachtige moderne veranda met glazen dak en geïntegreerde LED-verlichting. De eigenaren kunnen nu het hele jaar door genieten van hun tuin.",
    specs: { width: "6.0m", depth: "3.5m", height: "2.8m" },
    featured: true
  },
  {
    id: "2",
    title: "Lamellendak Eindhoven",
    location: "Eindhoven",
    type: "veranda",
    color: "wit",
    roofType: "lamellen",
    image: "/mock/project-2.jpg",
    images: ["/mock/project-2.jpg"],
    description: "Verstelbaar lamellendak voor optimale controle over zonlicht. Volledig elektrisch bedienbaar met smartphone app.",
    specs: { width: "5.0m", depth: "4.0m", height: "3.0m" },
    featured: true
  },
  {
    id: "3",
    title: "Glazen Schuifwanden Nuenen",
    location: "Nuenen",
    type: "schuifwanden",
    color: "antraciet",
    roofType: "glas",
    image: "/mock/project-3.jpg",
    images: ["/mock/project-3.jpg"],
    description: "Bestaande veranda uitgebreid met luxe glazen schuifwanden. Nu een volwaardige extra leefruimte.",
    specs: { width: "4.5m", depth: "3.0m", height: "2.6m" },
    featured: true
  },
  {
    id: "4",
    title: "Terrasoverkapping Geldrop",
    location: "Geldrop",
    type: "overkapping",
    color: "creme",
    roofType: "polycarbonaat",
    image: "/mock/project-4.jpg",
    images: ["/mock/project-4.jpg"],
    description: "Stijlvolle terrasoverkapping met polycarbonaat dak. Lichtdoorlatend maar beschermd tegen regen.",
    specs: { width: "7.0m", depth: "3.0m", height: "2.5m" },
    featured: false
  },
  {
    id: "5",
    title: "Vrijstaande Poolhouse Veldhoven",
    location: "Veldhoven",
    type: "maatwerk",
    color: "zwart",
    roofType: "geïsoleerd",
    image: "/mock/project-5.jpg",
    images: ["/mock/project-5.jpg"],
    description: "Luxe vrijstaande poolhouse met geïsoleerd dak, buitenkeuken en loungeplek. Complete maatwerk oplossing.",
    specs: { width: "8.0m", depth: "4.5m", height: "3.2m" },
    featured: true
  },
  {
    id: "6",
    title: "Veranda met Zonwering Mierlo",
    location: "Mierlo",
    type: "zonwering",
    color: "grijs",
    roofType: "glas",
    image: "/mock/project-6.jpg",
    images: ["/mock/project-6.jpg"],
    description: "Glazen veranda met geïntegreerd zonweringssysteem. Automatische zon- en windsensoren.",
    specs: { width: "5.5m", depth: "3.5m", height: "2.7m" },
    featured: true
  },
  {
    id: "7",
    title: "Klassieke Serre Someren",
    location: "Someren",
    type: "veranda",
    color: "wit",
    roofType: "glas",
    image: "/mock/project-1.jpg",
    images: ["/mock/project-1.jpg"],
    description: "Traditionele serre-stijl veranda passend bij de klassieke woning. Tijdloze uitstraling.",
    specs: { width: "4.0m", depth: "3.0m", height: "2.8m" },
    featured: false
  },
  {
    id: "8",
    title: "Hoek Veranda Asten",
    location: "Asten",
    type: "maatwerk",
    color: "antraciet",
    roofType: "glas",
    image: "/mock/project-2.jpg",
    images: ["/mock/project-2.jpg"],
    description: "Maatwerk hoekoplossing die perfect aansluit op de L-vormige tuin. Uniek ontwerp.",
    specs: { width: "6.0m + 4.0m", depth: "3.5m", height: "2.9m" },
    featured: true
  },
  {
    id: "9",
    title: "Compacte Overkapping Deurne",
    location: "Deurne",
    type: "overkapping",
    color: "antraciet",
    roofType: "polycarbonaat",
    image: "/mock/project-3.jpg",
    images: ["/mock/project-3.jpg"],
    description: "Compacte maar stijlvolle overkapping voor een kleinere tuin. Bewijs dat grootte niet uitmaakt.",
    specs: { width: "3.5m", depth: "2.5m", height: "2.4m" },
    featured: false
  }
];

export const projectFilters = {
  types: [
    { value: "all", label: "Alle types" },
    { value: "veranda", label: "Veranda" },
    { value: "overkapping", label: "Overkapping" },
    { value: "schuifwanden", label: "Schuifwanden" },
    { value: "zonwering", label: "Zonwering" },
    { value: "maatwerk", label: "Maatwerk" }
  ],
  colors: [
    { value: "all", label: "Alle kleuren" },
    { value: "antraciet", label: "Antraciet" },
    { value: "wit", label: "Wit" },
    { value: "creme", label: "Crème" },
    { value: "zwart", label: "Zwart" },
    { value: "grijs", label: "Grijs" }
  ],
  roofTypes: [
    { value: "all", label: "Alle daktypen" },
    { value: "glas", label: "Glas" },
    { value: "polycarbonaat", label: "Polycarbonaat" },
    { value: "lamellen", label: "Lamellen" },
    { value: "geïsoleerd", label: "Geïsoleerd" }
  ]
};
