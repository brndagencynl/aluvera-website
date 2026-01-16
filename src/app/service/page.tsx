import { Metadata } from 'next';
import { Container, Section, SectionHeader, Icon } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { workProcess, faqs } from '@/data/usps';

export const metadata: Metadata = {
  title: "Service",
  description: "Ontdek onze werkwijze, garanties en veelgestelde vragen. Bij Aluvera staat persoonlijke service centraal.",
  openGraph: {
    title: "Service | Aluvera",
    description: "Ontdek onze werkwijze, garanties en veelgestelde vragen.",
  },
};

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service & Werkwijze
            </h1>
            <p className="text-xl text-slate-300">
              Van eerste contact tot nazorg: wij begeleiden u door het hele proces. 
              Ontdek hoe wij werken en wat u van ons mag verwachten.
            </p>
          </div>
        </Container>
      </section>

      {/* Werkwijze */}
      <Section background="white" id="werkwijze">
        <Container>
          <SectionHeader
            title="Onze werkwijze"
            subtitle="In 6 stappen naar uw droomveranda. Wij maken het u graag makkelijk."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProcess.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-2xl p-6 relative overflow-hidden group hover:bg-emerald-50 transition-colors"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-slate-200 group-hover:text-emerald-200 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Garantie */}
      <Section background="gray" id="garantie">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
                <Icon name="shield" size="sm" className="mr-2" />
                Garantie
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                10 jaar garantie
              </h2>
              
              <p className="text-lg text-slate-600 mb-6">
                Wij staan volledig achter de kwaliteit van onze producten. Daarom geven 
                wij 10 jaar garantie op de constructie en 5 jaar op bewegende delen.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="check" size="sm" className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Constructiegarantie</h4>
                    <p className="text-slate-600 text-sm">10 jaar garantie op alle dragende onderdelen en verbindingen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size="sm" className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Poedercoating garantie</h4>
                    <p className="text-slate-600 text-sm">10 jaar garantie tegen verkleuring en afbladderen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size="sm" className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Bewegende delen</h4>
                    <p className="text-slate-600 text-sm">5 jaar garantie op schuifwanden, zonwering en andere bewegende onderdelen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size="sm" className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Waterdichtheid</h4>
                    <p className="text-slate-600 text-sm">10 jaar garantie op waterdichtheid van alle aansluitingen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
              <span className="text-slate-400">Foto: Garantie certificaat</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Onderhoud */}
      <Section background="white" id="onderhoud">
        <Container>
          <SectionHeader
            title="Onderhoud & Nazorg"
            subtitle="Een aluminium veranda is zeer onderhoudsarm. Met deze tips blijft hij jarenlang mooi."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="sparkles" className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aluminium reinigen</h3>
              <p className="text-slate-600 text-sm mb-4">
                Was de profielen 1-2x per jaar met lauw water en een mild afwasmiddel. 
                Gebruik geen schuurmiddelen of agressieve reinigingsproducten.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Gebruik een zachte doek of spons</li>
                <li>• Spoel af met schoon water</li>
                <li>• Droog na met een droge doek</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="sun" className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Glasdak onderhouden</h3>
              <p className="text-slate-600 text-sm mb-4">
                Bij een zelfreinigend glasdak doet de regen het meeste werk. Controleer 
                regelmatig de dakgoten en afvoeren op verstopping.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Verwijder bladeren uit goten</li>
                <li>• Controleer afdichtingen</li>
                <li>• Reinig 2x per jaar met glasreiniger</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="tools" className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bewegende delen</h3>
              <p className="text-slate-600 text-sm mb-4">
                Smeer schuifrails en scharnieren jaarlijks met siliconenspray. 
                Dit houdt alles soepel werkend.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Maak rails schoon voor het smeren</li>
                <li>• Controleer rubberen strips</li>
                <li>• Test vergrendelingen</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Over ons */}
      <Section background="gray" id="over-ons">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-100 flex items-center justify-center order-2 lg:order-1">
              <span className="text-slate-400">Foto: Team Aluvera</span>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Over Aluvera
              </h2>
              
              <p className="text-lg text-slate-600 mb-6">
                Sinds 2009 zijn wij gespecialiseerd in het ontwerpen en realiseren van 
                hoogwaardige aluminium veranda's. Vanuit onze werkplaats en showroom in 
                Helmond bedienen wij klanten in heel Noord-Brabant en Limburg.
              </p>
              
              <p className="text-slate-600 mb-6">
                Ons team bestaat uit ervaren ontwerpers, constructeurs en monteurs die 
                allemaal dezelfde passie delen: het creëren van buitenruimtes waar u 
                jarenlang plezier van heeft. Wij werken niet met onderaannemers, 
                alles gebeurt in eigen beheer.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-slate-600 text-sm">Jaar ervaring</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-slate-600 text-sm">Projecten</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600">12</div>
                  <div className="text-slate-600 text-sm">Teamleden</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600">98%</div>
                  <div className="text-slate-600 text-sm">Klanttevredenheid</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white" id="faq">
        <Container size="sm">
          <SectionHeader
            title="Veelgestelde vragen"
            subtitle="Heeft u een vraag? Wellicht staat het antwoord hier. Anders kunt u altijd contact opnemen."
          />
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <Icon
                    name="chevronDown"
                    size="sm"
                    className="text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Nog vragen?"
        subtitle="Neem gerust contact op. Wij helpen u graag verder met al uw vragen."
        primaryCta={{ label: "Neem contact op", href: "/contact" }}
        secondaryCta={{ label: "Bezoek showroom", href: "/contact#showroom" }}
      />
    </>
  );
}
