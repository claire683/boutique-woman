# boutique-woman.fr (Astro)

Refonte du site vitrine de Woman, boutique Liu Jo à Belfort. Site statique, sans cookie, sans formulaire.

## Commandes

- `npm install` puis `npm run dev` : aperçu local sur http://localhost:4321
- `npm run build` : génère le site dans `dist/` (à déposer chez l'hébergeur)
- `npm run images` : rapatrie les photos depuis l'ancien WordPress dans `public/images/`

## Modifier le contenu

Tout est dans `src/data/site.ts` : horaires, téléphone, liens, photos, avis.

## Avant la bascule

1. `npm run images`, puis `IMAGES_LOCALES = true` dans `src/data/site.ts`, puis `npm run build`.
2. Optimiser les photos (certaines PNG pèsent plusieurs Mo) : convertir en WebP 1600 px max.
3. Mettre à jour l'hébergeur dans `src/pages/mentions-legales.astro`.
4. Les anciennes adresses `/collection/` et `/venir-en-boutique/` redirigent vers les sections de l'accueil.
