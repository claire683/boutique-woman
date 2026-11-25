// robots.txt : bloque tout sur un site de dev (PUBLIC_DEV=true), autorise tout en production
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const dev = import.meta.env.PUBLIC_DEV === 'true';
  const corps = dev
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
