// Rapatrie les visuels générés par IA dans Canva (liens d'export temporaires listés dans scripts/ia-sources.json),
// retire leur fond uni et les enregistre en WebP transparent dans public/ia/. Les fichiers déjà présents sont gardés.
import { readFile, writeFile, access } from 'node:fs/promises';
import sharp from 'sharp';

const sources = JSON.parse(await readFile(new URL('./ia-sources.json', import.meta.url), 'utf8'));
let removeBackground = null;
try { ({ removeBackground } = await import('@imgly/background-removal-node')); } catch {}

// Part des pixels visibles dans une image RGBA
async function couverture(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let n = 0;
  for (let i = 3; i < data.length; i += 4) if (data[i] > 128) n++;
  return n / (info.width * info.height);
}

// Repli : fond uni retiré par couleur (prélevée dans les coins), avec bord adouci
async function fondParCouleur(png) {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => (y * w + x) * 4;
  const coins = [px(4, 4), px(w - 5, 4), px(4, h - 5), px(w - 5, h - 5)];
  const ref = [0, 1, 2].map((c) => coins.reduce((s, i) => s + data[i + c], 0) / 4);
  for (let i = 0; i < data.length; i += 4) {
    const d = Math.hypot(data[i] - ref[0], data[i + 1] - ref[1], data[i + 2] - ref[2]);
    data[i + 3] = Math.round(255 * Math.max(0, Math.min(1, (d - 14) / 22)));
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

for (const [nom, url] of Object.entries(sources)) {
  const cible = `public/ia/${nom}.webp`;
  try { await access(cible); console.log('déjà là', nom); continue; } catch {}
  const rep = await fetch(url);
  if (!rep.ok) { console.error('ÉCHEC téléchargement', nom, rep.status); process.exitCode = 1; continue; }
  const brut = Buffer.from(await rep.arrayBuffer());
  const m0 = await sharp(brut).metadata();
  console.log('reçu', nom, m0.format, m0.width + 'x' + m0.height, Math.round(brut.length / 1024) + ' ko');
  await writeFile(`public/ia/brut-${nom}.jpg`, await sharp(brut).resize({ width: 400 }).flatten({ background: '#ff00ff' }).jpeg({ quality: 70 }).toBuffer());
  const png = await sharp(brut).resize({ height: 1400, withoutEnlargement: true }).png().toBuffer();
  let detoure = null, methode = '';
  if (removeBackground) {
    try {
      const blob = await removeBackground(new Blob([png], { type: 'image/png' }), { model: 'medium', output: { format: 'image/png' } });
      detoure = Buffer.from(await blob.arrayBuffer());
      const c = await couverture(detoure);
      methode = 'modèle (' + Math.round(c * 100) + ' %)';
      if (c < 0.05) detoure = null;
    } catch (e) { console.error('modèle KO', e.message); }
  }
  if (!detoure) { detoure = await fondParCouleur(png); methode += ' → couleur (' + Math.round((await couverture(detoure)) * 100) + ' %)'; }
  const sortie = await sharp(detoure).trim({ threshold: 1 }).webp({ quality: 82, alphaQuality: 90 }).toBuffer();
  await writeFile(cible, sortie);
  const m = await sharp(sortie).metadata();
  console.log('ok', nom, methode, m.width + 'x' + m.height, Math.round(sortie.length / 1024) + ' ko');
}
