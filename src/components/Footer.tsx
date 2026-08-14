import React from 'react';
import { Code2, Phone, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="text-xs py-12 transition-colors border-t"
      style={{
        backgroundColor: 'var(--pg-footer-bg)',
        color: 'var(--pg-footer-text)',
        borderColor: 'var(--pg-border-strong)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand & Bio */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-base" style={{ color: 'var(--pg-footer-heading)' }}>
              <Code2 className="w-5 h-5 text-ubuntuOrange-50" />
              <span>CodeWorks Paweł Włodarczyk</span>
            </div>
            <p className="text-xs leading-relaxed max-w-md" style={{ color: 'var(--pg-footer-text)' }}>
              CodeWorks – Automatyzacja procesów AI dla e-commerce, dystrybutorów i hurtowni. Przetwarzanie zdjęć produktowych, walidacja specyfikacji z kartami PDF, automatyzacja translacji katalogów oraz firmowy chatbot RAG 100% on-premise.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-ubuntuOrange-40">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+48534140682" className="hover:underline">+48 534 140 682</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:pawelwlodarczyk97@yahoo.com" className="hover:underline">pawelwlodarczyk97@yahoo.com</a>
              </p>
              <p>📍 Elbląg (siedziba firmy) · Wdrożenia on-premise i zdalne w całej Polsce</p>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--pg-footer-heading)' }}>Nawigacja</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-ubuntuOrange-40 transition-colors">Strona główna</a></li>
              <li><a href="/audyt" className="hover:text-ubuntuOrange-40 transition-colors font-bold text-ubuntuOrange-50">Audyt Procesu (3 500 zł)</a></li>
              <li><a href="/automatyzacja-zdjec-produktowych" className="hover:text-ubuntuOrange-40 transition-colors">Zdjęcia AI</a></li>
              <li><a href="/walidacja-opisow-produktow" className="hover:text-ubuntuOrange-40 transition-colors">Walidacja opisu z PDF</a></li>
              <li><a href="/tlumaczenie-katalogu-produktowego" className="hover:text-ubuntuOrange-40 transition-colors">Automatyzacja translacji</a></li>
              <li><a href="/chatbot-ai-on-premise" className="hover:text-ubuntuOrange-40 transition-colors">Chatbot AI (RAG)</a></li>
              <li><a href="/#o-firmie" className="hover:text-ubuntuOrange-40 transition-colors">Kto za tym stoi</a></li>
              <li className="pt-2">
                <a 
                  href="https://www.pawelvlodarczyk.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ubuntuOrange-40 font-bold hover:underline"
                >
                  <span>Strona osobista pawelvlodarczyk.pl</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Regional SEO Tags */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--pg-footer-heading)' }}>Obszar Specjalizacji</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Automatyzacja AI Elbląg</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Modele On-Premise</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">RODO AI E-commerce</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Translacja katalogów</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">RAG Dokumentacja Firmowa</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Audyt procesów 3500 zł</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 CodeWorks Paweł Włodarczyk. Wszystkie prawa zastrzeżone.</p>
          <p>100% On-Premise · Zgodność z RODO · Dedykowane Wdrożenia</p>
        </div>

      </div>
    </footer>
  );
};
