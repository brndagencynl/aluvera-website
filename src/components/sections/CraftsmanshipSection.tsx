import { Container, Section, Icon } from '@/components/ui';

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
    <Section background="white" id="vakmanschap">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center overflow-hidden">
              <span className="text-slate-400">Foto: Vakmanschap in werkplaats</span>
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-emerald-100">jaar ervaring</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <Icon name="sparkles" size="sm" className="mr-2" />
              Ons verhaal
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Vakmanschap uit Helmond
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Al meer dan 15 jaar zijn wij gespecialiseerd in het ontwerpen en bouwen van 
              hoogwaardige aluminium veranda's. Vanuit onze werkplaats in Helmond leveren 
              we maatwerk waar u jarenlang plezier van heeft.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Elke veranda wordt met dezelfde passie en precisie gebouwd. Van het eerste 
              adviesgesprek tot de laatste afwerking: wij staan voor kwaliteit zonder 
              compromissen. Onze eigen monteurs zorgen voor een vlekkeloze installatie.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Icon name="check" size="sm" className="text-emerald-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
