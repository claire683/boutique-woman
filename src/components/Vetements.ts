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
      <linearGradient id="es-daim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b82d0"/><stop offset=".45" stop-color="#3159a8"/><stop offset="1" stop-color="#1c3672"/></linearGradient>
      <linearGradient id="es-reflet" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`)}
    <!-- escarpin du fond -->
    <g transform="translate(7.4 -0.8)" opacity=".9">
      <path d="M57 146.6 Q57.6 144.2 61 143.9 Q63.6 143.7 65.3 142.5 L66.9 141.1 Q67.7 140.5 68.3 141.3 L68.5 146.6 Z" fill="url(#es-daim)"/>
      <path d="M67.3 146.4 L68.7 146.4 L68.1 150.4 L67.7 150.4 Z" fill="#14285a"/>
    </g>
    <!-- escarpin du premier plan -->
    <path d="M57 146.6 Q57.6 144.2 61 143.9 Q63.6 143.7 65.3 142.5 L66.9 141.1 Q67.7 140.5 68.3 141.3 L68.5 146.6 Z" fill="url(#es-daim)"/>
    <path d="M61 143.9 Q63.6 143.7 65.3 142.5 L66.9 141.1" fill="none" stroke="#0f1f4a" stroke-width=".35"/>
    <path d="M58.4 145.2 Q62 144.6 65 143.6" fill="none" stroke="url(#es-reflet)" stroke-width=".6"/>
    <path d="M56.9 146.8 Q62.4 147.3 68.6 146.7" fill="none" stroke="#0b1636" stroke-width=".5"/>
    <path d="M67.3 146.4 L68.7 146.4 L68.1 150.4 L67.7 150.4 Z" fill="#14285a"/>
  </svg>`,
};

// Cintres, crochet et présentoir : ils restent sur le portant quand la pièce est décrochée.
// Même repère que les vêtements (100 × 150). « crochet » = point d'accroche, en % du cadre.
const bois = `<linearGradient id="#ID-bois" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b48a"/><stop offset=".5" stop-color="#b98a58"/><stop offset="1" stop-color="#8d6338"/></linearGradient>
  <linearGradient id="#ID-metal" x1="0" x2="1"><stop offset="0" stop-color="#7d7d7d"/><stop offset=".5" stop-color="#e6e6e6"/><stop offset="1" stop-color="#8a8a8a"/></linearGradient>`;

