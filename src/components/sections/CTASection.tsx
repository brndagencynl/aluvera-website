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
}

export function CTASection({
  title = "Klaar voor uw droomveranda?",
  subtitle = "Plan een vrijblijvend adviesgesprek en ontdek de mogelijkheden voor uw woning.",
  primaryCta = { label: "Plan adviesgesprek", href: "/contact" },
  secondaryCta = { label: "Bekijk projecten", href: "/projecten" },
  showContactInfo = true,
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-16 md:py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-emerald-100">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button href={primaryCta.href} variant="secondary" size="lg">
            {primaryCta.label}
            <Icon name="arrow" size="sm" className="ml-2" />
          </Button>
          <Button href={secondaryCta.href} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-emerald-700">
            {secondaryCta.label}
          </Button>
        </div>

        {showContactInfo && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-emerald-500/30">
            <a
              href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center text-white hover:text-emerald-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                <Icon name="phone" className="text-white" />
              </div>
              <div>
                <div className="text-emerald-200 text-sm">Bel ons direct</div>
                <div className="font-semibold text-lg">{companyInfo.contact.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center text-white hover:text-emerald-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                <Icon name="email" className="text-white" />
              </div>
              <div>
                <div className="text-emerald-200 text-sm">Stuur een e-mail</div>
                <div className="font-semibold text-lg">{companyInfo.contact.email}</div>
              </div>
            </a>

            <div className="flex items-center text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                <Icon name="map" className="text-white" />
              </div>
              <div>
                <div className="text-emerald-200 text-sm">Bezoek onze showroom</div>
                <div className="font-semibold text-lg">{companyInfo.contact.address.city}</div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
