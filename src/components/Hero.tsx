import React, { useEffect, useRef, useState } from 'react';
import { Phone, LayoutGrid, FileCode2, BadgeCheck, MapPin, ChevronDown } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../config/contact';
import { HERO_FRAMES, HERO_LAYERS, HERO_OBJECT, heroFrameSrc } from '../config/hero';

const facts = [
  { icon: FileCode2, text: 'Kod i prawa autorskie przekazuję Tobie' },
  { icon: BadgeCheck, text: 'Stała cena po wycenie' },
  { icon: MapPin, text: 'Elbląg · kontakt bezpośrednio ze mną' },
];

type MediaState = 'poster' | 'canvas' | 'none';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeInOut = (v: number) => (v < 0.5 ? 2 * v * v : 1 - (-2 * v + 2) ** 2 / 2);

const layerPoint = (path: readonly (readonly number[])[], t: number) => {
  if (t <= path[0][0]) return path[0];
  for (let k = 1; k < path.length; k++) {
    const [t1, x1, y1] = path[k];
    const [t0, x0, y0] = path[k - 1];
    if (t <= t1) {
      const f = (t - t0) / (t1 - t0);
      return [t, x0 + (x1 - x0) * f, y0 + (y1 - y0) * f];
    }
  }
  return path[path.length - 1];
};

