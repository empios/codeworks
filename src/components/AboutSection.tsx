import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="o-firmie" className="py-24 transition-colors relative" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
              <Award className="w-4 h-4 text-ubuntuOrange-50" />
              <span>Kto Za Tym Stoi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight" style={{ color: 'var(--pg-text-primary)' }}>
              Lokalny partner w automatyzacji <span className="font-semibold text-ubuntuOrange-50">procesów AI</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Nazywam się <strong>Paweł Włodarczyk</strong>. Prowadzę jednoosobową firmę <strong>CodeWorks</strong> w Elblągu. Wdrażam praktyczne rozwiązania AI dla e-commerce, hurtowni i dystrybutorów, pomagając eliminować najbardziej żmudną i podatną na błędy pracę.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>
              Moim kluczowym wyróżnikiem jest wdrażanie modeli w 100% on-premise (lokalnie u klienta). Twoje dane firmowe, katalogi produktowe i dokumenty wewnętrzne nigdy nie wychodzą do zewnętrznej chmury, co daje pełne bezpieczeństwo i zgodność z RODO.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-ubuntuOrange-50/5 border border-ubuntuOrange-50/20">
                <ShieldCheck className="w-5 h-5 text-ubuntuOrange-50 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--pg-text-primary)' }}>100% Bezpieczeństwa RODO</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Dane nie opuszczają Twojej sieci i serwerów firmowych.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-ubuntuOrange-50/5 border border-ubuntuOrange-50/20">
                <HeartHandshake className="w-5 h-5 text-ubuntuOrange-50 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--pg-text-primary)' }}>Bezpośredni Kontakt</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Rozmawiasz i współpracujesz bezpośrednio z inżynierem bez pośredników.</p>
                </div>
              </div>
            </div>

            {/* Link to Personal Engineering Portfolio */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="p-4 rounded-xl border bg-ubuntuOrange-50/5 border-ubuntuOrange-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Strona osobista programisty / Portfolio:</span>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    Poznaj moje zaplecze inżynieryjne i doświadczenie projektowe na stronie osobistej.
                  </p>
                </div>
                <a 
                  href="https://www.pawelvlodarczyk.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ubuntuOrange-50 text-white font-semibold text-xs shrink-0 hover:bg-ubuntuOrange-60 transition-colors shadow-sm"
                >
                  <span>pawelvlodarczyk.pl</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Centered Visual Avatar Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="pg-card p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6 w-full max-w-md text-center">
              
              <div className="relative z-10 space-y-5 flex flex-col items-center">
                
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-ubuntuOrange-50 shadow-xl p-1 bg-ubuntuOrange-50/10">
                  <img 
                    src="/avatar.jpg" 
                    alt="Paweł Włodarczyk" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--pg-text-primary)' }}>Paweł Włodarczyk</h3>
                  <p className="text-xs font-mono font-bold text-ubuntuOrange-50 uppercase tracking-wider">Inżynier &amp; Założyciel CodeWorks (Elbląg)</p>
                </div>

                <div className="w-full space-y-2.5 pt-4 border-t text-xs text-left" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-secondary)' }}>
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Lokalne wdrożenia w Elblągu i na Pomorzu</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Współpraca zdalna dla firm z całej Polski</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Wdrożenia modeli AI produkcyjnie sprawdzonych w działaniu</span>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <a 
                    href="/audyt"
                    className="w-full block text-center py-3.5 rounded-xl bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Zamów Audyt Procesu (3 500 zł)
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
