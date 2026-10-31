/** Vocabularios controlados. Añadir un valor aquí lo habilita en esquemas y filtros. */

export const TIPOS_ARTICULO = {
  guia: { nombre: 'Guía', plural: 'Guías' },
  tutorial: { nombre: 'Tutorial', plural: 'Tutoriales' },
  opinion: { nombre: 'Opinión', plural: 'Opinión' },
  actualidad: { nombre: 'Actualidad', plural: 'Actualidad' },
  laboratorio: { nombre: 'Laboratorio', plural: 'Laboratorio' },
  experiencia: { nombre: 'Experiencia de aula', plural: 'Desde mi aula' },
} as const;

export const CATEGORIAS_HERRAMIENTA = {
  asistentes: 'Asistentes conversacionales',
  investigacion: 'Investigación y búsqueda',
  presentaciones: 'Presentaciones',
  'imagen-diseno': 'Imágenes y diseño',
  'video-audio': 'Vídeo y audio',
  evaluacion: 'Evaluación y rúbricas',
  interactivos: 'Recursos interactivos',
  automatizacion: 'Automatización docente',
} as const;

/**
 * Pictograma propio de cada categoría (nombre en Icono.astro). Las fichas muestran el de su primera categoría.
 * Se usan iconos de categoría y no logotipos: las normas de marca de Anthropic, Google, OpenAI y Canva
 * exigen permiso previo o prohíben recolorear sus logotipos (comprobado el 31-10-2026).
 */
export const ICONOS_CATEGORIA = {
  asistentes: 'conversacion',
  investigacion: 'documento',
  presentaciones: 'pantalla',
  'imagen-diseno': 'imagen',
  'video-audio': 'reproducir',
  evaluacion: 'lista',
  interactivos: 'cursor',
  automatizacion: 'engranaje',
} as const satisfies Record<keyof typeof CATEGORIAS_HERRAMIENTA, string>;

export const MODALIDADES_PRECIO = {
  gratuita: 'Gratuita',
  freemium: 'Gratuita con límites + planes de pago',
  'gratuita-educacion': 'Gratuita para docentes (con verificación)',
  pago: 'De pago',
  pendiente: 'Pendiente de verificar',
} as const;

export const TAREAS_DOCENTES = {
  'programacion-didactica': 'Programación y situaciones de aprendizaje',
  actividades: 'Diseño de actividades',
  evaluacion: 'Evaluación y rúbricas',
  'pruebas-cuestionarios': 'Pruebas y cuestionarios',
  adaptacion: 'Atención a la diversidad',
  retroalimentacion: 'Retroalimentación',
  'revision-materiales': 'Revisión de materiales',
  'alfabetizacion-ia': 'Alfabetización digital e IA',
  comunicacion: 'Comunicación y gestión',
} as const;

export const ETAPAS = {
  eso: 'ESO',
  bachillerato: 'Bachillerato',
  fp: 'Formación Profesional',
  todas: 'Todas las etapas',
} as const;

export type TipoArticulo = keyof typeof TIPOS_ARTICULO;
