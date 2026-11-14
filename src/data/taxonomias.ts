/** Vocabularios controlados. Añadir un valor aquí lo habilita en esquemas y filtros. */

export const TIPOS_ARTICULO = {
  guia: { nombre: 'Guía', plural: 'Guías' },
  tutorial: { nombre: 'Tutorial', plural: 'Tutoriales' },
  opinion: { nombre: 'Opinión', plural: 'Opinión' },
  actualidad: { nombre: 'Actualidad', plural: 'Actualidad' },
  laboratorio: { nombre: 'Laboratorio', plural: 'Laboratorio' },
  experiencia: { nombre: 'Experiencia de aula', plural: 'Desde mi aula' },
} as const;

/**
 * Niveles de evidencia del manifiesto (sección 7). Obligatorio en guías, tutoriales, laboratorio y
 * experiencias; opinión y actualidad ya se identifican por su tipo. Definiciones en /manifiesto/#niveles-de-evidencia.
 */
export const NIVELES_EVIDENCIA = {
  posibilidad: {
    nombre: 'Posibilidad tecnológica',
    descripcion: 'Describe lo que una herramienta puede hacer. No implica que mejore el aprendizaje.',
  },
  propuesta: {
    nombre: 'Propuesta metodológica',
    descripcion:
      'Procedimiento fundamentado en normativa, bibliografía o experiencia profesional, sin aplicación documentada en el aula.',
  },
  experiencia: {
    nombre: 'Experiencia implementada',
    descripcion:
      'Aplicada en un aula real y documentada (contexto, proceso, resultados agregados y limitaciones), sin evaluación sistemática.',
  },
  resultado: {
    nombre: 'Resultado contrastado',
    descripcion:
      'Efecto evaluado con un diseño que permite atribuirlo (comparación, medida antes y después o estudio revisado por pares).',
  },
} as const;

export const TIPOS_SIN_EVIDENCIA = ['opinion', 'actualidad'] as const;

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

/**
 * Navegación transversal por necesidades docentes (segundo nivel, bajo el menú principal).
 * Campo `necesidadesDocentes` en artículos y prompts; páginas en /necesidades/<id>/.
 * No confundir con `necesidad` (pregunta editorial de cada texto) ni con `temas` (agrupaciones SEO).
 * El orden de las claves es el orden en que se muestran. En cada texto, la primera necesidad
 * de la lista es la principal: se muestra antes en la página de esa necesidad.
 */
export const NECESIDADES_DOCENTES = {
  evaluacion: {
    nombre: 'Evaluación',
    descripcion: 'Rúbricas, coevaluación, pruebas y evidencias de aprendizaje.',
    entradilla:
      'Instrumentos de evaluación hechos con IA y revisados con criterio, normativa de evaluación aplicable al pedirlos y cómo evaluar cuando el alumnado tiene IA a mano.',
  },
  'inclusion-dua': {
    nombre: 'Inclusión y DUA',
    descripcion: 'Adaptaciones, accesibilidad y atención a la diversidad.',
    entradilla:
      'Adaptaciones curriculares, ajustes DUA y materiales accesibles con apoyo de la IA, sin perder de vista lo que exige la normativa ni lo que dice la evidencia.',
  },
  programacion: {
    nombre: 'Programación',
    descripcion: 'Situaciones de aprendizaje, currículo y diseño de propuestas didácticas.',
    entradilla:
      'Situaciones de aprendizaje, actividades competenciales y unidades que parten del currículo oficial y usan la IA como apoyo, no como autora.',
  },
  'alfabetizacion-ia': {
    nombre: 'Alfabetización en IA',
    descripcion: 'Pensamiento crítico, uso responsable y competencia digital.',
    entradilla:
      'Cómo funciona la IA generativa, cómo pedirle las cosas y cómo verificar lo que devuelve: para el docente y para trabajarlo con el alumnado.',
  },
  'formacion-docente': {
    nombre: 'Formación docente',
    descripcion: 'Desarrollo profesional, competencia digital docente y formación de centros.',
    entradilla:
      'Lo que dicen los estudios y los informes sobre el profesorado y la IA, y qué supone para la competencia profesional y las condiciones de trabajo docentes.',
    enlace: { href: '/formacion/', texto: 'Formación para centros y claustros' },
  },
  'etica-normativa': {
    nombre: 'Ética y normativa',
    descripcion: 'Privacidad, protección de datos, regulación y uso responsable de la IA en educación.',
    entradilla:
      'Protección de datos, Reglamento europeo de IA, guías oficiales de las administraciones educativas e integridad académica, leídos desde el aula.',
  },
} as const satisfies Record<
  string,
  { nombre: string; descripcion: string; entradilla: string; enlace?: { href: string; texto: string } }
>;

export type NecesidadDocente = keyof typeof NECESIDADES_DOCENTES;
