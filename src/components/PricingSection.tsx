import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="oferta" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Przejrzyste zasady</span>
          <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Oferta i Cennik usługi <span className="font-semibold text-ubuntuOrange-50">IT</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Bez ukrytych opłat i podchwytliwych zapisów. Otrzymujesz wycenę typu Fixed Price oraz pełne przekazanie autorskich praw majątkowych.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1 */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Wizytówka &amp; Services</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--pg-text-primary)' }}>Wizytówka Smart</h3>
              <p className="text-xs mb-6" style={{ color: 'var(--pg-text-muted)' }}>Idealne rozwiązanie dla lokalnych firm usługowych, budowlanych i rzemieślniczych.</p>
              
              <div className="mb-8 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>od </span>
                <span className="text-4xl font-extrabold text-ubuntuOrange-50">1 800</span>
                <span className="text-sm font-medium" style={{ color: 'var(--pg-text-secondary)' }}> PLN netto</span>
              </div>

              <ul className="space-y-3.5 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Nowoczesna strona One-Page lub 3-5 podstron</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>100% Responsywny design (RWD)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Formularz kontaktowy + integracja Google Maps</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Podstawowe SEO na Elbląg i powiat elbląski</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Otwarty system CMS (WordPress)</span>
                </li>
              </ul>
            </div>

            <a 
              href="#kontakt" 
              className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-sm transition-all"
              style={{
                backgroundColor: 'var(--pg-layer-02)',
                borderColor: 'var(--pg-border-strong)',
                color: 'var(--pg-text-primary)'
              }}
            >
              Zamów Pakiet Smart
            </a>
          </div>

          {/* Package 2 (Most Popular) */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between relative border-2 border-ubuntuOrange-50 shadow-pg-glow">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ubuntuOrange-50 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
              Najczęściej Wybierany w Elblągu
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Sklep E-Commerce</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--pg-text-primary)' }}>E-Commerce Starter</h3>
              <p className="text-xs mb-6" style={{ color: 'var(--pg-text-muted)' }}>Dla sklepów, handlu i producentów z regionu chcących sprzedawać online.</p>
              
              <div className="mb-8 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>od </span>
                <span className="text-4xl font-extrabold text-ubuntuOrange-50">4 500</span>
                <span className="text-sm font-medium" style={{ color: 'var(--pg-text-secondary)' }}> PLN netto</span>
              </div>

              <ul className="space-y-3.5 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Sklep WooCommerce z nieograniczoną liczbą produktów</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Integracja płatności (BLIK, Przelewy24, PayU)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Kurierzy i Paczkomaty InPost / Allegro Smart</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Szkolenie wideo z prowadzenia i edycji sklepu</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Zero prowizji od Twojej sprzedaży</span>
                </li>
              </ul>
            </div>

            <a href="#kontakt" className="w-full text-center py-3.5 rounded-lg bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-medium text-sm transition-all shadow-md">
              Wybierz Sklep WooCommerce
            </a>
          </div>

          {/* Package 3 */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">B2B / Dedicated</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--pg-text-primary)' }}>Software House B2B</h3>
              <p className="text-xs mb-6" style={{ color: 'var(--pg-text-muted)' }}>Dedykowane aplikacje webowe, portale klienckie i integracje systemowe API.</p>
              
              <div className="mb-8 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-3xl font-extrabold text-ubuntuOrange-50">Wycena indywidualna</span>
              </div>

              <ul className="space-y-3.5 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Dedykowana aplikacja React / Node.js / PHP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Integracje z systemami ERP / CRM / Magazyn</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Dedykowany architekt systemu i analiza biznesowa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Gwarancja SLA i dedykowany czas wsparcia</span>
                </li>
              </ul>
            </div>

            <a 
              href="#kontakt" 
              className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-sm transition-all"
              style={{
                backgroundColor: 'var(--pg-layer-02)',
                borderColor: 'var(--pg-border-strong)',
                color: 'var(--pg-text-primary)'
              }}
            >
              Zapytaj o Projekt B2B
            </a>
          </div>

        </div>

        {/* SLA Banner */}
        <div 
          className="mt-16 rounded-2xl border p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 transition-colors"
          style={{
            backgroundColor: 'var(--pg-layer-02)',
            borderColor: 'var(--pg-border-strong)'
          }}
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10 border border-ubuntuOrange-50/20">
              <ShieldCheck className="w-4 h-4 text-ubuntuOrange-50" />
              <span>Opieka Techniczna &amp; Maintenance SLA</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Abonament Serwisowy z Rozliczanym Bankiem Godzin</h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Nie zostawiam Cię samemu po wdrożeniu strony. W ramach stałej opieki (od <strong className="text-ubuntuOrange-50">250 PLN netto/miesiąc</strong>) dbam o kopie zapasowe, aktualizacje bezpieczeństwa, monitoring 24/7 oraz wykonuję bieżące poprawki graficzne i treściowe w ramach rozliczanego banku godzin.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-medium px-6 py-3.5 rounded-lg transition-all text-sm shadow-sm">
              <span>Dowiedz się więcej o SLA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
