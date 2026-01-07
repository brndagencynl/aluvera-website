import { Container, Section, SectionHeader, Icon } from '@/components/ui';
import { TestimonialCard } from '@/components/cards';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <Section background="white" id="reviews" spacing="lg">
      <Container size="lg">
        {/* Header with rating badge */}
        <div className="text-center mb-12 md:mb-16">
          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="starSolid" size="sm" className="text-amber-400" />
              ))}
            </div>
            <span className="text-emerald-700 font-semibold">9.4 / 10</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-600">98% beveelt Aluvera aan</span>
          </div>
          
          <SectionHeader
            label="Klantervaringen"
            title="Wat onze klanten zeggen"
            subtitle="Meer dan 450 tevreden klanten gingen u voor. Lees hun ervaringen met Aluvera."
            className="!mb-0"
          />
        </div>
        
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
