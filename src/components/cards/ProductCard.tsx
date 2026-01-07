import Link from 'next/link';
import { Icon } from '@/components/ui';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  features?: string[];
}

export function ProductCard({ title, description, image, slug, features }: ProductCardProps) {
  return (
    <Link href={`/verandas#${slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Afbeelding: {title}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 flex-grow">{description}</p>
          
          {features && features.length > 0 && (
            <ul className="space-y-1 mb-4">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-slate-500">
                  <Icon name="check" size="sm" className="text-emerald-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          <span className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
            Meer informatie
            <Icon name="chevronRight" size="sm" className="ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
