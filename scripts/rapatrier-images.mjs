// Copie dans public/images toutes les photos encore lues sur l'ancien WordPress.
// Usage : npm run images   (puis IMAGES_LOCALES = true dans src/data/site.ts)
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://www.boutique-woman.fr/wp-content/uploads/';
const source = await readFile(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const chemins = [...new Set([...source.matchAll(/img\('([^']+)'\)/g)].map((m) => m[1]))];
const pages = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
for (const m of pages.matchAll(/img\('([^']+)'\)/g)) if (!chemins.includes(m[1])) chemins.push(m[1]);

for (const chemin of chemins) {
  const cible = join('public/images', chemin);
  const rep = await fetch(BASE + chemin);
  if (!rep.ok) { console.error('ÉCHEC', rep.status, chemin); continue; }
  await mkdir(dirname(cible), { recursive: true });
  await writeFile(cible, Buffer.from(await rep.arrayBuffer()));
  console.log('ok', chemin);
}
console.log(`${chemins.length} images traitées.`);
