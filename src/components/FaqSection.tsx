import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './motion/Reveal';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../config/contact';
import { SectionHeading } from './SectionHeading';

interface FaqItem {
  question: string;
  answer: string;
}

const homeFaqs: FaqItem[] = [
  {
    question: "Czy kod i prawa autorskie będą moje?",
    answer: "Tak. Po opłaceniu końcowej faktury przekazuję pełny kod źródłowy i autorskie prawa majątkowe."
  },
  {
    question: "Czy cena może się zmienić w trakcie?",
    answer: "Nie. Po ustaleniu zakresu dostajesz stałą wycenę; zmienia się tylko, jeśli sam rozszerzysz zakres."
  },
  {
    question: "Ile kosztuje start?",
    answer: "Pierwsza rozmowa (ok. 20 minut) jest bezpłatna. Ceny startowe znajdziesz w cenniku powyżej."
  },
  {
    question: "Czy muszę płacić abonament?",
    answer: "Za strony i aplikacje nie. Opieka techniczna jest opcjonalna. Wdrożenia AI mają osobne koszty utrzymania podane w cenniku."
  },
  {
    question: "Gdzie działasz?",
    answer: "Siedziba w Elblągu, dojazd do Trójmiasta, zdalnie w całej Polsce."
  },
  {
    question: "Z kim rozmawiam?",
    answer: "Bezpośrednio ze mną, Pawłem Włodarczykiem. Prowadzę CodeWorks."
  }
];

export const FaqSection: React.FC<{ variant?: 'home' | 'webdev' }> = ({ variant = 'webdev' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isHome = variant === 'home';

  const webdevFaqs: FaqItem[] = [
    {
      question: "Czy strona będzie moją własnością?",
      answer: "Tak. Po opłaceniu końcowej faktury dostajesz cały kod, dostępy i umowę przeniesienia autorskich praw majątkowych. Możesz potem pracować z kimkolwiek, nie tylko ze mną."
    },
    {
      question: "Czy cena może się zmienić w trakcie?",
      answer: "Nie. Po ustaleniu zakresu wpisuję kwotę do umowy. Zmienia się tylko wtedy, gdy sam zechcesz dodać coś nowego, i wtedy najpierw podaję cenę dopłaty."
    },
    {
      question: "Nie mam tekstów ani zdjęć. Pomożesz?",
      answer: "Tak. Mogę napisać teksty na podstawie rozmowy z Tobą (to dodatek w kalkulatorze) i dobrać zdjęcia z legalnych banków zdjęć."
    },
    {
      question: "Dlaczego nie agencja?",
      answer: "Agencja ma większy zespół, ale też handlowców i kierowników projektu, za których płacisz. U mnie rozmawiasz bezpośrednio z osobą, która pisze kod. W Elblągu i okolicy mogę też przyjechać na spotkanie."
    },
    {
      question: "Czy muszę płacić abonament?",
      answer: "Nie. Za stronę płacisz raz. Opieka techniczna (od 250 zł netto miesięcznie) jest opcjonalna. Jeśli wolisz dbać o stronę sam, dostaniesz instrukcję."
    },
    {
      question: "Ile to trwa?",
      answer: "Strona firmowa zwykle od 7 do 14 dni roboczych od akceptacji projektu, sklep WooCommerce od 14 do 28 dni roboczych."
    }
  ];

  const faqs = isHome ? homeFaqs : webdevFaqs;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 border-t transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading overline="FAQ" title={<>Częste <span className="font-medium">pytania</span></>} lede={<>Nie ma tu Twojego pytania? Zadzwoń: <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-ubuntuOrange-50 hover:underline whitespace-nowrap">{CONTACT_PHONE_DISPLAY}</a></>} />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="pg-card rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-ubuntuOrange-50 rounded-lg"
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
