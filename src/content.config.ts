import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { TIPOS_ARTICULO, CATEGORIAS_HERRAMIENTA, MODALIDADES_PRECIO, TAREAS_DOCENTES, ETAPAS } from './data/taxonomias';

const claves = <T extends Record<string, unknown>>(obj: T) => Object.keys(obj) as [keyof T & string, ...(keyof T & string)[]];

/** Fuente o referencia citada. `consultado` = fecha en que se comprobó el enlace. */
const fuente = z.object({
  titulo: z.string(),
  url: z.url(),
  editor: z.string().optional(),
  fecha: z.string().optional(),
  consultado: z.coerce.date().optional(),
});

const seo = z
  .object({
    titulo: z.string().max(70).optional(),
    descripcion: z.string().max(170).optional(),
    noindex: z.boolean().default(false),
  })
  .default({ noindex: false });

const estado = z.enum(['borrador', 'revision', 'publicado']).default('borrador');

const autores = defineCollection({
  loader: file('src/content/autores.json'),
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    bio: z.string(),
    url: z.string().optional(),
    sameAs: z.array(z.url()).default([]),
  }),
});

const temas = defineCollection({
  loader: file('src/content/temas.json'),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    /** Intención de búsqueda principal que debe resolver el grupo temático. */
    intencion: z.string(),
    orden: z.number().default(100),
  }),
});

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: ({ image }) =>
    z
      .object({
        titulo: z.string().min(10).max(110),
        slug: z.string().optional(),
        descripcion: z.string().min(50).max(170),
        fechaPublicacion: z.coerce.date(),
        fechaActualizacion: z.coerce.date().optional(),
        autor: reference('autores'),
        tipo: z.enum(claves(TIPOS_ARTICULO)),
        temas: z.array(reference('temas')).min(1),
        etiquetas: z.array(z.string()).default([]),
        imagen: z.object({ src: image(), alt: z.string().min(5) }).optional(),
        /** Minutos. Si se omite se calcula a partir del texto. */
        tiempoLectura: z.number().int().positive().optional(),
        fuentes: z.array(fuente).default([]),
        estado,
        destacado: z.boolean().default(false),
        /** Pregunta concreta del profesorado a la que responde el texto (uso editorial interno). */
        necesidad: z.string().optional(),
        seo,
      })
      .refine((d) => !d.fechaActualizacion || d.fechaActualizacion >= d.fechaPublicacion, {
        message: 'fechaActualizacion no puede ser anterior a fechaPublicacion',
      }),
});

const herramientas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/herramientas' }),
  schema: z.object({
    nombre: z.string(),
    slug: z.string().optional(),
    descripcion: z.string().min(50).max(170),
    categorias: z.array(z.enum(claves(CATEGORIAS_HERRAMIENTA))).min(1),
    proveedor: z.string(),
    urlOficial: z.url(),
    utilidadEducativa: z.string(),
    usos: z.array(z.string()).min(1),
    ejemplos: z.array(z.string()).min(1),
    limitaciones: z.array(z.string()).min(1),
    privacidad: z.string().optional(),
    edadMinima: z.string().optional(),
    precio: z.object({
      modalidad: z.enum(claves(MODALIDADES_PRECIO)),
      resumen: z.string(),
      /** Página oficial donde se comprobó el precio. */
      fuente: z.url(),
      /** Fecha de la comprobación. Obligatoria: sin ella no se publica un precio. */
      verificadoEl: z.coerce.date(),
      notas: z.string().optional(),
    }),
    fechaVerificacion: z.coerce.date(),
    etiquetas: z.array(z.string()).default([]),
    temas: z.array(reference('temas')).default([]),
    estado,
    seo,
  }),
});

const variable = z.object({
  /** Nombre en MAYÚSCULAS tal como aparece en el prompt entre corchetes: [ETAPA]. */
  nombre: z.string().regex(/^[A-ZÁÉÍÓÚÑ0-9_]+$/, 'Usa MAYÚSCULAS y guiones bajos'),
  descripcion: z.string(),
  ejemplo: z.string(),
});

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z
    .object({
      titulo: z.string().min(10).max(110),
      slug: z.string().optional(),
      descripcion: z.string().min(50).max(170),
      finalidad: z.string(),
      tarea: z.enum(claves(TAREAS_DOCENTES)),
      etapas: z.array(z.enum(claves(ETAPAS))).min(1),
      /** Herramientas del catálogo con las que se ha diseñado. "Cualquier asistente" se expresa con generico: true. */
      herramientas: z.array(reference('herramientas')).default([]),
      generico: z.boolean().default(true),
      prompt: z.string().min(200),
      variables: z.array(variable).min(1),
      etiquetas: z.array(z.string()).default([]),
      temas: z.array(reference('temas')).default([]),
      relacionados: z.array(reference('articulos')).default([]),
      fechaPublicacion: z.coerce.date(),
      fechaActualizacion: z.coerce.date().optional(),
      estado,
      seo,
    })
    .superRefine((d, ctx) => {
      // Cada variable declarada debe aparecer en el prompt y viceversa.
      const enPrompt = new Set([...d.prompt.matchAll(/\[([A-ZÁÉÍÓÚÑ0-9_]+)\]/g)].map((m) => m[1]));
      const declaradas = new Set(d.variables.map((v) => v.nombre));
      for (const v of declaradas)
        if (!enPrompt.has(v)) ctx.addIssue({ code: 'custom', message: `La variable [${v}] no aparece en el prompt` });
      for (const v of enPrompt)
        if (!declaradas.has(v)) ctx.addIssue({ code: 'custom', message: `El prompt usa [${v}] pero no está declarada` });
    }),
});

export const collections = { autores, temas, articulos, herramientas, prompts };
