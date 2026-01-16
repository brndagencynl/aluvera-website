import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section, Button, Icon } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Producten | Aluvera - Aluminium Veranda\'s & Overkappingen',
  description: 'Ontdek ons complete assortiment aluminium veranda\'s, glazen overkappingen, schuifwanden en zonwering. Kwaliteit en vakmanschap voor uw buitenruimte.',
  openGraph: {
    title: 'Producten | Aluvera',
    description: 'Ontdek ons complete assortiment aluminium veranda\'s en overkappingen.',
  },
};

export default function ProductenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze Producten
            </h1>
            <p className="text-xl text-slate-300">
              Van klassieke veranda&apos;s tot moderne glazen overkappingen. Ontdek onze 
              hoogwaardige aluminium oplossingen voor uw buitenruimte.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.heroImage}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Highlights preview */}
                  <ul className="space-y-1.5 mb-5">
                    {product.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm text-slate-600">
                        <Icon name="check" size="sm" className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/producten/${product.slug}`}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/link"
                  >
                    Bekijk product
                    <Icon name="arrow" size="sm" className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Info Banner */}
      <section className="bg-emerald-600 py-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Niet gevonden wat u zoekt?
              </h2>
              <p className="text-emerald-100">
                Wij maken ook volledig maatwerk. Neem contact op voor een persoonlijk adviesgesprek.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="secondary" size="lg">
                Neem contact op
              </Button>
              <Button href="/configurator" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-emerald-700">
                Start configurator
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
