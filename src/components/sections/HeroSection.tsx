import { Container, Button, Icon } from '@/components/ui';
import { companyInfo } from '@/data/company';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="sparkles" size="sm" className="text-emerald-400 mr-2" />
            <span className="text-emerald-400 text-sm font-medium">Specialist in aluminium veranda's sinds 2009</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Uw droomveranda <br />
            <span className="text-emerald-400">vakkundig gerealiseerd</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Geniet het hele jaar door van uw tuin met een aluminium veranda op maat. 
            Stijlvol, duurzaam en perfect afgestemd op uw wensen. 
            Ontdek de mogelijkheden voor uw woning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="/contact" size="lg">
              Offerte aanvragen
              <Icon name="arrow" size="sm" className="ml-2" />
            </Button>
            <Button href="https://configurator.aluvera.nl" variant="outline" size="lg" external className="border-white/30 text-white hover:bg-white hover:text-slate-900">
              Start configurator
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
            {companyInfo.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Icon name={badge.icon} size="sm" className="text-emerald-400" />
                </div>
                <span className="font-medium">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent hidden lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
