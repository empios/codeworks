import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactSection } from './ContactSection';
import { ThemeMode } from '../types';
import { CheckCircle2, ShieldCheck, ArrowRight, Clock, AlertTriangle, TrendingUp, Cpu } from 'lucide-react';

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
  const [theme, setTheme] = useState<ThemeMode>('terminal');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'terminal' ? 'paper' : 'terminal'));
  };

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
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content="https://www.codeworks-it.pl/og.png" />
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
                  Model działa w 100% lokalnie u klienta (on-premise). Dane nie wychodzą na zewnątrz i nie trafiają do chmury (zgodność z RODO).
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#kontakt" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Skonsultuj Wdrożenie</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="/audyt" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border font-bold text-sm px-6 py-3.5 rounded-lg transition-all text-ubuntuOrange-50 border-ubuntuOrange-50/40 bg-ubuntuOrange-50/10"
                >
                  <span>Audyt Procesu (3 500 zł netto)</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 transition-colors border-b" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Problem Biznesowy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
              Co paraliżuje pracę w sklepach i hurtowniach?
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              {problem}
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 transition-colors border-b" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Prosty obieg pracy</span>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Jak to działa?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="pg-card p-6 rounded-xl space-y-3 relative border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="w-8 h-8 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 font-mono font-bold flex items-center justify-center text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-muted)' }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 transition-colors border-b" style={{ backgroundColor: 'var(--pg-bg-subtle)', borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Mierzalne korzyści</span>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Co zyskujesz?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>{benefit.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>{benefit.description}</p>
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
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50">Wycena wdrożenia</span>
                  <h3 className="text-2xl font-bold mt-1" style={{ color: 'var(--pg-text-primary)' }}>Cennik usługi</h3>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl font-extrabold text-ubuntuOrange-50">{priceImplementation}</div>
                  <div className="text-xs" style={{ color: 'var(--pg-text-muted)' }}>Utrzymanie: {priceMaintenance}</div>
                  <div className="text-xs font-semibold text-ubuntuOrange-50 mt-1">Typowy projekt: {priceTypical}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-ubuntuOrange-50/10 border border-ubuntuOrange-50/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-ubuntuOrange-50">Produkt wejściowy — Audyt Procesu (3 500 zł netto)</span>
                  <p className="text-xs" style={{ color: 'var(--pg-text-secondary)' }}>
                    Rozpocznij od audytu. Kwota 3 500 zł netto jest w 100% odliczana od wyceny wdrożenia.
                  </p>
                </div>
                <a 
                  href="/audyt" 
                  className="px-4 py-2.5 rounded-lg bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-xs shrink-0 transition-colors"
                >
                  Zamów Audyt (3 500 zł)
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection initialMessage={initialFormMessage} />
      </main>

      <Footer />
    </div>
  );
};
