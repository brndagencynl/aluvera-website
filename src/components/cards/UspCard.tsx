import { Icon } from '@/components/ui';

interface UspCardProps {
  icon: string;
  title: string;
  description: string;
}

export function UspCard({ icon, title, description }: UspCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
      <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
        <Icon name={icon} size="lg" className="text-emerald-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </article>
  );
}
