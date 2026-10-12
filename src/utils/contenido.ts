import { getCollection, type CollectionEntry } from 'astro:content';
import type { TipoArticulo } from '@/data/taxonomias';

export type Articulo = CollectionEntry<'articulos'>;
export type Herramienta = CollectionEntry<'herramientas'>;
export type Prompt = CollectionEntry<'prompts'>;

/**
 * En `astro dev` se muestran también borradores y textos en revisión (con aviso);
 * en cualquier compilación solo se generan los publicados.
 */
const visible = (estado: string) => import.meta.env.DEV || estado === 'publicado';

const porFecha = (a: Articulo, b: Articulo) =>
  b.data.fechaPublicacion.valueOf() - a.data.fechaPublicacion.valueOf();

export async function getArticulos(tipo?: TipoArticulo | TipoArticulo[]): Promise<Articulo[]> {
  const tipos = tipo === undefined ? undefined : Array.isArray(tipo) ? tipo : [tipo];
  const todos = await getCollection(
    'articulos',
    ({ data }) => visible(data.estado) && (!tipos || tipos.includes(data.tipo)),
  );
  return todos.sort(porFecha);
}

export async function getHerramientas(): Promise<Herramienta[]> {
  const todas = await getCollection('herramientas', ({ data }) => visible(data.estado));
  return todas.sort((a, b) => a.data.nombre.localeCompare(b.data.nombre, 'es'));
}

export async function getPrompts(): Promise<Prompt[]> {
  const todos = await getCollection('prompts', ({ data }) => visible(data.estado));
  return todos.sort((a, b) => a.data.titulo.localeCompare(b.data.titulo, 'es'));
}

/** Minutos de lectura a ~200 palabras/min (texto técnico en español). */
export function minutosLectura(texto = ''): number {
  // Los bloques de código (prompts de ejemplo) también se leen: se cuentan.
  const palabras = texto
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

export const tiempoLectura = (a: Articulo) => a.data.tiempoLectura ?? minutosLectura(a.body);

/**
 * Artículos relacionados: puntúa temas compartidos (×3) y etiquetas compartidas (×1),
 * desempata por fecha. Sin dependencias ni índices externos: escala bien a cientos de entradas.
 */
export function relacionados(actual: Articulo, todos: Articulo[], n = 3): Articulo[] {
  const temas = new Set(actual.data.temas.map((t) => t.id));
  const etiquetas = new Set(actual.data.etiquetas);
  return todos
    .filter((a) => a.id !== actual.id)
    .map((a) => ({
      a,
      p:
        a.data.temas.filter((t) => temas.has(t.id)).length * 3 +
        a.data.etiquetas.filter((e) => etiquetas.has(e)).length,
    }))
    .filter((x) => x.p > 0)
    .sort((x, y) => y.p - x.p || porFecha(x.a, y.a))
    .slice(0, n)
    .map((x) => x.a);
}

export const urlArticulo = (a: Articulo) => `/articulos/${a.id}/`;
export const urlHerramienta = (h: Herramienta) => `/herramientas/${h.id}/`;
export const urlPrompt = (p: Prompt) => `/prompts/${p.id}/`;
export const urlTema = (id: string) => `/temas/${id}/`;

/** Elimina tildes y pasa a minúsculas: base de la búsqueda y los filtros. */
export const normalizar = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
