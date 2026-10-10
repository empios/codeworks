import React, { useEffect, useRef, useState } from 'react';
import { Phone, ClipboardList, ShieldCheck, Unlock, MapPin, ChevronDown } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../config/contact';
import { HERO_FRAMES, HERO_LAYERS, heroFrameSrc } from '../config/hero';

const facts = [
  { icon: ShieldCheck, text: 'Dane zostają na Twoim serwerze' },
  { icon: Unlock, text: 'Bez opłat za API' },
  { icon: MapPin, text: 'Elbląg · kontakt bezpośrednio ze mną' },
];

// Plakat, canvas i warstwa podpisów mają identyczną geometrię: wysokość boksu, proporcje klatki,
// środek obiektu przesunięty w prawo na desktopie (tekst po lewej), wyśrodkowany pod tekstem na mobile.
const mediaClass =
  'absolute top-0 h-full w-auto max-w-none -translate-x-1/2 left-1/2 lg:left-[72%]';
const mediaRatio = { aspectRatio: `${HERO_FRAMES.width} / ${HERO_FRAMES.height}` };

type MediaState = 'poster' | 'canvas' | 'none';

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

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [media, setMedia] = useState<MediaState>('poster');
  const [loadPct, setLoadPct] = useState<number | null>(null);
  // false → bez przypinania (brak klipu, oszczędzanie danych, klatki nie doszły)
  const [scrub, setScrub] = useState(true);

  // Brak plakatu (klip nie został pocięty) → sam gradient i tekst.
  useEffect(() => {
    const img = posterRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setMedia('none');
      setScrub(false);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!section || !sticky || !canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) {
      setScrub(false); // zostaje statyczny hero.webp
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
      return Math.min(1, Math.max(0, (stickyTop - section.getBoundingClientRect().top) / total));
    };

    const nearestLoaded = (i: number) => {
      for (let d = 0; d < set.count; d++) {
        if (frames[i - d]) return i - d;
        if (frames[i + d]) return i + d;
      }
      return -1;
    };

    // Podpisy warstw: pozycja i widoczność wynikają z klatki, która faktycznie jest na ekranie.
    const updateLayers = (t: number, p: number) => {
      let current = -1;
      HERO_LAYERS.forEach((layer, k) => {
        const el = labelRefs.current[k];
        const visible = t >= layer.at;
        if (visible) current = k;
        if (!el) return;
        const [, x, y] = layerPoint(layer.path, t);
        el.style.left = `${x * 100}%`;
        el.style.top = `${y * 100}%`;
        el.dataset.visible = String(visible);
      });
      if (hintRef.current) hintRef.current.dataset.visible = String(p < 0.03);
      if (current !== shownLayer && captionRef.current) {
        shownLayer = current;
        captionRef.current.dataset.visible = String(current >= 0);
        if (current >= 0) {
          captionRef.current.querySelector('[data-text]')!.textContent = HERO_LAYERS[current].label;
          captionRef.current.querySelectorAll('[data-dot]').forEach((dot, k) => {
            (dot as HTMLElement).dataset.on = String(k <= current);
          });
        }
      }
    };

    const draw = () => {
      rafId = 0;
      const p = scrollProgress();
      const target = Math.round(Math.min(1, p / (1 - HERO_FRAMES.holdEnd)) * (set.count - 1));
      const i = nearestLoaded(target);
      if (i < 0) return;
      if (i !== drawnIndex) {
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(frames[i]!, 0, 0, canvas.width, canvas.height);
        if (drawnIndex === -1) setMedia('canvas');
        drawnIndex = i;
      }
      updateLayers(i / (set.count - 1), p);
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

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', start);
      window.removeEventListener('scroll', requestDraw);
      window.removeEventListener('resize', onResize);
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
        backgroundColor: 'var(--pg-bg)',
        color: 'var(--pg-text-primary)',
      } as React.CSSProperties}
    >
      <div
        ref={stickyRef}
        className={`${scrub ? 'sticky top-20 motion-reduce:static' : ''} h-[calc(100svh-5rem)] min-h-[560px] overflow-hidden flex flex-col pb-16 lg:pb-0`}
        style={{
          // tło, gdy brak klipu: sam gradient i tekst
          backgroundImage: 'radial-gradient(ellipse at 75% 50%, rgba(233, 84, 32, 0.14), transparent 60%), radial-gradient(ellipse at 90% 90%, rgba(119, 33, 111, 0.18), transparent 55%)',
        }}
      >
        {/* Media: plakat od razu w HTML, canvas przejmuje po pierwszej klatce */}
        {media !== 'none' && (
          <div className="order-2 lg:order-none relative flex-1 min-h-[200px] lg:absolute lg:inset-0 overflow-hidden bg-black">
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
              className={mediaClass}
            />
            <canvas
              ref={canvasRef}
              width={HERO_FRAMES.width}
              height={HERO_FRAMES.height}
              aria-hidden="true"
              className={`${mediaClass} transition-opacity duration-300 motion-reduce:hidden ${media === 'canvas' ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Gradient pod tekstem (desktop: z lewej, mobile: łączy tekst z obrazem) + wyjście w kolejną sekcję */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ background: 'linear-gradient(90deg, var(--pg-bg) 0%, var(--pg-bg) 45%, transparent 56%), linear-gradient(0deg, var(--pg-bg) 0%, transparent 14%)' }}
            />
            <div
              className="absolute inset-x-0 top-0 h-16 pointer-events-none lg:hidden"
              style={{ background: 'linear-gradient(180deg, var(--pg-bg), transparent)' }}
            />

            {/* Podpisy warstw przy obiekcie (xl+: jest miejsce między tekstem a laptopem) */}
            {animated && (
              <div aria-hidden="true" className={`${mediaClass} pointer-events-none hidden xl:block`} style={mediaRatio}>
                {HERO_LAYERS.map((layer, k) => (
                  <div
                    key={layer.label}
                    ref={(el) => { labelRefs.current[k] = el; }}
                    data-visible="false"
                    className="absolute -translate-x-full -translate-y-1/2 flex items-center opacity-0 transition-[opacity,margin] duration-500 data-[visible=true]:opacity-100 -ml-6 data-[visible=true]:ml-0"
                  >
                    <span className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/60 border border-ubuntuOrange-50/60 backdrop-blur-sm shadow-pg-glow">
                      {layer.label}
                    </span>
                    <span className="w-6 h-px bg-gradient-to-r from-ubuntuOrange-50/40 to-ubuntuOrange-40" />
                    <span className="w-2 h-2 rounded-full bg-ubuntuOrange-40 shadow-[0_0_10px_2px_rgba(255,120,72,0.8)]" />
                  </div>
                ))}
              </div>
            )}

            {/* Ten sam komunikat jako podpis pod obrazem (mobile, tablet, małe laptopy) */}
            {animated && (
              <div
                ref={captionRef}
                aria-hidden="true"
                data-visible="false"
                className="xl:hidden absolute bottom-3 left-1/2 -translate-x-1/2 lg:left-[72%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-ubuntuOrange-50/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 data-[visible=true]:opacity-100"
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
                className="absolute bottom-3 lg:bottom-8 left-1/2 -translate-x-1/2 lg:left-[72%] flex items-center gap-1.5 text-xs font-medium text-white/80 transition-opacity duration-300 opacity-0 data-[visible=true]:opacity-100"
              >
                Przewiń, aby zobaczyć, jak to działa
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            )}

            {loading && (
              <div
                aria-hidden="true"
                className="absolute top-3 right-3 lg:top-6 lg:right-6 px-3 py-1 rounded-full text-[11px] font-mono text-white/80 bg-black/50 backdrop-blur-sm"
              >
                Ładowanie animacji {loadPct}%
              </div>
            )}
          </div>
        )}

        {/* Tekst */}
        <div className="order-1 lg:order-none relative z-10 lg:h-full lg:flex lg:items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 lg:py-0">
            <div className="max-w-xl lg:max-w-[26rem] xl:max-w-lg space-y-4 lg:space-y-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium"
                style={{
                  backgroundColor: 'var(--pg-badge-bg)',
                  borderColor: 'var(--pg-badge-border)',
                  color: 'var(--pg-badge-text)',
                }}
              >
                Automatyzacja AI · sklepy i hurtownie · RODO
              </span>

              <h1
                className="text-3xl sm:text-4xl xl:text-5xl font-light tracking-tight leading-[1.15]"
                style={{ color: 'var(--pg-text-primary)' }}
              >
                Automatyzuję powtarzalną pracę w <span className="font-bold gradient-orange-aubergine">sklepach i hurtowniach</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                AI na Twoim własnym serwerze obrabia zdjęcia produktów, sprawdza opisy i tłumaczy katalogi, a Twoje dane nie wychodzą z firmy.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base px-6 py-3.5 rounded-lg shadow-lg hover:shadow-pg-glow transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Umów darmową 20-min rozmowę</span>
                </a>
                <a
                  href="/audyt"
                  className="inline-flex items-center justify-center gap-2 border font-medium text-sm px-5 py-3.5 rounded-lg transition-colors hover:border-ubuntuOrange-50"
                  style={{
                    backgroundColor: 'var(--pg-layer-01)',
                    borderColor: 'var(--pg-border-strong)',
                    color: 'var(--pg-text-primary)',
                  }}
                >
                  <ClipboardList className="w-4 h-4 text-ubuntuOrange-50" />
                  <span>Audyt procesu · 3 500 zł netto</span>
                </a>
              </div>

              <p className="text-xs sm:text-sm" style={{ color: 'var(--pg-text-muted)' }}>
                Tel. <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-ubuntuOrange-40 hover:underline">{CONTACT_PHONE_DISPLAY}</a>
                {' · '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Darmowa 20-min rozmowa')}`} className="font-semibold text-ubuntuOrange-40 hover:underline break-all">{CONTACT_EMAIL}</a>
              </p>

              <ul className="hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm" style={{ color: 'var(--pg-text-secondary)' }}>
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
      </div>
    </section>
  );
};
