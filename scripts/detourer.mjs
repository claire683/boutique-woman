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
    // Recadrage sur la silhouette nette (on ignore le voile semi-transparent laissé autour, ombres comprises)
    const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let x0 = info.width, y0 = info.height, x1 = 0, y1 = 0;
    for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 140) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
    // Les pixels très transparents sont effacés pour que le recadrage tombe pile sous les pieds
    for (let i = 3; i < data.length; i += 4) if (data[i] < 40) data[i] = 0;
    const sortie = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
      .webp({ quality: 80, alphaQuality: 90 }).toBuffer();
    await writeFile(cible, sortie);
    console.log('détouré', chemin, Math.round(sortie.length / 1024) + ' ko');
  } catch (e) {
    console.error('ÉCHEC détourage', chemin, e.message, '→ photo non détourée');
    await copyFile(source + '.webp', cible);
  }
}
