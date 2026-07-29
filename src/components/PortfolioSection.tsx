import React from 'react';
import { TrendingUp, Zap, ShoppingCart, Code2, Cpu, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="realizacje" className="py-24 transition-colors" style={{ backgroundColor: 'var(--pg-bg-subtle)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ============================================================ */}
        {/* 1. SEKCJA GÓRNA: WYBRANE PROJEKTY KOMERCYJNE                 */}
        {/* ============================================================ */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest uppercase text-ubuntuOrange-50">Doświadczenie &amp; Realne Produkty</span>
            <h2 className="text-3xl sm:text-5xl font-light" style={{ color: 'var(--pg-text-primary)' }}>
              Wybrane <span className="font-semibold text-ubuntuOrange-50">Projekty Komercyjne</span>
            </h2>
            <p className="text-base sm:text-lg" style={{ color: 'var(--pg-text-secondary)' }}>
              Doświadczenie inżynieryjne zdobyte przy współtworzeniu cenionych aplikacji rynkowych i systemów dla znanych marek.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Real Project 1: TimeCamp */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 shadow-sm transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Aplikacja SaaS / Produktywność
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> TimeCamp
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  TimeCamp – System Zarządzania Czasem Zespołów
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Rozwój interfejsu i kluczowych funkcji frontendowych dla znanej na całym świecie platformy SaaS do monitorowania czasu pracy i produktywności.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystany stack &amp; zakres:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>React, Redux, TailwindCSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Wysoka wydajność interfejsu dla tysięcy użytkowników</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Moduły raportowania i wykresów czasu pracy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Produkt: TimeCamp SaaS</span>
                <span className="text-ubuntuOrange-50 font-bold">Rola: Front-End Dev</span>
              </div>
            </motion.div>

            {/* Real Project 2: Baloise Group & okWOW */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/40 shadow-md transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Sztuczna Inteligencja (AI)
                  </span>
                  <span className="text-xs text-ubuntuOrange-50 font-semibold flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> Baloise / okWOW
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Aplikacje AI &amp; Generowanie Dokumentów
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Projektowanie i kodowanie aplikacji wykorzystujących sztuczną inteligencję (OpenAI API), OCR, przetwarzanie dokumentów oraz moduły głosu.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystany stack &amp; zakres:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>OpenAI API, React, Express, Node.js, OCR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Zaawansowane makiety Figma, MCP connectors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Asystent AI wspierający przetwarzanie wiedzy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Projekty: Baloise / okWOW</span>
                <span className="text-ubuntuOrange-50 font-bold">Rola: Full-Stack AI</span>
              </div>
            </motion.div>

            {/* Real Project 3: Sternkraft */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 shadow-sm transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Aplikacja Geolokalizacyjna
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Sternkraft
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Sternkraft – Interaktywny System Mapowy
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Aplikacja oparta na mapach i geolokalizacji z obsługą dynamicznych markerów, filtrowania zasobów i zarządzania stanem.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Wykorzystany stack &amp; zakres:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>React, Redux, Interaktywne Mapy &amp; Markery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Dynamiczne filtrowanie obiektów na mapie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Optymalizacja renderowania warstw geodanych</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Produkt: Sternkraft</span>
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
              Zobacz, jak nasza architektura Pangolin DS i czysty kod przełożą się na szybkość, SEO i nowe zapytania ofertowe w Twoim sektorze.
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
                  Dedykowany układ dla firm usługowych (budownictwo, wykończenia, transport) nakierowany na natychmiastowe połączenie telefoniczne i pozyskiwanie zapytań z Elbląga.
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
                      <span>Przystosowanie pod SEO na Elbląg i powiat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Formularz szybkiego wyceny + Mapa Google</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Stack: React / WordPress + Pangolin</span>
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
                  Sklep e-commerce bez prowizji od sprzedaży z pełną automatyzacją e-płatności (PayU/Przelewy24/BLIK) oraz automatycznym generowaniem etykiet InPost.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Standard wdrożenia:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Zero prowizji dla zewnętrznych platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Szybki koszyk zakupowy na smartfonach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Panel wprowadzania produktów + szkolenie w cenie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs font-medium mt-auto" style={{ borderColor: 'var(--pg-border-subtle)', color: 'var(--pg-text-muted)' }}>
                <span>Stack: WooCommerce + InPost + BLIK</span>
                <span className="text-ubuntuOrange-50 font-bold">Wdrożenie: 14-21 dni</span>
              </div>
            </motion.div>

            {/* Implementation 3: Dedykowane B2B */}
            <motion.div 
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pg-card p-8 rounded-2xl flex flex-col justify-between h-full border-2 border-ubuntuOrange-50/20 transition-shadow"
            >
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
                    Dla Firm B2B &amp; Produkcji
                  </span>
                  <span className="text-xs text-ubuntuOrange-50 font-semibold flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> React + Node
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] flex items-center" style={{ color: 'var(--pg-text-primary)' }}>
                  Dedykowany Portal B2B &amp; Integracje API
                </h3>

                <p className="text-xs leading-relaxed mb-6 min-h-[3rem]" style={{ color: 'var(--pg-text-secondary)' }}>
                  Systemy webowe dla firm wymagających automatyzacji zamówień hurtowych, integracji ze stanem magazynowym ERP oraz indywidualnych cenników.
                </p>

                <div className="p-4 rounded-xl space-y-2 border mb-6 mt-auto" style={{ backgroundColor: 'var(--pg-layer-02)', borderColor: 'var(--pg-border-subtle)' }}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ubuntuOrange-50 mb-1">
                    <TrendingUp className="w-4 h-4" /> Standard wdrożenia:
                  </div>
                  <ul className="text-xs space-y-1.5" style={{ color: 'var(--pg-text-secondary)' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Integracja danych API z systemami ERP/CRM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>Dedykowany obieg zamówień i automatyzacja pracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ubuntuOrange-50 font-bold">✓</span>
                      <span>100% praw autorskich i dedykowany kod</span>
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
