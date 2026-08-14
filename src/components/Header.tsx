import React, { useState } from 'react';
import { Code2, Sun, Moon, Video, Menu, X, Calculator } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md transition-colors border-b"
      style={{
        backgroundColor: 'var(--pg-header-bg)',
        borderColor: 'var(--pg-header-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-ubuntuOrange-50 to-aubergine-60 flex items-center justify-center text-white shadow-pg-sm group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight flex items-center gap-1" style={{ color: 'var(--pg-text-primary)' }}>
              Code<span className="text-ubuntuOrange-50">Works</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-medium whitespace-nowrap" style={{ color: 'var(--pg-text-muted)' }}>Automatyzacja AI · Elbląg</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3.5 2xl:space-x-5 text-xs xl:text-sm font-medium">
          <a href="/" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>Strona główna</a>
          <a href="/automatyzacja-zdjec-produktowych" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>Zdjęcia AI</a>
          <a href="/walidacja-opisow-produktow" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>Walidacja PDF</a>
          <a href="/tlumaczenie-katalogu-produktowego" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>Automatyzacja translacji</a>
          <a href="/chatbot-ai-on-premise" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>Chatbot RAG</a>
          <a href="/#o-firmie" className="transition-colors hover:text-ubuntuOrange-50 whitespace-nowrap" style={{ color: 'var(--pg-text-secondary)' }}>O firmie</a>
        </nav>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
          <button 
            onClick={onToggleTheme}
            title={`Zmień motyw na ${theme === 'terminal' ? 'Paper (Jasny)' : 'Terminal (Ciemny)'}`} 
            className="p-2 rounded-full border text-ubuntuOrange-50 hover:scale-105 transition-all cursor-pointer shrink-0"
            style={{
              backgroundColor: 'var(--pg-layer-01)',
              borderColor: 'var(--pg-border-strong)'
            }}
          >
            {theme === 'paper' ? <Sun className="w-4 h-4 text-ubuntuOrange-50" /> : <Moon className="w-4 h-4 text-ubuntuOrange-40" />}
          </button>

          <a 
            href="/audyt" 
            className="inline-flex items-center gap-1.5 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-xs xl:text-sm px-3.5 xl:px-4 py-2 rounded-md shadow-pg-sm hover:shadow-pg-glow transition-all whitespace-nowrap shrink-0"
          >
            <Video className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            <span>Audyt Procesu (3 500 zł)</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full border text-ubuntuOrange-50"
            style={{ borderColor: 'var(--pg-border-strong)' }}
          >
            {theme === 'paper' ? <Sun className="w-4 h-4 text-ubuntuOrange-50" /> : <Moon className="w-4 h-4 text-ubuntuOrange-40" />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            style={{ color: 'var(--pg-text-primary)' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t px-4 pt-4 pb-6 space-y-3 shadow-lg"
          style={{
            backgroundColor: 'var(--pg-bg)',
            borderColor: 'var(--pg-border-subtle)'
          }}
        >
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Strona główna</a>
          <a href="/audyt" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-ubuntuOrange-50">Audyt Procesu (3 500 zł)</a>
          <a href="/automatyzacja-zdjec-produktowych" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Obróbka zdjęć produktowych</a>
          <a href="/walidacja-opisow-produktow" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Walidacja opisów z PDF</a>
          <a href="/tlumaczenie-katalogu-produktowego" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Automatyzacja translacji katalogów</a>
          <a href="/chatbot-ai-on-premise" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Chatbot AI on-premise (RAG)</a>
          <a href="/#o-firmie" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>O firmie</a>
          <a href="/audyt" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 bg-ubuntuOrange-50 text-white font-bold py-3 rounded-md">
            <Video className="w-5 h-5" />
            <span>Zamów Audyt Procesu (3 500 zł)</span>
          </a>
        </div>
      )}
    </header>
  );
};
