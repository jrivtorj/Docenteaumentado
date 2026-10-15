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
