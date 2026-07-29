import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 transition-colors" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Lokalne wyzwania B2B</span>
          <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Dlaczego zwykła strona od agencji <span className="font-semibold text-ubuntuOrange-50">nie przynosi klientów?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Wielu przedsiębiorców z Elbląga wydaje budżet na ładny obrazek, który po miesiącu okazuje się wolną „cyfrową wizytówką” bez ani jednego zapytania.
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
                <span>Problem z Agencją</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Wolne ładowanie (5-8 sek) i porzucenia</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Gotowe, przeładowane wtyczkami szablony ładują się zbyt wolno na telefonach. Ponad 50% klientów opuszcza stronę zanim w ogóle zobaczy ofertę.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Rozwiązanie CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                Optymalizacja kodu i Pangolin DS. Wynik Google PageSpeed 95-100 i ładowanie poniżej 1.5 sekundy.
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
                <span>Problem z Agencją</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Autorski CMS i Uwięzienie Klienta</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Dedykowane, autorskie systemy agencji (Vendor Lock-in) zmuszają do płacenia wysokich abonamentów za każdą, nawet drobną zmianę tekstu.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Rozwiązanie CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                100% Otwarty Kod (WordPress/WooCommerce/React). Strona i dostęp są w 100% Twoją własnością bez opłat.
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
                <span>Problem z Agencją</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Brak nastawienia na konwersję (Lead Gen)</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Strona skupia się na „ładnych grafikach”, pomijając język korzyści, wyraziste przyciski CTA i ułatwienia kontaktu telefonicznego dla lokalnych klientów.
              </p>
            </div>

            <div className="pt-6 border-t space-y-2" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-center gap-2 text-ubuntuOrange-50 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                <span>Rozwiązanie CodeWorks</span>
              </div>
              <p className="text-xs font-medium" style={{ color: 'var(--pg-text-primary)' }}>
                Projektowanie UX/UI nakierowane na zysk: czytelna nawigacja, lead magnety i natychmiastowe połączenie z firmą.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <a 
            href="#oferta" 
            className="inline-flex items-center gap-2 text-sm font-bold text-ubuntuOrange-50 hover:underline group"
          >
            <span>Zobacz, jak budujemy strony wolne od tych błędów</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
