import { Metadata } from 'next';
import { Container, Section, Button, Icon } from '@/components/ui';

export const metadata: Metadata = {
  title: "Configurator",
  description: "Ontwerp uw eigen veranda met onze online configurator. Kies afmetingen, kleuren en opties en ontvang direct een indicatieprijs.",
  openGraph: {
    title: "Veranda Configurator | Aluvera",
    description: "Ontwerp uw eigen veranda met onze online configurator.",
  },
};

const configuratorSteps = [
  {
    step: 1,
    title: "Kies uw type",
    description: "Selecteer het type veranda of overkapping dat bij u past."
  },
  {
    step: 2,
    title: "Bepaal afmetingen",
    description: "Voer de gewenste breedte, diepte en hoogte in."
  },
  {
    step: 3,
    title: "Kies kleur & dak",
    description: "Selecteer de RAL-kleur en het type dakbedekking."
  },
  {
    step: 4,
    title: "Voeg opties toe",
    description: "Kies extra's zoals LED-verlichting, zonwering of schuifwanden."
  },
  {
    step: 5,
    title: "Ontvang indicatie",
    description: "Bekijk direct een indicatieprijs en vraag een offerte aan."
  }
];

const features = [
  {
    icon: "ruler",
    title: "Op maat configureren",
    description: "Vul uw exacte afmetingen in voor een nauwkeurige prijsindicatie."
  },
  {
    icon: "sun",
    title: "3D visualisatie",
    description: "Bekijk uw configuratie in 3D vanuit verschillende hoeken."
  },
  {
    icon: "sparkles",
    title: "Alle opties",
    description: "Van basisconfiguratie tot luxe uitvoering met alle extras."
  },
  {
    icon: "clock",
    title: "Direct resultaat",
    description: "Ontvang binnen 5 minuten een indicatieprijs op maat."
  }
];

export default function ConfiguratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Icon name="sparkles" size="sm" className="text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">Online configurator</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ontwerp uw droomveranda
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Configureer uw ideale veranda of overkapping in enkele stappen. 
              Kies type, afmetingen, kleur en opties en ontvang direct een indicatieprijs.
            </p>
            
            <Button
              href="https://configurator.aluvera.nl"
              external
              size="lg"
              className="shadow-xl"
            >
              Start de configurator
              <Icon name="arrow" size="sm" className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Hoe werkt het */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hoe werkt de configurator?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In 5 eenvoudige stappen naar uw op maat geconfigureerde veranda.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {configuratorSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex-1 relative"
              >
                <div className="bg-slate-50 rounded-2xl p-6 h-full hover:bg-emerald-50 transition-colors group">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                
                {/* Arrow */}
                {index < configuratorSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <Icon name="chevronRight" className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              href="https://configurator.aluvera.nl"
              external
              size="lg"
            >
              Start nu met configureren
            </Button>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size="lg" className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Configurator placeholder / iframe option */}
      <Section background="white" id="configurator">
        <Container>
          <div className="bg-slate-100 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ruler" size="xl" className="text-emerald-600" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Klaar om te beginnen?
              </h2>
              
              <p className="text-slate-600 mb-8">
                Onze configurator opent in een nieuw venster waar u in alle rust uw 
                ideale veranda kunt samenstellen. Na het afronden kunt u direct een 
                vrijblijvende offerte aanvragen.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  href="https://configurator.aluvera.nl"
                  external
                  size="lg"
                >
                  Open configurator
                  <Icon name="arrow" size="sm" className="ml-2" />
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Liever persoonlijk advies?
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Note for iframe (uitgeschakeld) */}
      {/* 
      <Section background="white">
        <Container>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://configurator.aluvera.nl"
              className="w-full h-full"
              title="Aluvera Veranda Configurator"
              loading="lazy"
            />
          </div>
        </Container>
      </Section>
      */}

      {/* CTA */}
      <section className="bg-emerald-600 py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Liever persoonlijk advies?
              </h2>
              <p className="text-emerald-100">
                Onze adviseurs komen graag bij u langs voor een vrijblijvend gesprek.
              </p>
            </div>
            <div className="flex gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Plan afspraak
              </Button>
              <Button href="/projecten" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-emerald-700">
                Bekijk projecten
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