// Klatka ma miękko wygaszone krawędzie, żeby wtapiała się w tło hero przy każdym rozmiarze.
const frameMask = {
  maskImage: 'linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent), linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)',
  WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent), linear-gradient(180deg, transparent, #000 10%, #000 90%, transparent)',
  maskComposite: 'intersect',
  WebkitMaskComposite: 'source-in',
} as React.CSSProperties;

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const endCtaRef = useRef<HTMLDivElement>(null);
  // przejście: 0 = laptop pod tekstem, 1 = laptop na środku ekranu (aktualizowane bez re-renderu)
  const layoutRef = useRef({ s0: 0.55, ty0: 0, s1: 1, update: () => {} });
  const [media, setMedia] = useState<MediaState>('poster');
  const [loadPct, setLoadPct] = useState<number | null>(null);
  // false → bez przypinania (brak klipu, oszczędzanie danych, reduced motion, klatki nie doszły)
  const [scrub, setScrub] = useState(true);

  // Brak plakatu (klip nie został pocięty) → sam gradient i tekst.
  useEffect(() => {
    const img = posterRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setMedia('none');
      setScrub(false);
    }
  }, []);

  // Ułożenie startowe: zamknięty laptop mieści się pod tekstem; docelowo wypełnia środek ekranu.
  useEffect(() => {
    const sticky = stickyRef.current;
    const mediaEl = mediaRef.current;
    const text = textRef.current;
    if (!sticky || !mediaEl || !text) return;

    const measure = () => {
      const H = mediaEl.clientHeight;
      const W = mediaEl.clientWidth;
      if (!H || !W) return;
      const frameW = H * (HERO_FRAMES.width / HERO_FRAMES.height);
      const textBottom = text.offsetTop + text.offsetHeight + 12;
      const bodyH = HERO_OBJECT.bottom - HERO_OBJECT.top;
      const s1 = Math.min(1, (W * 0.92) / (HERO_OBJECT.width * frameW));
      // na dole zostaje miejsce na podpowiedź „Przewiń”
      const s0 = Math.min(s1, Math.max(0.3, (H - 36 - textBottom) / (bodyH * H)));
      // przesunięcie, po którym górna krawędź laptopa wypada tuż pod tekstem
      const ty0 = textBottom - H / 2 + s0 * H * (0.5 - HERO_OBJECT.top);
      layoutRef.current.s0 = s0;
      layoutRef.current.s1 = s1;
      layoutRef.current.ty0 = ty0;
      layoutRef.current.update();
    };

    const apply = (k: number) => {
      const { s0, s1, ty0 } = layoutRef.current;
      sticky.style.setProperty('--hero-s', String(s0 + (s1 - s0) * k));
      sticky.style.setProperty('--hero-ty', `${ty0 * (1 - k)}px`);
    };
    layoutRef.current.update = () => apply(Number(sticky.dataset.k || 0));

    const ro = new ResizeObserver(measure);
    ro.observe(mediaEl);
    ro.observe(text);
    measure();
    return () => ro.disconnect();
  }, [media]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    if (!section || !sticky || !canvas || !text) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) {
      setScrub(false); // zostaje statyczny hero.webp pod tekstem
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const set = window.matchMedia(HERO_FRAMES.mobileQuery).matches ? HERO_FRAMES.mobile : HERO_FRAMES.desktop;
    const frames: (HTMLImageElement | null)[] = new Array(set.count).fill(null);
    let loaded = 0;
    let failed = 0;
    let drawnIndex = -1;
    let shownLayer = -2;
    let rafId = 0;
    let cancelled = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(canvas.clientWidth * dpr);
      const h = Math.round(canvas.clientHeight * dpr);
      if (w && h && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
        drawnIndex = -1;
      }
    };

    const scrollProgress = () => {
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const total = section.offsetHeight - sticky.offsetHeight;
      if (total <= 0) return 0;
      return clamp01((stickyTop - section.getBoundingClientRect().top) / total);
    };

    const nearestLoaded = (i: number) => {
      for (let d = 0; d < set.count; d++) {
        if (frames[i - d]) return i - d;
        if (frames[i + d]) return i + d;
      }
      return -1;
    };

    // Tekst znika, laptop rośnie na środek; podpisy warstw wynikają z klatki, która jest na ekranie.
    const updateScene = (t: number, p: number) => {
      const fade = clamp01((p - 0.03) / 0.15);
      text.style.opacity = String(1 - fade);
      text.style.transform = `translateY(${-40 * fade}px)`;
      text.style.visibility = fade >= 1 ? 'hidden' : 'visible';
      const k = easeInOut(clamp01((p - 0.04) / 0.3));
      sticky.dataset.k = String(k);
      layoutRef.current.update();

      let current = -1;
      HERO_LAYERS.forEach((layer, n) => {
        const el = labelRefs.current[n];
        const visible = t >= layer.at;
        if (visible) current = n;
        if (!el) return;
        const [, x, y] = layerPoint(layer.path, t);
        el.style.left = `${x * 100}%`;
        el.style.top = `${y * 100}%`;
        el.dataset.visible = String(visible);
      });
      if (hintRef.current) hintRef.current.dataset.visible = String(p < 0.03);
      if (endCtaRef.current) endCtaRef.current.dataset.visible = String(p > 1 - HERO_FRAMES.holdEnd);
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

    const draw = () => {
      rafId = 0;
      const p = scrollProgress();
      const target = Math.round(Math.min(1, p / (1 - HERO_FRAMES.holdEnd)) * (set.count - 1));
      const i = nearestLoaded(target);
      if (i >= 0 && i !== drawnIndex) {
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(frames[i]!, 0, 0, canvas.width, canvas.height);
        if (drawnIndex === -1) setMedia('canvas');
        drawnIndex = i;
      }
      updateScene(i >= 0 ? i / (set.count - 1) : 0, p);
    };

    const requestDraw = () => {
      if (!rafId) rafId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      requestDraw();
    };

    // Najpierw co 4. klatka (szybko daje płynny scrub), potem reszta.
    const order: number[] = [];
    for (let i = 0; i < set.count; i += 4) order.push(i);
    for (let i = 0; i < set.count; i++) if (i % 4) order.push(i);

    const loadNext = async (): Promise<void> => {
      const i = order.shift();
      if (i === undefined || cancelled) return;
      const img = new Image();
      img.decoding = 'async';
      img.src = heroFrameSrc(set.dir, i);
      try {
        await img.decode();
        if (cancelled) return;
        frames[i] = img;
        loaded++;
        requestDraw();
      } catch {
        failed++;
      }
      if (!cancelled) {
        setLoadPct(Math.round(((loaded + failed) / set.count) * 100));
        return loadNext();
      }
    };

    const start = () => {
      if (cancelled) return;
      resize();
      setLoadPct(0);
      Promise.all(Array.from({ length: HERO_FRAMES.concurrency }, loadNext)).then(() => {
        if (!cancelled && loaded === 0) setScrub(false);
      });
    };

    // Klatki pobieramy dopiero po załadowaniu strony, żeby nie konkurowały z CSS, fontami i treścią.
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });

    window.addEventListener('scroll', requestDraw, { passive: true });
    window.addEventListener('resize', onResize);
    requestDraw();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', start);
      window.removeEventListener('scroll', requestDraw);
      window.removeEventListener('resize', onResize);
      text.style.opacity = '';
      text.style.transform = '';
      text.style.visibility = '';
    };
  }, []);

  const loading = loadPct !== null && loadPct < 100 && media !== 'none';
  const animated = scrub && media === 'canvas';

  return (
    <section
      ref={sectionRef}
      // hero zawsze ciemne — klip ma ciemne tło, w jasnym motywie nie ma twardego podziału
      data-theme="terminal"
      className={`relative ${scrub ? 'h-[var(--hero-h-m)] md:h-[var(--hero-h-d)] motion-reduce:h-auto' : ''}`}
      style={{
        '--hero-h-m': `${HERO_FRAMES.mobile.scrollVh}vh`,
        '--hero-h-d': `${HERO_FRAMES.desktop.scrollVh}vh`,
        // prawie czarne jak tło klipu — brak widocznych krawędzi klatki
        backgroundColor: '#09060B',
        color: 'var(--pg-text-primary)',
      } as React.CSSProperties}
    >
      <div
        ref={stickyRef}
        className={`${scrub ? 'sticky top-20 motion-reduce:static' : ''} relative h-[calc(100svh-5rem)] min-h-[560px] overflow-hidden`}
        style={{
          // wartości startowe przed hydracją; potem liczone w JS
          '--hero-s': '0.55',
          '--hero-ty': '24%',
          // tło, gdy brak klipu: sam gradient i tekst
          backgroundImage: media === 'none'
            ? 'radial-gradient(ellipse at 50% 70%, rgba(233, 84, 32, 0.12), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(119, 33, 111, 0.2), transparent 55%)'
            : undefined,
        } as React.CSSProperties}
      >
        {/* Media: plakat od razu w HTML, canvas przejmuje po pierwszej klatce */}
        {media !== 'none' && (
          <div ref={mediaRef} className="absolute inset-x-0 top-0 bottom-16 lg:bottom-0">
            <div
              className="absolute top-0 left-1/2 h-full will-change-transform"
              style={{
                aspectRatio: `${HERO_FRAMES.width} / ${HERO_FRAMES.height}`,
                transform: 'translateX(-50%) translateY(var(--hero-ty)) scale(var(--hero-s))',
              }}
            >
              <div className="absolute inset-0" style={frameMask}>
                <img
                  ref={posterRef}
                  src={HERO_FRAMES.poster}
                  width={HERO_FRAMES.width}
                  height={HERO_FRAMES.height}
                  alt=""
                  fetchPriority="high"
                  onError={() => {
                    setMedia('none');
                    setScrub(false);
                  }}
                  className="absolute inset-0 w-full h-full"
                />
                <canvas
                  ref={canvasRef}
                  width={HERO_FRAMES.width}
                  height={HERO_FRAMES.height}
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 motion-reduce:hidden ${media === 'canvas' ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Podpisy warstw na przemian po obu stronach laptopa */}
              {animated && (
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden lg:block">
                  {HERO_LAYERS.map((layer, n) => {
                    const left = layer.side === 'left';
                    return (
                      <div
                        key={layer.label}
                        ref={(el) => { labelRefs.current[n] = el; }}
                        data-visible="false"
                        className={`absolute -translate-y-1/2 flex items-center opacity-0 transition-[opacity,margin] duration-500 data-[visible=true]:opacity-100 data-[visible=true]:mx-0 ${left ? '-translate-x-full flex-row -mx-6' : 'flex-row-reverse mx-6'}`}
                      >
                        <span className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-sm font-semibold text-white bg-black/60 border border-ubuntuOrange-50/60 backdrop-blur-sm shadow-pg-glow">
                          {layer.label}
                        </span>
                        <span className={`w-8 h-px ${left ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-ubuntuOrange-50/40 to-ubuntuOrange-40`} />
                        <span className="w-2 h-2 rounded-full bg-ubuntuOrange-40 shadow-[0_0_10px_2px_rgba(255,120,72,0.8)]" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Ten sam komunikat jako jeden podpis (telefon, tablet) */}
            {animated && (
              <div
                ref={captionRef}
                aria-hidden="true"
                data-visible="false"
                className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-ubuntuOrange-50/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 data-[visible=true]:opacity-100"
              >
                <span className="flex gap-1">
                  {HERO_LAYERS.map((layer) => (
                    <span key={layer.label} data-dot data-on="false" className="w-1.5 h-1.5 rounded-full bg-white/30 data-[on=true]:bg-ubuntuOrange-40" />
                  ))}
                </span>
                <span data-text className="whitespace-nowrap text-xs font-semibold text-white" />
              </div>
            )}

            {/* Podpowiedź: przewiń, żeby rozłożyć laptopa na warstwy */}
            {animated && (
              <div
                ref={hintRef}
                aria-hidden="true"
                data-visible="true"
                className="absolute bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-white/80 transition-opacity duration-300 opacity-0 data-[visible=true]:opacity-100"
              >
                Przewiń, aby zobaczyć, jak to działa
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            )}

            {/* Po obejrzeniu: następny krok */}
            {animated && (
              <div
                ref={endCtaRef}
                data-visible="false"
                className="hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 translate-y-3 pointer-events-none transition-[opacity,transform] duration-500 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 data-[visible=true]:pointer-events-auto"
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

            {loading && (
              <div
                aria-hidden="true"
                className="absolute top-3 right-3 lg:top-5 lg:right-6 px-3 py-1 rounded-full text-[11px] font-mono text-white/80 bg-black/50 backdrop-blur-sm"
              >
                Ładowanie animacji {loadPct}%
              </div>
            )}
          </div>
        )}

        {/* Tekst — wyśrodkowany nad laptopem, znika przy przewijaniu */}
        <div ref={textRef} className={`absolute inset-x-0 z-10 px-4 sm:px-6 will-change-transform ${media === 'none' ? 'inset-y-0 flex items-center' : 'top-0 pt-6 lg:pt-10'}`}>
          <div className="w-full max-w-3xl mx-auto text-center space-y-4 lg:space-y-5">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium"
              style={{
                backgroundColor: 'var(--pg-badge-bg)',
                borderColor: 'var(--pg-badge-border)',
                color: 'var(--pg-badge-text)',
              }}
            >
              CodeWorks · software house z Elbląga
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.12]">
              Strony, aplikacje i automatyzacje <span className="font-bold gradient-orange-aubergine">dla Twojej firmy</span>
            </h1>

            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Projektuję i programuję strony, sklepy, aplikacje webowe, integracje i rozwiązania AI. Od pierwszej rozmowy do uruchomienia pracujesz bezpośrednio ze mną.
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
                className="inline-flex items-center justify-center gap-2 border font-medium text-sm px-5 py-3.5 rounded-lg transition-colors hover:border-ubuntuOrange-50"
                style={{
                  backgroundColor: 'var(--pg-layer-01)',
                  borderColor: 'var(--pg-border-strong)',
                  color: 'var(--pg-text-primary)',
                }}
              >
                <LayoutGrid className="w-4 h-4 text-ubuntuOrange-50" />
                <span>Zobacz usługi</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm" style={{ color: 'var(--pg-text-muted)' }}>
              Tel. <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-ubuntuOrange-40 hover:underline">{CONTACT_PHONE_DISPLAY}</a>
              {' · '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Rozmowa o projekcie')}`} className="font-semibold text-ubuntuOrange-40 hover:underline break-all">{CONTACT_EMAIL}</a>
            </p>

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