export const cintres: Record<string, { svg: string; crochet: [number, number] }> = {
  veste: {
    crochet: [66, 12.6],
    svg: `<svg viewBox="0 0 100 150">${defs('cv', bois)}
      <path d="M66 26.8 L66 23 Q66 19.4 68.6 19.4 Q70.8 19.6 70.4 21.8" fill="none" stroke="url(#cv-metal)" stroke-width=".6" stroke-linecap="round"/>
      <path d="M54.6 31.6 Q60.4 27.6 66 26.4 Q71.6 27.6 77.4 31.6" fill="none" stroke="url(#cv-bois)" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
  },
  pantalon: {
    crochet: [68, 46.6],
    svg: `<svg viewBox="0 0 100 150">${defs('cp', bois)}
      <path d="M68 76.6 L68 73.2 Q68 69.6 70.6 69.6 Q72.8 69.8 72.4 72" fill="none" stroke="url(#cp-metal)" stroke-width=".6" stroke-linecap="round"/>
      <rect x="57.4" y="76.2" width="21.2" height="1.4" rx=".7" fill="url(#cp-bois)"/>
      <rect x="59.4" y="77" width="2.2" height="3.6" rx=".4" fill="url(#cp-metal)"/>
      <rect x="74.4" y="77" width="2.2" height="3.6" rx=".4" fill="url(#cp-metal)"/>
    </svg>`,
  },
  pochette: {
    crochet: [59.4, 38.8],
    svg: `<svg viewBox="0 0 100 150">${defs('ck', bois)}
      <g transform="rotate(-11 63 77)">
        <path d="M63 64 L63 60.6 Q63 57.8 65 57.8 Q66.8 58 66.4 59.8" fill="none" stroke="url(#ck-metal)" stroke-width=".6" stroke-linecap="round"/>
        <path d="M53 70.6 L63 64 L73 70.6" fill="none" stroke="url(#ck-metal)" stroke-width=".35" stroke-dasharray=".5 .35"/>
      </g>
    </svg>`,
  },
  escarpins: {
    crochet: [65, 100.3],
    svg: `<svg viewBox="0 0 100 150">${defs('cs', bois)}
      <rect x="53.4" y="150.4" width="25" height="1.6" rx=".4" fill="url(#cs-bois)"/>
      <rect x="54.6" y="152" width="22.6" height="2.4" fill="#000" opacity=".08"/>
    </svg>`,
  },
};

// Le décor de la boutique (d'après le reel tourné en boutique) : niche blanche éclairée,
// étagères et disques en chêne clair, sacs, spots au plafond, sol carrelé blanc.
const sac = (x: number, y: number, l: number, h: number, couleur: string, id: string, anse = 'haute') => `
  <g>
    ${anse === 'haute'
      ? `<path d="M${x + l * 0.25} ${y} Q${x + l * 0.5} ${y - h * 0.75} ${x + l * 0.75} ${y}" fill="none" stroke="${couleur}" stroke-width="${Math.max(2, l * 0.05)}" stroke-linecap="round"/>`
      : `<path d="M${x + l * 0.1} ${y + 2} Q${x + l * 0.5} ${y - h * 0.35} ${x + l * 0.9} ${y + 2}" fill="none" stroke="${couleur}" stroke-width="${Math.max(2, l * 0.04)}"/>`}
    <path d="M${x} ${y + h} L${x + l * 0.06} ${y} L${x + l * 0.94} ${y} L${x + l} ${y + h} Z" fill="url(#${id})"/>
    <path d="M${x + l * 0.06} ${y} L${x + l * 0.94} ${y} L${x + l * 0.95} ${y + h * 0.22} L${x + l * 0.05} ${y + h * 0.22} Z" fill="#000" opacity=".12"/>
    <rect x="${x + l * 0.44}" y="${y + h * 0.26}" width="${l * 0.12}" height="${h * 0.1}" rx="1" fill="#d4af5a"/>
  </g>`;

export const deco = `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMax slice">
  <defs>
    <linearGradient id="dc-mur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f1ece6"/></linearGradient>
    <linearGradient id="dc-sol" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ece8e3"/><stop offset="1" stop-color="#fbfaf8"/></linearGradient>
    <radialGradient id="dc-niche" cx=".5" cy=".15" r=".9"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f6f3ef"/><stop offset="1" stop-color="#e4ded6"/></radialGradient>
    <linearGradient id="dc-chene" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ead2ab"/><stop offset=".5" stop-color="#d1aa74"/><stop offset="1" stop-color="#b48a55"/></linearGradient>
    <radialGradient id="dc-disque" cx=".38" cy=".35" r=".75"><stop offset="0" stop-color="#efd9b3"/><stop offset=".7" stop-color="#d2ab76"/><stop offset="1" stop-color="#b08350"/></radialGradient>
    <linearGradient id="dc-cognac" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c98a52"/><stop offset="1" stop-color="#8a5326"/></linearGradient>
    <linearGradient id="dc-noir" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a4a4a"/><stop offset="1" stop-color="#111"/></linearGradient>
    <linearGradient id="dc-taupe" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b8a594"/><stop offset="1" stop-color="#7d6a5a"/></linearGradient>
    <linearGradient id="dc-rouge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d0283a"/><stop offset="1" stop-color="#7e0f1c"/></linearGradient>
    <linearGradient id="dc-led" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e6" stop-opacity=".95"/><stop offset="1" stop-color="#fff8e6" stop-opacity="0"/></linearGradient>
    <radialGradient id="dc-spot" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#fff6dc" stop-opacity=".7"/><stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></radialGradient>
  </defs>

  <!-- murs, plafond et sol -->
  <rect width="1000" height="470" fill="url(#dc-mur)"/>
  <rect y="470" width="1000" height="130" fill="url(#dc-sol)"/>
  <path d="M0 470 L1000 470" stroke="#ddd6ce" stroke-width="2"/>
  <g stroke="#e2ddd6" stroke-width="1.2">
    <path d="M0 505 L1000 505 M0 548 L1000 548"/>
    <path d="M500 470 L500 600 M380 470 L300 600 M260 470 L100 600 M140 470 L-100 600 M620 470 L700 600 M740 470 L900 600 M860 470 L1100 600"/>
  </g>
  <!-- spots encastrés -->
  <g fill="#2b2b2b">
    <rect x="180" y="14" width="34" height="14" rx="2"/><rect x="420" y="14" width="34" height="14" rx="2"/>
    <rect x="546" y="14" width="34" height="14" rx="2"/><rect x="786" y="14" width="34" height="14" rx="2"/>
  </g>
  <g fill="url(#dc-spot)" opacity=".8">
    <path d="M182 28 L120 200 L276 200 L212 28 Z"/><path d="M422 28 L360 200 L516 200 L452 28 Z"/>
    <path d="M548 28 L486 200 L642 200 L578 28 Z"/><path d="M788 28 L726 200 L882 200 L818 28 Z"/>
  </g>

  <!-- niche du fond, éclairée -->
  <rect x="330" y="92" width="340" height="356" rx="3" fill="url(#dc-niche)"/>
  <rect x="330" y="92" width="340" height="356" rx="3" fill="none" stroke="#e1dbd2" stroke-width="3"/>
  <rect x="336" y="98" width="328" height="26" fill="url(#dc-led)"/>
  <!-- cadres -->
  <rect x="380" y="118" width="96" height="92" fill="#e9e5df" stroke="#cfc7bb" stroke-width="3"/>
  <rect x="524" y="118" width="96" height="92" fill="#e9e5df" stroke="#cfc7bb" stroke-width="3"/>
  <path d="M404 190 Q428 150 452 190 Z M548 190 L596 190 L590 160 L554 160 Z" fill="#8c7764" opacity=".55"/>
  <!-- étagères en chêne et sacs -->
  <rect x="346" y="262" width="308" height="11" rx="2" fill="url(#dc-chene)"/>
  <rect x="346" y="370" width="308" height="11" rx="2" fill="url(#dc-chene)"/>
  <rect x="346" y="273" width="308" height="8" fill="#000" opacity=".05"/>
  ${sac(372, 214, 74, 48, '#8a5326', 'dc-cognac')}
  ${sac(470, 226, 52, 36, '#111', 'dc-noir', 'basse')}
  ${sac(548, 210, 70, 52, '#111', 'dc-noir')}
  ${sac(380, 334, 62, 36, '#111', 'dc-noir', 'basse')}
  ${sac(466, 322, 74, 48, '#7d6a5a', 'dc-taupe')}
  ${sac(566, 334, 62, 36, '#8a5326', 'dc-cognac', 'basse')}

  <!-- montants en chêne et grands disques -->
  <g>
    <rect x="283" y="160" width="16" height="300" fill="url(#dc-chene)"/>
    <circle cx="291" cy="196" r="46" fill="url(#dc-disque)"/>
    <rect x="236" y="300" width="70" height="9" rx="2" fill="url(#dc-chene)"/>
    <rect x="701" y="160" width="16" height="300" fill="url(#dc-chene)"/>
    <circle cx="709" cy="196" r="46" fill="url(#dc-disque)"/>
    <rect x="694" y="300" width="70" height="9" rx="2" fill="url(#dc-chene)"/>
  </g>

  <!-- étagères flottantes blanches sur les côtés -->
  <g>
    <rect x="30" y="178" width="190" height="10" fill="#ffffff" stroke="#e2dcd4" stroke-width="2"/>
    <rect x="30" y="268" width="190" height="10" fill="#ffffff" stroke="#e2dcd4" stroke-width="2"/>
    ${sac(46, 134, 60, 44, '#111', 'dc-noir')}
    ${sac(126, 142, 66, 36, '#7e0f1c', 'dc-rouge', 'basse')}
    ${sac(60, 226, 70, 42, '#8a5326', 'dc-cognac')}
    <rect x="780" y="178" width="190" height="10" fill="#ffffff" stroke="#e2dcd4" stroke-width="2"/>
    <rect x="780" y="268" width="190" height="10" fill="#ffffff" stroke="#e2dcd4" stroke-width="2"/>
    ${sac(800, 138, 64, 40, '#7d6a5a', 'dc-taupe', 'basse')}
    ${sac(884, 130, 62, 48, '#111', 'dc-noir')}
    ${sac(830, 224, 74, 44, '#111', 'dc-noir')}
  </g>

  <!-- portants latéraux chargés (manteaux noirs, rouges, blancs) -->
  <g opacity=".95">
    <rect x="20" y="318" width="210" height="5" rx="2" fill="#2b2b2b"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const c = ['#151515', '#b3192b', '#f4f1ec', '#1f1f1f', '#2a2a2a', '#c21f31', '#ece7df', '#121212'][i];
      return `<path d="M${30 + i * 25} 324 l11 -2 l11 2 l3 120 l-28 0 Z" fill="${c}" stroke="#000" stroke-opacity=".12"/>`;
    }).join('')}
    <rect x="770" y="318" width="210" height="5" rx="2" fill="#2b2b2b"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const c = ['#ece7df', '#151515', '#b3192b', '#1c1c1c', '#f4f1ec', '#2a2a2a', '#151515', '#c21f31'][i];
      return `<path d="M${780 + i * 25} 324 l11 -2 l11 2 l3 120 l-28 0 Z" fill="${c}" stroke="#000" stroke-opacity=".12"/>`;
    }).join('')}
  </g>

  <!-- banc cube en chêne -->
  <rect x="430" y="440" width="140" height="52" rx="3" fill="url(#dc-chene)"/>
  <rect x="430" y="492" width="140" height="10" fill="#000" opacity=".06"/>
  <!-- reflets au sol -->
  <rect x="330" y="472" width="340" height="40" fill="#fff" opacity=".35"/>
</svg>`;
