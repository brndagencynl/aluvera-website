import { Container, Section, SectionHeader } from '@/components/ui';
import { TestimonialCard } from '@/components/cards';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <Section background="white" id="reviews">
      <Container>
        <SectionHeader
          title="Wat onze klanten zeggen"
          subtitle="Meer dan 450 tevreden klanten gingen u voor. Lees hun ervaringen met Aluvera."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              product={testimonial.product}
              date={testimonial.date}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
