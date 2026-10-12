import type { APIRoute } from 'astro';
import { SITE_ENV } from 'astro:env/server';

/** robots.txt según entorno: solo producción permite el rastreo. */
export const GET: APIRoute = ({ site }) => {
  const cuerpo =
    SITE_ENV === 'production'
      ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
      : `# Entorno: ${SITE_ENV}. No indexar.\nUser-agent: *\nDisallow: /\n`;
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
