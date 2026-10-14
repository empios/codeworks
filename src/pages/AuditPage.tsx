import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { ThemeMode } from '../types';
import { ShieldCheck, ArrowRight, ClipboardList, FileText, Clock, Zap } from 'lucide-react';
import { FloatingMobileBar } from '../components/FloatingMobileBar';
import { useTheme } from '../utils/theme';

export const AuditPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const canonicalUrl = "https://www.codeworks-it.pl/audyt";

  return (
    <div className="min-h-screen flex flex-col selection:bg-ubuntuOrange-50 selection:text-white pb-16 lg:pb-0">
      <Helmet>
        <title>Audyt: co w firmie warto zautomatyzować | CodeWorks Elbląg</title>
        <meta name="description" content="Sprawdzę, które powtarzalne zadania w Twoim sklepie lub hurtowni da się przekazać AI i ile to zaoszczędzi. 3 500 zł netto, odliczane od ceny wdrożenia." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CodeWorks Paweł Włodarczyk" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Audyt: co w firmie warto zautomatyzować | CodeWorks Elbląg" />
        <meta property="og:description" content="Sprawdzę, które powtarzalne zadania w Twoim sklepie lub hurtowni da się przekazać AI i ile to zaoszczędzi. 3 500 zł netto, odliczane od ceny wdrożenia." />
        <meta property="og:image" content="https://www.codeworks-it.pl/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CodeWorks: strony, sklepy, aplikacje i wdrożenia AI z Elbląga" />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Audyt: co w firmie warto zautomatyzować | CodeWorks Elbląg" />
        <meta name="twitter:description" content="Sprawdzę, które powtarzalne zadania w Twoim sklepie lub hurtowni da się przekazać AI i ile to zaoszczędzi. 3 500 zł netto, odliczane od ceny wdrożenia." />
        <meta name="twitter:image" content="https://www.codeworks-it.pl/og.png" />
      </Helmet>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        {/* Hero Banner for Audit */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b transition-colors" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase text-ubuntuOrange-50 bg-ubuntuOrange-50/10 border-ubuntuOrange-50/20">
                  <ClipboardList className="w-4 h-4 text-ubuntuOrange-50" />
                  <span>Audyt przed wdrożeniem AI</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]" style={{ color: 'var(--pg-text-primary)' }}>
                Sprawdzę, co w Twojej firmie <span className="font-bold text-ubuntuOrange-50">warto zautomatyzować</span>
              </h1>

              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                Przyglądam się, jak w Twoim sklepie lub hurtowni wygląda praca ze zdjęciami, opisami, tłumaczeniami i dokumentami. Pokazuję, gdzie AI realnie oszczędzi czas, a gdzie nie ma sensu w nie inwestować.
              </p>

              {/* 100% Deductible Highlight */}
              <div className="p-6 rounded-2xl border-2 border-ubuntuOrange-50 bg-ubuntuOrange-50/10 shadow-pg-glow max-w-2xl mx-auto space-y-2">
                <div className="flex items-center justify-center gap-2 text-ubuntuOrange-50 font-mono font-bold uppercase text-xs">
                  <ShieldCheck className="w-5 h-5" />
                  <span>3 500 zł netto</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>
                  Jeśli zdecydujesz się na wdrożenie, koszt audytu odejmę od jego ceny
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Jeśli nie, zostajesz z raportem, który możesz wykorzystać sam albo z innym wykonawcą.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#kontakt" 
                  className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-pg-glow transition-all"
                >
                  <span>Zamów audyt</span>
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
              <h2 className="text-3xl font-bold" style={{ color: 'var(--pg-text-primary)' }}>Co dostajesz</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>1. Listę zadań, które zjadają czas</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Spisuję powtarzalne zadania (zdjęcia, opisy, tłumaczenia, odpowiadanie na pytania) i liczę, ile godzin miesięcznie na nie idzie.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>2. Propozycję sprzętu i modeli AI</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Podpowiadam, jaki serwer i jakie modele wystarczą, żeby wszystko działało u Ciebie, bez wysyłania danych do chmury.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>3. Wyliczenie oszczędności</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Ile czasu i pieniędzy zaoszczędzisz w miesiącu i w roku. Liczę ostrożnie, na Twoich danych.
                </p>
              </div>

              <div className="pg-card p-6 rounded-xl space-y-3 border" style={{ borderColor: 'var(--pg-border-subtle)' }}>
                <div className="p-2 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50 w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base" style={{ color: 'var(--pg-text-primary)' }}>4. Harmonogram i stałą cenę wdrożenia</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                  Plan prac i kwota, która się nie zmieni. Od razu z odjętymi 3 500 zł za audyt.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection initialMessage="Dzień dobry, chcę zamówić audyt przed wdrożeniem AI (3 500 zł netto)." />
      </main>

      <Footer />
      <FloatingMobileBar />
    </div>
  );
};

export default AuditPage;
