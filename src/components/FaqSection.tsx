import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../config/contact';

interface FaqItem {
  question: string;
  answer: string;
}

const aiFaqs: FaqItem[] = [
  {
    question: "Czy moje dane trafiają do zewnętrznej chmury?",
    answer: "Nie. Model działa na Twoim serwerze, więc zdjęcia, katalogi i dokumenty zostają w firmie."
  },
  {
    question: "Czy płacę za API lub tokeny?",
    answer: "Nie. Płacisz za wdrożenie i utrzymanie według cennika, bez opłat za zewnętrzne API."
  },
  {
    question: "Ile kosztuje start?",
    answer: "Rozmowa (20 min) jest bezpłatna. Audyt procesu kosztuje 3 500 zł netto i jest w 100% odliczany od wdrożenia."
  },
  {
    question: "Gdzie działasz?",
    answer: "Siedziba w Elblągu, dojazd do Trójmiasta, zdalnie w całej Polsce."
  },
  {
    question: "Z kim rozmawiam?",
    answer: "Bezpośrednio ze mną — Paweł Włodarczyk, właściciel CodeWorks."
  }
];

export const FaqSection: React.FC<{ variant?: 'ai' | 'webdev' }> = ({ variant = 'webdev' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isAi = variant === 'ai';

  const webdevFaqs: FaqItem[] = [
    {
      question: "Czy po wdrożeniu strona staje się w 100% moją własnością?",
      answer: "Tak, absolutnie! Po uregulowaniu końcowej faktury przekazuję Ci pełne kody źródłowe oraz umowę przeniesienia autorskich praw majątkowych. Nie stosuję żadnych uwięzień w autorskich CMS (Zero Vendor Lock-in). Strona jest Twoja i masz do niej 100% dostępu."
    },
    {
      question: "Jak wygląda wycena i płatność? Czy ustalona cena może się zmienić?",
      answer: "Działam w oparciu o zasadę Fixed Price. Po omówieniu zakresu prac otrzymujesz wiążącą wycenę końcową. Cena nie ulega zmianie, chyba że w trakcie prac sam zdecydujesz o rozszerzeniu zakresu o zupełnie nowe funkcjonalności."
    },
    {
      question: "Nie mam własnych tekstów ani profesjonalnych zdjęć – czy pomożesz mi z tym?",
      answer: "Tak! Jako UX Writer i B2B Copywriter pomagam przygotować zwięzłe, przekonujące teksty nastawione na sprzedaż i zdobywanie klientów z Elbląga. Dobieram również spójne materiały graficzne i ikony."
    },
    {
      question: "Dlaczego warto wybrać CodeWorks zamiast dużej agencji reklamowej?",
      answer: "Przede wszystkim ze względu na bezpośredni kontakt i brak narzutu korporacyjnego. W agencji płacisz za marżę handlowców, menedżerów i biuro. U nas współpracujesz bezpośrednio z inżynierem IT, który odpowiada na Twoje pytania w kilka godzin i dojeżdża stacjonarnie na spotkania w Elblągu i powiecie."
    },
    {
      question: "Czy muszę płacić stały miesięczny abonament?",
      answer: "Nie! Płacisz jednorazowo za wykonanie strony. Opieka techniczna (Maintenance SLA od 250 PLN netto/msc) jest w 100% opcjonalna. Jeśli chcesz sam decydować o aktualizacjach, przekazuję Ci instrukcję i masz pełną swobodę."
    },
    {
      question: "Ile czasu trwa wykonanie strony lub sklepu?",
      answer: "Strona typu Wizytówka Smart zajmuje zazwyczaj od 7 do 14 dni roboczych od momentu akceptacji projektu. Sklep e-commerce WooCommerce realizuję w ciągu 14-28 dni roboczych."
    }
  ];

  const faqs = isAi ? aiFaqs : webdevFaqs;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isAi ? (
          <div className="max-w-2xl mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Najczęstsze <span className="font-semibold text-ubuntuOrange-50">pytania</span>
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Nie ma tu Twojego pytania? Zadzwoń: <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-ubuntuOrange-50 hover:underline whitespace-nowrap">{CONTACT_PHONE_DISPLAY}</a>
            </p>
          </div>
        ) : (
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
            <HelpCircle className="w-4 h-4 text-ubuntuOrange-50" />
            <span>Odpowiedzi na Twoje pytania</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Najczęściej Zadawane <span className="font-semibold text-ubuntuOrange-50">Pytania (FAQ)</span>
          </h2>
          <p className="text-base" style={{ color: 'var(--pg-text-secondary)' }}>
            Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy z CodeWorks.
          </p>
        </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="pg-card rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-base sm:text-lg" style={{ color: 'var(--pg-text-primary)' }}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-ubuntuOrange-50 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t transition-all"
                      style={{ 
                        borderColor: 'var(--pg-border-subtle)',
                        color: 'var(--pg-text-secondary)' 
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
