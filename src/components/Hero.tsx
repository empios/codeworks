import React from 'react';
import { Video, Coffee, Unlock, Zap, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const locations = ["Gdańsk", "Gdynia", "Sopot", "Elbląg", "Pasłęk", "Tolkmicko", "Młynary", "Gronowo Górne"];

  return (
    <section 
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b transition-colors"
      style={{ borderColor: 'var(--pg-border-subtle)' }}
    >
      {/* Dynamic Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-ubuntuOrange-50/15 blur-[130px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-aubergine-50/20 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Location & Title Badge */}
          <div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs md:text-sm font-medium shadow-sm transition-colors"
              style={{
                backgroundColor: 'var(--pg-badge-bg)',
                borderColor: 'var(--pg-badge-border)',
                color: 'var(--pg-badge-text)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-ubuntuOrange-50 animate-pulse"></span>
              <span>CodeWorks · Studio IT · Trójmiasto (Gdańsk, Gdynia, Sopot) &amp; Elbląg</span>
            </div>
          </div>

          {/* H1 Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]" style={{ color: 'var(--pg-text-primary)' }}>
            Tworzenie Stron Internetowych i Sklepów w <span className="font-bold gradient-orange-aubergine">Trójmieście i Elblągu</span>
          </h1>

          {/* H2 Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
            CodeWorks – Twój lokalny partner technologiczny w regionie Pomorza. Budujemy szybkie strony firmowe, sklepy WooCommerce i dedykowane aplikacje B2B. 
            <strong className="text-ubuntuOrange-50 font-semibold"> 100% otwarty kod źródłowy</strong>, brak vendor lock-in i bezpośredni kontakt z inżynierem bez pośredników.
          </p>

          {/* Ubuntu Orange Location Badges Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ubuntuOrange-50 flex items-center gap-1 mr-1">
              <MapPin className="w-3.5 h-3.5 text-ubuntuOrange-50" />
              <span>Dojazd do firm:</span>
            </span>
            {locations.map((loc, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1 rounded-full text-xs font-semibold border bg-ubuntuOrange-50/10 border-ubuntuOrange-50/30 text-ubuntuOrange-50 shadow-xs transition-all hover:scale-105 hover:bg-ubuntuOrange-50 hover:text-white cursor-default"
              >
                📍 {loc}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.a 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#kontakt" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-medium text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-pg-glow transition-all"
            >
              <Video className="w-5 h-5" />
              <span>Zamów Bezpłatny Audyt Wideo</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#kontakt" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border font-medium text-base px-6 py-4 rounded-lg transition-all shadow-sm hover:border-ubuntuOrange-50"
              style={{
                backgroundColor: 'var(--pg-layer-01)',
                borderColor: 'var(--pg-border-strong)',
                color: 'var(--pg-text-primary)'
              }}
            >
              <Coffee className="w-5 h-5 text-ubuntuOrange-50" />
              <span>Umów się na spotkanie na Pomorzu</span>
            </motion.a>
          </div>

          {/* Trust Badges Grid */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <Unlock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>100% Otwarty Kod</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Zero vendor lock-in. Pełne prawa autorskie dla klienta.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Szybkość &lt; 1.5s</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Optymalizacja Google PageSpeed i zoptymalizowany kod.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Fixed Price &amp; Gwarancja</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>12 miesięcy gwarancji i stała wycena w umowie.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Mobilnie na Pomorzu</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Dojazd w Gdańsku, Gdyni, Sopocie i Elblągu.</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
