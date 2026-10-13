import React from 'react';
import { ArrowRight, ClipboardList } from 'lucide-react';

// Ceny „od” — strony i aplikacje z kalkulatora na /strony-www, wdrożenia AI z podstron ofert.
const webServices = [
  { name: 'Strona firmowa (wizytówka)', from: '1 800', note: 'jednorazowo', href: '/strony-www' },
  { name: 'Sklep WooCommerce', from: '4 500', note: 'jednorazowo', href: '/strony-www' },
  { name: 'Aplikacja webowa B2B', from: '7 500', note: 'wycena po rozmowie', href: '#kontakt' },
];

const aiServices = [
  { name: 'Obróbka zdjęć produktowych', from: '12 000', note: 'utrzymanie od 500 zł/mies.', href: '/automatyzacja-zdjec-produktowych' },
  { name: 'Walidacja opisów z kartami PDF', from: '15 000', note: 'utrzymanie od 800 zł/mies.', href: '/walidacja-opisow-produktow' },
  { name: 'Tłumaczenie katalogów', from: '10 000', note: 'utrzymanie od 500 zł/mies.', href: '/tlumaczenie-katalogu-produktowego' },
  { name: 'Chatbot na firmowych dokumentach', from: '25 000', note: 'utrzymanie od 1 500 zł/mies.', href: '/chatbot-ai-on-premise' },
];

const PriceList: React.FC<{ title: string; rows: typeof webServices }> = ({ title, rows }) => (
  <div className="pg-card p-6 rounded-2xl">
    <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--pg-text-primary)' }}>{title}</h3>
    <ul className="divide-y" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      {rows.map((s) => (
        <li key={s.name} style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <a href={s.href} className="group flex items-center gap-4 py-3">
            <span className="flex-1">
              <span className="block text-sm font-semibold group-hover:text-ubuntuOrange-50 transition-colors" style={{ color: 'var(--pg-text-primary)' }}>{s.name}</span>
              <span className="block text-xs" style={{ color: 'var(--pg-text-muted)' }}>{s.note}</span>
            </span>
            <span className="text-sm font-bold text-ubuntuOrange-50 whitespace-nowrap">od {s.from} zł</span>
            <ArrowRight className="w-4 h-4 text-ubuntuOrange-50 group-hover:translate-x-1 transition-transform" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const PricingSection: React.FC = () => {
  return (
    <section id="cennik" className="py-20 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            <span className="font-semibold text-ubuntuOrange-50">Cennik</span> (kwoty netto)
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Ceny startowe; dokładną, stałą kwotę dostajesz po rozmowie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <PriceList title="Strony, sklepy i aplikacje" rows={webServices} />
          <div className="space-y-5">
            <PriceList title="Wdrożenia AI na Twoim serwerze" rows={aiServices} />
            <div className="pg-card p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold" style={{ color: 'var(--pg-text-primary)' }}>Audyt procesu AI · 3 500 zł</h3>
                <p className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>W 100% odliczany od późniejszego wdrożenia AI.</p>
              </div>
              <a
                href="/audyt"
                className="inline-flex items-center justify-center gap-2 border font-bold text-sm px-4 py-2.5 rounded-lg transition-colors hover:border-ubuntuOrange-50"
                style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}
              >
                <ClipboardList className="w-4 h-4 text-ubuntuOrange-50" />
                Zamów audyt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
