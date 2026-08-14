import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  return (
    <section id="kompetencje" className="py-24 transition-colors" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Wydajność &amp; RODO w e-commerce</span>
          <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Z jakimi wyzwaniami mierzą się <span className="font-semibold text-ubuntuOrange-50">sklepy i hurtownie?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Setki godzin spędzone na powtarzalnych czynnościach oraz ryzyko wycieku danych przy korzystaniu z publicznych modeli AI.
          </p>
        </div>

        {/* 3 Grid Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="pg-card p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Ręczny proces</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Tygodnie obróbki zdjęć i opisów</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Ręczne wycinanie tła ze zdjęć od kilkunastu dostawców i sprawdzanie specyfikacji technicznych paraliżuje wdrożenia nowych produktów na sklep.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Automatyzacja CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                Skrócenie czasu z 5 dni do 5 minut dzięki automatycznemu pipeline'owi wycinania tła i walidacji danych z kartami PDF.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="pg-card p-8 rounded-2xl flex flex-col justify-between space-y-6 border-2 border-ubuntuOrange-50/30 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Przeszkoda biznesowa</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Kosztotwórcze opłaty za tokeny chmurowe</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Przetłumaczenie obszernych katalogów produktów za pomocą zewnętrznych chmurowych API generuje fortunę w miesięcznych rachunkach.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Automatyzacja CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                Wdrożenie lokalnego modelu na serwerze klienta: zero stałych opłat za tokeny i pełna kontrola nad bazą słownictwa.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="pg-card p-8 rounded-2xl flex flex-col justify-between space-y-6 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Ryzyko prawne &amp; RODO</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Wyciek danych firmowych do chmury</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Wysyłanie poufnej dokumentacji, procedur i umów do publicznych modeli AI niesie ryzyko naruszenia tajemnic i RODO.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Automatyzacja CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                Chatbot RAG działający w 100% on-premise na Twoim serwerze. Dane firmowe nigdy nie trafiają do sieci zewnętrznej.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <a 
            href="#cennik" 
            className="inline-flex items-center gap-2 text-sm font-bold text-ubuntuOrange-50 hover:underline group"
          >
            <span>Zobacz cennik i wyceny wdrożeń AI on-premise</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
