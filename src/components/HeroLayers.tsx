import React from 'react';

// Zawartość warstw sceny hero. Każda warstwa to płaszczyzna 520×330 px, obracana w 3D przez Hero.
// Rysowane w HTML/SVG, więc są ostre przy każdej rozdzielczości.

export const PLANE_W = 520;
export const PLANE_H = 330;

const plane = 'absolute inset-0 rounded-[22px] overflow-hidden';
const bar = (w: string, c = 'rgba(255,255,255,0.18)') => (
  <span className="block h-2 rounded-full" style={{ width: w, background: c }} />
);

// 1. Strona firmowa w oknie przeglądarki
const WebLayer: React.FC = () => (
  <div className={plane} style={{ background: 'linear-gradient(160deg,#2a1230,#140814)', border: '1px solid rgba(255,140,90,0.35)' }}>
    <div className="flex items-center gap-1.5 px-4 h-9" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-4 px-3 py-0.5 rounded-full text-[11px] font-mono text-white/70" style={{ background: 'rgba(255,255,255,0.08)' }}>twojafirma.pl</span>
    </div>
    <div className="p-6 flex gap-6">
      <div className="flex-1 space-y-3 pt-2">
        <span className="block text-[22px] font-bold leading-tight text-white">Świeże pieczywo<br />codziennie od 6:00</span>
        {bar('85%')}
        {bar('60%')}
        <span className="inline-block mt-2 px-4 py-2 rounded-lg text-[12px] font-bold text-white" style={{ background: '#E95420' }}>Zamów online</span>
      </div>
      <div className="w-[170px] h-[130px] rounded-xl" style={{ background: 'radial-gradient(circle at 35% 35%,#ffb38a,#E95420 45%,#77216F)' }} />
    </div>
    <div className="px-6 grid grid-cols-3 gap-3">
      {['Oferta', 'Cennik', 'Kontakt'].map((t) => (
        <div key={t} className="rounded-lg p-3 space-y-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <span className="block text-[11px] font-semibold text-white/85">{t}</span>
          {bar('80%', 'rgba(255,255,255,0.12)')}
        </div>
      ))}
    </div>
  </div>
);

// 2. Panel firmy: liczby, wykres, połączone systemy
const PanelLayer: React.FC = () => (
  <div className={plane} style={{ background: 'linear-gradient(160deg,#1d1424,#0e0a12)', border: '1px solid rgba(255,255,255,0.14)' }}>
    <div className="flex h-full">
      <div className="w-[96px] p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
        {['Pulpit', 'Zamówienia', 'Klienci', 'Raporty'].map((t, i) => (
          <span key={t} className={`block text-[10px] font-semibold ${i === 0 ? 'text-[#FF8A5C]' : 'text-white/55'}`}>{t}</span>
        ))}
      </div>
      <div className="flex-1 p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[['Zamówienia', '142'], ['Przychód', '38 400 zł'], ['Zwroty', '−21%']].map(([k, v]) => (
            <div key={k} className="rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <span className="block text-[9px] text-white/50">{k}</span>
              <span className="block text-[15px] font-bold text-white">{v}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-3 flex items-end gap-2 h-[110px]" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {[38, 52, 45, 64, 58, 76, 70, 88, 82, 96].map((h, i) => (
            <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i > 6 ? '#E95420' : 'rgba(255,138,92,0.45)' }} />
          ))}
        </div>
        <div className="flex gap-2">
          {['Sklep', 'Arkusze', 'Poczta', 'Magazyn'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/85" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,138,92,0.35)' }}>
              <i className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 3. Automatyzacje: zadania płyną przez model AI
const AiLayer: React.FC = () => {
  const nodes = [
    { t: 'Zdjęcia', x: 70, y: 70 },
    { t: 'Opisy', x: 70, y: 260 },
    { t: 'Karty PDF', x: 450, y: 70 },
    { t: 'Tłumaczenia', x: 450, y: 260 },
  ];
  return (
    <div className={plane} style={{ background: 'radial-gradient(circle at 50% 50%,#3a1020,#0b0609 70%)', border: '1px solid rgba(255,120,72,0.5)' }}>
      <svg viewBox={`0 0 ${PLANE_W} ${PLANE_H}`} className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="hero-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
        <rect width={PLANE_W} height={PLANE_H} fill="url(#hero-grid)" />
        {nodes.map((n) => (
          <path key={n.t} d={`M${n.x} ${n.y} C ${(n.x + 260) / 2} ${n.y}, ${(n.x + 260) / 2} 165, 260 165`} fill="none" stroke="#FF7848" strokeWidth="2.5" strokeDasharray="6 7" opacity="0.85">
            <animate attributeName="stroke-dashoffset" from="26" to="0" dur="1.2s" repeatCount="indefinite" />
          </path>
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] rounded-2xl flex items-center justify-center text-[26px] font-extrabold text-white"
        style={{ background: 'linear-gradient(135deg,#FF8A5C,#E95420 50%,#77216F)', boxShadow: '0 0 40px 8px rgba(233,84,32,0.55)' }}>
        AI
      </div>
      {nodes.map((n) => (
        <span key={n.t} className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white whitespace-nowrap"
          style={{ left: n.x, top: n.y, background: 'rgba(20,10,16,0.9)', border: '1px solid rgba(255,138,92,0.55)' }}>
          {n.t}
        </span>
      ))}
    </div>
  );
};

// 4. Serwer klienta z kodem
const ServerLayer: React.FC = () => (
  <div className={plane} style={{ background: 'linear-gradient(160deg,#2b2730,#141217)', border: '1px solid rgba(255,255,255,0.18)' }}>
    <div className="absolute left-0 top-0 bottom-0 w-[150px] p-4 space-y-2.5" style={{ background: 'rgba(0,0,0,0.25)' }}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-[34px] rounded-md flex items-center gap-1.5 px-2.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <i className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-[#FF7848]' : 'bg-[#28c840]'}`} />
          <i className="w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="ml-auto block w-12 h-1 rounded-full bg-white/15" />
        </div>
      ))}
    </div>
    <pre className="absolute left-[170px] top-5 right-5 text-[12px] leading-[1.7] font-mono text-white/80 whitespace-pre">
      <span className="text-white/40">// serwer w Twojej firmie</span>{'\n'}
      <span className="text-[#FF8A5C]">const</span> dane = <span className="text-[#ffd18a]">'zostają u Ciebie'</span>;{'\n'}
      <span className="text-[#FF8A5C]">const</span> kod = <span className="text-[#ffd18a]">'Twoja własność'</span>;{'\n'}
      {'\n'}
      <span className="text-[#FF8A5C]">export function</span> <span className="text-[#9ad7ff]">wdrozenie</span>() {'{'}{'\n'}
      {'  '}<span className="text-[#FF8A5C]">return</span> {'{'} abonament: <span className="text-[#ffd18a]">false</span> {'}'};{'\n'}
      {'}'}
    </pre>
  </div>
);

export const LAYER_VIEWS: Record<string, React.FC> = {
  web: WebLayer,
  panel: PanelLayer,
  ai: AiLayer,
  server: ServerLayer,
};
