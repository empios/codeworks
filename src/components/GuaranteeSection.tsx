import React from 'react';
import { ShieldCheck, FileCheck, LockKeyhole, Sparkles } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 transition-colors border-y" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pg-card p-8 sm:p-12 rounded-3xl border-2 border-ubuntuOrange-50/40 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ubuntuOrange-50/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-ubuntuOrange-50" />
                  <span>Twoje bezpieczeństwo transakcji</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
                  Potrójna Gwarancja Bezpieczeństwa dla Firm z Elbląga
                </h3>
              </div>
              <div className="shrink-0">
                <span className="px-4 py-2 rounded-full bg-ubuntuOrange-50 text-white font-bold text-xs shadow-sm uppercase tracking-wider">
                  Zero Ryzyka
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-2xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <FileCheck className="w-8 h-8 text-ubuntuOrange-50 mb-3" />
                <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--pg-text-primary)' }}>1. Umowa i Fixed Price</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Podpisujemy czytelną umowę z ustaloną kwotą końcową. Brak jakichkolwiek niespodzianek czy ukrytych dopłat na fakturze.
                </p>
              </div>

              <div className="p-5 rounded-2xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <ShieldCheck className="w-8 h-8 text-ubuntuOrange-50 mb-3" />
                <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--pg-text-primary)' }}>2. 12 Miesięcy Gwarancji</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Daję 12 miesięcy pisemnej gwarancji na niezawodność kodu. Wszelkie ewentualne usterki usuwam bezpłatnie i od ręki.
                </p>
              </div>

              <div className="p-5 rounded-2xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <LockKeyhole className="w-8 h-8 text-ubuntuOrange-50 mb-3" />
                <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--pg-text-primary)' }}>3. Transfer Praw &amp; Kodów</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Po wdrożeniu otrzymujesz pełną dokumentację, kody źródłowe oraz umowę przeniesienia autorskich praw majątkowych.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
