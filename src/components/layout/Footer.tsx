import Link from 'next/link';
import { Container, Button, Icon } from '@/components/ui';
import { companyInfo, navigation } from '@/data/company';

export function Footer() {
  return (
    <footer className="bg-slate-900">
      {/* Pre-footer CTA band - Kroonkozijn style */}
      <div className="bg-emerald-600 py-12 md:py-16">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Maak gratis een afspraak met een adviseur
              </h2>
              <p className="text-emerald-100 text-lg">
                Bezoek onze showroom in {companyInfo.contact.address.city} of vraag een huisbezoek aan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="white" size="lg">
                Afspraak maken
                <Icon name="arrow" size="sm" className="ml-2" />
              </Button>
              <Button 
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Icon name="phone" size="sm" className="mr-2" />
                {companyInfo.contact.phone}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <div className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Company info - takes 4 columns */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Aluvera</span>
                </div>
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {companyInfo.description} Al {companyInfo.stats.yearsExperience} jaar specialist in hoogwaardige aluminium veranda&apos;s.
              </p>
              
              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="starSolid" size="sm" className="text-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">9.4 / 10</div>
                  <div className="text-slate-400 text-xs">{companyInfo.stats.satisfiedCustomers}+ tevreden klanten</div>
                </div>
              </div>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a
                  href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-600 transition-colors">
                    <Icon name="phone" size="sm" />
                  </span>
                  {companyInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-600 transition-colors">
                    <Icon name="email" size="sm" />
                  </span>
                  {companyInfo.contact.email}
                </a>
                <div className="flex items-start text-slate-300">
                  <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Icon name="map" size="sm" />
                  </span>
                  <span className="pt-2">
                    {companyInfo.contact.address.street}<br />
                    {companyInfo.contact.address.postalCode} {companyInfo.contact.address.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Products - takes 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-white text-lg mb-5">Producten</h3>
              <ul className="space-y-3">
                {navigation.footer.products.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center group"
                    >
                      <Icon name="chevronRight" size="sm" className="mr-1 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service - takes 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-white text-lg mb-5">Service</h3>
              <ul className="space-y-3">
                {navigation.footer.service.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center group"
                    >
                      <Icon name="chevronRight" size="sm" className="mr-1 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening hours - takes 4 columns */}
            <div className="lg:col-span-4">
              <h3 className="font-bold text-white text-lg mb-5">Showroom Bezoeken</h3>
              <div className="bg-slate-800 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-3">
                  <Icon name="clock" size="sm" />
                  Openingstijden
                </div>
                <ul className="space-y-2">
                  {companyInfo.openingHours.showroom.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-slate-400">{item.days}</span>
                      <span className="text-white font-medium">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* USPs */}
              <div className="space-y-2">
                <div className="flex items-center text-slate-300 text-sm">
                  <Icon name="check" size="sm" className="text-emerald-500 mr-2" />
                  {companyInfo.stats.projectsCompleted}+ projecten gerealiseerd
                </div>
                <div className="flex items-center text-slate-300 text-sm">
                  <Icon name="check" size="sm" className="text-emerald-500 mr-2" />
                  {companyInfo.stats.warrantyYears} jaar garantie
                </div>
                <div className="flex items-center text-slate-300 text-sm">
                  <Icon name="check" size="sm" className="text-emerald-500 mr-2" />
                  Eigen monteurs
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6">
        <Container size="lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Aluvera. Alle rechten voorbehouden.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacybeleid
              </Link>
              <Link href="/voorwaarden" className="hover:text-emerald-400 transition-colors">
                Algemene voorwaarden
              </Link>
              <Link href="/sitemap" className="hover:text-emerald-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
