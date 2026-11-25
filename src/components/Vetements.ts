// Vêtements dessinés en volume (dégradés, plis, reflets), placés aux mêmes endroits que sur la photo.
// Repère : la photo fait 100 × 150 unités (2:3). Chaque entrée est un <svg> complet.

const defs = (id: string, contenu: string) => `<defs>${contenu.replaceAll('#ID', id)}</defs>`;

const marine = `
  <linearGradient id="#ID-tissu" x1="0" x2="1">
    <stop offset="0" stop-color="#121a30"/><stop offset=".28" stop-color="#25345a"/>
    <stop offset=".55" stop-color="#2d3f69"/><stop offset=".82" stop-color="#1b2645"/><stop offset="1" stop-color="#0e1527"/>
  </linearGradient>
  <linearGradient id="#ID-haut" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity=".28"/>
  </linearGradient>
  <radialGradient id="#ID-or" cx=".35" cy=".35" r=".7">
    <stop offset="0" stop-color="#fff3c4"/><stop offset=".45" stop-color="#d9b14f"/><stop offset="1" stop-color="#8a6a1e"/>
  </radialGradient>
  <linearGradient id="#ID-pli" x1="0" x2="1">
    <stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".5" stop-color="#000" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </linearGradient>`;

const surpiqure = 'fill="none" stroke="#efe9de" stroke-width=".32" stroke-dasharray=".9 .6" stroke-linecap="round"';

