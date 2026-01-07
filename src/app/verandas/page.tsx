import { Metadata } from 'next';
import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { products, verandaCategories } from '@/data/products';

export const metadata: Metadata = {
  title: "Veranda's & Overkappingen",
  description: "Ontdek ons complete assortiment aluminium veranda's, overkappingen, glazen schuifwanden en zonwering. Alles op maat gemaakt voor uw woning.",
  openGraph: {
    title: "Veranda's & Overkappingen | Aluvera",
    description: "Ontdek ons complete assortiment aluminium veranda's en overkappingen.",
  },
};

export default function VerandasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Veranda's & Overkappingen
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Van klassieke veranda tot modern lamellendak: ontdek onze oplossingen 
              voor een buitenruimte die u het hele jaar door kunt gebruiken.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Vraag offerte aan
              </Button>
              <Button href="/configurator" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-900">
                Start configurator
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categorieën */}
      <Section background="white">
        <Container>
          <SectionHeader
            title="Veranda categorieën"
            subtitle="Kies de stijl die past bij uw woning en wensen."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {verandaCategories.map((category) => (
              <article
                key={category.id}
                id={category.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
                  <span className="text-slate-400">Foto: {category.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Alle producten */}
      <Section background="gray" id="producten">
        <Container>
          <SectionHeader
            title="Onze producten"
            subtitle="Een compleet overzicht van onze aluminium veranda oplossingen."
          />
          
          <div className="space-y-12">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center overflow-hidden">
                    <span className="text-slate-400">Foto: {product.title}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <h4 className="font-semibold text-slate-900 mb-3">Kenmerken:</h4>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <Icon name="check" size="sm" className="text-emerald-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button href="/contact">
                    Vraag informatie aan
                    <Icon name="arrow" size="sm" className="ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Materialen sectie */}
      <Section background="white" id="materialen">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Hoogwaardige materialen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Al onze veranda's worden vervaardigd uit hoogwaardig aluminium. 
                Dit garandeert een lange levensduur, minimaal onderhoud en een 
                tijdloze uitstraling.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Aluminium profielen</h4>
                  <p className="text-sm text-slate-600">
                    Roestvrij, licht en zeer sterk. Geschikt voor elke spanning.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Poedercoating</h4>
                  <p className="text-sm text-slate-600">
                    Elke RAL-kleur mogelijk. UV-bestendig en kraswerend.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Gehard glas</h4>
                  <p className="text-sm text-slate-600">
                    Veiligheidsglas met zelfreinigende optie. Maximale lichtdoorval.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">LED verlichting</h4>
                  <p className="text-sm text-slate-600">
                    Geïntegreerde spots en sfeerverlichting. Dimbaar en energiezuinig.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-100 flex items-center justify-center">
              <span className="text-slate-400">Foto: Materialen close-up</span>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Klaar om te starten?"
        subtitle="Vraag een vrijblijvende offerte aan of bezoek onze showroom in Helmond."
      />
    </>
  );
}
