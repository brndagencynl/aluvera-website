interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient' | 'primary' | 'pattern';
  id?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  className = '', 
  background = 'white', 
  id,
  spacing = 'md' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-b from-slate-50 to-white',
    primary: 'bg-emerald-600 text-white',
    pattern: 'bg-slate-50 bg-dots-pattern',
  };

  const spacings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section id={id} className={`${spacings[spacing]} ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  label,
  centered = true, 
  className = '',
  dark = false 
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${dark ? 'text-emerald-300' : 'text-emerald-600'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
