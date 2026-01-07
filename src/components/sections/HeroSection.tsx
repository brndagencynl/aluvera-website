import { Container, Button, Icon } from '@/components/ui';
import { companyInfo } from '@/data/company';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
      </div>

      <Container size="lg" className="relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <div className="flex items-center gap-1 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="starSolid" size="sm" className="text-amber-400 w-3 h-3" />
                ))}
              </div>
              <span className="text-emerald-400 text-sm font-medium">
                9.4 Klantwaardering | {companyInfo.stats.satisfiedCustomers}+ tevreden klanten
              </span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Vakmanschap en maatwerk voor{' '}
              <span className="text-emerald-400">uw droomveranda</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Bij Aluvera staat vakmanschap, innovatie en kwaliteit voorop. 
              Al onze aluminium veranda&apos;s en overkappingen worden 100% op maat gemaakt, 
              perfect afgestemd op uw wensen en de stijl van uw woning.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="/contact" size="lg">
                Gratis adviesgesprek
                <Icon name="arrow" size="sm" className="ml-2" />
              </Button>
              <Button 
                href="/verandas" 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white hover:text-slate-900"
              >
                Onze producten
              </Button>
            </div>
            
            {/* Trust badges row */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/10">
              {companyInfo.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Icon name={badge.icon} size="sm" className="text-emerald-400" />
                  </div>
                  <span className="font-medium text-sm">{badge.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Feature card (optional visual element) */}
          <div className="hidden lg:block relative">
            {/* Decorative card */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Icon name="home" className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Gratis Showroom Bezoek</div>
                  <div className="text-emerald-300 text-sm">In {companyInfo.contact.address.city}</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Bekijk onze veranda&apos;s in het echt en laat u vrijblijvend adviseren door onze specialisten.
              </p>
              <Button href="/contact" variant="white" size="sm" className="w-full">
                Afspraak maken
              </Button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-600/20 rounded-full blur-2xl" />
          </div>
        </div>
      </Container>

      {/* Bottom wave/curve decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
