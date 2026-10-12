import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITIO } from '@/data/sitio';
import { TIPOS_ARTICULO } from '@/data/taxonomias';
import { getArticulos, urlArticulo } from '@/utils/contenido';

export const GET: APIRoute = async (context) => {
  const articulos = await getArticulos();
  return rss({
    title: SITIO.nombre,
    description: SITIO.descripcion,
    site: context.site!,
    trailingSlash: true,
    customData: `<language>es-es</language>`,
    items: articulos.map((a) => ({
      title: a.data.titulo,
      description: a.data.descripcion,
      pubDate: a.data.fechaPublicacion,
      link: urlArticulo(a),
      categories: [TIPOS_ARTICULO[a.data.tipo].nombre, ...a.data.etiquetas],
    })),
  });
};
