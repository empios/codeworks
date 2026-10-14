import React, { useEffect, useRef, useState } from 'react';
import { MoveHorizontal, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../config/contact';
import { Reveal } from './motion/Reveal';
import { SectionHeading } from './SectionHeading';

// DANE TESTOWE, nie realizacja dla klienta.
// Zdjęcia: wstaw własne pliki do public/demo/ i podaj ścieżki w `src` — wtedy zastąpią ilustrację.
const DEMO = {
  photo: {
    before: { src: '', alt: 'Surowe zdjęcie produktu testowego' },
    after: { src: '', alt: 'Gotowe zdjęcie: białe tło, produkt wyprostowany i wykadrowany' },
  },
  description: {
    before: [
      { t: 'kubek ceramiczny test-01 poj ' },
      { t: '400ml', mark: true },
      { t: ' kolor pomaranczowy idealny na prezent!!!' },
    ],
    after: [
      { t: 'Kubek ceramiczny TEST-01. Pojemność: ' },
      { t: '350 ml', mark: true },
      { t: ' (wg karty PDF producenta). Kolor: pomarańczowy.' },
    ],
    note: 'Wykryta rozbieżność z kartą PDF: pojemność 400 ml → 350 ml',
  },
};

// Ilustracja produktu testowego (kubek) — używana, dopóki nie podasz prawdziwych zdjęć.
const Mug: React.FC<{ id: string }> = ({ id }) => (
  <g>
    <path d="M250 175 C 305 170, 312 255, 250 255" fill="none" stroke="#B8410F" strokeWidth="16" strokeLinecap="round" />
    <path d="M140 140 L 140 285 Q 140 305 160 305 L 240 305 Q 260 305 260 285 L 260 140 Z" fill={`url(#${id}-body)`} />
    <ellipse cx="200" cy="140" rx="60" ry="14" fill="#FF8A5C" />
    <ellipse cx="200" cy="142" rx="50" ry="10" fill="#7E2807" />
    <text x="200" y="232" textAnchor="middle" fontSize="15" fontWeight="700" fill="#FFEFE6" fontFamily="monospace">TEST-01</text>
  </g>
);

const MugDefs: React.FC<{ id: string }> = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-body`} x1="0" x2="1">
      <stop offset="0" stopColor="#A8370A" />
      <stop offset="0.35" stopColor="#E95420" />
      <stop offset="0.6" stopColor="#FF7848" />
      <stop offset="1" stopColor="#C8420A" />
    </linearGradient>
    <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stopColor="#6B6259" />
      <stop offset="1" stopColor="#3A332D" />
    </linearGradient>
    <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" />
    </filter>
  </defs>
);

const BeforeShot: React.FC = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label={DEMO.photo.before.alt}>
    <MugDefs id="before" />
    <rect width="400" height="400" fill="url(#before-bg)" />
    <rect y="292" width="400" height="108" fill="#5A4C40" />
    <rect x="292" y="196" width="96" height="104" rx="4" fill="#8E867E" transform="rotate(6 340 248)" />
    <path d="M0 360 C 80 330, 140 390, 230 350 S 360 330, 400 372" fill="none" stroke="#2A2520" strokeWidth="6" />
    <g transform="translate(-58 38) rotate(-9 200 220) scale(0.78)">
      <ellipse cx="236" cy="312" rx="80" ry="12" fill="#000" opacity="0.55" />
      <Mug id="before" />
    </g>
    <rect width="400" height="400" fill="#000" opacity="0.22" />
  </svg>
);

const AfterShot: React.FC = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" role="img" aria-label={DEMO.photo.after.alt}>
    <MugDefs id="after" />
    <rect width="400" height="400" fill="#FFFFFF" />
    <g transform="translate(-18 -14) scale(1.09)">
      <ellipse cx="200" cy="310" rx="74" ry="10" fill="#000" opacity="0.18" filter="url(#after-shadow)" />
      <Mug id="after" />
    </g>
  </svg>
);

const BeforeAfterSlider: React.FC = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  // Jednorazowy ruch suwaka po wejściu w widok — pokazuje, że można go przesuwać.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1800);
        setPos(50 + Math.sin(k * Math.PI * 2) * 32 * (1 - k));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const { before, after } = DEMO.photo;

  return (
    <div ref={ref} className="relative aspect-square rounded overflow-hidden select-none">
      <div className="absolute inset-0">
        {before.src ? <img src={before.src} alt={before.alt} loading="lazy" className="w-full h-full object-cover" /> : <BeforeShot />}
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        {after.src ? <img src={after.src} alt={after.alt} loading="lazy" className="w-full h-full object-cover" /> : <AfterShot />}
      </div>

      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-black/60 text-white">Przed</span>
      <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-ubuntuOrange-50 text-white">Po</span>

      <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-ubuntuOrange-50 shadow-lg flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Porównaj zdjęcie przed i po automatyzacji"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
};

export const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-20 border-t transition-colors pg-grid-bg" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading overline="Demo na danych testowych" title={<>Jak to wygląda <span className="font-medium">w praktyce</span></>} lede="Przesuń suwak. Po lewej zdjęcie od dostawcy, po prawej to samo zdjęcie po automatycznej obróbce." />

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Reveal className="pg-card p-5 rounded-lg space-y-3">
            <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Zdjęcie produktu</h3>
            <BeforeAfterSlider />
            <p className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Tło usunięte, produkt wyprostowany, wyśrodkowany i wykadrowany do kwadratu.</p>
          </Reveal>

          <Reveal index={1} step={0.05} className="pg-card p-5 rounded-lg space-y-4">
            <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Opis produktu sprawdzony z kartą PDF</h3>
            <dl className="space-y-3 text-sm">
              <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <dt className="text-[11px] font-mono uppercase mb-1.5" style={{ color: 'var(--pg-text-muted)' }}>Przed</dt>
                <dd style={{ color: 'var(--pg-text-secondary)' }}>
                  {DEMO.description.before.map((s, k) =>
                    s.mark ? <mark key={k} className="px-1 rounded bg-rose-500/20 text-rose-500 line-through decoration-2">{s.t}</mark> : <span key={k}>{s.t}</span>
                  )}
                </dd>
              </div>
              <div className="p-4 rounded-lg border border-ubuntuOrange-50/40 bg-ubuntuOrange-50/5">
                <dt className="text-[11px] font-mono uppercase mb-1.5 text-ubuntuOrange-50">Po</dt>
                <dd style={{ color: 'var(--pg-text-primary)' }}>
                  {DEMO.description.after.map((s, k) =>
                    s.mark ? <mark key={k} className="px-1 rounded bg-emerald-500/20 text-emerald-500 font-semibold">{s.t}</mark> : <span key={k}>{s.t}</span>
                  )}
                </dd>
              </div>
            </dl>
            <p className="text-xs font-medium text-ubuntuOrange-50">{DEMO.description.note}</p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>Chcesz zobaczyć to na swoich danych?</span>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="press inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-5 py-3 rounded-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            Zadzwoń: bezpłatna rozmowa
          </a>
        </div>
      </div>
    </section>
  );
};
