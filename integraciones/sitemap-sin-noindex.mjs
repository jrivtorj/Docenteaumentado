// @ts-check
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Quita del sitemap las URL cuya página declara `noindex` por sí misma
 * (marcada con data-noindex-pagina="true" en la meta robots). Debe registrarse
 * DESPUÉS de @astrojs/sitemap en la lista de integraciones.
 *
 * @returns {import('astro').AstroIntegration}
 */
export default function sitemapSinNoindex() {
  return {
    name: 'sitemap-sin-noindex',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const raiz = fileURLToPath(dir);
        const mapas = (await readdir(raiz)).filter((f) => /^sitemap-\d+\.xml$/.test(f));
        for (const mapa of mapas) {
          const ruta = path.join(raiz, mapa);
          const xml = await readFile(ruta, 'utf8');
          let quitadas = 0;
          const urls = await Promise.all(
            [...xml.matchAll(/<url>[\s\S]*?<\/url>/g)].map(async ([bloque]) => {
              const loc = bloque.match(/<loc>(.*?)<\/loc>/)?.[1] ?? '';
              const pathname = decodeURI(new URL(loc).pathname);
              const html = path.join(raiz, pathname, pathname.endsWith('/') ? 'index.html' : '');
              try {
                const contenido = await readFile(html, 'utf8');
                if (contenido.includes('data-noindex-pagina="true"')) {
                  quitadas++;
                  return '';
                }
              } catch {
                /* no es HTML (p. ej. un XML): se conserva */
              }
              return bloque;
            }),
          );
          const nuevo = xml.replace(/<url>[\s\S]*<\/url>/, urls.join(''));
          await writeFile(ruta, nuevo);
          logger.info(`${mapa}: ${quitadas} URL con noindex retiradas`);
        }
      },
    },
  };
}
