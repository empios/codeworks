import React from 'react';
import { Code2, Phone, Mail } from 'lucide-react';

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
              CodeWorks – Studio IT i partner technologiczny dla małych i średnich firm z obszaru Trójmiasta (Gdańsk, Gdynia, Sopot), Elbląga i całego Pomorza. Tworzenie zoptymalizowanych stron WWW, sklepów WooCommerce i dedykowanych aplikacji B2B.
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
              <p>📍 Mobilne studio IT – dojazd do klienta w Gdańsku, Gdyni, Sopocie i Elblągu</p>
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--pg-footer-heading)' }}>Nawigacja</h4>
            <ul className="space-y-2">
              <li><a href="#o-agencji" className="hover:text-ubuntuOrange-40 transition-colors">O CodeWorks</a></li>
              <li><a href="#problem" className="hover:text-ubuntuOrange-40 transition-colors">Problem z Agencjami</a></li>
              <li><a href="#oferta" className="hover:text-ubuntuOrange-40 transition-colors">Cennik i Pakiet Smart</a></li>
              <li><a href="#kalkulator" className="hover:text-ubuntuOrange-40 transition-colors">Kalkulator Projekcji</a></li>
              <li><a href="#realizacje" className="hover:text-ubuntuOrange-40 transition-colors">Wdrożenia</a></li>
              <li><a href="#dlaczego-ja" className="hover:text-ubuntuOrange-40 transition-colors">Dlaczego Lokalnie?</a></li>
              <li><a href="#faq" className="hover:text-ubuntuOrange-40 transition-colors">FAQ</a></li>
              <li><a href="#kontakt" className="hover:text-ubuntuOrange-40 transition-colors">Darmowy Audyt Wideo</a></li>
            </ul>
          </div>

          {/* Regional SEO Tags */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--pg-footer-heading)' }}>Obszar Działań SEO</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Strony WWW Gdańsk</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Sklepy Gdynia</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Programista Sopot</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">CodeWorks Elbląg</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">WooCommerce Trójmiasto</span>
              <span className="px-2 py-1 rounded text-[10px] border border-white/10 bg-white/5">Tworzenie stron Pasłęk</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 CodeWorks Paweł Włodarczyk. Wszystkie prawa zastrzeżone. Projekt w oparciu o Pangolin Design System.</p>
          <p>100% Otwarty Kod · Zero Vendor Lock-in · Wsparcie SLA</p>
        </div>

      </div>
    </footer>
  );
};
