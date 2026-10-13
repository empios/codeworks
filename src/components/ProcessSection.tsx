import React from 'react';

const homeSteps = [
  { title: 'Darmowa rozmowa', text: '20 minut: opowiadasz, czego potrzebujesz.' },
  { title: 'Wycena', text: 'Zakres i stała cena przed startem prac.' },
  { title: 'Realizacja', text: 'Projektuję, programuję i wdrażam.' },
  { title: 'Przekazanie i opieka', text: 'Kod i prawa autorskie dla Ciebie, opieka opcjonalnie.' },
];

export const ProcessSection: React.FC<{ variant?: 'home' | 'webdev' }> = ({ variant = 'webdev' }) => {
  if (variant === 'home') {
    return (
      <section id="proces" className="py-20 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Jak wygląda <span className="font-semibold text-ubuntuOrange-50">współpraca</span>?
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Od pierwszej rozmowy do działającego systemu.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeSteps.map((step, i) => (
              <li key={step.title} className="pg-card p-5 rounded-2xl space-y-2 text-center">
                <span className="w-8 h-8 mx-auto rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold" style={{ color: 'var(--pg-text-primary)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

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
              Tworzę stronę z użyciem czystego, wydajnego kodu, dbam o responsywność RWD, optymalizację szybkości i pozycjonowanie na Elbląg.
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
