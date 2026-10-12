---
titulo: Adaptar un texto a tres niveles de lectura sin perder rigor
descripcion: Reescribe un texto expositivo en tres niveles de complejidad lectora manteniendo los conceptos clave, con glosario y preguntas de comprensión.
finalidad: Disponer de versiones del mismo texto para alumnado con distintos niveles de competencia lectora o de dominio del idioma, sin rebajar el contenido científico o disciplinar.
tarea: adaptacion
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [atención a la diversidad, lectura fácil, adaptación de materiales, DUA]
temas: [ia-para-docentes]
relacionados: [revisar-materiales-generados-por-ia]
estado: publicado
variables:
  - nombre: TEXTO
    descripcion: Texto original que quieres adaptar.
    ejemplo: "(pega aquí el texto original)"
  - nombre: CURSO
    descripcion: Curso del grupo.
    ejemplo: 2.º ESO
  - nombre: CONCEPTOS
    descripcion: Conceptos o términos que deben mantenerse en todas las versiones.
    ejemplo: energía cinética, energía potencial, conservación de la energía
prompt: |
  Actúa como docente experto en atención a la diversidad y en accesibilidad cognitiva.

  TEXTO ORIGINAL:
  [TEXTO]

  Crea tres versiones de este texto para alumnado de [CURSO]:

  VERSIÓN A (apoyo intenso): frases cortas (una idea por frase), vocabulario frecuente, estructura muy explícita con subtítulos, ejemplos cotidianos. Pensada para alumnado con dificultades de comprensión lectora o en proceso de aprendizaje del español.
  VERSIÓN B (estándar): adecuada al nivel medio del curso.
  VERSIÓN C (ampliación): mayor densidad conceptual, conexiones con otros contenidos y una pregunta abierta de reflexión.

  Reglas para las tres versiones:
  - Mantén SIEMPRE estos conceptos con su nombre correcto: [CONCEPTOS]. Puedes explicarlos con palabras más sencillas, pero no sustituirlos ni eliminarlos.
  - No introduzcas información que no esté en el texto original, salvo ejemplos cotidianos claramente identificados como ejemplos.
  - No simplifiques hasta el punto de introducir errores conceptuales.

  Para la versión A añade un glosario de un máximo de ocho términos con definiciones de una línea.
  Para cada versión, añade tres preguntas de comprensión de dificultad creciente.

  Al final, indica qué simplificaciones podrían inducir a error y cómo matizarlas en clase.
---

## Cómo usarlo

La variable **[CONCEPTOS]** es la garantía de rigor: obliga a mantener la terminología de la materia en todas las versiones. Revisa especialmente la versión A, que es donde la simplificación puede introducir errores conceptuales.

## Ejemplo de aplicación

Con un texto sobre la energía mecánica para 2.º ESO, la versión A podría explicar la energía potencial con el ejemplo de una pelota en lo alto de una escalera, manteniendo el término «energía potencial». La lista final de simplificaciones peligrosas suele señalar, por ejemplo, que decir «la energía se gasta» contradice la conservación de la energía: un buen punto para comentar en clase.

No incluyas en el prompt información sobre estudiantes concretos. Describe las necesidades de forma genérica, como se explica en [IA y protección de datos en el centro](/articulos/proteccion-datos-ia-centros-educativos/).
