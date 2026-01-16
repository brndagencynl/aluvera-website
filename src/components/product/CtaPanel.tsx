import Link from 'next/link';
import { Icon } from '@/components/ui';
import type { ProductCta } from '@/data/products';

interface CtaPanelProps {
  cta: ProductCta;
  productTitle: string;
}

export function CtaPanel({ cta, productTitle }: CtaPanelProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-3">
        Interesse in {productTitle}?
      </h3>
      <p className="text-slate-300 mb-6">
        Vraag vrijblijvend een offerte aan of configureer uw ideale oplossing online.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={cta.primaryHref}
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
        >
          {cta.primaryLabel}
          <Icon name="arrow" size="sm" className="ml-2" />
        </Link>
        <Link
          href={cta.secondaryHref}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
        >
          {cta.secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
