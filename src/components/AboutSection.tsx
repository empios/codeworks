import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="o-agencji" className="py-24 transition-colors relative" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
              <Award className="w-4 h-4 text-ubuntuOrange-50" />
              <span>O Marce CodeWorks</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight" style={{ color: 'var(--pg-text-primary)' }}>
              Inżynierskie podejście do oprogramowania dla <span className="font-semibold text-ubuntuOrange-50">Lokalnego Biznesu</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Nazywam się <strong>Paweł Włodarczyk</strong>. Stworzyłem <strong>CodeWorks</strong> jako nowoczesne studio technologiczne, które dostarcza małym i średnim firmom z Trójmiasta i Elbląga rozwiązania na poziomie dużych software house’ów – bez agencji narzutów i zbędnej biurokracji.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>
              Wierzę w pełną przejrzystość: buduję projekty w 100% oparte na otwartym kodzie źródłowym (Zero Vendor Lock-in), z natychmiastowym przekazaniem pełnych praw autorskich dla zamawiającego oraz jasną gwarancją Fixed Price w umowie.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-ubuntuOrange-50/5 border border-ubuntuOrange-50/20">
                <ShieldCheck className="w-5 h-5 text-ubuntuOrange-50 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--pg-text-primary)' }}>Gwarancja SLA &amp; Fixed Price</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Stała cena w umowie, brak ukrytych opłat i opieka powdrożeniowa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-ubuntuOrange-50/5 border border-ubuntuOrange-50/20">
                <HeartHandshake className="w-5 h-5 text-ubuntuOrange-50 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--pg-text-primary)' }}>Bezpośredni Kontakt</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--pg-text-muted)' }}>Rozmawiasz bezpośrednio z inżynierem tworzącym Twój system.</p>
                </div>
              </div>
            </div>

            {/* Link to Personal Engineering Portfolio */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="p-4 rounded-xl border bg-ubuntuOrange-50/5 border-ubuntuOrange-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Osobista strona inżynierska / Full-Time CV:</span>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    Szukasz mojego indywidualnego portfolio inżyniera oprogramowania do pracy na etacie?
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

          {/* Right Column: Visual Avatar Card */}
          <div className="lg:col-span-5">
            <div className="pg-card p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6">
              
              <div className="relative z-10 space-y-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-ubuntuOrange-50 shadow-md">
                  <img 
                    src="/avatar.jpg" 
                    alt="Paweł Włodarczyk" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Paweł Włodarczyk</h3>
                  <p className="text-xs font-mono font-medium text-ubuntuOrange-50">Założyciel &amp; Lead Software Developer</p>
                </div>

                <div className="space-y-2 pt-4 border-t text-xs" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-secondary)' }}>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Dojazd do firm: Gdańsk, Gdynia, Sopot, Elbląg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Spotkania w kawiarni lub omówienie projektu online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                    <span>Inżynier Magister (Politechnika / AMW / WSB)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="#kontakt"
                    className="w-full block text-center py-3 rounded-xl bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Umów darmową konsultację
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
