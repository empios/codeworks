import React from 'react';
import { Building, Target, Shield, Award, CheckCircle2, Code2, Users2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="o-agencji" className="py-24 relative overflow-hidden border-b transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Agency Card */}
          <div className="lg:col-span-5">
            <div className="pg-card p-8 rounded-3xl relative shadow-2xl border-2 border-ubuntuOrange-50/30">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ubuntuOrange-50 to-aubergine-60 flex items-center justify-center text-white shadow-lg shrink-0">
                  <Code2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
                    Code<span className="text-ubuntuOrange-50">Works</span>
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-ubuntuOrange-50 font-bold mt-0.5">
                    Studio Interaktywne &amp; Software House
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>
                    📍 Elbląg &amp; Powiat Elbląski
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span>Strony Internetowe &amp; Landing Page RWD</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span>Sklepy WooCommerce (Płatności BLIK &amp; InPost)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span>Dedykowane Aplikacje B2B &amp; Integracje API</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}>
                  <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span>Opieka Techniczna Maintenance &amp; Bank Godzin SLA</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 mt-6 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div>
                  <span className="text-2xl font-extrabold text-ubuntuOrange-50">100%</span>
                  <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>otwarty kod (No Lock-in)</p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-ubuntuOrange-50">Fixed Price</span>
                  <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>gwarancja stałej ceny</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Mission & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
              <Building className="w-4 h-4 text-ubuntuOrange-50" />
              <span>O agencji CodeWorks</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--pg-text-primary)' }}>
              Nowoczesny partner technologiczny dla firm z <span className="text-ubuntuOrange-50">Elbląga i okolic</span>
            </h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              <p>
                <strong>CodeWorks</strong> to jednoosobowa agencja interaktywna i software house dostarczający rozwiązania internetowe dostosowane do potrzeb lokalnego biznesu MŚP.
              </p>
              <p>
                Projektujemy i kodujemy strony internetowe, sklepy WooCommerce oraz aplikacje webowe z naciskiem na <strong>szybkość ładowania, responsywność (RWD) oraz generowanie zapytań od klientów</strong>.
              </p>
              <p>
                Eliminujemy marże pośredników i skomplikowaną biurokrację typowych agencji. W CodeWorks rozmawiasz bezpośrednio z inżynierem odpowiedzialnym za realizację Twojego projektu, co gwarantuje sprawną komunikację i elastyczność.
              </p>
            </div>

            {/* 3 Agency Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <Target className="w-5 h-5 text-ubuntuOrange-50 mb-2" />
                <h4 className="font-bold text-xs mb-1" style={{ color: 'var(--pg-text-primary)' }}>Biznesowe nastawienie</h4>
                <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>Strona budowana pod kątem sprzedaży i zdobywania leada.</p>
              </div>

              <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <Shield className="w-5 h-5 text-ubuntuOrange-50 mb-2" />
                <h4 className="font-bold text-xs mb-1" style={{ color: 'var(--pg-text-primary)' }}>Brak Vendor Lock-in</h4>
                <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>100% otwarty kod źródłowy i transfer praw autorskich.</p>
              </div>

              <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                <Award className="w-5 h-5 text-ubuntuOrange-50 mb-2" />
                <h4 className="font-bold text-xs mb-1" style={{ color: 'var(--pg-text-primary)' }}>Gwarancja SLA</h4>
                <p className="text-[11px]" style={{ color: 'var(--pg-text-muted)' }}>12 miesięcy pisemnej gwarancji i stała opieka.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
