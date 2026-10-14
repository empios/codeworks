import React from 'react';

const rows = [
  {
    topic: 'Z kim rozmawiasz',
    agency: 'Z handlowcem lub project managerem, który przekazuje sprawy dalej.',
    me: 'Ze mną. Ta sama osoba wycenia, programuje i odbiera telefon.',
  },
  {
    topic: 'Kod i prawa autorskie',
    agency: 'Bywa, że strona stoi na systemie agencji i nie da się jej zabrać.',
    me: 'Dostajesz cały kod i umowę przeniesienia praw autorskich.',
  },
  {
    topic: 'Spotkanie na żywo',
    agency: 'Zwykle tylko online albo z dopłatą za dojazd.',
    me: 'W Elblągu i okolicy przyjeżdżam bez dopłaty. Można też online.',
  },
  {
    topic: 'Szybkość strony',
    agency: 'Gotowe motywy z dziesiątkami wtyczek, które spowalniają stronę.',
    me: 'Tylko to, czego strona potrzebuje. Mniej kodu, szybsze ładowanie.',
  },
  {
    topic: 'Gdy coś się zepsuje',
    agency: 'Zgłoszenie w systemie i odpowiedź w ciągu kilku dni roboczych.',
    me: 'Dzwonisz do mnie. Zwykle oddzwaniam tego samego dnia.',
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section
      id="dlaczego-ja"
      className="py-20 border-y transition-colors"
      style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
            Agencja czy <span className="font-semibold text-ubuntuOrange-50">jedna osoba?</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
            Duża agencja ma swoje zalety. Oto, czym różni się praca ze mną.
          </p>
        </div>

        {/* Telefon: karty zamiast tabeli przewijanej w bok */}
        <ul className="md:hidden space-y-3">
          {rows.map(r => (
            <li key={r.topic} className="pg-card p-5 rounded-2xl space-y-3">
              <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>{r.topic}</h3>
              <p className="text-sm" style={{ color: 'var(--pg-text-muted)' }}>
                <span className="font-semibold">Agencja: </span>{r.agency}
              </p>
              <p className="text-sm" style={{ color: 'var(--pg-text-primary)' }}>
                <span className="font-semibold text-ubuntuOrange-50">CodeWorks: </span>{r.me}
              </p>
            </li>
          ))}
        </ul>

        <table className="hidden md:table w-full text-left border-collapse">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--pg-border-strong)' }}>
              <th scope="col" className="py-4 px-5 text-sm font-semibold w-1/4" style={{ color: 'var(--pg-text-muted)' }}><span className="sr-only">Temat</span></th>
              <th scope="col" className="py-4 px-5 text-sm font-semibold" style={{ color: 'var(--pg-text-muted)' }}>Typowa agencja</th>
              <th scope="col" className="py-4 px-5 text-sm font-semibold text-ubuntuOrange-50 bg-ubuntuOrange-50/10 rounded-t-xl">CodeWorks</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm" style={{ borderColor: 'var(--pg-border-subtle)' }}>
            {rows.map(r => (
              <tr key={r.topic} style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <th scope="row" className="py-4 px-5 font-semibold" style={{ color: 'var(--pg-text-primary)' }}>{r.topic}</th>
                <td className="py-4 px-5" style={{ color: 'var(--pg-text-secondary)' }}>{r.agency}</td>
                <td className="py-4 px-5 bg-ubuntuOrange-50/5" style={{ color: 'var(--pg-text-primary)' }}>{r.me}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  );
};
