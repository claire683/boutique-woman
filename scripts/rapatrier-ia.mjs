// Rapatrie les visuels générés par IA dans Canva (liens d'export temporaires listés dans scripts/ia-sources.json),
// retire leur fond crème et les enregistre en WebP transparent dans public/ia/. Les fichiers déjà présents sont gardés.
import { readFile, writeFile, access } from 'node:fs/promises';
import sharp from 'sharp';

const sources = JSON.parse(await readFile(new URL('./ia-sources.json', import.meta.url), 'utf8'));
const { removeBackground } = await import('@imgly/background-removal-node');

for (const [nom, url] of Object.entries(sources)) {
  const cible = `public/ia/${nom}.webp`;
  try { await access(cible); console.log('déjà là', nom); continue; } catch {}
  const rep = await fetch(url);
  if (!rep.ok) { console.error('ÉCHEC téléchargement', nom, rep.status); process.exitCode = 1; continue; }
  const brut = Buffer.from(await rep.arrayBuffer());
  const png = await sharp(brut).resize({ height: 1400, withoutEnlargement: true }).png().toBuffer();
  const blob = await removeBackground(new Blob([png], { type: 'image/png' }), { model: 'medium', output: { format: 'image/png' } });
  const sortie = await sharp(Buffer.from(await blob.arrayBuffer())).trim({ threshold: 1 }).webp({ quality: 82, alphaQuality: 90 }).toBuffer();
  await writeFile(cible, sortie);
  const m = await sharp(sortie).metadata();
  console.log('ok', nom, m.width + 'x' + m.height, Math.round(sortie.length / 1024) + ' ko');
}
