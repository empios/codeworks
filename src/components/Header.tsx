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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ubuntuOrange-50 to-aubergine-60 flex items-center justify-center text-white shadow-pg-sm group-hover:scale-105 transition-transform">
            <Code2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight flex items-center gap-1.5" style={{ color: 'var(--pg-text-primary)' }}>
              Code<span className="text-ubuntuOrange-50">Works</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-medium" style={{ color: 'var(--pg-text-muted)' }}>Trójmiasto &amp; Elbląg</span>
          </div>
        </a>

        {/* Desktop Nav - Optimized Spacing */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 text-xs xl:text-sm font-medium">
          <a href="#o-agencji" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>O agencji</a>
          <a href="#oferta" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>Oferta</a>
          <a href="#kalkulator" className="transition-colors hover:text-ubuntuOrange-50 flex items-center gap-1 text-ubuntuOrange-50 font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator</span>
          </a>
          <a href="#realizacje" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>Wdrożenia</a>
          <a href="#dlaczego-ja" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>Dlaczego lokalnie?</a>
          <a href="#faq" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>FAQ</a>
          <a href="#kontakt" className="transition-colors hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-secondary)' }}>Kontakt</a>
        </nav>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          <button 
            onClick={onToggleTheme}
            title={`Zmień motyw na ${theme === 'terminal' ? 'Paper (Jasny)' : 'Terminal (Ciemny)'}`} 
            className="p-2 rounded-full border text-ubuntuOrange-50 hover:scale-105 transition-all cursor-pointer"
            style={{
              backgroundColor: 'var(--pg-layer-01)',
              borderColor: 'var(--pg-border-strong)'
            }}
          >
            {theme === 'paper' ? <Sun className="w-4 h-4 text-ubuntuOrange-50" /> : <Moon className="w-4 h-4 text-ubuntuOrange-40" />}
          </button>

          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-1.5 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-medium text-xs xl:text-sm px-3.5 py-2 rounded-md shadow-pg-sm hover:shadow-pg-glow transition-all whitespace-nowrap"
          >
            <Video className="w-4 h-4" />
            <span>Darmowy Audyt</span>
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
          <a href="#o-agencji" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>O CodeWorks</a>
          <a href="#oferta" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Oferta i Cennik</a>
          <a href="#kalkulator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Kalkulator Projekcji</a>
          <a href="#realizacje" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Wdrożenia</a>
          <a href="#dlaczego-ja" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Dlaczego lokalnie?</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>FAQ</a>
          <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-ubuntuOrange-50" style={{ color: 'var(--pg-text-primary)' }}>Kontakt</a>
          <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 bg-ubuntuOrange-50 text-white font-medium py-3 rounded-md">
            <Video className="w-5 h-5" />
            <span>Darmowy Audyt Wideo (2 min)</span>
          </a>
        </div>
      )}
    </header>
  );
};
