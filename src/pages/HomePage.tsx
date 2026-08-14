import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProblemSection } from '../components/ProblemSection';
import { PricingSection } from '../components/PricingSection';
import { InteractiveCalculator } from '../components/InteractiveCalculator';
import { PortfolioSection } from '../components/PortfolioSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { ProcessSection } from '../components/ProcessSection';
import { FaqSection } from '../components/FaqSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingMobileBar } from '../components/FloatingMobileBar';
import { ThemeMode } from '../types';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.codeworks-it.pl/#organization",
  "name": "CodeWorks Paweł Włodarczyk",
  "url": "https://www.codeworks-it.pl",
  "image": "https://www.codeworks-it.pl/avatar.jpg",
  "telephone": "+48534140682",
  "email": "pawelwlodarczyk97@yahoo.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Elbląg",
    "addressCountry": "PL"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Elbląg"
    },
    {
      "@type": "Country",
      "name": "Polska"
    }
  ],
  "description": "Automatyzacja procesów AI dla e-commerce, dystrybucji i hurtowni. Model działa lokalnie u klienta (on-premise, RODO).",
  "priceRange": "$$"
};

export const HomePage: React.FC = () => {
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
      <Helmet>
        <title>Automatyzacja AI dla e-commerce — CodeWorks Elbląg</title>
        <meta name="description" content="Lokalna automatyzacja AI dla e-commerce i hurtowni. Bezpieczne dane bez chmury (RODO). Zwiększ wydajność i obniż koszty — skonsultuj swój projekt!" />
        <link rel="canonical" href="https://www.codeworks-it.pl" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codeworks-it.pl" />
        <meta property="og:title" content="Automatyzacja AI dla e-commerce — CodeWorks Elbląg" />
        <meta property="og:description" content="Lokalna automatyzacja AI dla e-commerce i hurtowni. Bezpieczne dane bez chmury (RODO). Zwiększ wydajność i obniż koszty — skonsultuj swój projekt!" />
        <meta property="og:image" content="https://www.codeworks-it.pl/avatar.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.codeworks-it.pl" />
        <meta property="twitter:title" content="Automatyzacja AI dla e-commerce — CodeWorks Elbląg" />
        <meta property="twitter:description" content="Lokalna automatyzacja AI dla e-commerce i hurtowni. Bezpieczne dane bez chmury (RODO). Zwiększ wydajność i obniż koszty — skonsultuj swój projekt!" />
        <meta property="twitter:image" content="https://www.codeworks-it.pl/avatar.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>
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

export default HomePage;
