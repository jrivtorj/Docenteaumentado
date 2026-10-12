---
titulo: Actividad de verificación de fuentes a partir de una respuesta de IA
descripcion: Prepara una actividad en la que el alumnado contrasta las afirmaciones de una respuesta generada por IA con fuentes y las clasifica según su respaldo.
finalidad: Que el alumnado aprenda que una respuesta con apariencia de verificada no lo está hasta que alguien comprueba las fuentes, y practique la búsqueda y evaluación de fuentes fiables.
tarea: alfabetizacion-ia
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [perplexity, chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [verificación, fuentes, alfabetización mediática, pensamiento crítico]
temas: [alfabetizacion-digital-pensamiento-critico]
relacionados: [alfabetizacion-ia-alumnado-pensamiento-critico]
estado: publicado
variables:
  - nombre: TEMA
    descripcion: Tema o pregunta sobre el que se trabajará.
    ejemplo: ¿Es verdad que la calima afecta a la salud respiratoria en Canarias?
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 4.º ESO
  - nombre: RESPUESTA
    descripcion: Respuesta de un asistente o buscador de IA sobre el tema, que habrás generado previamente.
    ejemplo: "(pega aquí la respuesta generada, con sus enlaces si los tiene)"
  - nombre: SESIONES
    descripcion: Tiempo disponible.
    ejemplo: una sesión de 55 minutos
prompt: |
  Actúa como docente experto en alfabetización mediática e informacional.

  Prepara una actividad de verificación de fuentes para alumnado de [CURSO], de [SESIONES], sobre el tema: [TEMA].

  RESPUESTA GENERADA POR IA QUE EL ALUMNADO ANALIZARÁ:
  [RESPUESTA]

  1. Extrae de la respuesta entre 5 y 8 afirmaciones verificables y numéralas.
  2. Para cada afirmación, indica qué tipo de fuente permitiría verificarla (organismo oficial, artículo científico, estadística pública, medio de comunicación) y qué términos de búsqueda podría usar el alumnado. No afirmes cuál es la respuesta correcta ni inventes fuentes concretas.
  3. Diseña una ficha de trabajo para el alumnado con una tabla: afirmación | fuente consultada (título, autor u organismo, fecha, enlace) | ¿qué dice exactamente la fuente? | valoración (respaldada / parcialmente respaldada / no respaldada / no encontrada).
  4. Incluye una mini guía de cinco preguntas para evaluar la fiabilidad de una fuente.
  5. Propón tres preguntas para la puesta en común final.

  Organiza la actividad por grupos y con tiempos. El lenguaje de la ficha debe ser adecuado para [CURSO].
---

## Cómo usarlo

Genera antes la [RESPUESTA] con un buscador conversacional que incluya enlaces, como [Perplexity](/herramientas/perplexity/), o con cualquier asistente. Hazlo tú con tu cuenta: el alumnado no necesita usar la herramienta para hacer la actividad.

## Ejemplo de aplicación

Con el tema de la calima, el alumnado puede encontrar que algunas afirmaciones están respaldadas por organismos sanitarios o meteorológicos oficiales, que otras se apoyan en un medio que cita un estudio sin enlazarlo y que alguna no aparece en ninguna fuente. La puesta en común sobre esa última categoría es la parte más valiosa de la actividad.

Más propuestas en [Alfabetización en IA para el alumnado](/articulos/alfabetizacion-ia-alumnado-pensamiento-critico/).
