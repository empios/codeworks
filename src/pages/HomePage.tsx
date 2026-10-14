import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { DemoSection } from '../components/DemoSection';
import { ProcessSection } from '../components/ProcessSection';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingMobileBar } from '../components/FloatingMobileBar';
import { ThemeMode } from '../types';
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_NAME } from '../config/contact';
import { useTheme } from '../utils/theme';
import { ScrollProgress } from '../components/motion/ScrollProgress';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.codeworks-it.pl/#organization",
  "name": COMPANY_NAME,
  "url": "https://www.codeworks-it.pl",
  "image": "https://www.codeworks-it.pl/avatar.jpg",
  "telephone": CONTACT_PHONE,
  "email": CONTACT_EMAIL,
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
  "description": "Software house i usługi IT z Elbląga: strony i sklepy internetowe, aplikacje webowe, integracje systemów i wdrożenia AI.",
  "priceRange": "$$"
};

export const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col selection:bg-ubuntuOrange-50 selection:text-white pb-16 lg:pb-0">
      <Helmet>
        <title>CodeWorks | Software house z Elbląga</title>
        <meta name="description" content="Strony i sklepy internetowe, aplikacje webowe, integracje systemów i wdrożenia AI dla firm. Elbląg, Trójmiasto, zdalnie. Pierwsza rozmowa bezpłatnie." />
        <link rel="canonical" href="https://www.codeworks-it.pl" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CodeWorks Paweł Włodarczyk" />
        <meta property="og:url" content="https://www.codeworks-it.pl" />
        <meta property="og:title" content="CodeWorks | Software house z Elbląga" />
        <meta property="og:description" content="Strony i sklepy internetowe, aplikacje webowe, integracje systemów i wdrożenia AI dla firm. Elbląg, Trójmiasto, zdalnie. Pierwsza rozmowa bezpłatnie." />
        <meta property="og:image" content="https://www.codeworks-it.pl/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CodeWorks: strony, sklepy, aplikacje i wdrożenia AI z Elbląga" />
        <meta property="og:locale" content="pl_PL" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeWorks | Software house z Elbląga" />
        <meta name="twitter:description" content="Strony i sklepy internetowe, aplikacje webowe, integracje systemów i wdrożenia AI dla firm. Elbląg, Trójmiasto, zdalnie. Pierwsza rozmowa bezpłatnie." />
        <meta name="twitter:image" content="https://www.codeworks-it.pl/og.png" />

        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      </Helmet>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <ScrollProgress />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <DemoSection />
        <ProcessSection variant="home" />
        <PricingSection />
        <FaqSection variant="home" />
        <ContactSection variant="general" />
      </main>
      <Footer />
      <FloatingMobileBar />
    </div>
  );
};

export default HomePage;
