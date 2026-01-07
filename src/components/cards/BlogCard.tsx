import Link from 'next/link';
import { Icon } from '@/components/ui';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

export function BlogCard({ title, excerpt, image, date, slug, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Blog afbeelding</span>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-slate-500 mb-3">
            <Icon name="calendar" size="sm" className="mr-2" />
            {date}
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
            {excerpt}
          </p>
          
          <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
            Lees meer
            <Icon name="chevronRight" size="sm" className="ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
