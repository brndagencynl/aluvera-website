import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { BlogCard } from '@/components/cards';
import { blogPosts } from '@/data/blog';

export function BlogSection() {
  return (
    <Section background="gray" id="blog" spacing="lg">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            label="Nieuws & Tips"
            title="De laatste ontwikkelingen"
            subtitle="Tips, nieuws en inspiratie voor uw buitenruimte."
            centered={false}
            className="!mb-0"
          />
          <Button href="/blog" variant="outline" size="sm" className="hidden md:flex">
            Alle artikelen
            <Icon name="arrow" size="sm" className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button href="/blog" variant="outline">
            Alle artikelen
            <Icon name="arrow" size="sm" className="ml-2" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
