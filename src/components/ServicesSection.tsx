import React from 'react';
import { ArrowRight, Globe, AppWindow, Workflow, Cpu } from 'lucide-react';

// Usługi CodeWorks — ceny „od” pochodzą z cennika i kalkulatora na stronie.
const services = [
  {
    icon: Globe,
    title: 'Strony i sklepy internetowe',
    text: 'Szybkie strony firmowe i sklepy WooCommerce, które sam edytujesz.',
    items: ['Strona firmowa od 1 800 zł', 'Sklep WooCommerce od 4 500 zł', 'Lokalne SEO i wizytówka Google'],
    href: '/strony-www',
    cta: 'Oferta stron WWW',
  },
  {
    icon: AppWindow,
    title: 'Aplikacje webowe na zamówienie',
    text: 'Panele, systemy B2B i narzędzia wewnętrzne dopasowane do Twojej firmy.',
    items: ['Aplikacja B2B od 7 500 zł', 'Panel klienta lub pracownika', 'Pełny kod źródłowy dla Ciebie'],
    href: '#kontakt',
    cta: 'Opisz swój pomysł',
  },
  {
    icon: Workflow,
    title: 'Automatyzacje i integracje',
    text: 'Łączę systemy, z których już korzystasz, żeby dane nie były przepisywane ręcznie.',
    items: ['Integracje przez API', 'Sklep, arkusze, poczta, systemy firmowe', 'Raporty i powiadomienia'],
    href: '#kontakt',
    cta: 'Zapytaj o integrację',
  },
  {
    icon: Cpu,
    title: 'AI dla firm',
    text: 'Modele AI działają na Twoim serwerze, więc dane nie wychodzą z firmy.',
    items: ['Obróbka zdjęć produktów', 'Sprawdzanie opisów z kartami PDF', 'Tłumaczenie katalogów i chatbot na dokumentach'],
    href: '#cennik',
    cta: 'Zobacz ceny wdrożeń AI',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="uslugi" className="py-20 transition-colors" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            W czym mogę <span className="font-semibold text-ubuntuOrange-50">pomóc Twojej firmie?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Od prostej strony po system na zamówienie. Projektuję, programuję i wdrażam sam.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, text, items, href, cta }) => (
            <a key={title} href={href} className="group pg-card p-6 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>{title}</h3>
              </div>
              <p className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>{text}</p>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ubuntuOrange-50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ubuntuOrange-50">
                {cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
