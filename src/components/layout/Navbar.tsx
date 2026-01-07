'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container, Button, Icon } from '@/components/ui';
import { navigation, companyInfo } from '@/data/company';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <Container>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-emerald-400 transition-colors">
                <Icon name="phone" size="sm" className="mr-2" />
                {companyInfo.contact.phone}
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center hover:text-emerald-400 transition-colors">
                <Icon name="email" size="sm" className="mr-2" />
                {companyInfo.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="map" size="sm" />
              <span>Showroom: {companyInfo.contact.address.city}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900">Aluvera</span>
              <span className="hidden sm:block text-xs text-slate-500">Aluminium Veranda's</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Offerte aanvragen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size="lg" />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <Container>
            <div className="py-4 space-y-2">
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
              <div className="pt-4 border-t border-slate-100">
                <Button href="/contact" className="w-full">
                  Offerte aanvragen
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
