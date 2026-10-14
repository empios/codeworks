import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface InteractiveCalculatorProps {
  onSendQuote?: (quoteSummary: string) => void;
}

const packages = [
  { id: 'smart', name: 'Strona firmowa', text: 'Jedna lub kilka podstron dla firmy usługowej.', price: 1800 },
  { id: 'ecommerce', name: 'Sklep WooCommerce', text: 'Sklep z płatnościami BLIK i wysyłką do Paczkomatów.', price: 4500 },
  { id: 'custom', name: 'Aplikacja B2B', text: 'Panel lub portal na zamówienie, z integracjami.', price: 7500 },
] as const;

const addonList = [
  { id: 'copywriting', name: 'Teksty na stronę', text: 'Piszę treści na podstawie rozmowy z Tobą.', price: 400 },
  { id: 'seo', name: 'Lokalne SEO i wizytówka Google', text: 'Frazy pod Twoje miasto i założenie profilu firmy w Mapach Google.', price: 350 },
  { id: 'sla', name: 'Pierwszy miesiąc opieki', text: 'Kopie zapasowe, aktualizacje i pomoc, gdy coś przestanie działać.', price: 250 },
  { id: 'express', name: 'Termin ekspresowy (5 dni roboczych)', text: 'Twój projekt idzie przed innymi w kolejce.', price: 600 },
] as const;

type PackageId = typeof packages[number]['id'];
type AddonId = typeof addonList[number]['id'];

// pl-PL nie grupuje liczb 4-cyfrowych, więc spację tysięcy wstawiamy sami
const zl = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')}\u00a0zł`;

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onSendQuote }) => {
  const [projectType, setProjectType] = useState<PackageId>('smart');
  const [addons, setAddons] = useState<Record<AddonId, boolean>>({
    copywriting: false,
    seo: false,
    sla: false,
    express: false,
  });

  const pkg = packages.find(p => p.id === projectType)!;
  const chosenAddons = addonList.filter(a => addons[a.id]);
  const total = pkg.price + chosenAddons.reduce((sum, a) => sum + a.price, 0);

  const toggleAddon = (key: AddonId) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendToContact = () => {
    const addonsText = chosenAddons.length > 0
      ? chosenAddons.map(a => `${a.name} (+${zl(a.price)})`).join(', ')
      : 'brak';

    const quoteSummary = `Wycena z kalkulatora:\n` +
      `• Pakiet: ${pkg.name} (od ${zl(pkg.price)} netto)\n` +
      `• Dodatki: ${addonsText}\n` +
      `• Razem: ok. ${zl(total)} netto\n\n` +
      `Chcę porozmawiać o szczegółach.`;

    if (onSendQuote) {
      onSendQuote(quoteSummary);
    } else {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kalkulator" className="py-20 transition-colors border-t" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Ile to <span className="font-semibold text-ubuntuOrange-50">będzie kosztować?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Wybierz rodzaj projektu i dodatki. Dokładną kwotę podam po rozmowie i wpiszę ją do umowy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7 space-y-8">

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold mb-3" style={{ color: 'var(--pg-text-primary)' }}>
                1. Co budujemy?
              </legend>

              <div className="grid sm:grid-cols-3 gap-3">
                {packages.map(p => {
                  const active = projectType === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProjectType(p.id)}
                      aria-pressed={active}
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer hover:border-ubuntuOrange-50/60 ${active ? 'border-ubuntuOrange-50 bg-ubuntuOrange-50/10' : ''}`}
                      style={{
                        backgroundColor: active ? undefined : 'var(--pg-layer-01)',
                        borderColor: active ? undefined : 'var(--pg-border-subtle)',
                      }}
                    >
                      <span className="block font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>{p.name}</span>
                      <span className="block text-sm mt-1" style={{ color: 'var(--pg-text-muted)' }}>{p.text}</span>
                      <span className="inline-block mt-3 text-sm font-bold text-ubuntuOrange-50">od {zl(p.price)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold mb-3" style={{ color: 'var(--pg-text-primary)' }}>
                2. Czy potrzebujesz czegoś jeszcze? <span className="font-normal" style={{ color: 'var(--pg-text-muted)' }}>(opcjonalnie)</span>
              </legend>

              <div className="space-y-2">
                {addonList.map(a => {
                  const on = addons[a.id];
                  return (
                    <button
                      key={a.id}
                      type="button"
                      role="checkbox"
                      aria-checked={on}
                      onClick={() => toggleAddon(a.id)}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:border-ubuntuOrange-50/60 ${on ? 'border-ubuntuOrange-50/60' : ''}`}
                      style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: on ? undefined : 'var(--pg-border-subtle)' }}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-5 h-5 shrink-0 rounded flex items-center justify-center border ${on ? 'bg-ubuntuOrange-50 border-ubuntuOrange-50 text-white' : 'border-gray-400'}`}>
                          {on && <Check className="w-3.5 h-3.5" />}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold" style={{ color: 'var(--pg-text-primary)' }}>{a.name}</span>
                          <span className="block text-sm" style={{ color: 'var(--pg-text-muted)' }}>{a.text}</span>
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-ubuntuOrange-50 whitespace-nowrap">+{zl(a.price)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="pg-card p-6 sm:p-8 rounded-2xl border-2 border-ubuntuOrange-50/40 shadow-xl space-y-6">

              <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Podsumowanie</h3>

              <dl className="space-y-2 text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
                <div className="flex justify-between gap-4">
                  <dt>{pkg.name}</dt>
                  <dd className="font-semibold whitespace-nowrap" style={{ color: 'var(--pg-text-primary)' }}>{zl(pkg.price)}</dd>
                </div>
                {chosenAddons.map(a => (
                  <div key={a.id} className="flex justify-between gap-4">
                    <dt>{a.name}</dt>
                    <dd className="font-semibold whitespace-nowrap" style={{ color: 'var(--pg-text-primary)' }}>+{zl(a.price)}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-5 pt-5 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="space-y-1">
                  <span className="text-sm" style={{ color: 'var(--pg-text-muted)' }}>Orientacyjnie, netto</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-ubuntuOrange-50" aria-live="polite">
                    {zl(total)}
                  </div>
                  <p className="text-sm" style={{ color: 'var(--pg-text-muted)' }}>
                    Ostateczną cenę wpisuję do umowy i już jej nie zmieniam, chyba że sam poszerzysz zakres.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full py-4 rounded-xl bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm shadow-lg hover:shadow-pg-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Wyślij mi tę wycenę</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
