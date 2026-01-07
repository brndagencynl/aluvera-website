import { Icon } from '@/components/ui';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export function TestimonialCard({ name, location, rating, text, product }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full card-hover">
      {/* Rating stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name={i < rating ? 'starSolid' : 'star'}
            size="sm"
            className={i < rating ? 'text-amber-400' : 'text-slate-200'}
          />
        ))}
        <span className="ml-2 text-sm font-semibold text-slate-900">{rating}.0</span>
      </div>
      
      {/* Quote */}
      <blockquote className="text-slate-700 mb-6 flex-grow leading-relaxed">
        &ldquo;{text}&rdquo;
      </blockquote>
      
      {/* Author info */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
          <span className="text-emerald-600 font-semibold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="text-sm text-slate-500">{location}</div>
        </div>
      </div>
      
      {/* Product badge */}
      <div className="mt-3">
        <span className="inline-flex items-center text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
          <Icon name="check" size="sm" className="mr-1" />
          {product}
        </span>
      </div>
    </article>
  );
}
