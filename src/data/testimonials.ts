export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Familie Van den Berg",
    location: "Helmond",
    rating: 5,
    text: "Vanaf het eerste adviesgesprek tot de oplevering was alles perfect geregeld. De monteurs waren vakkundig en netjes. Onze veranda is precies geworden zoals we het voor ogen hadden. Echt een aanwinst voor ons huis!",
    product: "Aluminium Veranda met glazen dak",
    date: "November 2024"
  },
  {
    id: "2",
    name: "Peter & Marieke Jansen",
    location: "Eindhoven",
    rating: 5,
    text: "Het lamellendak is geweldig! We kunnen nu zelf bepalen hoeveel zon er binnenkomt. De app-bediening werkt perfect. Aluvera heeft ons uitstekend geadviseerd over de mogelijkheden.",
    product: "Lamellendak Veranda",
    date: "Oktober 2024"
  },
  {
    id: "3",
    name: "Hans Willems",
    location: "Nuenen",
    rating: 5,
    text: "De glazen schuifwanden hebben onze veranda getransformeerd. We gebruiken de ruimte nu het hele jaar door als extra woonkamer. Uitstekende kwaliteit en service.",
    product: "Glazen Schuifwanden",
    date: "September 2024"
  },
  {
    id: "4",
    name: "Annelies de Groot",
    location: "Geldrop",
    rating: 5,
    text: "Zeer tevreden met onze nieuwe overkapping. Het polycarbonaat dak laat genoeg licht door maar houdt de regen tegen. Prima prijs-kwaliteitverhouding.",
    product: "Terrasoverkapping",
    date: "Augustus 2024"
  },
  {
    id: "5",
    name: "Familie Bakker",
    location: "Veldhoven",
    rating: 5,
    text: "Ons maatwerk poolhouse is een droom die uitkomt. Van ontwerp tot realisatie dacht Aluvera actief met ons mee. Het resultaat overtreft onze verwachtingen.",
    product: "Vrijstaande Poolhouse",
    date: "Juli 2024"
  },
  {
    id: "6",
    name: "Karin & Rob Smeets",
    location: "Mierlo",
    rating: 5,
    text: "De combinatie van het glazen dak met zonwering is ideaal. De sensoren werken automatisch bij zon of wind. We hoeven nergens meer aan te denken.",
    product: "Veranda met Zonwering",
    date: "Juni 2024"
  }
];
