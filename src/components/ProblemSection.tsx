import React from 'react';
import { ArrowRight } from 'lucide-react';

const items = [
  { problem: 'Ręczne wycinanie tła i kadrowanie zdjęć produktów', solution: 'Obróbka zdjęć AI', href: '/automatyzacja-zdjec-produktowych' },
  { problem: 'Sprawdzanie opisów z kartami PDF od dostawców', solution: 'Walidacja opisów', href: '/walidacja-opisow-produktow' },
  { problem: 'Tłumaczenie katalogu i rachunki za zewnętrzne API', solution: 'Tłumaczenie na Twoim serwerze', href: '/tlumaczenie-katalogu-produktowego' },
  { problem: 'Szukanie informacji w instrukcjach i umowach', solution: 'Chatbot na firmowych dokumentach', href: '/chatbot-ai-on-premise' },
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="kompetencje" className="py-20 transition-colors" style={{ backgroundColor: 'var(--pg-bg)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Co zabiera czas w <span className="font-semibold text-ubuntuOrange-50">sklepie i hurtowni?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Te zadania przejmuje AI działające na Twoim serwerze.
          </p>
        </div>

        <ul className="divide-y border-y" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          {items.map((item) => (
            <li key={item.href} style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <a href={item.href} className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4">
                <span className="flex-1 text-sm sm:text-base" style={{ color: 'var(--pg-text-primary)' }}>{item.problem}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ubuntuOrange-50 group-hover:underline">
                  {item.solution}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
