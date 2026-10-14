import React from 'react';
import { Code2, Phone, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, COMPANY_NAME } from '../config/contact';

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
              <span>{COMPANY_NAME}</span>
            </div>
            <p className="text-xs leading-relaxed max-w-md" style={{ color: 'var(--pg-footer-text)' }}>
              Strony i sklepy internetowe, aplikacje webowe, integracje systemów i wdrożenia AI na serwerze klienta. Elbląg, Trójmiasto i zdalnie.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-ubuntuOrange-40">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:underline">{CONTACT_PHONE_DISPLAY}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a>
              </p>
                          </div>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--pg-footer-heading)' }}>Nawigacja</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-ubuntuOrange-40 transition-colors">Strona główna</a></li>
              <li><a href="/strony-www" className="hover:text-ubuntuOrange-40 transition-colors">Strony i sklepy WWW</a></li>
              <li><a href="/audyt" className="hover:text-ubuntuOrange-40 transition-colors">Audyt przed wdrożeniem AI</a></li>
              <li><a href="/automatyzacja-zdjec-produktowych" className="hover:text-ubuntuOrange-40 transition-colors">Zdjęcia produktów</a></li>
              <li><a href="/walidacja-opisow-produktow" className="hover:text-ubuntuOrange-40 transition-colors">Opisy zgodne z kartami PDF</a></li>
              <li><a href="/tlumaczenie-katalogu-produktowego" className="hover:text-ubuntuOrange-40 transition-colors">Tłumaczenie katalogu</a></li>
              <li><a href="/chatbot-ai-on-premise" className="hover:text-ubuntuOrange-40 transition-colors">Asystent na dokumentach</a></li>
              <li><a href="/#uslugi" className="hover:text-ubuntuOrange-40 transition-colors">Usługi</a></li>
              <li><a href="/#kontakt" className="hover:text-ubuntuOrange-40 transition-colors">Kontakt</a></li>
              <li className="pt-2">
                <a 
                  href="https://www.pawelvlodarczyk.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ubuntuOrange-40 font-bold hover:underline"
                >
                  <span>pawelvlodarczyk.pl</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} CodeWorks Paweł Włodarczyk</p>
          <p>Elbląg · Trójmiasto · zdalnie w całej Polsce</p>
        </div>

      </div>
    </footer>
  );
};