export const vetements: Record<string, string> = {
  veste: `<svg viewBox="0 0 100 150">${defs('ve', marine + `
      <linearGradient id="ve-top" x1="0" x2="1"><stop offset="0" stop-color="#e9e4da"/><stop offset=".5" stop-color="#fdfcf9"/><stop offset="1" stop-color="#dcd5c8"/></linearGradient>`)}
    <!-- top blanc dans l'encolure -->
    <path d="M62.6 28.5 L69.4 28.5 L68.6 47 L63.4 47 Z" fill="url(#ve-top)"/>
    <circle cx="66" cy="38.5" r="2.1" fill="none" stroke="url(#ve-or)" stroke-width=".55"/>
    <path d="M66 29.5 L65.2 36.5 M66 29.5 L66.8 36.5" stroke="#caa34c" stroke-width=".18"/>
    <!-- manches -->
    <path d="M56.5 28.8 Q53.2 30 52.6 35 L51.2 61.5 Q53.6 63 56.4 61.8 L57.6 38 Z" fill="url(#ve-tissu)"/>
    <path d="M75.5 28.8 Q78.8 30 79.4 35 L80.8 61.5 Q78.4 63 75.6 61.8 L74.4 38 Z" fill="url(#ve-tissu)"/>
    <path d="M52.6 44 Q54.5 46 56.8 45" fill="none" stroke="#0b1122" stroke-width=".5" opacity=".6"/>
    <path d="M79.4 44 Q77.5 46 75.2 45" fill="none" stroke="#0b1122" stroke-width=".5" opacity=".6"/>
    <path d="M51.3 58.6 L56.5 58.9 M80.7 58.6 L75.5 58.9" ${surpiqure}/>
    <!-- corps -->
    <path d="M57 28.6 L62.6 27.6 L66 44.6 L69.4 27.6 L75 28.6 L75.8 59.6 Q71 61.8 66 61.6 Q61 61.8 56.2 59.6 Z" fill="url(#ve-tissu)"/>
    <path d="M57 28.6 L62.6 27.6 L66 44.6 L69.4 27.6 L75 28.6 L75.8 59.6 Q71 61.8 66 61.6 Q61 61.8 56.2 59.6 Z" fill="url(#ve-haut)"/>
    <!-- col -->
    <path d="M62.6 27.6 L60.6 26.2 Q61.4 25.2 63.4 25.6 L66 30 L68.6 25.6 Q70.6 25.2 71.4 26.2 L69.4 27.6 L66 34 Z" fill="#1a2441"/>
    <path d="M62.6 27.6 L66 44.6 L69.4 27.6" ${surpiqure}/>
    <!-- plis et poches -->
    <path d="M60 33 Q59 44 60.4 56" fill="none" stroke="url(#ve-pli)" stroke-width="1.6" opacity=".55"/>
    <path d="M72 33 Q73 44 71.6 56" fill="none" stroke="url(#ve-pli)" stroke-width="1.6" opacity=".55"/>
    <path d="M57.8 50.2 L62.6 50.2 L62.4 52.6 L57.9 52.6 Z M69.4 50.2 L74.2 50.2 L74.1 52.6 L69.6 52.6 Z" fill="#162039"/>
    <path d="M57.8 50.2 L62.6 50.2 M69.4 50.2 L74.2 50.2" ${surpiqure}/>
    <path d="M66 44.6 L66 61.6 M56.4 58.8 Q61 60.9 66 60.8 Q71 60.9 75.6 58.8" ${surpiqure}/>
    <!-- boutons dorés -->
    <circle cx="64.6" cy="47.6" r=".95" fill="url(#ve-or)"/><circle cx="64.6" cy="52.6" r=".95" fill="url(#ve-or)"/><circle cx="64.6" cy="57.4" r=".95" fill="url(#ve-or)"/>
    <circle cx="60.8" cy="31.6" r=".8" fill="url(#ve-or)"/><circle cx="71.2" cy="31.6" r=".8" fill="url(#ve-or)"/>
  </svg>`,

  pochette: `<svg viewBox="0 0 100 150">${defs('po', `
      <linearGradient id="po-cuir" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdfbf6"/><stop offset=".55" stop-color="#efe9de"/><stop offset="1" stop-color="#d6cdbd"/></linearGradient>
      <linearGradient id="po-rabat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffefb"/><stop offset="1" stop-color="#e8e1d3"/></linearGradient>
      <linearGradient id="po-reflet" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <radialGradient id="po-or" cx=".35" cy=".35" r=".7"><stop offset="0" stop-color="#fff3c4"/><stop offset=".45" stop-color="#d9b14f"/><stop offset="1" stop-color="#8a6a1e"/></radialGradient>`)}
    <g transform="rotate(-11 63 77)">
      <rect x="50" y="70" width="26" height="14" rx="1.8" fill="url(#po-cuir)"/>
      <path d="M50 77.5 Q63 79 76 77.5" fill="none" stroke="#c9bfae" stroke-width=".35"/>
      <path d="M50.6 70.4 L75.4 70.4 L75.4 75.2 Q63 76.8 50.6 75.2 Z" fill="url(#po-rabat)"/>
      <path d="M50.6 75.2 Q63 76.8 75.4 75.2" fill="none" stroke="#b9ae9b" stroke-width=".5" opacity=".8"/>
      <path d="M52 71.6 L74 71.6" stroke="url(#po-reflet)" stroke-width=".9"/>
      <rect x="70.6" y="73.6" width="3.4" height="2.6" rx=".5" fill="url(#po-or)"/>
      <path d="M51 83.2 Q63 84.6 75 83.2" fill="none" stroke="#000" stroke-opacity=".12" stroke-width=".8"/>
    </g>
  </svg>`,

  pantalon: `<svg viewBox="0 0 100 150">${defs('pa', marine)}
    <path d="M59.4 79 L76.6 79 L77 82 L59 82 Z" fill="#141c33"/>
    <path d="M59 82 L68 82 L68 93 L66.4 118 L64.6 146.5 L54.4 146.5 Q56.6 132 58.2 118 Z" fill="url(#pa-tissu)"/>
    <path d="M68 82 L77 82 L77.8 118 Q79.4 132 81.6 146.5 L71.4 146.5 L69.6 118 L68 93 Z" fill="url(#pa-tissu)"/>
    <path d="M59 82 L68 82 L68 93 L66.4 118 L64.6 146.5 L54.4 146.5 Q56.6 132 58.2 118 Z M68 82 L77 82 L77.8 118 Q79.4 132 81.6 146.5 L71.4 146.5 L69.6 118 L68 93 Z" fill="url(#pa-haut)"/>
    <path d="M62.6 84 L61.2 118 Q60 132 59.4 146" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width=".9"/>
    <path d="M73.4 84 L74.8 118 Q76 132 76.6 146" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width=".9"/>
    <path d="M59.2 84 L58.4 118 Q56.8 132 55 146 M76.8 84 L77.6 118 Q79.2 132 81 146" ${surpiqure}/>
    <path d="M57 136 Q59.5 140 56 146 M79 136 Q76.6 140 80 146" fill="none" stroke="url(#pa-pli)" stroke-width="1.4" opacity=".6"/>
    <path d="M59.4 80.5 L76.6 80.5" ${surpiqure}/>
    <circle cx="68" cy="80.5" r=".75" fill="url(#pa-or)"/>
  </svg>`,

  escarpins: `<svg viewBox="0 0 100 150">${defs('es', `
      <linearGradient id="es-daim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a72c2"/><stop offset=".5" stop-color="#2f56a3"/><stop offset="1" stop-color="#1b3571"/></linearGradient>`)}
    <path d="M57.2 144.6 Q57.4 141.2 60 140.8 L61.2 142.6 Q63.6 144.6 67.6 145.6 Q69 146.4 67.4 147 L58.4 147 Z" fill="url(#es-daim)"/>
    <path d="M57.4 145.6 L57 149 L58 149 L58.4 146.4 Z" fill="#1b3571"/>
    <path d="M60 140.8 Q61.2 142.2 61.2 142.6" fill="none" stroke="#9fb6e4" stroke-width=".3"/>
    <path d="M64.2 144 Q64.4 140.6 67 140.2 L68.2 142 Q70.6 144 74.6 145 Q76 145.8 74.4 146.4 L65.4 146.4 Z" fill="url(#es-daim)" opacity=".92"/>
    <path d="M64.4 145 L64 148.4 L65 148.4 L65.4 145.8 Z" fill="#1b3571"/>
  </svg>`,
};
