import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface InteractiveCalculatorProps {
  onSendQuote?: (quoteSummary: string) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onSendQuote }) => {
  const [projectType, setProjectType] = useState<'smart' | 'ecommerce' | 'custom'>('smart');
  const [addons, setAddons] = useState<{
    copywriting: boolean;
    seo: boolean;
    sla: boolean;
    express: boolean;
  }>({
    copywriting: true,
    seo: true,
    sla: false,
    express: false
  });

  // Base prices
  const basePrices = {
    smart: 1800,
    ecommerce: 4500,
    custom: 7500
  };

  // Addon prices
  const addonPrices = {
    copywriting: 400,
    seo: 350,
    sla: 250,
    express: 600
  };

  const calculateTotal = () => {
    let total = basePrices[projectType];
    if (addons.copywriting) total += addonPrices.copywriting;
    if (addons.seo) total += addonPrices.seo;
    if (addons.sla) total += addonPrices.sla;
    if (addons.express) total += addonPrices.express;
    return total;
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSendToContact = () => {
    const packageName = projectType === 'smart' 
      ? 'Wizytówka Smart (1 800 PLN netto)' 
      : projectType === 'ecommerce' 
      ? 'Sklep WooCommerce (4 500 PLN netto)' 
      : 'Dedykowana Aplikacja B2B (7 500 PLN netto)';

    const selectedAddonsList: string[] = [];
    if (addons.copywriting) selectedAddonsList.push('Teksty B2B & Copywriting (+400 PLN)');
    if (addons.seo) selectedAddonsList.push('Lokalne SEO & Google Maps (+350 PLN)');
    if (addons.sla) selectedAddonsList.push('Pierwszy miesiąc opieki SLA (+250 PLN)');
    if (addons.express) selectedAddonsList.push('Tryb ekspresowy 5 dni (+600 PLN)');

    const addonsText = selectedAddonsList.length > 0 ? selectedAddonsList.join(', ') : 'Brak dodatków';

    const quoteSummary = `[WYCENA Z KALKULATORA CODEWORKS]\n` +
      `• Wybrany pakiet: ${packageName}\n` +
      `• Dodatki: ${addonsText}\n` +
      `• Szacowany budżet końcowy: ${calculateTotal().toLocaleString('pl-PL')} PLN netto.\n` +
      `Proszę o kontakt w celu omówienia szczegółów tego projektu.`;

    if (onSendQuote) {
      onSendQuote(quoteSummary);
    } else {
      const contactElement = document.getElementById('kontakt');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="kalkulator" className="py-24 transition-colors border-t" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
            <Calculator className="w-4 h-4 text-ubuntuOrange-50" />
            <span>Narzędzie Szacowania Budżetu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Interaktywny <span className="font-semibold text-ubuntuOrange-50">Kalkulator Projektu</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Skonfiguruj zakres strony dla Twojej firmy i zobacz szacunkową wycenę w 30 sekund.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Left */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ubuntuOrange-50">
                1. Wybierz typ projektu:
              </label>
              
              <div className="grid sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setProjectType('smart')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${projectType === 'smart' ? 'border-ubuntuOrange-50 bg-ubuntuOrange-50/10' : ''}`}
                  style={{
                    backgroundColor: projectType === 'smart' ? undefined : 'var(--pg-layer-01)',
                    borderColor: projectType === 'smart' ? undefined : 'var(--pg-border-subtle)'
                  }}
                >
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Wizytówka Smart</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Szybki One-Page RWD dla firm usługowych.</p>
                  <span className="inline-block mt-3 font-mono text-xs font-bold text-ubuntuOrange-50">od 1 800 PLN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('ecommerce')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${projectType === 'ecommerce' ? 'border-ubuntuOrange-50 bg-ubuntuOrange-50/10' : ''}`}
                  style={{
                    backgroundColor: projectType === 'ecommerce' ? undefined : 'var(--pg-layer-01)',
                    borderColor: projectType === 'ecommerce' ? undefined : 'var(--pg-border-subtle)'
                  }}
                >
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Sklep WooCommerce</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Sklep e-commerce + BLIK + Paczkomaty.</p>
                  <span className="inline-block mt-3 font-mono text-xs font-bold text-ubuntuOrange-50">od 4 500 PLN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('custom')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${projectType === 'custom' ? 'border-ubuntuOrange-50 bg-ubuntuOrange-50/10' : ''}`}
                  style={{
                    backgroundColor: projectType === 'custom' ? undefined : 'var(--pg-layer-01)',
                    borderColor: projectType === 'custom' ? undefined : 'var(--pg-border-subtle)'
                  }}
                >
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Aplikacja B2B</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Dedykowany portal + integracje API.</p>
                  <span className="inline-block mt-3 font-mono text-xs font-bold text-ubuntuOrange-50">od 7 500 PLN</span>
                </button>
              </div>
            </div>

            {/* Step 2: Addons */}
            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-ubuntuOrange-50">
                2. Wybierz opcje dodatkowe:
              </label>

              <div className="space-y-2">
                <div 
                  onClick={() => toggleAddon('copywriting')}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all hover:border-ubuntuOrange-50/50"
                  style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${addons.copywriting ? 'bg-ubuntuOrange-50 border-ubuntuOrange-50 text-white' : 'border-gray-400'}`}>
                      {addons.copywriting && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold" style={{ color: 'var(--pg-text-primary)' }}>Przygotowanie Tekstów B2B &amp; Copywriting UX</h5>
                      <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>Pisanie treści nakierowanych na sprzedaż i pozyskiwanie klienta.</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-ubuntuOrange-50">+400 PLN</span>
                </div>

                <div 
                  onClick={() => toggleAddon('seo')}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all hover:border-ubuntuOrange-50/50"
                  style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${addons.seo ? 'bg-ubuntuOrange-50 border-ubuntuOrange-50 text-white' : 'border-gray-400'}`}>
                      {addons.seo && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold" style={{ color: 'var(--pg-text-primary)' }}>Lokalne SEO Elbląg &amp; Wizytówka Google Maps</h5>
                      <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>Optymalizacja słów kluczowych i rejestracja profilu firmy w Google.</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-ubuntuOrange-50">+350 PLN</span>
                </div>

                <div 
                  onClick={() => toggleAddon('sla')}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all hover:border-ubuntuOrange-50/50"
                  style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${addons.sla ? 'bg-ubuntuOrange-50 border-ubuntuOrange-50 text-white' : 'border-gray-400'}`}>
                      {addons.sla && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold" style={{ color: 'var(--pg-text-primary)' }}>Pierwszy Miesiąc Opieki Technicznej SLA</h5>
                      <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>Kopie zapasowe, monitoring działania 24/7 i wsparcie.</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-ubuntuOrange-50">+250 PLN</span>
                </div>

                <div 
                  onClick={() => toggleAddon('express')}
                  className="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all hover:border-ubuntuOrange-50/50"
                  style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-subtle)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${addons.express ? 'bg-ubuntuOrange-50 border-ubuntuOrange-50 text-white' : 'border-gray-400'}`}>
                      {addons.express && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold" style={{ color: 'var(--pg-text-primary)' }}>Tryb Ekspresowy (Wdrożenie w 5 Dni)</h5>
                      <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>Priorytetowy czas realizacji w krótkim terminie.</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-ubuntuOrange-50">+600 PLN</span>
                </div>
              </div>
            </div>

          </div>

          {/* Summary Box Right */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="pg-card p-8 rounded-3xl border-2 border-ubuntuOrange-50/40 shadow-xl space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                  <span className="text-xs font-mono uppercase font-bold text-ubuntuOrange-50 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Podsumowanie Budżetu
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-ubuntuOrange-50/10 text-ubuntuOrange-50 font-bold">
                    Gwarancja Fixed Price
                  </span>
                </div>

                <div className="space-y-2 text-xs" style={{ color: 'var(--pg-text-secondary)' }}>
                  <div className="flex justify-between">
                    <span>Pakiet Bazowy ({projectType === 'smart' ? 'Wizytówka Smart' : projectType === 'ecommerce' ? 'Sklep WooCommerce' : 'Aplikacja B2B'}):</span>
                    <span className="font-mono font-bold" style={{ color: 'var(--pg-text-primary)' }}>{basePrices[projectType]} PLN</span>
                  </div>
                  {addons.copywriting && (
                    <div className="flex justify-between">
                      <span>Teksty B2B &amp; Copywriting:</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--pg-text-primary)' }}>+400 PLN</span>
                    </div>
                  )}
                  {addons.seo && (
                    <div className="flex justify-between">
                      <span>SEO Elbląg &amp; Google Maps:</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--pg-text-primary)' }}>+350 PLN</span>
                    </div>
                  )}
                  {addons.sla && (
                    <div className="flex justify-between">
                      <span>Miesiąc Opieki SLA:</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--pg-text-primary)' }}>+250 PLN</span>
                    </div>
                  )}
                  {addons.express && (
                    <div className="flex justify-between">
                      <span>Tryb Ekspresowy 5 Dni:</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--pg-text-primary)' }}>+600 PLN</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t mt-auto" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="space-y-1">
                  <span className="text-xs text-ubuntuOrange-50 uppercase font-mono font-bold">Szacunkowy Budżet Końcowy:</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-ubuntuOrange-50 font-mono">
                    {calculateTotal().toLocaleString('pl-PL')} <span className="text-base font-normal">PLN netto</span>
                  </div>
                  <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>
                    100% praw autorskich, brak ukrytych dopłat i stała cena w umowie.
                  </p>
                </div>

                <button 
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full py-4 rounded-xl bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm shadow-lg hover:shadow-pg-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Prześlij tę wycenę do Pawła</span>
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
