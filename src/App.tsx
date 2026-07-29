import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProblemSection } from './components/ProblemSection';
import { PricingSection } from './components/PricingSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { ComparisonSection } from './components/ComparisonSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ThemeMode } from './types';

export const App: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col selection:bg-ubuntuOrange-50 selection:text-white pb-16 lg:pb-0">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProblemSection />
        <PricingSection />
        <InteractiveCalculator onSendQuote={handleSendQuoteToForm} />
        <PortfolioSection />
        <ComparisonSection />
        <ProcessSection />
        <GuaranteeSection />
        <FaqSection />
        <ContactSection initialMessage={quoteSummary} />
      </main>
      <Footer />
      <FloatingMobileBar />
    </div>
  );
};

export default App;
