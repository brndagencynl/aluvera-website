interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  id?: string;
}

export function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-emerald-50 to-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
