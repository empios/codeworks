import React from 'react';

const homeSteps = [
  { title: 'Darmowa rozmowa', text: '20 minut: opowiadasz, czego potrzebujesz.' },
  { title: 'Wycena', text: 'Zakres i stała cena przed startem prac.' },
  { title: 'Realizacja', text: 'Projektuję, programuję i wdrażam.' },
  { title: 'Przekazanie i opieka', text: 'Kod i prawa autorskie dla Ciebie, opieka opcjonalnie.' },
];

const webdevSteps = [
  { title: 'Rozmowa', text: 'Spotykamy się w Elblągu, w Trójmieście albo online. Mówisz, czego potrzebujesz, a ja dopytuję.' },
  { title: 'Projekt i wycena', text: 'Pokazuję szkic strony i podaję cenę. Zaczynam pracę dopiero, gdy oba punkty Ci odpowiadają.' },
  { title: 'Budowa strony', text: 'Programuję stronę, sprawdzam ją na telefonach i dbam, żeby ładowała się szybko i była widoczna w Google.' },
  { title: 'Odbiór', text: 'Pokazuję, jak samemu zmieniać treści. Przekazuję kod, dostępy i prawa autorskie.' },
];

export const ProcessSection: React.FC<{ variant?: 'home' | 'webdev' }> = ({ variant = 'webdev' }) => {
  if (variant === 'home') {
    return (
      <section id="proces" className="py-20 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Jak wygląda <span className="font-semibold text-ubuntuOrange-50">współpraca</span>?
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Od pierwszej rozmowy do działającego systemu.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeSteps.map((step, i) => (
              <li key={step.title} className="pg-card p-5 rounded-2xl space-y-2 text-center">
                <span className="w-8 h-8 mx-auto rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold" style={{ color: 'var(--pg-text-primary)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section id="proces" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Jak wygląda <span className="font-semibold text-ubuntuOrange-50">współpraca</span>?
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Cztery kroki. Na każdym etapie wiesz, co się dzieje.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {webdevSteps.map((step, i) => (
            <li key={step.title} className="pg-card p-5 rounded-2xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <h3 className="text-base font-bold" style={{ color: 'var(--pg-text-primary)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>{step.text}</p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};
