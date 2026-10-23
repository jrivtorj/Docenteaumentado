// Genera un PDF descargable a partir de un artículo ya compilado.
// Uso: npm run build && npx astro preview --ignore-lock  (en otra terminal)
//      node scripts/pdf-articulo.mjs <slug> <public/descargas/archivo.pdf> [http://localhost:4321]
// El PDF se versiona en public/descargas/. Hay que regenerarlo cada vez que cambie el artículo.
import { chromium } from 'playwright';

const [slug, destino, base = 'http://localhost:4321'] = process.argv.slice(2);
if (!slug || !destino) {
  console.error('Uso: node scripts/pdf-articulo.mjs <slug> <destino.pdf> [url-base]');
  process.exit(1);
}

// Solo el artículo: fuera la navegación, el índice desplegable, la caja de autor y los
// relacionados, y sin URL entre paréntesis tras los enlaces externos.
const CSS_PDF = `
  header[role='banner'], footer[role='contentinfo'], .migas, .salto, .indice, .autor,
  .relacionados, .articulo__temas, .no-imprimir { display: none !important; }
  .prosa a[href^='http']::after { content: none !important; }
  .prosa table, .prosa tr, .prosa img, .nota { break-inside: avoid; }
  .prosa h2, .prosa h3 { break-after: avoid; }
  .prosa img { max-height: 120mm; width: auto; margin-inline: auto; display: block; }
`;

const navegador = await chromium.launch();
const pagina = await (await navegador.newContext({ colorScheme: 'light', bypassCSP: true })).newPage();
await pagina.goto(`${base}/articulos/${slug}/`, { waitUntil: 'networkidle' });
await pagina.evaluate(async () => {
  for (const img of document.images) {
    img.loading = 'eager';
    if (!img.complete) await new Promise((ok) => img.addEventListener('load', ok, { once: true }));
  }
});
await pagina.addStyleTag({ content: CSS_PDF });
await pagina.emulateMedia({ media: 'print' });
await pagina.pdf({
  path: destino,
  format: 'A4',
  printBackground: true,
  margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' },
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate:
    '<div style="font-size:8px;width:100%;text-align:center;color:#5f6873">El docente aumentado · eldocenteaumentado.com · <span class="pageNumber"></span>/<span class="totalPages"></span></div>',
});
await navegador.close();
console.log('Generado', destino);
