import Link from 'next/link';
import Image from 'next/image';
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
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col card-hover">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
              {category}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Date */}
          <div className="flex items-center text-sm text-slate-500 mb-3">
            <Icon name="calendar" size="sm" className="mr-2 text-slate-400" />
            {date}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          
          {/* Read more link */}
          <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
            Lees verder
            <Icon name="arrow" size="sm" className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
