import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="proces" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Prosto do celu</span>
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Jak wygląda <span className="font-semibold text-ubuntuOrange-50">współpraca</span>?
          </h2>
          <p className="text-base" style={{ color: 'var(--pg-text-secondary)' }}>
            Krótki, 4-stepowy proces pozbawiony zbędnej biurokracji.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="pg-card p-6 rounded-2xl relative space-y-4">
            <div className="w-10 h-10 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm">
              1
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Kawa i Rozmowa</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Spotkamy się w Twojej firmie w Elblągu i okolicach, przy kawie w ustalonym miejscu w Elblągu lub online.
            </p>
          </div>

          <div className="pg-card p-6 rounded-2xl relative space-y-4">
            <div className="w-10 h-10 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm">
              2
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Prototyp &amp; Wycena</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Przygotowuję wstępny projekt UX/UI strony oraz stałą wycenę (Fixed Price) bez niespodzianek na fakturze.
            </p>
          </div>

          <div className="pg-card p-6 rounded-2xl relative space-y-4">
            <div className="w-10 h-10 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm">
              3
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Kodowanie &amp; SEO</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Tworzę stronę z użyciem czystego kodu Pangolin, dbam o responsywność RWD, optymalizację szybkości i pozycjonowanie na Elbląg.
            </p>
          </div>

          <div className="pg-card p-6 rounded-2xl relative space-y-4">
            <div className="w-10 h-10 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-base shadow-sm">
              4
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--pg-text-primary)' }}>Szkolenie &amp; Prawa</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Przeszkolę Cię z obsługi strony, przekazuję pełne kody źródłowe oraz prawa autorskie i uruchamiam opiekę serwisową.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
