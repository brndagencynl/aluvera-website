import { Container, Section, SectionHeader } from '@/components/ui';
import { UspCard } from '@/components/cards';
import { usps } from '@/data/usps';

export function USPSection() {
  return (
    <Section background="gray" id="zekerheden">
      <Container>
        <SectionHeader
          title="Waarom kiezen voor Aluvera?"
          subtitle="Wij bieden meer dan alleen een veranda. Ontdek de zekerheden die bij ons standaard zijn."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp) => (
            <UspCard
              key={usp.id}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
