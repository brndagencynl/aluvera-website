import { Container, Section, SectionHeader, Icon } from '@/components/ui';
import { UspCard } from '@/components/cards';
import { usps } from '@/data/usps';

export function USPSection() {
  return (
    <Section background="gray" id="zekerheden" spacing="lg">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
              Onze zekerheden
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Waarom kiezen voor Aluvera?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Bij ons draait het niet alleen om mooie veranda&apos;s. Wij denken verder. 
              Of het nu gaat om vakmanschap, duurzame materialen of het creëren van 
              een comfortabele buitenruimte - bij Aluvera bent u aan het juiste adres.
            </p>
            
            {/* Key USPs with checkmarks */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size="sm" className="text-emerald-600 w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Eigen productie en montage</span>
                  <p className="text-slate-600 text-sm">Geen onderaannemers, wel volledige controle over kwaliteit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size="sm" className="text-emerald-600 w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">10 jaar garantie op constructie</span>
                  <p className="text-slate-600 text-sm">Wij staan volledig achter onze producten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="check" size="sm" className="text-emerald-600 w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Persoonlijke begeleiding</span>
                  <p className="text-slate-600 text-sm">Eén vast aanspreekpunt van advies tot nazorg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - USP cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usps.slice(0, 6).map((usp) => (
              <UspCard
                key={usp.id}
                icon={usp.icon}
                title={usp.title}
                description={usp.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
