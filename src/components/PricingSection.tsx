import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="cennik" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Transparentny Cennik Usług AI</span>
          <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Cennik automatyzacji procesów <span className="font-semibold text-ubuntuOrange-50">AI on-premise</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Jasne kwoty netto, brak stałych opłat abonamentowych za chmurę. Model instalowany bezpośrednio u klienta.
          </p>
        </div>

        {/* Featured Product Entry: Audyt procesów */}
        <div className="mb-12 pg-card p-8 rounded-2xl border-2 border-ubuntuOrange-50 shadow-pg-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-ubuntuOrange-50 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-sm">
            Produkt wejściowy — 100% odliczany od wdrożenia
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Krok 1</span>
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Audyt procesu automatyzacji AI</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Pełna weryfikacja Twoich procesów e-commerce/hurtowni pod kątem automatyzacji AI. Przygotowujemy specyfikację techniczną, estymację oszczędności czasu i architekturę modelu on-premise.
              </p>
              <p className="text-xs font-semibold text-ubuntuOrange-50">
                Wartość audytu (3 500 zł netto) jest w 100% odliczana od kwoty późniejszego wdrożenia systemu.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="text-center lg:text-right">
                <span className="text-3xl font-extrabold text-ubuntuOrange-50">3 500 zł</span>
                <span className="text-sm font-medium" style={{ color: 'var(--pg-text-secondary)' }}> netto</span>
                <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Typowy projekt: 3 500 zł</p>
              </div>
              <a 
                href="/audyt" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
              >
                <span>Zamów Audyt Procesu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Main Competencies Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Card 1: Zdjęcia */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Grafika &amp; E-commerce</span>
              <h3 className="text-xl font-bold mt-3 mb-2" style={{ color: 'var(--pg-text-primary)' }}>Automatyzacja zdjęć produktowych</h3>
              <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>Wycinanie tła, kadrowanie, ujednolicanie proporcji i nakładanie logotypów lokalnym algorytmem AI.</p>
              
              <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Wdrożenie: </span>
                <span className="text-2xl font-extrabold text-ubuntuOrange-50">od 12 000 zł</span>
                <span className="text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}> netto</span>
                <span className="text-xs block mt-1" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: od 500 zł/mies</span>
                <span className="text-xs font-semibold text-ubuntuOrange-50 block mt-1">Typowy projekt: 12 000 – 25 000 zł netto</span>
              </div>

              <ul className="space-y-2.5 text-xs mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Automatyczne usuwanie tła i centrowanie produktów</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Nakładanie znaku wodnego i dopasowanie do wymogów rynków</span>
                </li>
              </ul>
            </div>

            <a href="/automatyzacja-zdjec-produktowych" className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-xs transition-all" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}>
              Szczegóły oferty zdjęć AI
            </a>
          </div>

          {/* Card 2: Walidacja PDF */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Jakość Danych</span>
              <h3 className="text-xl font-bold mt-3 mb-2" style={{ color: 'var(--pg-text-primary)' }}>Walidacja opisów z kartami PDF</h3>
              <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>Automatyczne porównywanie parametrów w e-commerce z dokumentacją techniczną PDF dostawców.</p>
              
              <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Wdrożenie: </span>
                <span className="text-2xl font-extrabold text-ubuntuOrange-50">od 15 000 zł</span>
                <span className="text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}> netto</span>
                <span className="text-xs block mt-1" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: od 800 zł/mies</span>
                <span className="text-xs font-semibold text-ubuntuOrange-50 block mt-1">Typowy projekt: 15 000 – 30 000 zł netto</span>
              </div>

              <ul className="space-y-2.5 text-xs mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Weryfikacja parametrów technicznych i kodów produktów</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Raport rozbieżności i natychmiastowe flagowanie błędów</span>
                </li>
              </ul>
            </div>

            <a href="/walidacja-opisow-produktow" className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-xs transition-all" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}>
              Szczegóły walidacji opisów
            </a>
          </div>

          {/* Card 3: Automatyzacja translacji */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Skala &amp; Ekspansja</span>
              <h3 className="text-xl font-bold mt-3 mb-2" style={{ color: 'var(--pg-text-primary)' }}>Automatyzacja translacji katalogów</h3>
              <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>Lokalne przekładanie wielkich baz produktów bez stałych opłat za zewnętrzne chmurowe API.</p>
              
              <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Wdrożenie: </span>
                <span className="text-2xl font-extrabold text-ubuntuOrange-50">od 10 000 zł</span>
                <span className="text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}> netto</span>
                <span className="text-xs block mt-1" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: od 500 zł/mies</span>
                <span className="text-xs font-semibold text-ubuntuOrange-50 block mt-1">Typowy projekt: 10 000 – 22 000 zł netto</span>
              </div>

              <ul className="space-y-2.5 text-xs mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Własny słownik pojęć branżowych i zachowanie tagów HTML</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Automatyczne przetwarzanie wsadowe wielkich katalogów</span>
                </li>
              </ul>
            </div>

            <a href="/tlumaczenie-katalogu-produktowego" className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-xs transition-all" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}>
              Szczegóły tłumaczeń AI
            </a>
          </div>

          {/* Card 4: Chatbot RAG */}
          <div className="pg-card p-8 rounded-2xl flex flex-col justify-between border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
            <div>
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">Baza Wiedzy</span>
              <h3 className="text-xl font-bold mt-3 mb-2" style={{ color: 'var(--pg-text-primary)' }}>Chatbot AI on-premise (RAG)</h3>
              <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>Asystent AI przeszukujący firmową dokumentację, instrukcje i procedury w 100% lokalnie.</p>
              
              <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <span className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Wdrożenie: </span>
                <span className="text-2xl font-extrabold text-ubuntuOrange-50">od 25 000 zł</span>
                <span className="text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}> netto</span>
                <span className="text-xs block mt-1" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: od 1 500 zł/mies</span>
                <span className="text-xs font-semibold text-ubuntuOrange-50 block mt-1">Typowy projekt: 25 000 – 50 000 zł netto</span>
              </div>

              <ul className="space-y-2.5 text-xs mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>Indeksacja instrukcji PDF, umów i specyfikacji technicznych</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span style={{ color: 'var(--pg-text-secondary)' }}>100% prywatności — dane firmy nie zasilają zewnętrznych modeli</span>
                </li>
              </ul>
            </div>

            <a href="/chatbot-ai-on-premise" className="w-full text-center py-3 rounded-lg border hover:bg-ubuntuOrange-50 hover:text-white font-medium text-xs transition-all" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}>
              Szczegóły chatbota RAG
            </a>
          </div>

        </div>

        {/* WooCommerce & WWW Single-Line Note (Rule 7) */}
        <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--pg-text-secondary)' }}>
            Budujemy również sklepy WooCommerce oraz strony internetowe z otwartym kodem źródłowym.
          </p>
        </div>

      </div>
    </section>
  );
};
