import React from 'react';
import { ShieldCheck, FileCheck, LockKeyhole } from 'lucide-react';

const items = [
  {
    icon: FileCheck,
    title: 'Cena wpisana do umowy',
    text: 'Kwotę ustalamy przed startem i wpisuję ją do umowy. Na fakturze nie pojawią się dodatkowe pozycje.',
  },
  {
    icon: ShieldCheck,
    title: '12 miesięcy gwarancji',
    text: 'Przez rok po oddaniu strony bezpłatnie poprawiam błędy, które wynikają z mojego kodu.',
  },
  {
    icon: LockKeyhole,
    title: 'Kod i prawa autorskie',
    text: 'Po odbiorze dostajesz kod, dostępy, krótką instrukcję i umowę przeniesienia praw autorskich.',
  },
];

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 transition-colors border-y" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Co masz <span className="font-semibold text-ubuntuOrange-50">na piśmie</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="pg-card p-6 rounded-2xl space-y-2">
              <Icon className="w-7 h-7 text-ubuntuOrange-50 mb-1" />
              <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
