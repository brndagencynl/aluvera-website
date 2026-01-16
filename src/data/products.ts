export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductOption {
  title: string;
  description: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductCta {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  specs: ProductSpec[];
  options: ProductOption[];
  faqs: ProductFaq[];
  cta: ProductCta;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'klassieke-veranda',
    title: 'Klassieke Veranda',
    shortDescription: 'Tijdloze elegantie met moderne technieken. Perfect voor elk type woning met een traditionele uitstraling.',
    intro: 'Onze klassieke veranda\'s combineren tijdloze elegantie met de nieuwste bouwtechnieken. Het aluminium frame is onderhoudsvriendelijk en duurzaam, terwijl het klassieke design perfect past bij zowel traditionele als moderne woningen. Geniet het hele jaar door van uw tuin met optimaal comfort.',
    heroImage: '/mock/product-1.jpg',
    gallery: [
      '/mock/product-1.jpg',
      '/mock/detail-1.jpg',
      '/mock/detail-2.jpg',
      '/mock/project-1.jpg',
      '/mock/project-2.jpg',
      '/mock/detail-3.jpg',
    ],
    highlights: [
      'Tijdloos klassiek ontwerp',
      'Hoogwaardig aluminium frame',
      'Geïntegreerde hemelwaterafvoer',
      'Keuze uit 200+ RAL kleuren',
      'Isolerend glas standaard',
      '10 jaar garantie op constructie',
    ],
    specs: [
      { label: 'Materiaal', value: 'Aluminium 6063-T6' },
      { label: 'Kleuren', value: '200+ RAL kleuren beschikbaar' },
      { label: 'Dakopties', value: 'Glas, polycarbonaat, geïsoleerde panelen' },
      { label: 'Afwerking', value: 'Poedercoating (structuur of glad)' },
      { label: 'Montage', value: 'Professionele montage door eigen team' },
      { label: 'Garantie', value: '10 jaar op constructie, 5 jaar op afwerking' },
      { label: 'Levertijd', value: '6-8 weken na opdracht' },
    ],
    options: [
      { title: 'LED-verlichting', description: 'Sfeervolle ingebouwde LED-verlichting in het frame voor gezellige avonden.' },
      { title: 'Zonwering', description: 'Geïntegreerde screens of knikarmschermen voor optimale zonbescherming.' },
      { title: 'Glazen schuifwanden', description: 'Sluit uw veranda volledig af met elegante glazen schuifpanelen.' },
      { title: 'Infrarood verwarming', description: 'Geniet ook op koelere dagen van uw veranda met stijlvolle infraroodpanelen.' },
    ],
    faqs: [
      { q: 'Hoe lang duurt de installatie?', a: 'De installatie van een klassieke veranda duurt gemiddeld 2-3 werkdagen, afhankelijk van de grootte en gekozen opties.' },
      { q: 'Is onderhoud nodig?', a: 'Minimaal onderhoud. Het aluminium frame is corrosiebestendig en hoeft alleen af en toe gereinigd te worden met water en een zachte doek.' },
      { q: 'Kan ik zelf een kleur kiezen?', a: 'Absoluut! U kunt kiezen uit meer dan 200 RAL kleuren. Onze adviseur helpt u graag bij de perfecte match met uw woning.' },
      { q: 'Wat is inbegrepen in de prijs?', a: 'De prijs omvat het complete aluminium frame, dakbedekking, hemelwaterafvoer, en professionele montage door ons eigen team.' },
      { q: 'Hebben jullie een showroom?', a: 'Ja, bezoek onze showroom in Helmond om onze veranda\'s in het echt te bekijken. Maak een afspraak voor persoonlijk advies.' },
    ],
    cta: {
      primaryLabel: 'Offerte aanvragen',
      primaryHref: '/contact',
      secondaryLabel: 'Start configurator',
      secondaryHref: '/configurator',
    },
  },
  {
    id: '2',
    slug: 'moderne-veranda',
    title: 'Moderne Veranda',
    shortDescription: 'Strakke lijnen en minimalistisch design voor de hedendaagse woning. Pure elegantie.',
    intro: 'De moderne veranda kenmerkt zich door strakke lijnen, slanke profielen en een minimalistisch design. Perfect voor hedendaagse architectuur. Het innovatieve drainagesysteem is onzichtbaar verwerkt, wat zorgt voor een clean en tijdloos uiterlijk dat jarenlang meegaat.',
    heroImage: '/mock/product-2.jpg',
    gallery: [
      '/mock/product-2.jpg',
      '/mock/detail-2.jpg',
      '/mock/detail-3.jpg',
      '/mock/project-3.jpg',
      '/mock/project-4.jpg',
      '/mock/detail-4.jpg',
    ],
    highlights: [
      'Ultra-slanke profielen (slechts 50mm)',
      'Onzichtbaar geïntegreerde afwatering',
      'Frameless glazen hoeken mogelijk',
      'Smart home integratie beschikbaar',
      'Maximale transparantie',
      'Award-winnend design',
    ],
    specs: [
      { label: 'Materiaal', value: 'Aluminium 6063-T6 met thermische onderbreking' },
      { label: 'Kleuren', value: '200+ RAL kleuren, ook duo-color mogelijk' },
      { label: 'Dakopties', value: 'Gehard glas, triple-glas, solar glas' },
      { label: 'Afwerking', value: 'Structuurlak of hoogglans poedercoating' },
      { label: 'Montage', value: 'Professionele montage door gecertificeerd team' },
      { label: 'Garantie', value: '10 jaar op constructie, 5 jaar op afwerking' },
      { label: 'Levertijd', value: '8-10 weken na opdracht' },
    ],
    options: [
      { title: 'Smart Home integratie', description: 'Bedien verlichting, screens en verwarming via app of spraakbesturing.' },
      { title: 'Frameless schuifwanden', description: 'Volledig transparante wanden zonder zichtbare profielen voor maximaal uitzicht.' },
      { title: 'Geïntegreerde speakers', description: 'Onzichtbaar ingebouwde Bluetooth speakers voor ambient muziek.' },
      { title: 'Solar panelen', description: 'Integreer zonpanelen in het dak voor duurzame energieopwekking.' },
    ],
    faqs: [
      { q: 'Wat maakt de moderne veranda anders?', a: 'De ultra-slanke profielen en het onzichtbare drainagesysteem zorgen voor een minimalistisch design dat perfect past bij moderne architectuur.' },
      { q: 'Is smart home integratie complex?', a: 'Nee, onze systemen werken met alle gangbare platforms zoals Apple HomeKit, Google Home en Amazon Alexa.' },
      { q: 'Kan ik het design aanpassen?', a: 'Zeker, elke veranda wordt op maat gemaakt. Samen met onze ontwerpers creëert u uw ideale buitenruimte.' },
      { q: 'Hoe zit het met isolatie?', a: 'Onze moderne veranda\'s hebben thermisch onderbroken profielen en kunnen voorzien worden van triple-glas voor optimale isolatie.' },
    ],
    cta: {
      primaryLabel: 'Offerte aanvragen',
      primaryHref: '/contact',
      secondaryLabel: 'Start configurator',
      secondaryHref: '/configurator',
    },
  },
  {
    id: '3',
    slug: 'glazen-overkapping',
    title: 'Glazen Overkapping',
    shortDescription: 'Maximaal licht met optimale bescherming tegen de elementen. Transparant genieten.',
    intro: 'Een glazen overkapping biedt het beste van twee werelden: optimale bescherming tegen regen en wind, terwijl u volop geniet van natuurlijk daglicht. Het gelaagde veiligheidsglas is zelfzuiverend en extreem sterk, waardoor u zorgeloos kunt genieten van uw buitenruimte.',
    heroImage: '/mock/product-3.jpg',
    gallery: [
      '/mock/product-3.jpg',
      '/mock/detail-1.jpg',
      '/mock/detail-3.jpg',
      '/mock/project-5.jpg',
      '/mock/project-6.jpg',
      '/mock/detail-2.jpg',
    ],
    highlights: [
      'Zelfzuiverend glas beschikbaar',
      'Gelaagd veiligheidsglas (VSG)',
      'Maximale lichtinval',
      'UV-werend coating optioneel',
      'Minimaal onderhoud nodig',
      'Geschikt voor grote overspanningen',
    ],
    specs: [
      { label: 'Materiaal', value: 'Aluminium frame met VSG beglazing' },
      { label: 'Kleuren', value: '200+ RAL kleuren beschikbaar' },
      { label: 'Glasopties', value: 'Helder, mat, zelfzuiverend, solar control' },
      { label: 'Afwerking', value: 'Poedercoating met 15 jaar kleurgarantie' },
      { label: 'Montage', value: 'Professionele montage inclusief' },
      { label: 'Garantie', value: '10 jaar op constructie, 10 jaar op glas' },
      { label: 'Levertijd', value: '6-8 weken na opdracht' },
    ],
    options: [
      { title: 'Zelfzuiverend glas', description: 'Speciaal coating dat vuil afbreekt en door regen wordt afgespoeld.' },
      { title: 'LED spotjes', description: 'Ingebouwde LED spots in de glaslatten voor sfeervolle verlichting.' },
      { title: 'Solar control glas', description: 'Houdt tot 60% van de warmte buiten zonder verlies van licht.' },
      { title: 'Privacy glas', description: 'Melkglas of satijnglas voor extra privacy zonder licht te verliezen.' },
    ],
    faqs: [
      { q: 'Is het glas veilig?', a: 'Absoluut. Wij gebruiken uitsluitend gelaagd veiligheidsglas (VSG) dat bij breuk aan elkaar blijft plakken.' },
      { q: 'Hoe reinig ik het glasdak?', a: 'Met zelfzuiverend glas is vrijwel geen onderhoud nodig. Anders volstaat een jaarlijkse reiniging met water.' },
      { q: 'Wordt het niet te warm onder glas?', a: 'Met solar control glas en optionele zonwering blijft het aangenaam, zelfs op warme dagen.' },
      { q: 'Hoe groot kan een glazen overkapping zijn?', a: 'Dankzij ons verstevigde profielsysteem zijn overspanningen tot 6 meter zonder tussenliggende kolommen mogelijk.' },
    ],
    cta: {
      primaryLabel: 'Offerte aanvragen',
      primaryHref: '/contact',
      secondaryLabel: 'Start configurator',
      secondaryHref: '/configurator',
    },
  },
  {
    id: '4',
    slug: 'schuifwanden',
    title: 'Schuifwanden',
    shortDescription: 'Flexibel genieten van uw buitenruimte, het hele jaar door. Open of dicht, u bepaalt.',
    intro: 'Met glazen schuifwanden bepaalt u zelf hoeveel u uw veranda opent. Bij mooi weer schuift u de panelen volledig open voor maximale ventilatie. Bij regen of wind sluit u ze eenvoudig voor een beschutte ruimte. De innovatieve geleiding zorgt voor fluisterstil en soepel schuiven.',
    heroImage: '/mock/product-4.jpg',
    gallery: [
      '/mock/product-4.jpg',
      '/mock/detail-4.jpg',
      '/mock/detail-1.jpg',
      '/mock/project-2.jpg',
      '/mock/project-4.jpg',
      '/mock/detail-3.jpg',
    ],
    highlights: [
      'Fluisterstille geleiding',
      'Panelen stapelbaar tot 90% opening',
      'Kindveilige vergrendeling',
      'Inbraakwerend glas beschikbaar',
      'Geen drempel mogelijk (vlakke overgang)',
      'Eenvoudige éénhandsbediening',
    ],
    specs: [
      { label: 'Materiaal', value: 'Aluminium met RVS geleiding' },
      { label: 'Kleuren', value: '200+ RAL kleuren beschikbaar' },
      { label: 'Glasopties', value: 'Enkel, dubbel, triple, inbraakwerend' },
      { label: 'Afwerking', value: 'Poedercoating of geanodiseerd' },
      { label: 'Montage', value: 'Professionele montage door specialist' },
      { label: 'Garantie', value: '10 jaar op profielen, 5 jaar op hang- en sluitwerk' },
      { label: 'Levertijd', value: '6-8 weken na inmeting' },
    ],
    options: [
      { title: 'Vloergeleiding', description: 'Keuze uit opbouw rail of verzonken rail voor vlakke overgang.' },
      { title: 'Elektrische bediening', description: 'Op afstand bedienbare schuifpanelen via afstandsbediening of app.' },
      { title: 'Inbraakwerend pakket', description: 'RC2 gecertificeerd met speciaal glas en verstevigde sluitpunten.' },
      { title: 'Geïntegreerde horren', description: 'Schuifbare horpanelen voor insectenvrij genieten bij open wanden.' },
    ],
    faqs: [
      { q: 'Hoeveel panelen kunnen er open?', a: 'Afhankelijk van de configuratie kan tot 90% van de opening vrij gemaakt worden door panelen te stapelen.' },
      { q: 'Zijn de schuifwanden waterdicht?', a: 'Ja, de profielen hebben een speciaal afwateringssysteem dat water naar buiten leidt.' },
      { q: 'Kan ik de panelen zelf monteren?', a: 'Wij adviseren professionele montage voor optimale werking en behoud van garantie.' },
      { q: 'Hoe onderhoud ik de geleiding?', a: 'Eén keer per jaar de rails reinigen en de geleiding licht smeren met siliconenspray.' },
    ],
    cta: {
      primaryLabel: 'Offerte aanvragen',
      primaryHref: '/contact',
      secondaryLabel: 'Start configurator',
      secondaryHref: '/configurator',
    },
  },
  {
    id: '5',
    slug: 'zonwering',
    title: 'Zonwering',
    shortDescription: 'Geïntegreerde zonwering voor optimaal comfort op warme dagen. Stijlvol en functioneel.',
    intro: 'Onze zonweringsoplossingen zijn perfect geïntegreerd in het verandadesign. Kies uit knikarmschermen, screens of lamellendaken die u zowel beschermen tegen zon als privacy bieden. Alles is motorisch bedienbaar en kan gekoppeld worden aan zon- en windsensoren voor automatische werking.',
    heroImage: '/mock/product-5.jpg',
    gallery: [
      '/mock/product-5.jpg',
      '/mock/detail-2.jpg',
      '/mock/detail-4.jpg',
      '/mock/project-1.jpg',
      '/mock/project-3.jpg',
      '/mock/detail-1.jpg',
    ],
    highlights: [
      'Volledig geïntegreerd in frame',
      'Motorisch bedienbaar',
      'Koppelbaar met sensoren',
      'Wind- en waterbestendig',
      'Groot kleurenpalet doeken',
      'Energiebesparing in huis',
    ],
    specs: [
      { label: 'Types', value: 'Screens, knikarmschermen, lamellendak' },
      { label: 'Kleuren frame', value: '200+ RAL kleuren beschikbaar' },
      { label: 'Doekopties', value: '150+ kleuren en patronen' },
      { label: 'Bediening', value: 'Afstandsbediening, app, sensoren' },
      { label: 'Montage', value: 'Professionele montage inclusief' },
      { label: 'Garantie', value: '5 jaar op motor, 3 jaar op doek' },
      { label: 'Levertijd', value: '4-6 weken na opdracht' },
    ],
    options: [
      { title: 'Zonnewerende screens', description: 'Houden tot 95% van de warmte buiten terwijl u naar buiten blijft kijken.' },
      { title: 'Lamellendak', description: 'Verstelbare lamellen voor perfecte balans tussen zon en schaduw.' },
      { title: 'Windsensor', description: 'Automatisch intrekken bij harde wind ter bescherming van het doek.' },
      { title: 'Zonsensor', description: 'Automatisch uitrollen bij felle zon voor constant comfort.' },
    ],
    faqs: [
      { q: 'Kan zonwering later toegevoegd worden?', a: 'Ja, al onze veranda\'s zijn voorbereid op het later toevoegen van zonwering.' },
      { q: 'Hoe bedien ik de zonwering?', a: 'Via de meegeleverde afstandsbediening, smartphone app, of volledig automatisch via sensoren.' },
      { q: 'Wat als het doek beschadigd raakt?', a: 'Doeken zijn eenvoudig vervangbaar. Neem contact op voor een vervangend doek in dezelfde of nieuwe kleur.' },
      { q: 'Is de zonwering geschikt voor grote oppervlaktes?', a: 'Zeker, we hebben oplossingen voor overkappingen tot 12 meter breed.' },
    ],
    cta: {
      primaryLabel: 'Offerte aanvragen',
      primaryHref: '/contact',
      secondaryLabel: 'Start configurator',
      secondaryHref: '/configurator',
    },
  },
  {
    id: '6',
    slug: 'maatwerk',
    title: 'Maatwerk Oplossingen',
    shortDescription: 'Unieke ontwerpen op maat gemaakt voor uw specifieke wensen. Alles is mogelijk.',
    intro: 'Heeft u een bijzondere wens of een uitdagende situatie? Ons ontwerpteam gaat graag met u aan de slag. Van complexe hoeksituaties tot volledig geïntegreerde buitenkeukens, wij realiseren uw droomproject. Elke maatwerkoplossing wordt volledig uitgetekend in 3D voordat de productie start.',
    heroImage: '/mock/product-6.jpg',
    gallery: [
      '/mock/product-6.jpg',
      '/mock/detail-3.jpg',
      '/mock/detail-4.jpg',
      '/mock/project-5.jpg',
      '/mock/project-6.jpg',
      '/mock/detail-2.jpg',
    ],
    highlights: [
      '3D visualisatie vooraf',
      'Eigen ontwerpafdeling',
      'Complexe situaties mogelijk',
      'Integratie met bestaande architectuur',
      'Combinatie van materialen',
      'Persoonlijke projectbegeleiding',
    ],
    specs: [
      { label: 'Materiaal', value: 'Aluminium, staal, hout, combinaties' },
      { label: 'Kleuren', value: 'Onbeperkte mogelijkheden' },
      { label: 'Dakopties', value: 'Alle opties + speciale uitvoeringen' },
      { label: 'Afwerking', value: 'Naar wens, inclusief speciale coatings' },
      { label: 'Montage', value: 'Eigen projectteam van A tot Z' },
      { label: 'Garantie', value: 'Op maat, minimaal 10 jaar op constructie' },
      { label: 'Levertijd', value: 'Projectafhankelijk, gemiddeld 10-14 weken' },
    ],
    options: [
      { title: 'Buitenkeuken integratie', description: 'Volledige buitenkeuken geïntegreerd in uw verandaontwerp.' },
      { title: 'Speciale vormen', description: 'Ronde, schuine of organische vormen die perfect passen bij uw tuin.' },
      { title: 'Materiaalcombinaties', description: 'Mix van aluminium met hout, staal of andere materialen.' },
      { title: 'Domotica integratie', description: 'Volledige integratie met uw bestaande smart home systeem.' },
    ],
    faqs: [
      { q: 'Hoe werkt het maatwerkproces?', a: 'We starten met een uitgebreide intake, maken 3D visualisaties, en pas na uw goedkeuring gaan we over tot productie.' },
      { q: 'Is maatwerk veel duurder?', a: 'Dat hangt af van de complexiteit. Een uitdagende hoeksituatie hoeft niet per se veel duurder te zijn dan een standaard oplossing.' },
      { q: 'Kan ik mijn eigen ontwerp aanleveren?', a: 'Zeker! Onze ingenieurs bekijken graag uw schets of ontwerp en adviseren over haalbaarheid.' },
      { q: 'Wie is mijn contactpersoon?', a: 'Bij maatwerkprojecten krijgt u een vaste projectmanager die u van begin tot eind begeleidt.' },
    ],
    cta: {
      primaryLabel: 'Plan een gesprek',
      primaryHref: '/contact',
      secondaryLabel: 'Bekijk projecten',
      secondaryHref: '/projecten',
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export const verandaCategories = [
  {
    id: "klassiek",
    title: "Klassieke Veranda's",
    description: "Tijdloze elegantie met moderne materialen. Perfect voor traditionele woningen.",
    image: "/mock/detail-1.jpg",
    products: ["Serre-veranda", "Victoriaanse stijl", "Landhuisstijl"]
  },
  {
    id: "modern",
    title: "Moderne Veranda's",
    description: "Strakke lijnen en minimalistische designs voor de hedendaagse woning.",
    image: "/mock/detail-2.jpg",
    products: ["Plat dak veranda", "Lamellendak", "Glazen kubus"]
  },
  {
    id: "lamellen",
    title: "Lamellendak Veranda's",
    description: "Verstelbare lamellen voor perfecte controle over licht en ventilatie.",
    image: "/mock/detail-3.jpg",
    products: ["Elektrische lamellen", "Kantelbare lamellen", "Geïntegreerd systeem"]
  },
  {
    id: "vrijstaand",
    title: "Vrijstaande Overkappingen",
    description: "Niet aan de woning vast, maar wel dezelfde kwaliteit en uitstraling.",
    image: "/mock/detail-4.jpg",
    products: ["Tuinpaviljoen", "Poolhouse", "Buitenkeuken overkapping"]
  }
];
