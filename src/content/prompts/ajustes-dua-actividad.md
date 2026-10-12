---
titulo: Ajustes de una actividad según el Diseño Universal para el Aprendizaje
descripcion: Analiza una actividad existente y propone ajustes concretos según los principios del DUA (representación, acción y expresión, implicación) sin cambiar los objetivos.
finalidad: Hacer accesible una actividad para todo el grupo desde el diseño, en lugar de preparar adaptaciones individuales a posteriori.
tarea: adaptacion
etapas: [todas]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [DUA, inclusión, atención a la diversidad, accesibilidad]
temas: [situaciones-de-aprendizaje-ia]
relacionados: [situacion-de-aprendizaje-con-ia-paso-a-paso]
estado: publicado
variables:
  - nombre: ACTIVIDAD
    descripcion: Descripción de la actividad tal como la tienes ahora.
    ejemplo: "(pega aquí la actividad: objetivo, pasos, producto, evaluación)"
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 4.º ESO
  - nombre: NECESIDADES
    descripcion: Necesidades presentes en el grupo, descritas de forma genérica y sin datos personales.
    ejemplo: dificultades de atención sostenida, alumnado que se incorpora al sistema educativo con escaso dominio del español, alta capacidad
  - nombre: RECURSOS
    descripcion: Recursos realmente disponibles.
    ejemplo: proyector, portátiles compartidos, un docente de apoyo dos horas a la semana
prompt: |
  Actúa como especialista en Diseño Universal para el Aprendizaje (DUA) en educación secundaria.

  ACTIVIDAD ACTUAL:
  [ACTIVIDAD]

  CURSO: [CURSO]
  NECESIDADES PRESENTES EN EL GRUPO (descripción genérica): [NECESIDADES]
  RECURSOS DISPONIBLES: [RECURSOS]

  1. Identifica las barreras que la actividad actual puede generar para el aprendizaje y la participación, relacionándolas con las necesidades indicadas.
  2. Propón ajustes organizados según los tres principios del DUA:
     - Múltiples formas de representación (cómo se presenta la información).
     - Múltiples formas de acción y expresión (cómo demuestra el alumnado lo aprendido).
     - Múltiples formas de implicación (cómo se motiva y se sostiene el esfuerzo).
  3. Para cada ajuste indica: qué barrera reduce, cómo se aplica en la práctica con los recursos disponibles y cuánto tiempo de preparación requiere aproximadamente.
  4. Comprueba que ningún ajuste modifica los objetivos ni los criterios de evaluación; si alguno lo hace, márcalo.

  Prioriza ajustes que beneficien a todo el grupo y que sean realistas con los recursos indicados. No propongas tecnologías o recursos que no estén disponibles.
---

## Cómo usarlo

Describe las necesidades **sin datos personales**: no nombres ni diagnósticos de estudiantes concretos. El DUA trabaja precisamente desde el diseño para el grupo, no desde el caso individual.

## Ejemplo de aplicación

Para una actividad de 4.º ESO basada en leer un texto largo y responder por escrito, los ajustes típicos incluyen presentar la información también en un esquema visual o un audio, permitir que el producto final sea una explicación oral grabada o un mapa conceptual y dividir la tarea en etapas con comprobaciones intermedias. Revisa que la opción de expresión alternativa siga permitiendo observar el criterio de evaluación.
