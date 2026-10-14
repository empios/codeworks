import { useEffect, useState } from 'react';
import type { ThemeMode } from '../types';

const STORAGE_KEY = 'codeworks-theme';
const DEFAULT_THEME: ThemeMode = 'terminal';

const isTheme = (v: unknown): v is ThemeMode => v === 'paper' || v === 'terminal';

// Przełącza motyw bez animowania wszystkich kolorów naraz: wyłącza przejścia na jedną klatkę.
const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement;
  root.classList.add('theme-switching');
  root.setAttribute('data-theme', theme);
  void root.offsetHeight; // wymusza przeliczenie stylów przed przywróceniem przejść
  requestAnimationFrame(() => root.classList.remove('theme-switching'));
};

// Motyw zapisany w localStorage: trzyma się między podstronami, odświeżeniem i kartami.
// Skrypt w index.html ustawia go przed pierwszym renderem; tu tylko synchronizujemy stan Reacta.
export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (isTheme(current)) setTheme(current);
    // zmiana w innej karcie
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && isTheme(e.newValue)) {
        applyTheme(e.newValue);
        setTheme(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    const next: ThemeMode = theme === 'terminal' ? 'paper' : 'terminal';
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // tryb prywatny lub zablokowany storage: motyw działa do końca wizyty
    }
  };

  return { theme, toggleTheme };
};
