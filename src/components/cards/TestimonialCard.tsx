import { Icon } from '@/components/ui';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export function TestimonialCard({ name, location, rating, text, product, date }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name={i < rating ? 'starSolid' : 'star'}
            size="sm"
            className={i < rating ? 'text-amber-400' : 'text-slate-200'}
          />
        ))}
      </div>
      
      <blockquote className="text-slate-600 mb-4 flex-grow leading-relaxed">
        "{text}"
      </blockquote>
      
      <div className="pt-4 border-t border-slate-100">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{location}</div>
        <div className="text-xs text-emerald-600 mt-1">{product}</div>
      </div>
    </article>
  );
}
