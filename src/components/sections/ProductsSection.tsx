import { Container, Section, SectionHeader } from '@/components/ui';
import { ProductCard } from '@/components/cards';
import { products } from '@/data/products';

export function ProductsSection() {
  return (
    <Section background="white" id="oplossingen">
      <Container>
        <SectionHeader
          title="Onze oplossingen"
          subtitle="Ontdek ons complete assortiment aluminium veranda's en overkappingen. Van klassiek tot modern, altijd op maat gemaakt."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </Container>
    </Section>
  );
}
