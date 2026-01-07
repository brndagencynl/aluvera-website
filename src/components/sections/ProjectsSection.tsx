import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { ProjectCard } from '@/components/cards';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <Section background="gray" id="realisaties" spacing="lg">
      <Container size="lg">
        <SectionHeader
          label="Referenties"
          title="Onze realisaties"
          subtitle="Bekijk een selectie van onze recente projecten en laat u inspireren voor uw eigen droomveranda. Al meer dan 500 projecten succesvol opgeleverd."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/projecten" variant="outline" size="lg">
            Bekijk alle projecten
            <Icon name="arrow" size="sm" className="ml-2" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
