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
    <Link href={`/verandas#${slug}`} className="group block h-full">
      <article className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col card-hover">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">{title}</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300" />
          {/* Plus icon on hover */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
            {description}
          </p>
          
          {/* Features */}
          {features && features.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-slate-600">
                  <Icon name="check" size="sm" className="text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* Link */}
          <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
            Meer informatie
            <Icon name="arrow" size="sm" className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
