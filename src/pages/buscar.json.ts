import type { APIRoute } from 'astro';
import { TIPOS_ARTICULO, TAREAS_DOCENTES, CATEGORIAS_HERRAMIENTA } from '@/data/taxonomias';
import { getArticulos, getHerramientas, getPrompts, normalizar, urlArticulo, urlHerramienta, urlPrompt } from '@/utils/contenido';

/**
 * Índice de búsqueda estático. Incluye título, descripción, etiquetas y los
 * primeros ~600 caracteres del cuerpo. Con cientos de entradas pesa decenas de KB
 * (comprimido); si algún día crece demasiado, sustituir por Pagefind (ver README).
 */
const extracto = (s = '') =>
  s
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`\[\]()|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .slice(0, 600);

export const GET: APIRoute = async () => {
  const [articulos, herramientas, prompts] = await Promise.all([getArticulos(), getHerramientas(), getPrompts()]);
  const items = [
    ...articulos.map((a) => ({
      tipo: TIPOS_ARTICULO[a.data.tipo].nombre,
      titulo: a.data.titulo,
      descripcion: a.data.descripcion,
      url: urlArticulo(a),
      texto: normalizar([a.data.titulo, a.data.descripcion, a.data.etiquetas.join(' '), extracto(a.body)].join(' ')),
    })),
    ...prompts.map((p) => ({
      tipo: 'Prompt',
      titulo: p.data.titulo,
      descripcion: p.data.descripcion,
      url: urlPrompt(p),
      texto: normalizar(
        [p.data.titulo, p.data.descripcion, p.data.finalidad, TAREAS_DOCENTES[p.data.tarea], p.data.etiquetas.join(' ')].join(' '),
      ),
    })),
    ...herramientas.map((h) => ({
      tipo: 'Herramienta',
      titulo: h.data.nombre,
      descripcion: h.data.descripcion,
      url: urlHerramienta(h),
      texto: normalizar(
        [h.data.nombre, h.data.descripcion, h.data.proveedor, h.data.categorias.map((c) => CATEGORIAS_HERRAMIENTA[c]).join(' '), h.data.etiquetas.join(' '), h.data.usos.join(' ')].join(' '),
      ),
    })),
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
