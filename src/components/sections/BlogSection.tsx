import { Container, Section, SectionHeader } from '@/components/ui';
import { BlogCard } from '@/components/cards';
import { blogPosts } from '@/data/blog';

export function BlogSection() {
  return (
    <Section background="gray" id="blog">
      <Container>
        <SectionHeader
          title="Laatste updates"
          subtitle="Tips, nieuws en inspiratie voor uw buitenruimte."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
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
      </Container>
    </Section>
  );
}
