import { Icon } from '@/components/ui';

interface UspCardProps {
  icon: string;
  title: string;
  description: string;
}

export function UspCard({ icon, title, description }: UspCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group card-hover">
      {/* Icon */}
      <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
        <Icon name={icon} size="lg" className="text-emerald-600" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}
