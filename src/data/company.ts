export const companyInfo = {
  name: "Aluvera",
  tagline: "Aluminium Veranda's & Overkappingen",
  description: "Specialist in maatwerk aluminium veranda's en overkappingen in de regio Helmond en omstreken.",
  
  contact: {
    phone: "0492 - 123 456",
    email: "info@aluvera.nl",
    address: {
      street: "Industrieweg 24",
      postalCode: "5701 AB",
      city: "Helmond",
      province: "Noord-Brabant",
      country: "Nederland"
    }
  },
  
  openingHours: {
    showroom: [
      { days: "Maandag - Vrijdag", hours: "09:00 - 17:30" },
      { days: "Zaterdag", hours: "10:00 - 16:00" },
      { days: "Zondag", hours: "Gesloten" }
    ],
    telephone: [
      { days: "Maandag - Vrijdag", hours: "08:00 - 18:00" },
      { days: "Zaterdag", hours: "09:00 - 15:00" }
    ]
  },
  
  social: {
    facebook: "https://facebook.com/aluvera",
    instagram: "https://instagram.com/aluvera.nl",
    linkedin: "https://linkedin.com/company/aluvera",
    pinterest: "https://pinterest.com/aluvera"
  },
  
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.8!2d5.6614!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHelmond!5e0!3m2!1snl!2snl!4v1234567890",
    linkUrl: "https://goo.gl/maps/helmond"
  },
  
  stats: {
    yearsExperience: 15,
    projectsCompleted: 500,
    satisfiedCustomers: 450,
    warrantyYears: 10
  },
  
  trustBadges: [
    { title: "500+ Projecten", icon: "projects" },
    { title: "10 Jaar Garantie", icon: "warranty" },
    { title: "Gratis Advies", icon: "advice" },
    { title: "Eigen Monteurs", icon: "team" }
  ]
};

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Producten", href: "/producten" },
    { label: "Veranda's", href: "/verandas" },
    { label: "Projecten", href: "/projecten" },
    { label: "Service", href: "/service" },
    { label: "Contact", href: "/contact" }
  ],
  footer: {
    products: [
      { label: "Alle Producten", href: "/producten" },
      { label: "Klassieke Veranda's", href: "/producten/klassieke-veranda" },
      { label: "Moderne Veranda's", href: "/producten/moderne-veranda" },
      { label: "Glazen Overkappingen", href: "/producten/glazen-overkapping" },
      { label: "Schuifwanden", href: "/producten/schuifwanden" },
      { label: "Zonwering", href: "/producten/zonwering" }
    ],
    service: [
      { label: "Werkwijze", href: "/service#werkwijze" },
      { label: "Garantie", href: "/service#garantie" },
      { label: "Onderhoud", href: "/service#onderhoud" },
      { label: "Veelgestelde Vragen", href: "/service#faq" }
    ],
    company: [
      { label: "Over Ons", href: "/service#over-ons" },
      { label: "Showroom", href: "/contact#showroom" },
      { label: "Projecten", href: "/projecten" },
      { label: "Contact", href: "/contact" }
    ]
  }
};
