import React from 'react';
import { Reveal } from './motion/Reveal';

// Nagłówek sekcji w stylu Pangolin: etykieta (overline) w mono, lekki tytuł 32/42 px, lede.
// Pomarańcz tylko jako drobny akcent etykiety; tytuł w kolorze tekstu.
export const SectionHeading: React.FC<{
  overline: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}> = ({ overline, title, lede }) => (
  <Reveal className="max-w-2xl mx-auto text-center mb-12 space-y-4">
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--pg-text-secondary)' }}>
      <span className="w-4 h-px bg-ubuntuOrange-50" />
      {overline}
      <span className="w-4 h-px bg-ubuntuOrange-50" />
    </span>
    <h2 className="text-[32px] sm:text-[42px] font-light leading-[1.1] tracking-tight text-balance" style={{ color: 'var(--pg-text-primary)' }}>
      {title}
    </h2>
    {lede && (
      <p className="text-base sm:text-lg leading-relaxed text-pretty" style={{ color: 'var(--pg-text-secondary)' }}>
        {lede}
      </p>
    )}
  </Reveal>
);
