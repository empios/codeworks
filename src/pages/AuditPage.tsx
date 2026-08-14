import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { ThemeMode } from '../types';
import { ShieldCheck, CheckCircle2, ArrowRight, Video, FileText, Clock, Zap } from 'lucide-react';

export const AuditPage: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('terminal');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'terminal' ? 'paper' : 'terminal'));
  };

  const canonicalUrl = "https://www.codeworks-it.pl/audyt";

  return (
    <div className="min-h-screen flex flex-col selection:bg-ubuntuOrange-50 selection:text-white pb-16 lg:pb-0">
      <Helmet>
        <title>Audyt procesu automatyzacji AI — CodeWorks Elbląg</title>
        <meta name="description" content="Zamów audyt procesów w sklepach i hurtowniach za 3 500 zł netto. Weryfikacja potencjału AI z 100% odliczeniem od wdrożenia. Sprawdź." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Audyt procesu automatyzacji AI — CodeWorks Elbląg" />
        <meta property="og:description" content="Zamów audyt procesów w sklepach i hurtowniach za 3 500 zł netto. Weryfikacja potencjału AI z 100% odliczeniem od wdrożenia. Sprawdź." />
        <meta property="og:image" content="https://www.codeworks-it.pl/avatar.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content="Audyt procesu automatyzacji AI — CodeWorks Elbląg" />
        <meta property="twitter:description" content="Zamów audyt procesów w sklepach i hurtowniach za 3 500 zł netto. Weryfikacja potencjału AI z 100% odliczeniem od wdrożenia. Sprawdź." />
        <meta property="twitter:image" content="https://www.codeworks-it.pl/avatar.jpg" />
      </Helmet>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Hero Banner for Audit */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase text-ubuntuOrange-50 bg-ubuntuOrange-50/10 border-ubuntuOrange-50/20">
                  <Video className="w-4 h-4 text-ubuntuOrange-50" />
                  <span>Produkt Wejściowy CodeWorks</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]" style={{ color: 'var(--pg-text-primary)' }}>
                Audyt procesu automatyzacji AI — <span className="font-bold text-ubuntuOrange-50">3 500 zł netto</span>
              </h1>

              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Przeprowadzamy dogłębną analizę techniczną Twoich procesów e-commerce, dystrybucji i hurtowni. Wskazujemy miejsca, w których lokalne modele AI eliminują pracę ręczną oraz obniżają koszty operacyjne.
              </p>

              {/* 100% Deductible Highlight */}
              <div className="p-6 rounded-2xl border-2 border-ubuntuOrange-50 bg-ubuntuOrange-50/10 shadow-pg-glow max-w-2xl mx-auto space-y-2">
                <div className="flex items-center justify-center gap-2 text-ubuntuOrange-50 font-mono font-bold uppercase text-xs">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Gwarancja 100% Odliczenia</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
                  Kwota 3 500 zł netto jest w 100% odliczana od wdrożenia
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Gdy po audycie zdecydujesz się na wdrożenie systemu automatyzacji, pełny koszt audytu (3 500 zł netto) odejmujemy od wyceny końcowej projektu.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#kontakt" 
                  className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-pg-glow transition-all"
                >
                  <span>Zamów Audyt Procesu (3 500 zł netto)</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Audit Process Deliverables */}
        <section className="py-20 transition-colors border-b" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Zakres Prpracowania</span>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Co otrzymujesz w ramach Audytu?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>1. Mapa Procesów i Wąskich Gardeł</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Szczegółowa inwentaryzacja zadań powtarzalnych (zdjęcia, weryfikacja PDF, tłumaczenia, obsługa pytań) z wyliczeniem czasochłonności.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>2. Dobór Modelu On-Premise</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Rekomendacja infrastruktury sprzętowej i modeli AI uruchamianych w 100% u klienta z gwarancją bezpieczeństwa RODO.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>3. Estymacja Oszczędności Czasu i Kosztów</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Wyliczenie czasu reakcji, redukcji błędów oraz realnych oszczędności finansowych w ujęciu miesięcznym i rocznym.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>4. Dokładny Harmonogram i Kosztorys</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Przejrzysta wycena wdrożenia typu Fixed Price wraz z odliczeniem kwoty 3 500 zł netto wydanej na audyt.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection initialMessage="Dzień dobry, chcę zamówić Audyt procesu automatyzacji AI za 3 500 zł netto (z opcją 100% odliczenia od wdrożenia)." />
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;
