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

// Podpisy warstw rozłożonego laptopa. `at`: postęp klipu (0–1), od którego podpis jest widoczny.
// `path`: lewa krawędź warstwy w ułamkach klatki [postęp, x, y] — pozycja jest interpolowana między punktami.
export const HERO_LAYERS = [
  { label: 'Twój sklep i katalog', at: 0.7, path: [[0.7, 0.354, 0.281], [1, 0.344, 0.244]] },
  { label: 'Zdjęcia, opisy, tłumaczenia', at: 0.77, path: [[0.7, 0.362, 0.469], [1, 0.359, 0.431]] },
  { label: 'AI na Twoim serwerze', at: 0.84, path: [[0.7, 0.376, 0.585], [1, 0.37, 0.579]] },
  { label: 'Dane zostają w firmie', at: 0.91, path: [[0.7, 0.359, 0.763], [1, 0.362, 0.771]] },
] as const;
