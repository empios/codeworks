import React from 'react';
import { ArrowRight, FlaskConical, ImageIcon, Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../config/contact';

// PLACEHOLDERY DO PODMIANY: wstaw własne pliki do public/demo/ i podaj ścieżki w `src`.
// Treść opisów to dane testowe, nie realizacja dla klienta.
const DEMO = {
  photo: {
    before: { src: '', label: 'Surowe zdjęcie produktu', hint: 'public/demo/zdjecie-przed.webp' },
    after: { src: '', label: 'Gotowe: białe tło, wykadrowane', hint: 'public/demo/zdjecie-po.webp' },
  },
  description: {
    before: 'Lampka biurkowa TEST-01 LED moc 12W kolor czarny idealna do biura!!!',
    after: 'Lampka biurkowa LED TEST-01. Moc: 10 W (wg karty PDF producenta). Kolor: czarny.',
    note: 'Wykryta rozbieżność z kartą PDF: moc 12 W → 10 W',
  },
};

const DemoImage: React.FC<{ src: string; label: string; hint: string }> = ({ src, label, hint }) => (
  <figure className="space-y-2">
    {src ? (
      <img src={src} alt={label} loading="lazy" className="w-full aspect-square object-cover rounded-xl border" style={{ borderColor: 'var(--pg-border-subtle)' }} />
    ) : (
      <div
        title={hint}
        className="w-full aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 p-4 text-center"
        style={{ borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-muted)' }}
      >
        <ImageIcon className="w-8 h-8" />
        <span className="text-[11px]">Zdjęcie testowe</span>
      </div>
    )}
    <figcaption className="text-xs font-medium" style={{ color: 'var(--pg-text-secondary)' }}>{label}</figcaption>
  </figure>
);

export const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-20 border-t transition-colors" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
            <FlaskConical className="w-3.5 h-3.5" />
            Demo na danych testowych
          </span>
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Zobacz, <span className="font-semibold text-ubuntuOrange-50">jak to działa</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            „Przed” to materiał od dostawcy, „Po” to wynik automatyzacji.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Zdjęcie: przed → po */}
          <div className="pg-card p-5 rounded-2xl space-y-4">
            <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Zdjęcie produktu: przed → po</h3>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <DemoImage {...DEMO.photo.before} />
              <ArrowRight className="w-5 h-5 text-ubuntuOrange-50" aria-label="po automatyzacji" />
              <DemoImage {...DEMO.photo.after} />
            </div>
          </div>

          {/* Opis: przed → po */}
          <div className="pg-card p-5 rounded-2xl space-y-4">
            <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Opis produktu</h3>
            <dl className="space-y-3 text-sm">
              <div className="p-3 rounded-lg border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <dt className="text-[11px] font-mono uppercase mb-1" style={{ color: 'var(--pg-text-muted)' }}>Przed</dt>
                <dd style={{ color: 'var(--pg-text-secondary)' }}>{DEMO.description.before}</dd>
              </div>
              <div className="p-3 rounded-lg border border-ubuntuOrange-50/40 bg-ubuntuOrange-50/5">
                <dt className="text-[11px] font-mono uppercase mb-1 text-ubuntuOrange-50">Po</dt>
                <dd style={{ color: 'var(--pg-text-primary)' }}>{DEMO.description.after}</dd>
              </div>
            </dl>
            <p className="text-xs font-medium text-ubuntuOrange-50">{DEMO.description.note}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>Chcesz zobaczyć to na swoich danych?</span>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            Umów darmową 20-min rozmowę
          </a>
        </div>
      </div>
    </section>
  );
};
