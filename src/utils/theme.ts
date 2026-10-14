import type { ThemeMode } from '../types';

// Przełącza motyw bez animowania wszystkich kolorów naraz: wyłącza przejścia na jedną klatkę.
export const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement;
  root.classList.add('theme-switching');
  root.setAttribute('data-theme', theme);
  void root.offsetHeight; // wymusza przeliczenie stylów przed przywróceniem przejść
  requestAnimationFrame(() => root.classList.remove('theme-switching'));
};
