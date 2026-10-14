// Scena hero: cztery warstwy w CSS 3D, rozsuwane przewijaniem (bez klatek wideo, ostre na każdym ekranie).

export const HERO_SCENE = {
  // wymiary sceny w px „projektowych”; całość jest skalowana do ekranu
  width: 1000,
  height: 860,
  // obrys zamkniętego stosu (od środka sceny w górę / w dół) — do ułożenia go pod tekstem
  closedHalf: 165,
  // obrys rozsuniętego stosu
  openHalf: 420,
  // szerokość potrzebna z podpisami po bokach / bez nich
  widthWithLabels: 1080,
  widthNoLabels: 660,
  // wysokość przypiętej sekcji (w vh) — im więcej, tym wolniej się rozsuwa
  scrollVh: { desktop: 260, mobile: 190 },
  // odstęp między warstwami: zamknięte / rozsunięte
  gapClosed: 14,
  gapOpen: 165,
} as const;

// Warstwy od góry. `side`: po której stronie stoi podpis.
export const HERO_LAYERS = [
  { id: 'web', label: 'Strona i aplikacja', side: 'left' },
  { id: 'panel', label: 'Panel i integracje', side: 'right' },
  { id: 'ai', label: 'Automatyzacje i AI', side: 'left' },
  { id: 'server', label: 'Twój serwer, Twój kod', side: 'right' },
] as const;
