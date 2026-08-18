import React from 'react';

export const ComparisonSection: React.FC = () => {
  return (
    <section 
      id="dlaczego-ja" 
      className="py-20 border-y transition-colors"
      style={{
        backgroundColor: 'var(--pg-bg-subtle)',
        borderColor: 'var(--pg-border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Wartość dla Twojej Firmy</span>
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Zwykła Agencja <span className="text-red-500">VS</span> CodeWorks Paweł Włodarczyk
          </h2>
          <p className="text-base" style={{ color: 'var(--pg-text-secondary)' }}>
            Zobacz, czym różni się współpraca z niezależnym inżynierem z Elbląga od korporacyjnej agencji.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--pg-border-strong)' }}>
                <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-1/3" style={{ color: 'var(--pg-text-muted)' }}>Kryterium</th>
                <th className="py-4 px-6 text-sm font-bold text-red-500 uppercase tracking-wider w-1/3">Zwykła Agencja / Podmiot Zewnętrzny</th>
                <th className="py-4 px-6 text-sm font-bold text-ubuntuOrange-50 uppercase tracking-wider w-1/3 bg-ubuntuOrange-50/10 rounded-t-xl">Lokalny Programista z Elbląga</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <tr>
                <td className="py-4 px-6 font-medium" style={{ color: 'var(--pg-text-primary)' }}>Osoba do kontaktu</td>
                <td className="py-4 px-6" style={{ color: 'var(--pg-text-secondary)' }}>Handlowiec / Młodszy PM (zmieniający się często)</td>
                <td className="py-4 px-6 font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/5">Bezpośrednio Paweł Włodarczyk (właściciel &amp; programista)</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium" style={{ color: 'var(--pg-text-primary)' }}>Prawa autorskie &amp; Kod</td>
                <td className="py-4 px-6" style={{ color: 'var(--pg-text-secondary)' }}>Często zamknięty CMS (Vendor Lock-in) lub brak praw</td>
                <td className="py-4 px-6 font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/5">100% Otwarty kod + pełny transfer praw autorskich</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium" style={{ color: 'var(--pg-text-primary)' }}>Spotkanie na żywo</td>
                <td className="py-4 px-6" style={{ color: 'var(--pg-text-secondary)' }}>Brak lub dodatkowo płatny dojazd z dużego miasta</td>
                <td className="py-4 px-6 font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/5">Bezpłatny dojazd do klienta w Elblągu i powiecie lub online</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium" style={{ color: 'var(--pg-text-primary)' }}>Szybkość strony (Google PageSpeed)</td>
                <td className="py-4 px-6" style={{ color: 'var(--pg-text-secondary)' }}>Ciężkie szablony i kilkadziesiąt zbędnych wtyczek</td>
                <td className="py-4 px-6 font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/5">Dopracowany, czysty i zoptymalizowany kod, ładowanie &lt; 1.5s</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium" style={{ color: 'var(--pg-text-primary)' }}>Czas reakcji na awarię</td>
                <td className="py-4 px-6" style={{ color: 'var(--pg-text-secondary)' }}>Do 48-72h w dni robocze przez system zgłoszeniowy</td>
                <td className="py-4 px-6 font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/5">Nawet do 2-4h z bezpośrednim kontaktem telefonicznym</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
