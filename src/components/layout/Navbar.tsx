'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container, Button, Icon } from '@/components/ui';
import { navigation, companyInfo } from '@/data/company';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
      {/* Top bar - Kroonkozijn style */}
      <div className="bg-slate-900 text-white py-2.5 hidden lg:block">
        <Container size="lg">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <a 
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} 
                className="flex items-center hover:text-emerald-400 transition-colors group"
              >
                <span className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-2 group-hover:bg-emerald-500 transition-colors">
                  <Icon name="phone" size="sm" className="text-white" />
                </span>
                <span className="font-medium">{companyInfo.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.contact.email}`} 
                className="flex items-center hover:text-emerald-400 transition-colors"
              >
                <Icon name="email" size="sm" className="mr-2 text-slate-400" />
                {companyInfo.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center text-slate-300">
                <Icon name="map" size="sm" className="mr-2 text-slate-400" />
                <span>Showroom: {companyInfo.contact.address.city}</span>
              </div>
              {/* Trust badge */}
              <div className="flex items-center gap-2 bg-emerald-600/20 px-3 py-1 rounded-full">
                <Icon name="starSolid" size="sm" className="text-emerald-400" />
                <span className="text-emerald-300 font-medium">9.4 Klantwaardering</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container size="lg">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/AluVera-logo-def.png"
              alt="Aluvera"
              width={220}
              height={64}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/configurator" variant="ghost" size="sm">
              <Icon name="filter" size="sm" className="mr-1" />
              Configurator
            </Button>
            <Button href="/contact" size="sm">
              Offerte aanvragen
              <Icon name="arrow" size="sm" className="ml-1" />
            </Button>
          </div>

          {/* Mobile: phone + menu */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
              className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white"
              aria-label="Bel ons"
            >
              <Icon name="phone" size="sm" />
            </a>
            <button
              className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} size="md" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <Container>
            <div className="py-4 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                <Button href="/configurator" variant="outline" className="w-full">
                  <Icon name="filter" size="sm" className="mr-2" />
                  Start Configurator
                </Button>
                <Button href="/contact" className="w-full">
                  Offerte aanvragen
                  <Icon name="arrow" size="sm" className="ml-2" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
