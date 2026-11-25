import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sur le site de dev (GitHub Pages), SITE et BASE sont fournis par la publication automatique.
export default defineConfig({
  site: process.env.SITE ?? 'https://www.boutique-woman.fr',
  base: process.env.BASE ?? '/',
  trailingSlash: 'ignore',
  // Styles intégrés à la page : une page gardée en cache ne pointe jamais vers une feuille de style supprimée
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !/mentions-legales|politique-rgpd/.test(page) })],
  // Anciennes adresses du site WordPress : on les renvoie vers la bonne section
  redirects: {
    '/collection': `${(process.env.BASE ?? '').replace(/\/$/, '')}/#vestiaire`,
    '/venir-en-boutique': `${(process.env.BASE ?? '').replace(/\/$/, '')}/#venir`,
  },
});
