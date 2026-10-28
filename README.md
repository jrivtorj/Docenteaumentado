# El docente aumentado

Portal editorial sobre inteligencia artificial aplicada a la enseñanza, para profesorado de Secundaria, Bachillerato y FP.

> Más criterio. Mejor enseñanza.

Sitio estático construido con **Astro 7** y **TypeScript**. Todo el contenido (artículos, prompts, herramientas, temas) vive en archivos Markdown/JSON validados por esquemas; las páginas, el buscador, el sitemap y el RSS se generan a partir de ellos.

---

## Índice

1. [Requisitos e instalación](#requisitos-e-instalación)
2. [Comandos](#comandos)
3. [Decisiones técnicas](#decisiones-técnicas)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Cómo añadir contenido](#cómo-añadir-contenido)
6. [Variables de entorno](#variables-de-entorno)
7. [Publicar en Internet](#publicar-en-internet)
8. [SEO: qué está implementado](#seo-qué-está-implementado)
9. [Pruebas y verificación](#pruebas-y-verificación)
10. [Pendientes antes de publicar](#pendientes-antes-de-publicar)
11. [Mantenimiento](#mantenimiento)

---

## Requisitos e instalación

- Node.js **22.12 o superior** (exigido por Astro 7).
- npm 10 o superior.

```bash
npm install
cp .env.example .env      # y ajusta los valores
npm run dev               # http://localhost:4321
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga. Muestra también borradores (con aviso). |
| `npm run build` | Compila el sitio estático en `dist/`. Solo incluye contenido `publicado`. |
| `npm run preview` | Sirve `dist/` en local para revisarlo tal como se publicará. |
| `npm run check` | Comprobación de tipos de TypeScript y de los componentes Astro. |
| `npm run verificar` | Verifica `dist/`: un H1 por página, títulos y descripciones únicos, canonical, enlaces internos y anclas, JSON-LD, imágenes con `alt`, sitemap sin páginas `noindex`. |
| `npm run test:e2e` | Pruebas de navegador (Playwright): navegación, filtros, buscador, copiar prompts, menú móvil, accesibilidad con axe en claro y oscuro. Requiere `npm run build` antes. |
| `npm test` | Todo lo anterior en cadena. |
| `npm run og` | Regenera la imagen social por defecto `public/og-default.png`. |

> Las pruebas de Playwright necesitan un Chromium instalado: `npx playwright install chromium` la primera vez.

## Decisiones técnicas

| Decisión | Motivo |
|---|---|
| **Astro, salida estática** | Portal editorial: HTML generado en compilación, sin servidor que mantener, rápido y barato de alojar (gratis en los planes básicos de Cloudflare Pages, Netlify o Vercel). |
| **Content Collections con esquemas Zod** (`src/content.config.ts`) | Cada artículo, prompt o herramienta se valida al compilar: fechas, longitud de descripciones, campos obligatorios, referencias entre colecciones y coherencia de variables de los prompts. Un error de contenido rompe la compilación en lugar de llegar a producción. |
| **Markdown, no MDX** | Suficiente para el contenido actual y más fácil de editar. Los bloques editoriales se escriben con HTML simple (ver más abajo). MDX puede añadirse después si se necesitan componentes dentro de los textos. |
| **CSS propio con variables, sin Tailwind** | Un único archivo de tokens (`src/styles/global.css`) y estilos acotados por componente. Menos dependencias y un diseño editorial muy controlado; Tailwind no aportaba ventajas claras aquí. |
| **JavaScript solo donde hace falta** | Menú móvil, filtros, buscador, variables de prompts y botón de copiar. Scripts pequeños sin frameworks. Sin JS, el sitio sigue siendo navegable. |
| **Buscador propio sobre un índice JSON** (`/buscar.json`) | Funciona en desarrollo y en producción, sin servicios externos. Con cientos de entradas el índice sigue siendo pequeño. Si el archivo crece mucho (miles de entradas), sustituirlo por [Pagefind](https://pagefind.app/). |
| **Tipografía autoalojada** (solo Inter, vía Fontsource) | Sin llamadas a Google Fonts: mejor privacidad y sin cookies de terceros. Una sola familia sans, como pide el manual de identidad. |
| **Identidad visual** (manual de oct. 2026, propuesta inicial) | Paleta petróleo `#172A3A`, menta `#70D6C1`, blanco cálido `#F2F0EB`, gris pizarra `#52616B` y blanco, en los tokens de `global.css`. La menta no llega a 3:1 sobre fondos claros: en modo claro solo se usa como decoración. El modo oscuro aplica la versión inversa de la marca y sus tonos intermedios son derivados. El símbolo (hexágono con cubo) está en `Cabecera.astro`, `public/favicon.svg` y `scripts/generar-og.mjs`. |
| **Modo oscuro automático** | Según la preferencia del sistema (`prefers-color-scheme`), sin conmutador ni almacenamiento local. |
| **Content-Security-Policy** | Generada por Astro con hashes de scripts y estilos en línea (`security.csp`). |
| **Sin base de datos, autenticación, pagos ni IA en servidor** | No hay una necesidad real en esta fase. |

## Estructura del proyecto

```
├── astro.config.mjs          Configuración: dominio, CSP, sitemap, variables de entorno
├── integraciones/            Integración propia: quita del sitemap las páginas noindex
├── public/                   Archivos estáticos (favicon, imagen social, _headers, _redirects)
├── scripts/                  verificar-dist.mjs, generar-og.mjs
├── tests/                    Pruebas de Playwright
└── src/
    ├── content.config.ts     Esquemas de las colecciones
    ├── content/
    │   ├── articulos/        Guías, tutoriales, opinión, actualidad, laboratorio (.md)
    │   ├── herramientas/     Fichas de herramientas (.md)
    │   ├── prompts/          Biblioteca de prompts (.md)
    │   ├── autores.json      Autores
    │   └── temas.json        Grupos temáticos (clusters SEO)
    ├── data/                 Datos globales (sitio.ts) y vocabularios (taxonomias.ts)
    ├── components/           Componentes de interfaz
    ├── layouts/              Plantillas de página
    ├── pages/                Rutas del sitio
    ├── scripts/              JS del cliente (filtros, copiar, variables)
    ├── styles/global.css     Sistema visual (tokens, base, prosa)
    └── utils/                Consultas de contenido, fechas, JSON-LD
```

### Mapa de URL

| URL | Contenido |
|---|---|
| `/` | Inicio |
| `/actualidad/` | Noticias y análisis (`tipo: actualidad`) |
| `/ia-en-el-aula/` | Tutoriales y guías |
| `/opinion/` | Opinión |
| `/laboratorio/` | Experimentos y recursos interactivos; incluye `/laboratorio/constructor-de-prompts/` |
| `/articulos/` y `/articulos/<slug>/` | Archivo paginado y cada artículo |
| `/prompts/` y `/prompts/<slug>/` | Biblioteca con filtros y cada prompt |
| `/herramientas/` y `/herramientas/<slug>/` | Catálogo con filtros y cada ficha |
| `/temas/` y `/temas/<tema>/` | Páginas de grupo temático |
| `/buscar/` | Buscador (noindex) |
| `/sobre-el-autor/`, `/contacto/`, `/newsletter/` | Páginas del proyecto |
| `/aviso-legal/`, `/privacidad/`, `/cookies/` | Páginas legales (noindex) |
| `/rss.xml`, `/sitemap-index.xml`, `/robots.txt` | Generados |

Los artículos usan una URL plana (`/articulos/<slug>/`) para que no cambie aunque un texto cambie de sección.

## Cómo añadir contenido

Crea un archivo `.md` en la carpeta de la colección. **El nombre del archivo es la URL** (sin tildes ni mayúsculas, palabras separadas por guiones). Si no quieres que se publique todavía, deja `estado: borrador` o `estado: revision`: se verá en `npm run dev` con un aviso, pero no se compilará.

> Consejo YAML: si un valor contiene dos puntos seguidos de espacio (`: `), escríbelo entre comillas.

### Artículo

`src/content/articulos/mi-articulo.md`

```yaml
---
titulo: "Título claro, de 10 a 110 caracteres"
descripcion: "Entre 50 y 170 caracteres. Se usa como metadescripción y en las tarjetas."
fechaPublicacion: 2026-10-20
fechaActualizacion: 2026-11-02     # opcional, solo si hay cambios sustanciales
autor: jose-david-rivero            # id de src/content/autores.json
tipo: guia                          # guia | tutorial | opinion | actualidad | laboratorio | experiencia
temas: [ia-para-docentes]           # ids de src/content/temas.json (mínimo 1)
etiquetas: [rúbricas, evaluación]
destacado: false                    # true = aparece en «Para empezar» en la portada
necesidad: "Pregunta real del profesorado a la que responde (uso interno)"
tiempoLectura: 8                    # opcional; si se omite se calcula
imagen:                             # opcional
  src: ./imagenes/mi-imagen.jpg     # ruta relativa al .md; Astro la optimiza
  alt: "Descripción de la imagen"
fuentes:
  - titulo: "Título de la fuente"
    url: https://...
    editor: "Organismo o autor"
    fecha: "2024"
    consultado: 2026-10-20
estado: publicado
seo:                                # opcional
  titulo: "Título alternativo para buscadores (máx. 70)"
  descripcion: "Descripción alternativa (máx. 170)"
  noindex: false
---

Texto en Markdown. Usa `##` para secciones (el H1 es el título).
```

**Bloques editoriales.** Para distinguir hechos, opiniones y previsiones (obligatorio en Actualidad), usa estos bloques, dejando una línea en blanco tras la apertura y antes del cierre:

```html
<div class="nota nota--hecho">

Hechos comprobados, con su fuente en la lista de fuentes.

</div>
```

Clases disponibles: `nota--hecho`, `nota--opinion`, `nota--prevision`, `nota--clave` («En la práctica») y `nota--verificar` («Comprueba antes de usar»). La etiqueta del bloque se añade automáticamente.

### Prompt

`src/content/prompts/mi-prompt.md`

```yaml
---
titulo: "..."
descripcion: "50-170 caracteres"
finalidad: "Para qué sirve, en una frase"
tarea: evaluacion            # ver TAREAS_DOCENTES en src/data/taxonomias.ts
etapas: [eso, bachillerato]  # eso | bachillerato | fp | todas
generico: true               # funciona con cualquier asistente
herramientas: [claude]       # ids de herramientas con las que se ha probado (opcional)
fechaPublicacion: 2026-10-20
etiquetas: [...]
temas: [evaluacion-rubricas-ia]
relacionados: [rubricas-con-ia-paso-a-paso]   # ids de artículos
variables:
  - nombre: CURSO            # MAYÚSCULAS y guiones bajos
    descripcion: "Curso y etapa."
    ejemplo: "4.º ESO"
prompt: |
  Texto completo del prompt. Las variables se escriben entre corchetes: [CURSO].
estado: publicado
---

## Cómo usarlo
...
## Ejemplo de aplicación
...
```

La compilación **falla** si una variable declarada no aparece en el prompt o si el prompt usa una variable no declarada. En la página, cada variable tiene un campo que la sustituye en vivo, y el botón «Copiar» copia el prompt ya rellenado.

### Herramienta

`src/content/herramientas/mi-herramienta.md`. Campos obligatorios: `nombre`, `descripcion`, `categorias`, `proveedor`, `urlOficial`, `utilidadEducativa`, `usos`, `ejemplos`, `limitaciones`, `precio` (`modalidad`, `resumen`, `fuente`, `verificadoEl`) y `fechaVerificacion`. Copia una ficha existente como plantilla.

**Regla editorial:** no se publica un precio, un plan gratuito o una función sin haberlo comprobado en la web oficial; `precio.fuente` es la URL consultada y `precio.verificadoEl`, la fecha. Si no se puede comprobar, usa `modalidad: pendiente` y dilo en `resumen`.

### Temas, categorías y vocabularios

- **Temas** (clusters): `src/content/temas.json`. Una página de tema se genera si tiene contenido y solo es indexable a partir de 3 recursos.
- **Categorías de herramientas, tareas docentes, etapas, tipos de artículo**: `src/data/taxonomias.ts`. Añadir un valor lo habilita en esquemas y filtros.
- **Menús**: `src/data/sitio.ts`.

## Variables de entorno

Ver `.env.example`. Todas son **públicas** (acaban en el HTML); no hay secretos ni claves API en el proyecto.

| Variable | Uso |
|---|---|
| `SITE_URL` | Dominio canónico, sin barra final. Por defecto, `https://eldocenteaumentado.com`. |
| `SITE_ENV` | `production` hace el sitio indexable. Cualquier otro valor añade `noindex` a todas las páginas y genera un `robots.txt` que bloquea el rastreo. En Cloudflare Workers Builds no hace falta definirla: si falta, la compilación de `main` es `production` y la de cualquier otra rama, `preview` (se deduce de `WORKERS_CI_BRANCH`). |
| `PUBLIC_CONTACT_FORM_ACTION` | URL de envío del formulario de contacto. Por defecto, el endpoint de Formspree del proyecto. |
| `PUBLIC_CONTACT_EMAIL` | Correo de contacto visible. Por defecto, `eldocenteaumentado@gmail.com`. |
| `PUBLIC_NEWSLETTER_ACTION` | URL `action` del formulario embebible del proveedor de newsletter. Vacía = suscripción desactivada y marcada como pendiente. |
| `PUBLIC_NEWSLETTER_EMAIL_FIELD` | Nombre del campo de correo que espera el proveedor (por defecto `email`). |
| `PUBLIC_NEWSLETTER_PROVIDER` | Nombre del proveedor, para el texto informativo. |
| `PUBLIC_ANALYTICS_SCRIPT` / `PUBLIC_ANALYTICS_DOMAIN` | Analítica sin cookies con un script compatible con Plausible (`data-domain`). Vacías = sin analítica. Se añaden solas a la CSP. Para Umami u otros, adapta el `<script>` en `src/layouts/Base.astro`. |
| `PUBLIC_GSC_VERIFICATION` | Código de verificación de Google Search Console (método «etiqueta HTML»). |

Las variables se leen **al compilar**: tras cambiarlas hay que volver a compilar y desplegar.

## Publicar en Internet

El sitio es estático: cualquier alojamiento de archivos sirve. Configuración común para las tres plataformas recomendadas:

- **Comando de compilación:** `npm run build`
- **Directorio de salida:** `dist`
- **Versión de Node:** 22 (variable `NODE_VERSION=22` si la plataforma la pide)
- **Variables:** `SITE_URL` con el dominio definitivo y `SITE_ENV=production` **solo en el entorno de producción**. En las previsualizaciones de ramas, `SITE_ENV=preview`.

### Opción recomendada: Cloudflare Pages

Plan gratuito con ancho de banda sin límite publicado, CDN global y soporte de `_headers` y `_redirects`. (Comprueba las condiciones vigentes del plan antes de decidir.)

1. Sube el proyecto a un repositorio de GitHub o GitLab.
2. En Cloudflare: *Workers & Pages → Create → Pages → Connect to Git*.
3. Preset «Astro», comando `npm run build`, salida `dist`.
4. Variables de entorno: en *Production*, `SITE_URL` y `SITE_ENV=production`; en *Preview*, `SITE_ENV=preview`.
5. Añade el dominio personalizado en *Custom domains*.

### Netlify

1. *Add new site → Import an existing project* desde el repositorio.
2. Comando `npm run build`, directorio `dist`.
3. Variables en *Site configuration → Environment variables*, con valores distintos por contexto (*Production* / *Deploy previews*).
4. `_headers` y `_redirects` se aplican automáticamente. Si usas Netlify Forms para el contacto, añade `data-netlify="true"` al formulario y pon `PUBLIC_CONTACT_FORM_ACTION=/contacto/gracias/` (crea esa página).

### Vercel

1. *Add New → Project* desde el repositorio; detecta Astro.
2. Variables por entorno (*Production* / *Preview*).
3. Vercel no lee `_headers` ni `_redirects`: traslada las cabeceras y redirecciones a un `vercel.json`.

### Después del primer despliegue

1. Comprueba `https://tu-dominio/robots.txt`: debe mostrar `Allow: /` y la URL del sitemap.
2. Da de alta la propiedad en **Google Search Console**, verifica con `PUBLIC_GSC_VERIFICATION` (o por DNS) y envía `https://tu-dominio/sitemap-index.xml`.
3. Revisa con la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results) un artículo y la portada.
4. Mide Core Web Vitals con PageSpeed Insights sobre la URL pública.

## SEO: qué está implementado

- Título y metadescripción únicos por página (la verificación lo comprueba). El nombre del sitio se añade al título solo si cabe en ~65 caracteres; `seo.titulo` permite un título específico.
- Un único H1 por página y jerarquía de encabezados.
- Canonical absoluto en todas las páginas; la paginación tiene canonical propio y título con «(página N)».
- `sitemap-index.xml` automático, sin las páginas `noindex` (buscador, legales, temas con poco contenido, secciones vacías).
- `robots.txt` según entorno.
- Open Graph y Twitter Cards; imagen social por defecto 1200×630.
- JSON-LD: `Organization` + `WebSite` en portada, `Article` / `TechArticle` / `OpinionNewsArticle` en contenidos y `BreadcrumbList` en páginas interiores. No se añaden valoraciones ni datos no respaldados.
- Migas de pan visibles, artículos relacionados (por temas y etiquetas), prompts relacionados y enlaces entre fichas, prompts y artículos.
- RSS en `/rss.xml`.
- Los filtros de prompts y herramientas usan parámetros de URL sobre la misma página canónica: no crean páginas indexables nuevas.
- Redirecciones: `redirects` en `astro.config.mjs` y `public/_redirects`.
- Imágenes: el esquema admite imagen por artículo optimizada por Astro (`<Image>`, dimensiones y carga diferida). El contenido inicial no incluye imágenes: no se han usado imágenes de stock ni generadas.

La estrategia de contenidos y posicionamiento está en [`docs/estrategia-editorial.md`](docs/estrategia-editorial.md).

## Pruebas y verificación

Resultado en el entorno de desarrollo el 12 de octubre de 2026:

- `astro check`: 0 errores, 0 avisos.
- `astro build`: 62 páginas generadas sin errores.
- `npm run verificar`: sin errores.
- Playwright: 89 pruebas superadas (escritorio y móvil), 1 omitida a propósito (la del menú móvil en el proyecto de escritorio).
- Lighthouse 12 (servidor local, sin latencia de red real): 100 en rendimiento, accesibilidad y buenas prácticas en portada, biblioteca de prompts y una ficha, tanto en móvil como en escritorio; CLS 0. **No son datos de campo**: hay que medir de nuevo sobre la URL pública.

Limitaciones conocidas de la verificación:

- Los **enlaces externos** no se comprueban automáticamente (la verificación los cuenta, no los visita). Revísalos periódicamente con una herramienta de comprobación de enlaces.
- La accesibilidad automática (axe) detecta una parte de los problemas; conviene una revisión manual con teclado y lector de pantalla.

## Pendientes antes de publicar

**Imprescindibles**

- [x] `SITE_URL` usa por defecto el dominio propio `https://eldocenteaumentado.com`.
- [ ] Añadir `eldocenteaumentado.com` como *Custom domain* del Worker en Cloudflare y redirigir `www` al dominio raíz.
- [ ] Configurar `SITE_ENV=production` solo en producción.
- [x] **Aviso legal** y **Política de privacidad** completados para un sitio personal sin actividad económica (sin NIF ni domicilio). Si se añade publicidad, afiliación o venta, añadir NIF y domicilio (art. 10 LSSI-CE).
- [x] `PUBLIC_CONTACT_EMAIL` usa por defecto `eldocenteaumentado@gmail.com`, que aparece en contacto, aviso legal y privacidad.
- [x] Eliminado el párrafo marcador de **Sobre el autor**. Si se quieren añadir centro, años de experiencia o proyectos, hacerlo en `src/pages/sobre-el-autor.astro`.
- [ ] Revisar todos los contenidos como autor: el texto inicial se redactó con apoyo de IA y debe asumirlo quien firma. La página «Sobre el autor» lo declara en los criterios editoriales.
- [ ] Decidir si se mantiene el compromiso «sin enlaces de afiliación ni contenido patrocinado» de la portada y los criterios editoriales.
- [ ] Revisar las fechas de publicación (todas son 12/10/2026) y ajustarlas al día real de publicación.

**Cuando se quieran activar**

- [x] Formulario de contacto activo con Formspree (plan gratuito, 50 envíos al mes; endpoint `https://formspree.io/f/xqpewezl`, que reenvía a `eldocenteaumentado@gmail.com`). La política de privacidad muestra el proveedor y la garantía.
- [ ] Newsletter: elegir proveedor (Buttondown, MailerLite, Brevo…), configurar `PUBLIC_NEWSLETTER_*` y añadirlo a la política de privacidad.
- [ ] Analítica sin cookies (opcional): configurar `PUBLIC_ANALYTICS_*` y actualizar privacidad.
- [ ] Google Search Console: verificar la propiedad y enviar el sitemap.

**Verificaciones de contenido señaladas**

- [x] Calendario del Reglamento europeo de IA tras el «ómnibus digital»: confirmado el Reglamento (UE) 2026/1744 en EUR-Lex (adoptado el 8/7/2026, en vigor el 27/7/2026). Actualizada la guía de protección de datos y añadida la noticia correspondiente.
- [ ] El INTEF publicó en septiembre de 2026 una actualización de su guía sobre IA; no se ha podido leer. Los artículos citan la edición de 2024.
- [ ] El enlace al PDF de la guía del INTEF (2024) procede de una fuente secundaria y no se pudo abrir desde el entorno de desarrollo: compruébalo.
- [ ] El enlace del Decreto 30/2023 apunta a la reproducción del INAP; sustitúyelo por el enlace del BOC cuando lo localices.
- [ ] Precios de herramientas: se muestran en USD tal como aparecían en las webs oficiales consultadas desde el entorno de desarrollo; en España pueden mostrarse en euros e incluir IVA.

## Mantenimiento

- **Fichas de herramientas:** revisar precios y condiciones cada 3 meses y actualizar `verificadoEl` y `fechaVerificacion`. Si no se puede verificar, cambiar a `modalidad: pendiente`.
- **Artículos de actualidad:** no actualizar el contenido como si fuera nuevo; añadir `fechaActualizacion` y un bloque que explique el cambio.
- **URL publicadas:** no cambiarlas. Si es inevitable, añadir la redirección 301 en `public/_redirects` y en `astro.config.mjs`.
- **Dependencias:** `npm outdated` cada pocos meses; actualizar Astro siguiendo su guía de migración y ejecutar `npm test` antes de desplegar.
- **Enlaces externos:** revisar periódicamente; las webs de las herramientas cambian a menudo.
- **Índice de búsqueda:** si el sitio supera unos miles de entradas, migrar a Pagefind.
