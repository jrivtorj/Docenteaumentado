import { SITIO } from '@/data/sitio';

/** Constructores de datos estructurados. Solo incluyen campos respaldados por el contenido. */

const abs = (ruta: string, site: URL) => new URL(ruta, site).href;

export function organizacionYSitio(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': abs('/#organizacion', site),
        name: SITIO.nombre,
        url: abs('/', site),
        logo: abs('/favicon.svg', site),
        ...(SITIO.perfiles.length ? { sameAs: SITIO.perfiles } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': abs('/#sitio', site),
        name: SITIO.nombre,
        url: abs('/', site),
        inLanguage: SITIO.idioma,
        description: SITIO.descripcion,
        publisher: { '@id': abs('/#organizacion', site) },
      },
    ],
  };
}

export interface Miga {
  nombre: string;
  href: string;
}

export function migasDePan(migas: Miga[], site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.nombre,
      item: abs(m.href, site),
    })),
  };
}

export function articulo(o: {
  titulo: string;
  descripcion: string;
  ruta: string;
  publicado: Date;
  actualizado?: Date;
  autor: { nombre: string; url?: string };
  imagen?: string;
  tipo?: 'Article' | 'BlogPosting' | 'TechArticle' | 'OpinionNewsArticle';
  site: URL;
  palabrasClave?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': o.tipo ?? 'Article',
    headline: o.titulo,
    description: o.descripcion,
    mainEntityOfPage: abs(o.ruta, o.site),
    url: abs(o.ruta, o.site),
    datePublished: o.publicado.toISOString(),
    dateModified: (o.actualizado ?? o.publicado).toISOString(),
    inLanguage: SITIO.idioma,
    author: {
      '@type': 'Person',
      name: o.autor.nombre,
      ...(o.autor.url ? { url: abs(o.autor.url, o.site) } : {}),
    },
    publisher: { '@id': abs('/#organizacion', o.site) },
    image: abs(o.imagen ?? SITIO.imagenSocial, o.site),
    ...(o.palabrasClave?.length ? { keywords: o.palabrasClave.join(', ') } : {}),
  };
}
