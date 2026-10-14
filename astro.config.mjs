// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import sitemapSinNoindex from './integraciones/sitemap-sin-noindex.mjs';

/**
 * Configuración central del sitio.
 *
 * SITE_URL: dominio canónico (https://eldocenteaumentado.com por defecto). Se puede
 * sobrescribir con la variable SITE_URL en la compilación.
 *
 * SITE_ENV (se lee en astro:env): solo con `production` el sitio es indexable. Cualquier
 * otro valor (development, preview, staging…) genera `noindex` y un robots.txt restrictivo.
 */
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const SITE_URL = env.SITE_URL || 'https://eldocenteaumentado.com';
// Origen del script de analítica (si se configura) para permitirlo en la CSP.
const ORIGEN_ANALITICA = env.PUBLIC_ANALYTICS_SCRIPT ? new URL(env.PUBLIC_ANALYTICS_SCRIPT).origin : null;

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Redirecciones 301 cuando cambie una URL publicada: '/ruta-antigua/': '/ruta-nueva/'.
  // En salida estática Astro genera una página con meta refresh + canonical;
  // para 301 reales, replicar la regla en public/_redirects (Netlify / Cloudflare Pages).
  redirects: {},
  integrations: [
    // El sitemap se genera en todos los entornos (para poder revisarlo), pero fuera de
    // producción robots.txt bloquea el rastreo y todas las páginas llevan noindex.
    sitemap({ filter: (page) => !page.includes('/buscar/') }),
    sitemapSinNoindex(),
  ],
  // Sin resaltado de sintaxis: los bloques de código son prompts en texto plano y así
  // no se generan estilos en línea (compatibles con la CSP y con el modo oscuro).
  markdown: { syntaxHighlight: false },
  // Content-Security-Policy generada por Astro (meta con hashes de scripts y estilos en línea).
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self'${ORIGEN_ANALITICA ? ` ${ORIGEN_ANALITICA}` : ''}`,
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", ...(ORIGEN_ANALITICA ? [ORIGEN_ANALITICA] : [])] },
    },
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  env: {
    schema: {
      SITE_ENV: envField.enum({
        context: 'server',
        access: 'public',
        values: ['development', 'preview', 'staging', 'production'],
        default: 'development',
      }),
      PUBLIC_CONTACT_FORM_ACTION: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_CONTACT_EMAIL: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_NEWSLETTER_ACTION: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_NEWSLETTER_EMAIL_FIELD: envField.string({ context: 'server', access: 'public', default: 'email' }),
      PUBLIC_NEWSLETTER_PROVIDER: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_ANALYTICS_SCRIPT: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_ANALYTICS_DOMAIN: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GSC_VERIFICATION: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
});
