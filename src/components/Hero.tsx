import React, { useEffect, useRef, useState } from 'react';
import { Phone, ClipboardList, ShieldCheck, Unlock, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../config/contact';
import { HERO_FRAMES, heroFrameSrc } from '../config/hero';

const facts = [
  { icon: ShieldCheck, text: 'Dane zostają na Twoim serwerze' },
  { icon: Unlock, text: 'Bez opłat za API' },
  { icon: MapPin, text: 'Elbląg · kontakt bezpośrednio ze mną' },
];

// Plakat i canvas mają identyczną geometrię: wysokość boksu, proporcje klatki,
// środek obiektu przesunięty w prawo na desktopie (tekst po lewej), wyśrodkowany pod tekstem na mobile.
const mediaClass =
  'absolute top-0 h-full w-auto max-w-none -translate-x-1/2 left-1/2 lg:left-[72%]';

type MediaState = 'poster' | 'canvas' | 'none';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
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

    const targetIndex = () => {
      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const total = section.offsetHeight - sticky.offsetHeight;
      if (total <= 0) return 0;
      const progress = Math.min(1, Math.max(0, (stickyTop - section.getBoundingClientRect().top) / total));
      return Math.round(progress * (set.count - 1));
    };

    const nearestLoaded = (i: number) => {
      for (let d = 0; d < set.count; d++) {
        if (frames[i - d]) return i - d;
        if (frames[i + d]) return i + d;
      }
      return -1;
    };

    const draw = () => {
      rafId = 0;
      const i = nearestLoaded(targetIndex());
      if (i < 0 || i === drawnIndex) return;
      ctx.drawImage(frames[i]!, 0, 0, canvas.width, canvas.height);
      if (drawnIndex === -1) setMedia('canvas');
      drawnIndex = i;
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

  return (
    <section
      ref={sectionRef}
      className={`relative ${scrub ? 'h-[var(--hero-h-m)] md:h-[var(--hero-h-d)] motion-reduce:h-auto' : ''}`}
      style={{
        '--hero-h-m': `${HERO_FRAMES.mobile.scrollVh}vh`,
        '--hero-h-d': `${HERO_FRAMES.desktop.scrollVh}vh`,
        backgroundColor: 'var(--pg-bg)',
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

            {/* Gradient pod tekstem (desktop: z lewej, mobile: łączy tekst z obrazem) */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ background: 'linear-gradient(90deg, var(--pg-bg) 0%, var(--pg-bg) 45%, transparent 56%)' }}
            />
            <div
              className="absolute inset-x-0 top-0 h-16 pointer-events-none lg:hidden"
              style={{ background: 'linear-gradient(180deg, var(--pg-bg), transparent)' }}
            />

            {loading && (
              <div
                aria-hidden="true"
                className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 px-3 py-1 rounded-full text-[11px] font-mono text-white/80 bg-black/50 backdrop-blur-sm"
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
                Tel. <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-ubuntuOrange-50 hover:underline">{CONTACT_PHONE_DISPLAY}</a>
                {' · '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Darmowa 20-min rozmowa')}`} className="font-semibold text-ubuntuOrange-50 hover:underline break-all">{CONTACT_EMAIL}</a>
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
