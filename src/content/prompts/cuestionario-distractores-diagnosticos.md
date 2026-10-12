---
titulo: Cuestionario de opción múltiple con distractores diagnósticos
descripcion: Crea un cuestionario anclado a tu material, con tabla de especificaciones, distintos niveles cognitivos y distractores basados en errores frecuentes.
finalidad: Generar preguntas de opción múltiple que evalúen comprensión y aplicación, no solo memoria, y cuyos distractores informen sobre qué no ha entendido el alumnado.
tarea: pruebas-cuestionarios
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini, gemini-notebook]
fechaPublicacion: 2026-10-12
etiquetas: [cuestionarios, opción múltiple, distractores, exámenes]
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
relacionados: [pruebas-y-cuestionarios-con-ia]
estado: publicado
variables:
  - nombre: MATERIAL
    descripcion: Texto del tema o apuntes en los que se basan las preguntas (o indica que lo adjuntas como archivo).
    ejemplo: "(pega aquí el texto del tema o indica: «el documento adjunto»)"
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 2.º Bachillerato
  - nombre: CRITERIOS
    descripcion: Criterios de evaluación literales que se evalúan.
    ejemplo: "(pega aquí los criterios literales)"
  - nombre: NUMERO
    descripcion: Número de preguntas.
    ejemplo: "12"
prompt: |
  Actúa como especialista en evaluación y en la didáctica de la materia del material que te proporciono.

  MATERIAL DE REFERENCIA (usa exclusivamente esta información; si algo no está aquí, no lo preguntes):
  [MATERIAL]

  CURSO: [CURSO]
  CRITERIOS DE EVALUACIÓN: [CRITERIOS]

  PASO 1. Propón una tabla de especificaciones para [NUMERO] preguntas: filas = apartados del material; columnas = recordar, comprender, aplicar, analizar. Al menos la mitad de las preguntas deben ser de aplicar o analizar. Espera mi confirmación antes de seguir.

  PASO 2. Cuando confirme la tabla, redacta las preguntas con estas reglas:
  - Cuatro opciones y una sola respuesta correcta sin ambigüedad.
  - Cada distractor representa un error conceptual frecuente del alumnado, no una opción absurda.
  - Opciones de longitud y estructura similares; sin pistas gramaticales.
  - Prohibido «todas las anteriores» y «ninguna de las anteriores».
  - Evita negaciones en el enunciado; si son imprescindibles, escríbelas en MAYÚSCULAS.
  - En preguntas numéricas, incluye la resolución completa con unidades.

  Para cada pregunta indica: respuesta correcta, justificación breve con referencia al apartado del material, error conceptual que representa cada distractor y nivel cognitivo.

  PASO 3. Revisa todas las preguntas y señala cualquiera que pueda tener más de una respuesta defendible o que se pueda responder sin conocer el contenido.
---

## Cómo usarlo

Funciona mejor si el asistente trabaja **sobre tu material**. En herramientas que admiten archivos, adjunta el documento y escribe en [MATERIAL] «el documento adjunto». En [Gemini Notebook](/herramientas/gemini-notebook/), sube el material como fuente y pega el resto del prompt.

## Ejemplo de aplicación

En una prueba de Química de 2.º de Bachillerato sobre equilibrio químico, un buen distractor en una pregunta sobre el efecto de añadir un catalizador sería «desplaza el equilibrio hacia los productos»: representa un error conceptual frecuente (confundir velocidad y posición del equilibrio), y si un estudiante lo elige sabes exactamente qué reforzar.

Revisa cada pregunta con la lista de control del tutorial [Pruebas y cuestionarios con IA](/articulos/pruebas-y-cuestionarios-con-ia/). En las numéricas, resuelve tú al menos una.
