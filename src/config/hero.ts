// Konfiguracja animacji hero (scroll-scrub po klatkach z public/frames).
// Po ponownym pocięciu klipu zaktualizuj liczby klatek, rozmiar i punkty warstw poniżej.
export const HERO_FRAMES = {
  poster: '/hero.webp',
  // rozmiar klatki w px (proporcje canvasa i plakatu)
  width: 1600,
  height: 888,
  desktop: {
    dir: '/frames/hero',
    count: 129,
    // wysokość przypiętej sekcji (w vh) — im więcej, tym wolniej przewija się klip
    scrollVh: 300,
  },
  mobile: {
    dir: '/frames/hero-mobile',
    count: 62,
    scrollVh: 240,
  },
  mobileQuery: '(max-width: 767px)',
  // końcowa część przewijania, w której klip stoi na ostatniej klatce (czas na przeczytanie podpisów)
  holdEnd: 0.18,
  // ile klatek pobierać równolegle (nie zapycha łącza reszcie strony)
  concurrency: 6,
} as const;

export const heroFrameSrc = (dir: string, index: number) =>
  `${dir}/frame_${String(index + 1).padStart(4, '0')}.webp`;

// Podpisy warstw rozłożonego laptopa (na przemian po lewej i prawej).
// `at`: postęp klipu (0–1), od którego podpis jest widoczny.
// `path`: krawędź warstwy po stronie podpisu w ułamkach klatki [postęp, x, y] — interpolowana między punktami.
export const HERO_LAYERS = [
  { label: 'Strona i aplikacja', side: 'left', at: 0.7, path: [[0.7, 0.354, 0.281], [1, 0.344, 0.244]] },
  { label: 'Panel i integracje', side: 'right', at: 0.77, path: [[0.7, 0.671, 0.427], [1, 0.67, 0.402]] },
  { label: 'Automatyzacje i AI', side: 'left', at: 0.84, path: [[0.7, 0.376, 0.585], [1, 0.37, 0.579]] },
  { label: 'Twój serwer, Twój kod', side: 'right', at: 0.91, path: [[0.7, 0.688, 0.771], [1, 0.689, 0.788]] },
] as const;

// Część klatki zajmowana przez zamknięty laptop (pierwsza klatka) — do ułożenia go pod tekstem na starcie.
export const HERO_OBJECT = { top: 0.2, bottom: 0.8, width: 0.47 } as const;
