'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader, Button, Icon } from '@/components/ui';
import { companyInfo } from '@/data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Offerte aanvragen',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neem contact op
            </h1>
            <p className="text-xl text-slate-300">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? 
              Wij staan klaar om u te helpen.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact info + form */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="phone" className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Telefoon</h3>
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      {companyInfo.contact.phone}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Ma-Vr: 08:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="email" className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">E-mail</h3>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      {companyInfo.contact.email}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="map" className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Showroom & Werkplaats</h3>
                    <address className="not-italic text-slate-600">
                      {companyInfo.contact.address.street}<br />
                      {companyInfo.contact.address.postalCode} {companyInfo.contact.address.city}
                    </address>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Icon name="clock" size="sm" className="mr-2 text-emerald-600" />
                  Openingstijden showroom
                </h3>
                <div className="space-y-2">
                  {companyInfo.openingHours.showroom.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-slate-600">{item.days}</span>
                      <span className="font-medium text-slate-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Stuur ons een bericht
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="check" size="lg" className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Bedankt voor uw bericht!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Wij nemen zo snel mogelijk contact met u op.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Nieuw bericht versturen
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Uw naam"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="06 - 12345678"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                          Onderwerp
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                        >
                          <option>Offerte aanvragen</option>
                          <option>Adviesgesprek plannen</option>
                          <option>Showroom bezoek</option>
                          <option>Service vraag</option>
                          <option>Anders</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                        placeholder="Vertel ons meer over uw wensen..."
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-slate-600">
                        Ik ga akkoord met het{' '}
                        <a href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                          privacybeleid
                        </a>
                        .
                      </label>
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
                      <Icon name="arrow" size="sm" className="ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Google Maps */}
      <Section background="white" id="showroom">
        <Container>
          <SectionHeader
            title="Bezoek onze showroom"
            subtitle="Kom langs in Helmond en bekijk onze veranda's in het echt. Parkeren is gratis."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  src={companyInfo.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aluvera locatie"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Routebeschrijving</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Met de auto</h4>
                  <p className="text-sm text-slate-600">
                    Neem afslag Helmond-Centrum en volg de borden richting industrieterrein. 
                    Gratis parkeergelegenheid voor de deur.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Met het OV</h4>
                  <p className="text-sm text-slate-600">
                    Station Helmond op 10 minuten fietsen. Bus 5 stopt op 200m afstand.
                  </p>
                </div>
              </div>
              
              <Button
                href={companyInfo.maps.linkUrl}
                external
                variant="outline"
                className="w-full"
              >
                Open in Google Maps
                <Icon name="arrow" size="sm" className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick contact CTA */}
      <section className="bg-emerald-600 py-12">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Direct contact?</h2>
              <p className="text-emerald-100">Bel ons voor persoonlijk advies.</p>
            </div>
            <a
              href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <Icon name="phone" className="mr-3" />
              {companyInfo.contact.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
