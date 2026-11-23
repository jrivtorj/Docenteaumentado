/** Datos globales del sitio. Editar aquí cambia cabecera, pie y metadatos. */
export const SITIO = {
  nombre: 'El docente aumentado',
  lema: 'Más criterio. Mejor enseñanza.',
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
      { href: '/manifiesto/', texto: 'Manifiesto' },
      { href: '/sobre-el-autor/#criterios-editoriales', texto: 'Criterios editoriales' },
      { href: '/desde-mi-aula/', texto: 'Desde mi aula' },
      { href: '/formacion/', texto: 'Formación y curso online' },
      { href: '/colabora/', texto: 'Colabora' },
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

/** Licencia de los prompts de la biblioteca (no de los artículos). Aprobada por el autor el 19-11-2026. */
export const LICENCIA_PROMPTS = {
  nombre: 'CC BY-NC-SA 4.0',
  nombreLargo: 'Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es',
} as const;

/**
 * Curso online de pago del autor, alojado fuera de este repositorio (curso.eldocenteaumentado.com).
 * Datos comprobados en su web el 21-11-2026. El precio no se repite aquí a propósito: se remite a la
 * web del curso para que no haya dos versiones. Si cambian el nombre, las fechas o la homologación,
 * actualizar este objeto. Toda mención al curso debe presentarlo como producto propio de pago.
 */
/** Marca profesional del titular (autónomo, no sociedad) con la que diseña y desarrolla el proyecto. Se cita en el pie y en el aviso legal. */
export const DESARROLLO = {
  nombre: 'DETTIA',
  url: 'https://dettia.com/',
} as const;

export const CURSO = {
  nombre: 'De la SA al aula con IA',
  url: 'https://curso.eldocenteaumentado.com/',
  resumen:
    'Curso online para convertir situaciones de aprendizaje en materiales, rúbricas y evaluación por criterios con ayuda de la IA, sin perder rigor curricular.',
  /** Apertura de la venta. Antes de esta fecha se muestra como lista de espera. */
  apertura: new Date('2026-12-15'),
  modulos: [
    { nombre: 'Módulo 0 · Reglas del juego', acceso: 'gratuito' },
    { nombre: 'Módulo 1 · Instrucciones que funcionan', acceso: 'gratuito' },
    { nombre: 'Módulo 2 · Darle tu currículo a la IA', acceso: 'de pago' },
    { nombre: 'Módulo 3 · De la SA a los materiales', acceso: 'de pago' },
    { nombre: 'Módulo 4 · Evaluar por criterios', acceso: 'de pago' },
    { nombre: 'Módulo 5 · Tu asistente', acceso: 'de pago' },
    { nombre: 'Módulo 6 · Revisar lo que produce la IA', acceso: 'de pago' },
  ],
  comprobado: new Date('2026-11-21'),
} as const;

/** true si la build se hace antes de que abra la venta del curso. */
export const cursoEnPreventa = () => Date.now() < CURSO.apertura.getTime();
