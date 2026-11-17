import React from 'react';

// Znak CodeWorks: litera „c” i kursor terminala na pomarańczowym kaflu.
// Źródło: logos/export/icon.svg
export const LogoMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
    <rect width="512" height="512" rx="120" fill="#E95420" />
    <path d="M265.1 189.8 A96 96 0 1 0 265.1 322.2" fill="none" stroke="#2C001E" strokeWidth="64" strokeLinecap="round" />
    <rect x="308" y="170" width="84" height="172" rx="12" fill="#FFFFFF" />
  </svg>
);

// Napis „codeworks” z kursorem, w kroju mono jak w logo.
export const LogoWordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`font-mono font-bold tracking-tight inline-flex items-center ${className}`} style={{ color: 'var(--pg-text-primary)' }}>
    code<span className="text-aubergine-50 dark:text-ubuntuOrange-30">works</span>
    <span aria-hidden="true" className="inline-block w-[0.5em] h-[0.78em] ml-[0.12em] rounded-[1px] bg-ubuntuOrange-50" />
  </span>
);
