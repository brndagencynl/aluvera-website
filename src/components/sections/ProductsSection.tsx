import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { ProductCard } from '@/components/cards';
import { products } from '@/data/products';

export function ProductsSection() {
  return (
    <Section background="white" id="oplossingen" spacing="lg">
      <Container size="lg">
        <SectionHeader
          label="Onze producten"
          title="Hoogwaardige veranda's, naar ieders wens"
          subtitle="Wij bieden een uitgebreid assortiment aan hoogwaardige producten. Elk product wordt op maat gemaakt en afgestemd op uw wensen en de stijl van uw woning."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              slug={product.slug}
              features={product.features}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-50 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Benieuwd naar de mogelijkheden?</h3>
            <p className="text-slate-600">Vraag een vrijblijvend adviesgesprek aan of bezoek onze showroom.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="md">
              Afspraak maken
              <Icon name="arrow" size="sm" className="ml-2" />
            </Button>
            <Button href="/verandas" variant="outline" size="md">
              Meer informatie
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
