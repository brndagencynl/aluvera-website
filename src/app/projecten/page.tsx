'use client';

import { useState, useMemo } from 'react';
import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { ProjectCard } from '@/components/cards';
import { projects, projectFilters } from '@/data/projects';

export default function ProjectenPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedRoof, setSelectedRoof] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const colorMatch = selectedColor === 'all' || project.color === selectedColor;
      const roofMatch = selectedRoof === 'all' || project.roofType === selectedRoof;
      return typeMatch && colorMatch && roofMatch;
    });
  }, [selectedType, selectedColor, selectedRoof]);

  const resetFilters = () => {
    setSelectedType('all');
    setSelectedColor('all');
    setSelectedRoof('all');
  };

  const hasActiveFilters = selectedType !== 'all' || selectedColor !== 'all' || selectedRoof !== 'all';

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Projecten
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Bekijk onze gerealiseerde veranda's en overkappingen. Laat u inspireren 
              door de mogelijkheden voor uw eigen buitenruimte.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center">
                <Icon name="check" size="sm" className="text-emerald-400 mr-2" />
                <span>{projects.length}+ projecten</span>
              </div>
              <div className="flex items-center">
                <Icon name="map" size="sm" className="text-emerald-400 mr-2" />
                <span>Regio Helmond</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters & Projects */}
      <Section background="gray">
        <Container>
          {/* Filters */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center">
                <Icon name="filter" size="sm" className="mr-2" />
                Filters
              </h2>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Reset filters
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-slate-700 mb-2">
                  Type
                </label>
                <select
                  id="type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                >
                  {projectFilters.types.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="color-filter" className="block text-sm font-medium text-slate-700 mb-2">
                  Kleur
                </label>
                <select
                  id="color-filter"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                >
                  {projectFilters.colors.map((color) => (
                    <option key={color.value} value={color.value}>
                      {color.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="roof-filter" className="block text-sm font-medium text-slate-700 mb-2">
                  Daktype
                </label>
                <select
                  id="roof-filter"
                  value={selectedRoof}
                  onChange={(e) => setSelectedRoof(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                >
                  {projectFilters.roofTypes.map((roof) => (
                    <option key={roof.value} value={roof.value}>
                      {roof.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 text-slate-600">
            <span className="font-semibold text-slate-900">{filteredProjects.length}</span> projecten gevonden
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
              <Icon name="filter" size="xl" className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Geen projecten gevonden
              </h3>
              <p className="text-slate-600 mb-4">
                Probeer andere filters te selecteren.
              </p>
              <Button onClick={resetFilters} variant="outline">
                Reset filters
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Uw project hier?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Neem contact op voor een vrijblijvend adviesgesprek en ontdek wat wij voor u kunnen betekenen.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Neem contact op
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
