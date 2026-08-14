import React from 'react';
import { TrendingUp, Zap, ShoppingCart, Code2, Cpu, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="realizacje" className="py-24 transition-colors" style={{ backgroundColor: 'var(--pg-bg-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ============================================================ */}
        {/* 1. SEKCJA GÓRNA: DOŚWIADCZENIE W SYSTEMACH B2B               */}
        {/* ============================================================ */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Doświadczenie &amp; Realne Produkty</span>
            <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Obszary <span className="font-semibold text-ubuntuOrange-50">Doświadczenia Inżynieryjnego</span>
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Praktyczna znajomość budowania skalowalnych aplikacji webowych, systemów AI oraz platform B2B.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Area 1: SaaS / Productivity */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 shadow-sm transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Aplikacje SaaS &amp; B2B
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> Produktywność
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Platformy SaaS &amp; Systemy Produktywności
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Tworzenie wydajnych interfejsów użytkownika i zaawansowanych modułów raportowania dla systemów klasy SaaS.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystywany stack:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>React, TypeScript, TailwindCSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Wysoka wydajność interfejsów dla wielu użytkowników</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Moduły analityczne i wykresy danych</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Obszar: SaaS / B2B</span>
                <span className="text-ubuntuOrange-50 font-bold">Rola: Front-End Dev</span>
              </div>
            </motion.div>

            {/* Area 2: AI & Document Processing */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/40 shadow-md transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Sztuczna Inteligencja
                  </span>
                  <span className="text-xs text-ubuntuOrange-50 font-semibold flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> AI &amp; Dokumenty
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Aplikacje AI &amp; Przetwarzanie Dokumentacji
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Integracje modeli AI, rozpoznawanie tekstu (OCR), analiza plików i tworzenie inteligentnych asystentów.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystywany stack:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>LLM, Node.js, Express, OCR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Lokalne architektury on-premise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Asystenci przeszukujący wiedzę firmową</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Obszar: Sztuczna Inteligencja</span>
                <span className="text-ubuntuOrange-50 font-bold">Rola: Full-Stack AI</span>
              </div>
            </motion.div>

            {/* Area 3: Interactive Web & Maps */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 shadow-sm transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Systemy Webowe
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Interaktywne Mapy
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Interaktywne Systemy Webowe &amp; Mapowe
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Tworzenie bogatych wizualnie aplikacji webowych z obsługą geodanych, filtrowania zasobów i płynnej nawigacji.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystywany stack:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>React, TypeScript, Mapbox / Leaflet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Dynamiczne filtrowanie obiektów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Optymalne renderowanie złożonych warstw</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Obszar: Web &amp; Maps</span>
                <span className="text-ubuntuOrange-50 font-bold">Rola: Front-End Dev</span>
              </div>
            </motion.div>

          </div>
        </div>


        {/* ============================================================ */}
        {/* 2. SEKCJA DOLNA: PROPONOWANE WDROŻENIA DLA TWOJEJ FIRMY      */}
        {/* ============================================================ */}
        <div className="pt-12 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Przykłady implementacji CodeWorks</span>
            <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Proponowane Wdrożenia dla <span className="font-semibold text-ubuntuOrange-50">Twojej Firmy</span>
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Zobacz, jak nowoczesna architektura i czysty kod przełożą się na szybkość, SEO i nowe zapytania ofertowe.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Implementation 1: Usługi / Budownictwo */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Dla Usług &amp; Budownictwa
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> 0.8s ładowania
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Szybka Strona Firmowa &amp; Landing Page RWD
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Funkcjonalny układ dla firm usługowych nakierowany na natychmiastowe połączenie telefoniczne i pozyskiwanie zapytań ofertowych.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Standard wdrożenia:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Czas ładowania &lt; 1.0s (Google PageSpeed 95+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Optymalizacja pod lokalne pozycjonowanie SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Formularz wyceny + Mapa dojazdu</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Stack: React / HTML5 / CSS3</span>
                <span className="text-ubuntuOrange-50 font-bold">Wdrożenie: 7-10 dni</span>
              </div>
            </motion.div>

            {/* Implementation 2: E-Commerce / Handel */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/40 shadow-md transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Dla Handlu &amp; Sprzedaży
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShoppingCart className="w-3.5 h-3.5" /> WooCommerce
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Sklep Internetowy z BLIK &amp; Paczkomatami
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Sklep e-commerce z konfiguracją płatności (BLIK/Przelewy24) oraz automatyczną wysyłką etykiet kurierskich.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Standard wdrożenia:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Bezpośrednie płatności internetowe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Wygodny koszyk zakupowy dla urządzeń mobilnych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Przejrzysty panel zarządzania asortymentem</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Stack: WooCommerce + Przelewy24</span>
                <span className="text-ubuntuOrange-50 font-bold">Wdrożenie: 14-21 dni</span>
              </div>
            </motion.div>

            {/* Implementation 3: B2B */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Dla Firm B2B &amp; Hurtowni
                  </span>
                  <span className="text-xs text-ubuntuOrange-50 font-semibold flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> React + Node
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Portal B2B &amp; Integracje Systemowe
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Rozwiązania internetowe dla firm potrzebujących porządkowania zamówień hurtowych oraz automatyzacji przepływu danych.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Standard wdrożenia:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Bezpieczny obieg danych biznesowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Przejrzysty interfejs dla kontrahentów</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>100% praw autorskich do kodu</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Stack: React + Node.js + TypeScript</span>
                <span className="text-ubuntuOrange-50 font-bold">Wdrożenie: Indywidualne</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
