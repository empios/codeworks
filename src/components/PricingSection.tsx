import React from 'react';
import { ArrowRight, ClipboardList } from 'lucide-react';

const services = [
  { name: 'Obróbka zdjęć produktowych', from: '12 000', typical: '12 000 – 25 000', upkeep: '500', href: '/automatyzacja-zdjec-produktowych' },
  { name: 'Walidacja opisów z kartami PDF', from: '15 000', typical: '15 000 – 30 000', upkeep: '800', href: '/walidacja-opisow-produktow' },
  { name: 'Tłumaczenie katalogów', from: '10 000', typical: '10 000 – 22 000', upkeep: '500', href: '/tlumaczenie-katalogu-produktowego' },
  { name: 'Chatbot na firmowych dokumentach', from: '25 000', typical: '25 000 – 50 000', upkeep: '1 500', href: '/chatbot-ai-on-premise' },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="cennik" className="py-20 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            <span className="font-semibold text-ubuntuOrange-50">Cennik</span> (kwoty netto)
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Zaczynasz od audytu, którego koszt w 100% odliczam od wdrożenia.
          </p>
        </div>

        {/* Audyt — drugi krok po darmowej rozmowie */}
        <div className="mb-8 pg-card p-6 rounded-2xl border-2 border-ubuntuOrange-50 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Audyt procesu automatyzacji AI</h3>
            <p className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>Specyfikacja techniczna i plan wdrożenia na Twoim serwerze.</p>
          </div>
          <div className="text-2xl font-extrabold text-ubuntuOrange-50 whitespace-nowrap">3 500 zł</div>
          <a
            href="/audyt"
            className="inline-flex items-center justify-center gap-2 border font-bold text-sm px-5 py-3 rounded-lg transition-colors hover:border-ubuntuOrange-50"
            style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}
          >
            <ClipboardList className="w-4 h-4 text-ubuntuOrange-50" />
            Zamów audyt
          </a>
        </div>

        <ul className="divide-y border-y" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          {services.map((s) => (
            <li key={s.href} style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <a href={s.href} className="group grid sm:grid-cols-[1fr_auto_auto] sm:items-center gap-x-8 gap-y-1 py-4">
                <span className="font-semibold text-sm sm:text-base group-hover:text-ubuntuOrange-50 transition-colors" style={{ color: 'var(--pg-text-primary)' }}>
                  {s.name}
                </span>
                <span className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
                  wdrożenie <strong className="text-ubuntuOrange-50">od {s.from} zł</strong>
                  <span className="block text-xs" style={{ color: 'var(--pg-text-muted)' }}>typowo {s.typical} zł</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
                  utrzymanie od {s.upkeep} zł/mies.
                  <ArrowRight className="w-4 h-4 text-ubuntuOrange-50 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
          Robię też strony WWW i sklepy WooCommerce —{' '}
          <a href="/strony-www" className="font-semibold text-ubuntuOrange-50 hover:underline">zobacz ofertę</a>.
        </p>
      </div>
    </section>
  );
};
