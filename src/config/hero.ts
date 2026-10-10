// Konfiguracja animacji hero (scroll-scrub po klatkach z public/frames).
// Po ponownym pocięciu klipu zaktualizuj tylko liczby klatek poniżej.
export const HERO_FRAMES = {
  poster: '/hero.webp',
  // rozmiar klatki w px (proporcje canvasa i plakatu)
  width: 864,
  height: 480,
  desktop: {
    dir: '/frames/hero',
    count: 129,
    // wysokość przypiętej sekcji (w vh) — im więcej, tym wolniej przewija się klip
    scrollVh: 260,
  },
  mobile: {
    dir: '/frames/hero-mobile',
    count: 62,
    scrollVh: 200,
  },
  mobileQuery: '(max-width: 767px)',
  // ile klatek pobierać równolegle (nie zapycha łącza reszcie strony)
  concurrency: 6,
} as const;

export const heroFrameSrc = (dir: string, index: number) =>
  `${dir}/frame_${String(index + 1).padStart(4, '0')}.webp`;
