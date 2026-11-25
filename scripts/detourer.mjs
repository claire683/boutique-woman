// Retire le fond des photos de silhouettes du défilé (modèle d'IA local, sans service externe).
// À lancer après « npm run images ». Produit public/images/<chemin>.detoure.webp (fond transparent).
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const site = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const chemins = [...site.matchAll(/silhouette: seance\('([^']+)'\)/g)].map((m) => `2026/10/WhatsApp-Image-2026-09-28-at-06.21.${m[1]}.jpeg`);

let removeBackground;
try {
  ({ removeBackground } = await import('@imgly/background-removal-node'));
} catch (e) {
  console.error('Détourage indisponible :', e.message);
}

for (const chemin of chemins) {
  const source = join('public/images', chemin);
  const cible = source + '.detoure.webp';
  try {
    if (!removeBackground) throw new Error('module absent');
    const entree = await sharp(source).rotate().resize({ height: 1600, withoutEnlargement: true }).png().toBuffer();
    const blob = await removeBackground(new Blob([entree], { type: 'image/png' }), { model: 'medium', output: { format: 'image/png' } });
    const png = Buffer.from(await blob.arrayBuffer());
    const sortie = await sharp(png).trim({ threshold: 1 }).webp({ quality: 80, alphaQuality: 90 }).toBuffer();
    await writeFile(cible, sortie);
    console.log('détouré', chemin, Math.round(sortie.length / 1024) + ' ko');
  } catch (e) {
    console.error('ÉCHEC détourage', chemin, e.message, '→ photo non détourée');
    await copyFile(source + '.webp', cible);
  }
}
