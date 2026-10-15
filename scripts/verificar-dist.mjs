// Verificación estática del sitio compilado (dist/). Sin dependencias.
// Uso: npm run build && npm run verificar
// Comprueba: un único H1, title y description presentes y únicos, canonical absoluto,
// enlaces internos y anclas existentes, imágenes con alt, JSON-LD válido, sitemap coherente
// y que no quede ningún marcador [COMPLETAR] en lo publicado.
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const errores = [];
const avisos = [];

async function listar(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listar(p)));
    else out.push(p);
  }
  return out;
}

const archivos = await listar(DIST);
const existentes = new Set(archivos.map((f) => '/' + path.relative(DIST, f).split(path.sep).join('/')));
const htmls = archivos.filter((f) => f.endsWith('.html'));

const rutaDe = (f) => {
  const r = '/' + path.relative(DIST, f).split(path.sep).join('/');
  return r.endsWith('/index.html') ? r.slice(0, -'index.html'.length) : r;
};

const resuelve = (ruta) => {
  const limpia = decodeURI(ruta.split('#')[0].split('?')[0]);
  if (limpia === '') return true;
  if (existentes.has(limpia)) return true;
  if (existentes.has(limpia.replace(/\/?$/, '/') + 'index.html')) return limpia.endsWith('/'); // exige barra final
  return false;
};

const idsPorRuta = new Map();
const paginas = [];
for (const f of htmls) {
  const html = await readFile(f, 'utf8');
  const ruta = rutaDe(f);
  idsPorRuta.set(ruta, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  paginas.push({ ruta, html });
  // Marcadores de texto por completar que no deben llegar a una página publicada.
  if (html.includes('[COMPLETAR')) errores.push(`${ruta}: contiene un marcador [COMPLETAR] sin rellenar`);
}

const titulos = new Map();
const descripciones = new Map();
const externos = new Set();
let site = null;

for (const { ruta, html } of paginas) {
  const esError404 = ruta === '/404.html';
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) errores.push(`${ruta}: ${h1} elementos <h1> (debe haber exactamente 1)`);

  if (!/<html[^>]*\slang="es/.test(html)) errores.push(`${ruta}: falta lang="es" en <html>`);

  const titulo = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!titulo) errores.push(`${ruta}: sin <title>`);
  else {
    if (titulo.length > 75) avisos.push(`${ruta}: título largo (${titulo.length} caracteres)`);
    titulos.set(titulo, [...(titulos.get(titulo) ?? []), ruta]);
  }

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) errores.push(`${ruta}: sin meta description`);
  else {
    if (desc.length < 50 || desc.length > 175) avisos.push(`${ruta}: description de ${desc.length} caracteres`);
    descripciones.set(desc, [...(descripciones.get(desc) ?? []), ruta]);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) errores.push(`${ruta}: sin canonical`);
  else if (!/^https?:\/\//.test(canonical)) errores.push(`${ruta}: canonical no absoluto (${canonical})`);
  else {
    site ??= new URL(canonical).origin;
    if (!esError404 && new URL(canonical).pathname !== ruta) avisos.push(`${ruta}: canonical apunta a ${canonical}`);
  }

  if (!/<meta property="og:image" content="https?:\/\//.test(html)) errores.push(`${ruta}: sin og:image absoluta`);

  for (const [, bloque] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const datos = JSON.parse(bloque);
      if (!datos['@context']) errores.push(`${ruta}: JSON-LD sin @context`);
    } catch (e) {
      errores.push(`${ruta}: JSON-LD inválido (${e.message})`);
    }
  }

  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(img)) errores.push(`${ruta}: imagen sin alt: ${img.slice(0, 80)}`);
    if (!/\swidth="/.test(img) || !/\sheight="/.test(img)) avisos.push(`${ruta}: imagen sin dimensiones: ${img.slice(0, 80)}`);
  }

  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    if (/^(mailto:|tel:)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) {
      if (site && href.startsWith(site)) errores.push(`${ruta}: enlace interno absoluto ${href}`);
      else externos.add(href);
      continue;
    }
    if (href.startsWith('#')) {
      const id = decodeURIComponent(href.slice(1));
      if (id && !idsPorRuta.get(ruta)?.has(id)) errores.push(`${ruta}: ancla inexistente ${href}`);
      continue;
    }
    if (!href.startsWith('/')) {
      errores.push(`${ruta}: enlace relativo no admitido ${href}`);
      continue;
    }
    if (!resuelve(href)) {
      errores.push(`${ruta}: enlace roto ${href}`);
      continue;
    }
    const [destino, frag] = href.split('#');
    if (frag && !idsPorRuta.get(destino.split('?')[0])?.has(decodeURIComponent(frag)))
      errores.push(`${ruta}: ancla inexistente ${href}`);
  }
}

for (const [t, rutas] of titulos) if (rutas.length > 1) errores.push(`Título duplicado «${t}» en ${rutas.join(', ')}`);
for (const [d, rutas] of descripciones)
  if (rutas.length > 1) errores.push(`Description duplicada en ${rutas.join(', ')}: «${d.slice(0, 60)}…»`);

// Sitemap: cada URL existe y no es una página con noindex propio.
try {
  const indice = await readFile(path.join(DIST, 'sitemap-index.xml'), 'utf8');
  for (const [, loc] of indice.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const xml = await readFile(path.join(DIST, new URL(loc).pathname), 'utf8');
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
    for (const u of urls) {
      const pag = paginas.find((p) => p.ruta === u);
      if (!pag) errores.push(`Sitemap: ${u} no existe`);
      else if (pag.html.includes('data-noindex-pagina="true"')) errores.push(`Sitemap: ${u} tiene noindex`);
    }
    console.log(`Sitemap ${path.basename(loc)}: ${urls.length} URL`);
  }
} catch (e) {
  errores.push(`Sitemap no encontrado o ilegible: ${e.message}`);
}

console.log(`Páginas HTML: ${paginas.length}`);
console.log(`Enlaces externos distintos: ${externos.size} (no se comprueban en red; ver README)`);
if (avisos.length) console.log(`\nAvisos (${avisos.length}):\n- ` + avisos.join('\n- '));
if (errores.length) {
  console.error(`\nErrores (${errores.length}):\n- ` + errores.join('\n- '));
  process.exit(1);
}
console.log('\n✓ Verificación superada sin errores.');
