import { Container, Button, Icon } from '@/components/ui';
import { companyInfo } from '@/data/company';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showContactInfo?: boolean;
  variant?: 'default' | 'dark';
}

export function CTASection({
  title = "Maak vrijblijvend een afspraak",
  subtitle = "U bent van harte welkom in onze showroom! Daar kunt u zich geheel vrijblijvend laten adviseren en onze veranda's in het echt bekijken.",
  primaryCta = { label: "Afspraak maken", href: "/contact" },
  secondaryCta = { label: "Bel ons direct", href: `tel:${companyInfo.contact.phone.replace(/\s/g, '')}` },
  showContactInfo = true,
  variant = 'default',
}: CTASectionProps) {
  const isDark = variant === 'dark';
  
  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-slate-900' : 'bg-emerald-600'} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-1/2 h-full ${isDark ? 'bg-slate-800/50' : 'bg-emerald-500/50'} transform skew-x-12 translate-x-1/4`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 ${isDark ? 'bg-emerald-600/10' : 'bg-white/10'} rounded-full -translate-x-1/2 translate-y-1/2`} />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-emerald-100'} mb-8 max-w-xl`}>
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={primaryCta.href} 
                variant="white" 
                size="lg"
              >
                {primaryCta.label}
                <Icon name="arrow" size="sm" className="ml-2" />
              </Button>
              <Button 
                href={secondaryCta.href} 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Icon name="phone" size="sm" className="mr-2" />
                {secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Contact info card */}
          {showContactInfo && (
            <div className={`${isDark ? 'bg-slate-800' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-8 border ${isDark ? 'border-slate-700' : 'border-white/20'}`}>
              <div className="grid gap-6">
                {/* Phone */}
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center text-white hover:text-emerald-300 transition-colors group"
                >
                  <div className={`w-14 h-14 ${isDark ? 'bg-emerald-600' : 'bg-white/20'} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon name="phone" size="lg" className="text-white" />
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-emerald-200'}`}>Bel ons direct</div>
                    <div className="font-bold text-xl">{companyInfo.contact.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center text-white hover:text-emerald-300 transition-colors group"
                >
                  <div className={`w-14 h-14 ${isDark ? 'bg-slate-700' : 'bg-white/20'} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon name="email" size="lg" className="text-white" />
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-emerald-200'}`}>Stuur een e-mail</div>
                    <div className="font-bold text-lg">{companyInfo.contact.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center text-white">
                  <div className={`w-14 h-14 ${isDark ? 'bg-slate-700' : 'bg-white/20'} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon name="map" size="lg" className="text-white" />
                  </div>
                  <div>
                    <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-emerald-200'}`}>Bezoek onze showroom</div>
                    <div className="font-bold text-lg">
                      {companyInfo.contact.address.street}, {companyInfo.contact.address.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
