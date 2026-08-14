import React from 'react';
import { Video, Coffee, Unlock, Zap, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const locations = ["Elbląg", "Gdańsk", "Gdynia", "Sopot", "Pasłęk", "Gronowo Górne", "Zdalnie w całej PL"];

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
          
          {/* Badge */}
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
              <span>CodeWorks · Automatyzacja Procesów AI · On-Premise (RODO)</span>
            </div>
          </div>

          {/* H1 Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]" style={{ color: 'var(--pg-text-primary)' }}>
            Automatyzujemy powtarzalną robotę w <span className="font-bold gradient-orange-aubergine">sklepach i hurtowniach</span>
          </h1>

          {/* H2 Subtitle / Value Proposition: 2 sentences */}
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
            Wdrażamy lokalne modele AI, które automatycznie przetwarzają zdjęcia produktowe, weryfikują opisy z kartami PDF, tłumaczą wielotysięczne katalogi oraz wyszukują wiedzę w dokumentach. Wszystkie rozwiązania działają w 100% na Twoim własnym serwerze (on-premise) — Twoje dane i pliki nie wychodzą na zewnątrz (argument RODO).
          </p>

          {/* Location Badges Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ubuntuOrange-50 flex items-center gap-1 mr-1">
              <MapPin className="w-3.5 h-3.5 text-ubuntuOrange-50" />
              <span>Obszar działania:</span>
            </span>
            {locations.map((loc, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1 rounded-full text-xs font-semibold border bg-ubuntuOrange-50/10 border-ubuntuOrange-50/30 text-ubuntuOrange-50 shadow-xs cursor-default"
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
              href="/audyt" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-pg-glow transition-all"
            >
              <Video className="w-5 h-5" />
              <span>Zamów Audyt Procesu (3 500 zł netto)</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#kompetencje" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border font-medium text-base px-6 py-4 rounded-lg transition-all shadow-sm hover:border-ubuntuOrange-50"
              style={{
                backgroundColor: 'var(--pg-layer-01)',
                borderColor: 'var(--pg-border-strong)',
                color: 'var(--pg-text-primary)'
              }}
            >
              <Coffee className="w-5 h-5 text-ubuntuOrange-50" />
              <span>Poznaj 4 Rozwiązania AI</span>
            </motion.a>
          </div>

          {/* Key Advantages */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            
            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>100% On-Premise</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Dane pozostają u klienta. Zgodność z RODO.</p>
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
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Wysoka Wydajność</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Obsługa skali do 1M rekordów katalogowych.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="pg-card p-4 rounded-xl flex items-start gap-3 transition-all"
            >
              <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 shrink-0">
                <Unlock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Brak Opłat za Tokeny</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Lokalne modele bez płacenia subskrypcji API.</p>
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
                <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Lokalnie z Elbląga</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-muted)' }}>Wdrożenie produkcyjne i bezpośredni kontakt.</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
