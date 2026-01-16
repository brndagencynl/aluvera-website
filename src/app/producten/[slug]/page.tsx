import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section, Button, Icon } from '@/components/ui';
import { Gallery, SpecsTable, FaqAccordion, CtaPanel } from '@/components/product';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product niet gevonden | Aluvera',
    };
  }

  return {
    title: `${product.title} | Aluvera`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Aluvera`,
      description: product.shortDescription,
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug, 3);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 pt-28 md:pt-36">
        <Container>
          <nav className="py-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/producten" className="text-slate-500 hover:text-emerald-600 transition-colors">
                  Producten
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium">{product.title}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-100 pb-12 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Gallery */}
            <div>
              <Gallery images={product.gallery} productTitle={product.title} />
            </div>

            {/* Right: Info */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {product.intro}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Icon name="check" size="sm" className="text-emerald-600 w-4 h-4" />
                    </div>
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href={product.cta.primaryHref} size="lg">
                  {product.cta.primaryLabel}
                  <Icon name="arrow" size="sm" className="ml-2" />
                </Button>
                <Button href={product.cta.secondaryHref} variant="outline" size="lg">
                  {product.cta.secondaryLabel}
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-emerald-500" />
                  <span>10 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-emerald-500" />
                  <span>Gratis inmeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size="sm" className="text-emerald-500" />
                  <span>Eigen montage</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
                Specificaties
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Technische details
              </h2>
            </div>
            <SpecsTable specs={product.specs} />
          </div>
        </Container>
      </Section>

      {/* Options */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
              Uitbreidingen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Opties & accessoires
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Maak uw {product.title.toLowerCase()} compleet met deze populaire uitbreidingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {product.options.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="sparkles" className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
                Veelgestelde vragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Alles over {product.title.toLowerCase()}
              </h2>
            </div>
            <FaqAccordion faqs={product.faqs} />
          </div>
        </Container>
      </Section>

      {/* CTA Panel */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <CtaPanel cta={product.cta} productTitle={product.title.toLowerCase()} />
          </div>
        </Container>
      </Section>

      {/* Related Products */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
              Meer ontdekken
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Gerelateerde producten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <article
                key={relatedProduct.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={relatedProduct.heroImage}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {relatedProduct.shortDescription}
                  </p>
                  <Link
                    href={`/producten/${relatedProduct.slug}`}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Bekijk product
                    <Icon name="arrow" size="sm" className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 lg:hidden z-40">
        <div className="flex gap-3">
          <Button href={product.cta.primaryHref} className="flex-1">
            {product.cta.primaryLabel}
          </Button>
          <Button href={product.cta.secondaryHref} variant="outline" className="flex-1">
            Configurator
          </Button>
        </div>
      </div>

      {/* Spacer for sticky CTA on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
