import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { InteractiveCalculator } from '../components/InteractiveCalculator';
import { ComparisonSection } from '../components/ComparisonSection';
import { ProcessSection } from '../components/ProcessSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingMobileBar } from '../components/FloatingMobileBar';
import { ThemeMode } from '../types';
import { Globe, Zap, Code, CheckCircle } from 'lucide-react';

export const WebsitesPage: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('terminal');
  const [quoteSummary, setQuoteSummary] = useState<string>('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'terminal' ? 'paper' : 'terminal'));
  };

  const handleSendQuoteToForm = (summaryText: string) => {
    setQuoteSummary(summaryText);
    const contactElement = document.getElementById('kontakt');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canonicalUrl = "https://www.codeworks-it.pl/strony-www";
  const title = "Strony WWW i sklepy WooCommerce — CodeWorks Elbląg";
  const metaDescription = "Nowoczesne strony internetowe i sklepy WooCommerce. Otwarty kod, wysoka szybkość i brak abonentowych opłat. Sprawdź cennik i wycenę.";

  return (
    <div className="min-h-screen flex flex-col selection:bg-ubuntuOrange-50 selection:text-white pb-16 lg:pb-0">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CodeWorks Paweł Włodarczyk" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.codeworks-it.pl/og.png" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content="https://www.codeworks-it.pl/og.png" />
      </Helmet>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Intro Hero Section for Web Dev */}
        <section className="py-16 sm:py-20 relative overflow-hidden border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1.5 rounded-full bg-ubuntuOrange-50/10 border border-ubuntuOrange-50/20">
              <Globe className="w-4 h-4 text-ubuntuOrange-50" />
              <span>Strony WWW &amp; Sklepy WooCommerce — Elbląg i Trójmiasto</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight max-w-4xl mx-auto" style={{ color: 'var(--pg-text-primary)' }}>
              Nowoczesne Strony WWW z <span className="font-semibold text-ubuntuOrange-50">100% Praw Autorskich</span>
            </h1>

            <p className="text-base sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Tworzę szybkie strony internetowe i sklepy e-commerce pozbawione abonamentowych opłat. Wylicz orientacyjny koszt w poniższym kalkulatorze.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold" style={{ color: 'var(--pg-text-muted)' }}>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ubuntuOrange-50" /> Ładowanie &lt; 1.5s
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ubuntuOrange-50" /> Bez abonamentów
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ubuntuOrange-50" /> Otwarty kod źródłowy
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Calculator */}
        <InteractiveCalculator onSendQuote={handleSendQuoteToForm} />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section with Lead Magnet */}
        <ContactSection initialMessage={quoteSummary} variant="webdev" />
      </main>

      <Footer />
      <FloatingMobileBar />
    </div>
  );
};

export default WebsitesPage;
