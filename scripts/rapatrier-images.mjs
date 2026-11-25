// Copie dans public/images toutes les photos encore lues sur l'ancien WordPress,
// et en fait une version WebP allégée (1400 px de large maximum) utilisée par le site.
// Usage : npm run images   (le site de dev le fait à chaque publication)
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const BASE = 'https://www.boutique-woman.fr/wp-content/uploads/';
const chemins = new Set();
for (const f of ['../src/data/site.ts', '../src/pages/index.astro']) {
  const texte = await readFile(new URL(f, import.meta.url), 'utf8');
  for (const m of texte.matchAll(/img\('([^']+)'\)/g)) chemins.add(m[1]);
  for (const m of texte.matchAll(/seance\('([^']+)'\)/g)) chemins.add(`2026/10/WhatsApp-Image-2026-09-28-at-06.21.${m[1]}.jpeg`);
}

let avant = 0, apres = 0;
for (const chemin of chemins) {
  const cible = join('public/images', chemin);
  const rep = await fetch(BASE + chemin);
  if (!rep.ok) { console.error('ÉCHEC', rep.status, chemin); continue; }
  const brut = Buffer.from(await rep.arrayBuffer());
  await mkdir(dirname(cible), { recursive: true });
  await writeFile(cible, brut);
  const webp = await sharp(brut).rotate().resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  await writeFile(cible + '.webp', webp);
  avant += brut.length; apres += webp.length;
  console.log('ok', chemin, Math.round(brut.length / 1024) + ' ko →', Math.round(webp.length / 1024) + ' ko');
}
console.log(`${chemins.size} images traitées : ${Math.round(avant / 1048576)} Mo → ${Math.round(apres / 1048576 * 10) / 10} Mo.`);
