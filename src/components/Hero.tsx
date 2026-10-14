import React, { useEffect, useRef, useState } from 'react';
import { Phone, LayoutGrid, FileCode2, BadgeCheck, MapPin, ChevronDown } from 'lucide-react';
import { CONTACT_PHONE } from '../config/contact';
import { HERO_SCENE, HERO_LAYERS } from '../config/hero';
import { LAYER_VIEWS, PLANE_W, PLANE_H } from './HeroLayers';

const facts = [
  { icon: FileCode2, text: 'Kod i prawa autorskie dla Ciebie' },
  { icon: BadgeCheck, text: 'Stała cena w umowie' },
  { icon: MapPin, text: 'Elbląg, Trójmiasto, zdalnie' },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (v: number) => (v < 0.5 ? 2 * v * v : 1 - (-2 * v + 2) ** 2 / 2);

// Etapy przewijania (ułamki postępu sekcji)
const MOVE = [0.03, 0.3] as const; // tekst znika, stos jedzie na środek
const OPEN = [0.22, 0.75] as const; // warstwy się rozsuwają
const END_CTA = 0.82;

// Krawędź warstwy na wysokości jej środka (od środka sceny) — tam dochodzi linia podpisu.
const EDGE_X = 262;

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const endCtaRef = useRef<HTMLDivElement>(null);
  // false → bez przypinania: warstwy od razu rozsunięte pod tekstem (reduced motion)
  const [scrub, setScrub] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setScrub(false);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const stage = stageRef.current;
    const text = textRef.current;
    if (!section || !sticky || !stage || !text) return;

    const layout = { s0: 0.6, s1: 1, ty0: 0 };
    let rafId = 0;
    let shownLayer = -2;

    // Skala i położenie: na starcie stos mieści się pod tekstem, docelowo wypełnia środek.
    const measure = () => {
      const H = stage.clientHeight;
      const W = stage.clientWidth;
      if (!H || !W) return;
      const wide = window.matchMedia('(min-width: 1024px)').matches;
      const needW = wide ? HERO_SCENE.widthWithLabels : HERO_SCENE.widthNoLabels;
      const s1 = Math.min(1.1, (W * 0.96) / needW, (H * 0.94) / (HERO_SCENE.openHalf * 2));
      const half = scrub ? HERO_SCENE.closedHalf : HERO_SCENE.openHalf;
      const textBottom = text.offsetTop + text.offsetHeight + 16;
      const free = H - 40 - textBottom;
      // zamknięty stos jest węższy niż rozsunięty z podpisami, więc może startować większy
      const s0 = Math.min(scrub ? (W * 0.97) / 620 : s1, 1, Math.max(0.3, free / (half * 2)));
      layout.s0 = s0;
      layout.s1 = s1;
      // stos na środku wolnego miejsca pod tekstem (na telefonie nie zostaje pusty dół)
      layout.ty0 = textBottom + free / 2 - H / 2;
      requestDraw();
    };

    const progress = () => {
      if (!scrub) return 0;
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const total = section.offsetHeight - sticky.offsetHeight;
      if (total <= 0) return 0;
      return clamp01((stickyTop - section.getBoundingClientRect().top) / total);
    };

    const draw = () => {
      rafId = 0;
      const p = progress();
      const m = scrub ? easeInOut(clamp01((p - MOVE[0]) / (MOVE[1] - MOVE[0]))) : 0;
      const k = scrub ? easeInOut(clamp01((p - OPEN[0]) / (OPEN[1] - OPEN[0]))) : 1;

      sticky.style.setProperty('--hero-s', String(layout.s0 + (layout.s1 - layout.s0) * m));
      sticky.style.setProperty('--hero-ty', `${layout.ty0 * (1 - m)}px`);
      sticky.style.setProperty('--hero-k', String(k));

      if (scrub) {
        const fade = clamp01((p - 0.03) / 0.15);
        text.style.opacity = String(1 - fade);
        text.style.transform = `translateY(${-40 * fade}px)`;
        text.style.visibility = fade >= 1 ? 'hidden' : 'visible';
      }

      // Podpisy pojawiają się po kolei, gdy warstwy się rozchodzą.
      let current = -1;
      HERO_LAYERS.forEach((_, n) => {
        const visible = k > 0.3 + n * 0.17;
        if (visible) current = n;
        const el = labelRefs.current[n];
        if (el) el.dataset.visible = String(visible);
      });
      if (hintRef.current) hintRef.current.dataset.visible = String(scrub && p < 0.03);
      if (endCtaRef.current) endCtaRef.current.dataset.visible = String(scrub && p > END_CTA);
      if (current !== shownLayer && captionRef.current) {
        shownLayer = current;
        captionRef.current.dataset.visible = String(current >= 0);
        if (current >= 0) {
          captionRef.current.querySelector('[data-text]')!.textContent = HERO_LAYERS[current].label;
          captionRef.current.querySelectorAll('[data-dot]').forEach((dot, n) => {
            (dot as HTMLElement).dataset.on = String(n <= current);
          });
        }
      }
    };

    const requestDraw = () => {
      if (!rafId) rafId = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    ro.observe(text);
    measure();
    window.addEventListener('scroll', requestDraw, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('scroll', requestDraw);
      text.style.opacity = '';
      text.style.transform = '';
      text.style.visibility = '';
    };
  }, [scrub]);

  const center = { x: HERO_SCENE.width / 2, y: HERO_SCENE.height / 2 };

  return (
    <section
      ref={sectionRef}
      // hero zawsze ciemne, także w jasnym motywie
      data-theme="terminal"
      className={`relative ${scrub ? 'h-[var(--hero-h-m)] md:h-[var(--hero-h-d)]' : ''}`}
      style={{
        '--hero-h-m': `${HERO_SCENE.scrollVh.mobile}vh`,
        '--hero-h-d': `${HERO_SCENE.scrollVh.desktop}vh`,
        backgroundColor: '#0B060C',
        color: 'var(--pg-text-primary)',
      } as React.CSSProperties}
    >
      <div
        ref={stickyRef}
        className={`${scrub ? 'sticky top-20' : ''} relative h-[calc(100svh-5rem)] min-h-[600px] overflow-hidden`}
        style={{
          // wartości startowe przed hydracją; potem liczone w JS
          '--hero-s': '0.55',
          '--hero-ty': '22%',
          '--hero-k': scrub ? '0' : '1',
          backgroundImage: 'radial-gradient(ellipse 60% 50% at 50% 62%, rgba(233,84,32,0.16), transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(119,33,111,0.28), transparent 70%)',
        } as React.CSSProperties}
      >
        <div ref={stageRef} aria-hidden="true" className="absolute inset-x-0 top-0 bottom-16 lg:bottom-0">
          {/* Scena w stałych wymiarach, skalowana do ekranu */}
          <div
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{
              width: HERO_SCENE.width,
              height: HERO_SCENE.height,
              marginLeft: -center.x,
              marginTop: -center.y,
              perspective: '2200px',
              transform: 'translateY(var(--hero-ty)) scale(var(--hero-s))',
            }}
          >
            {HERO_LAYERS.map((layer, n) => {
              const View = LAYER_VIEWS[layer.id];
              const off = n - (HERO_LAYERS.length - 1) / 2;
              const y = `calc(${off * HERO_SCENE.gapClosed}px + var(--hero-k) * ${off * (HERO_SCENE.gapOpen - HERO_SCENE.gapClosed)}px)`;
              return (
                <div
                  key={layer.id}
                  className="absolute"
                  style={{
                    width: PLANE_W,
                    height: PLANE_H,
                    left: center.x - PLANE_W / 2,
                    top: center.y - PLANE_H / 2,
                    zIndex: HERO_LAYERS.length - n,
                    transform: `translateY(${y}) rotateX(62deg) rotateZ(calc(-44deg + var(--hero-k) * 6deg))`,
                    filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.55))',
                  }}
                >
                  <View />
                </div>
              );
            })}

            {/* Podpisy warstw po bokach (desktop) */}
            <div className="hidden lg:block">
              {HERO_LAYERS.map((layer, n) => {
                const left = layer.side === 'left';
                const off = n - (HERO_LAYERS.length - 1) / 2;
                return (
                  <div
                    key={layer.id}
                    ref={(el) => { labelRefs.current[n] = el; }}
                    data-visible="false"
                    className={`absolute flex items-center opacity-0 transition-[opacity,translate] duration-500 data-[visible=true]:opacity-100 ${left ? 'flex-row -translate-x-full' : 'flex-row-reverse'}`}
                    style={{
                      left: center.x + (left ? -EDGE_X : EDGE_X),
                      top: `calc(${center.y + off * HERO_SCENE.gapClosed}px + var(--hero-k) * ${off * (HERO_SCENE.gapOpen - HERO_SCENE.gapClosed)}px)`,
                      translate: '0 -50%',
                    }}
                  >
                    <span className="whitespace-nowrap px-4 py-2 rounded-full text-base font-semibold text-white bg-black/70 border border-ubuntuOrange-50/60 backdrop-blur-sm shadow-pg-glow">
                      {layer.label}
                    </span>
                    <span className={`w-16 h-px ${left ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-ubuntuOrange-50/30 to-ubuntuOrange-40`} />
                    <span className="w-2.5 h-2.5 rounded-full bg-ubuntuOrange-40 shadow-[0_0_10px_2px_rgba(255,120,72,0.8)]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ten sam komunikat jako jeden podpis (telefon, tablet) */}
          <div
            ref={captionRef}
            data-visible={scrub ? 'false' : 'true'}
            className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-ubuntuOrange-50/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 data-[visible=true]:opacity-100"
          >
            <span className="flex gap-1">
              {HERO_LAYERS.map((layer) => (
                <span key={layer.id} data-dot data-on="false" className="w-1.5 h-1.5 rounded-full bg-white/30 data-[on=true]:bg-ubuntuOrange-40" />
              ))}
            </span>
            <span data-text className="whitespace-nowrap text-xs font-semibold text-white" />
          </div>

          {scrub && (
            <div
              ref={hintRef}
              data-visible="true"
              className="absolute bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-white/80 transition-opacity duration-300 opacity-0 data-[visible=true]:opacity-100"
            >
              Przewiń i zobacz, z czego składa się projekt
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          )}
        </div>

        {/* Po rozsunięciu: następny krok */}
        {scrub && (
          <div
            ref={endCtaRef}
            data-visible="false"
            className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-3 pointer-events-none transition-[opacity,transform] duration-500 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 data-[visible=true]:pointer-events-auto"
          >
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-sm px-5 py-3 rounded-full shadow-pg-glow transition-colors"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń: bezpłatna rozmowa
            </a>
          </div>
        )}

        {/* Tekst nad sceną, znika przy przewijaniu */}
        <div ref={textRef} className="absolute inset-x-0 top-0 z-10 px-4 sm:px-6 pt-8 lg:pt-12 will-change-transform">
          <div className="w-full max-w-3xl mx-auto text-center space-y-5">
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Strona, sklep albo system, <span className="font-bold gradient-orange-aubergine">który należy do Ciebie</span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Projektuję i programuję sam, od pierwszej rozmowy do uruchomienia. Stała cena, bez abonamentu.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base px-6 py-3.5 rounded-lg shadow-lg hover:shadow-pg-glow transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń: bezpłatna rozmowa</span>
              </a>
              <a
                href="#uslugi"
                className="hidden sm:inline-flex items-center justify-center gap-2 border font-medium text-sm px-5 py-3.5 rounded-lg transition-colors hover:border-ubuntuOrange-50"
                style={{ backgroundColor: 'var(--pg-layer-01)', borderColor: 'var(--pg-border-strong)', color: 'var(--pg-text-primary)' }}
              >
                <LayoutGrid className="w-4 h-4 text-ubuntuOrange-50" />
                <span>Zobacz usługi</span>
              </a>
            </div>

            <ul className="hidden sm:flex [@media(max-height:760px)]:hidden flex-wrap justify-center gap-x-5 gap-y-2 text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
              {facts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-ubuntuOrange-50 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
