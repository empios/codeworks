import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactSection } from './ContactSection';
import { ThemeMode } from '../types';
import { ShieldCheck, ArrowRight, Check, Cpu } from 'lucide-react';
import { FloatingMobileBar } from './FloatingMobileBar';
import { useTheme } from '../utils/theme';

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface OfferTemplateProps {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  badge: string;
  problem: string;
  steps: StepItem[];
  benefits: BenefitItem[];
  priceImplementation: string;
  priceMaintenance: string;
  priceTypical: string;
  initialFormMessage: string;
}

export const OfferTemplate: React.FC<OfferTemplateProps> = ({
  slug,
  title,
  metaDescription,
  h1,
  badge,
  problem,
  steps,
  benefits,
  priceImplementation,
  priceMaintenance,
  priceTypical,
  initialFormMessage,
}) => {
  const { theme, toggleTheme } = useTheme();

  const canonicalUrl = `https://www.codeworks-it.pl${slug}`;

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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CodeWorks: strony, sklepy, aplikacje i wdrożenia AI z Elbląga" />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.codeworks-it.pl/og.png" />
      </Helmet>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Subpage Hero */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase text-ubuntuOrange-50 bg-ubuntuOrange-50/10 border-ubuntuOrange-50/20">
                  <Cpu className="w-4 h-4 text-ubuntuOrange-50" />
                  <span>{badge}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: 'var(--pg-text-primary)' }}>
                {h1}
              </h1>

              {/* RODO & On-Premise Banner */}
              <div className="p-4 rounded-xl border bg-ubuntuOrange-50/5 border-ubuntuOrange-50/30 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm">
                <ShieldCheck className="w-5 h-5 text-ubuntuOrange-50 shrink-0" />
                <span style={{ color: 'var(--pg-text-secondary)' }}>
                  Model AI działa na Twoim serwerze. Pliki i dane nie trafiają do zewnętrznych usług w chmurze, co ułatwia spełnienie wymogów RODO.
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#kontakt" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Porozmawiajmy o wdrożeniu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="/audyt" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border font-bold text-sm px-6 py-3.5 rounded-lg transition-all text-ubuntuOrange-50 border-ubuntuOrange-50/40 bg-ubuntuOrange-50/10"
                >
                  <span>Zacznij od audytu</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 transition-colors border-b" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
              Jak jest teraz
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              {problem}
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 transition-colors border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Jak to działa</h2>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, idx) => (
                <li key={idx} className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                  <span className="w-8 h-8 rounded-full bg-ubuntuOrange-50 text-white font-mono font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 transition-colors border-b" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Co się zmienia</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>{benefit.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Audit CTA Box */}
        <section className="py-20 transition-colors border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pg-card p-8 rounded-2xl border-2 border-ubuntuOrange-50 shadow-pg-glow space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Ile to kosztuje</h2>
                  <p className="text-sm mt-1" style={{ color: 'var(--pg-text-muted)' }}>Kwoty netto. Dokładną cenę podaję po rozmowie.</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl font-extrabold text-ubuntuOrange-50">{priceImplementation}</div>
                  <div className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>Typowo: {priceTypical}</div>
                  <div className="text-sm" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: {priceMaintenance}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-ubuntuOrange-50/10 border border-ubuntuOrange-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold" style={{ color: 'var(--pg-text-primary)' }}>Nie wiesz, czy to się opłaci?</h3>
                  <p className="text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
                    Zacznij od audytu za 3 500 zł netto. Jeśli potem zdecydujesz się na wdrożenie, odejmę tę kwotę od jego ceny.
                  </p>
                </div>
                <a 
                  href="/audyt" 
                  className="px-4 py-2.5 rounded-lg bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm shrink-0 transition-colors"
                >
                  Więcej o audycie
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection initialMessage={initialFormMessage} />
      </main>

      <Footer />
      <FloatingMobileBar />
    </div>
  );
};
