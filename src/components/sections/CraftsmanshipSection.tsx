import Image from 'next/image';
import { Container, Section, Button, Icon } from '@/components/ui';

const highlights = [
  "Eigen werkplaats in Helmond",
  "Aluminium van A-kwaliteit",
  "Poedercoating in elke RAL-kleur",
  "Naadloze afwerking tot in detail",
  "Gepassioneerde vakmensen",
  "Persoonlijke begeleiding"
];

export function CraftsmanshipSection() {
  return (
    <Section background="white" id="vakmanschap" spacing="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl relative">
              <Image
                src="/mock/craftsmanship-1.jpg"
                alt="Vakmanschap in onze werkplaats"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-emerald-600 text-white p-6 rounded-xl shadow-2xl">
              <div className="text-5xl font-bold mb-1">15+</div>
              <div className="text-emerald-100">jaar ervaring</div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-xl -z-10" />
          </div>

          {/* Content side */}
          <div className="lg:pl-8">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
              Nederlands vakmanschap
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Vakmanschap uit Helmond
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Al meer dan 15 jaar zijn wij gespecialiseerd in het ontwerpen en bouwen van 
              hoogwaardige aluminium veranda&apos;s. Vanuit onze eigen werkplaats in Helmond 
              leveren we maatwerk waar u jarenlang plezier van heeft.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Elke veranda wordt met dezelfde passie en precisie gebouwd. Van het eerste 
              adviesgesprek tot de laatste afwerking: wij staan voor kwaliteit zonder 
              compromissen. Onze eigen monteurs zorgen voor een vlekkeloze installatie.
            </p>
            
            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Icon name="check" size="sm" className="text-emerald-600 w-3 h-3" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/service" size="md">
                Alles over Aluvera
                <Icon name="arrow" size="sm" className="ml-2" />
              </Button>
              <Button href="/projecten" variant="ghost" size="md">
                Bekijk onze projecten
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
