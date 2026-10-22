// @ts-check
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Ajustes de accesibilidad sobre el HTML que genera el Markdown, aplicados al terminar
 * la compilación (el procesador de Markdown de Astro 7 no admite plugins rehype sin
 * instalar @astrojs/markdown-remark):
 * - Las tablas se desplazan en horizontal en el móvil (.prosa table): con tabindex="0"
 *   se puede llegar a ellas y desplazarlas con el teclado (axe: scrollable-region-focusable).
 * - Las casillas de las listas de comprobación («- [ ]») son decorativas y están
 *   desactivadas: se ocultan a los lectores de pantalla, que leen el texto del elemento.
 *
 * @returns {import('astro').AstroIntegration}
 */
export default function accesibilidadProsa() {
  return {
    name: 'accesibilidad-prosa',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const raiz = fileURLToPath(dir);
        const archivos = (await readdir(raiz, { recursive: true })).filter((f) => f.endsWith('.html'));
        let cambiados = 0;
        for (const archivo of archivos) {
          const ruta = path.join(raiz, archivo);
          const html = await readFile(ruta, 'utf8');
          const nuevo = html
            .replace(/<table>/g, '<table tabindex="0">')
            .replace(/<input type="checkbox" disabled>/g, '<input type="checkbox" disabled aria-hidden="true">')
            .replace(/<input disabled type="checkbox">/g, '<input disabled type="checkbox" aria-hidden="true">');
          if (nuevo !== html) {
            await writeFile(ruta, nuevo);
            cambiados++;
          }
        }
        logger.info(`${cambiados} páginas con tablas o listas de comprobación ajustadas`);
      },
    },
  };
}
