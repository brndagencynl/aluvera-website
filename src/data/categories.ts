export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: 'klassieke-veranda',
    title: 'Klassieke Veranda\'s',
    description: 'Tijdloze elegantie met moderne technieken. Perfect voor elk type woning.',
    image: '/mock/product-1.jpg',
    href: '/producten/klassieke-veranda',
  },
  {
    id: 'moderne-veranda',
    title: 'Moderne Veranda\'s',
    description: 'Strakke lijnen en minimalistisch design voor de hedendaagse woning.',
    image: '/mock/product-2.jpg',
    href: '/producten/moderne-veranda',
  },
  {
    id: 'glazen-overkapping',
    title: 'Glazen Overkappingen',
    description: 'Maximaal licht met optimale bescherming tegen de elementen.',
    image: '/mock/product-3.jpg',
    href: '/producten/glazen-overkapping',
  },
  {
    id: 'schuifwanden',
    title: 'Schuifwanden',
    description: 'Flexibel genieten van uw buitenruimte, het hele jaar door.',
    image: '/mock/product-4.jpg',
    href: '/producten/schuifwanden',
  },
  {
    id: 'zonwering',
    title: 'Zonwering',
    description: 'Geïntegreerde zonwering voor optimaal comfort op warme dagen.',
    image: '/mock/product-5.jpg',
    href: '/producten/zonwering',
  },
  {
    id: 'maatwerk',
    title: 'Maatwerk Oplossingen',
    description: 'Unieke ontwerpen op maat gemaakt voor uw specifieke wensen.',
    image: '/mock/product-6.jpg',
    href: '/producten/maatwerk',
  },
];
