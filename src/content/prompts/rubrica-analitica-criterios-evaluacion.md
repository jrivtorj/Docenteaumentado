---
titulo: Rúbrica analítica a partir de criterios de evaluación
descripcion: Genera una rúbrica analítica con dimensiones observables y descriptores sin adjetivos valorativos, vinculada a tus criterios de evaluación reales.
finalidad: Obtener una rúbrica fiable, en la que dos docentes asignarían el mismo nivel a la misma producción, y una versión comprensible para el alumnado.
tarea: evaluacion
etapas: [todas]
generico: true
herramientas: [chatgpt, claude, gemini, magicschool]
fechaPublicacion: 2026-10-12
etiquetas: [rúbricas, evaluación, descriptores, criterios de evaluación]
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
relacionados: [rubricas-con-ia-paso-a-paso]
estado: publicado
variables:
  - nombre: TAREA
    descripcion: Qué produce o hace el alumnado y qué se puede observar.
    ejemplo: "Exposición oral de 5 minutos por parejas explicando un fenómeno químico cotidiano, con presentación de máximo 5 diapositivas y dos preguntas del público"
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 4.º ESO
  - nombre: CRITERIOS
    descripcion: Criterios de evaluación literales del currículo que se evalúan con esta tarea.
    ejemplo: "(pega aquí los criterios literales)"
  - nombre: NIVELES
    descripcion: Número de niveles de desempeño.
    ejemplo: "4"
prompt: |
  Actúa como especialista en evaluación competencial en educación secundaria.

  TAREA QUE SE EVALÚA
  [TAREA]

  CURSO: [CURSO]

  CRITERIOS DE EVALUACIÓN (literales, no los modifiques):
  [CRITERIOS]

  Trabaja en tres pasos y muéstrame el resultado de cada uno:

  PASO 1. Propón entre 3 y 5 dimensiones observables en esta tarea concreta. Para cada dimensión indica qué criterio de evaluación permite valorar y qué evidencia concreta se observa.

  PASO 2. Redacta [NIVELES] niveles de desempeño para cada dimensión, en una tabla con las dimensiones en filas y los niveles en columnas (del más bajo al más alto). Reglas obligatorias:
  - Cada descriptor describe lo que se observa o lo que incluye la producción. No uses adjetivos valorativos como descriptor («excelente», «adecuado», «correcto», «bien», «mal», «suficiente»).
  - La diferencia entre niveles es cualitativa y verificable, no de cantidad vaga («algunos», «bastantes», «muchos»).
  - El penúltimo nivel describe un desempeño que cumple el criterio.
  - Lenguaje claro y preciso.

  PASO 3. Revisa tu propia rúbrica respondiendo: ¿dos docentes distintos asignarían el mismo nivel a la misma producción? ¿Hay solapamientos entre niveles? ¿Algún descriptor no es observable en esta tarea? Propón y aplica las correcciones.

  Al final, añade una versión de la rúbrica para el alumnado, en segunda persona («Explicas…», «Incluyes…»), sin cambiar el contenido de los descriptores.

  No inventes criterios de evaluación ni añadas otros distintos de los que te he dado.
---

## Cómo usarlo

Rellena sobre todo **[TAREA]** con detalle: cuanto más concreta sea la evidencia observable, mejores serán los descriptores. En **[CRITERIOS]**, pega los textos literales de tu currículo.

## Ejemplo de aplicación

Con los valores de ejemplo, una dimensión razonable sería «Explicación del fenómeno», con un nivel alto que exige identificar reactivos y productos, justificar con una evidencia observable y representar el proceso con una ecuación ajustada. Antes de usar la rúbrica, **aplícala a dos trabajos reales** de cursos anteriores: si dudas entre dos niveles, el descriptor necesita más precisión.

Procedimiento completo en el tutorial [Cómo crear rúbricas con IA paso a paso](/articulos/rubricas-con-ia-paso-a-paso/).
