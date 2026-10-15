/** Datos globales del sitio. Editar aquí cambia cabecera, pie y metadatos. */
export const SITIO = {
  nombre: 'El docente aumentado',
  lema: 'La inteligencia artificial no sustituye al docente. Amplía lo que un buen docente puede hacer.',
  descripcion:
    'Tutoriales, prompts, herramientas y análisis críticos para usar la inteligencia artificial en Secundaria, Bachillerato y FP con criterio pedagógico.',
  idioma: 'es-ES',
  locale: 'es_ES',
  autorPrincipal: 'jose-david-rivero',
  imagenSocial: '/og-default.png',
  /** Pon aquí perfiles oficiales del proyecto cuando existan (se usan en JSON-LD sameAs). */
  perfiles: [] as string[],
} as const;

export interface EnlaceNav {
  href: string;
  texto: string;
}

export const NAV_PRINCIPAL: EnlaceNav[] = [
  { href: '/actualidad/', texto: 'Actualidad' },
  { href: '/ia-en-el-aula/', texto: 'IA en el aula' },
  { href: '/prompts/', texto: 'Prompts' },
  { href: '/herramientas/', texto: 'Herramientas' },
  { href: '/laboratorio/', texto: 'Laboratorio' },
  { href: '/desde-mi-aula/', texto: 'Desde mi aula' },
  { href: '/opinion/', texto: 'Opinión' },
  { href: '/formacion/', texto: 'Formación' },
  { href: '/sobre-el-autor/', texto: 'Sobre el autor' },
];

export const NAV_PIE: { titulo: string; enlaces: EnlaceNav[] }[] = [
  {
    titulo: 'Contenidos',
    enlaces: [
      { href: '/articulos/', texto: 'Todos los artículos' },
      { href: '/ia-en-el-aula/', texto: 'Tutoriales y guías' },
      { href: '/prompts/', texto: 'Biblioteca de prompts' },
      { href: '/herramientas/', texto: 'Herramientas de IA' },
      { href: '/temas/', texto: 'Temas' },
    ],
  },
  {
    titulo: 'Proyecto',
    enlaces: [
      { href: '/sobre-el-autor/', texto: 'Sobre el autor' },
      { href: '/sobre-el-autor/#criterios-editoriales', texto: 'Criterios editoriales' },
      { href: '/desde-mi-aula/', texto: 'Desde mi aula' },
      { href: '/formacion/', texto: 'Formación para centros' },
      { href: '/newsletter/', texto: 'Newsletter' },
      { href: '/contacto/', texto: 'Contacto' },
      { href: '/rss.xml', texto: 'RSS' },
    ],
  },
  {
    titulo: 'Legal',
    enlaces: [
      { href: '/aviso-legal/', texto: 'Aviso legal' },
      { href: '/privacidad/', texto: 'Política de privacidad' },
      { href: '/cookies/', texto: 'Política de cookies' },
    ],
  },
];
