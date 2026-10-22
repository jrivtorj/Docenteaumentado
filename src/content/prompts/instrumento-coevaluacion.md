---
titulo: Instrumento de coevaluación basado en evidencias
descripcion: Genera una lista de cotejo, escala, rúbrica breve o diana para que el alumnado valore el trabajo de sus compañeros con criterios observables.
finalidad: Pasar de una coevaluación de impresiones («está bien», «se nota que ha trabajado») a una valoración que el alumnado justifica con evidencias del trabajo y que termina en una propuesta de mejora concreta.
tarea: evaluacion
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-22
etiquetas: [coevaluación, lista de cotejo, diana de evaluación, evaluación formativa, criterios de evaluación]
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
relacionados: [coevaluacion-con-ia-instrumentos-basados-en-evidencias, rubricas-con-ia-paso-a-paso]
estado: publicado
variables:
  - nombre: CURSO
    descripcion: Etapa y curso.
    ejemplo: 4.º ESO
  - nombre: EDAD
    descripcion: Edad aproximada del alumnado, para ajustar el lenguaje.
    ejemplo: 15-16 años
  - nombre: MATERIA
    descripcion: Materia o módulo.
    ejemplo: Matemáticas
  - nombre: ACTIVIDAD
    descripcion: Qué hace el alumnado y en qué condiciones (individual, por equipos, duración).
    ejemplo: "Exposición por equipos de 5 minutos comparando dos ofertas comerciales con porcentajes y una conclusión justificada"
  - nombre: PRODUCTO
    descripcion: Qué producto o evidencia observarán los compañeros.
    ejemplo: la exposición oral y la diapositiva con los cálculos
  - nombre: CRITERIOS
    descripcion: Criterios de evaluación literales de tu currículo que se trabajan en la actividad.
    ejemplo: "(pega aquí los criterios literales)"
  - nombre: TIEMPO
    descripcion: Tiempo del que dispone el alumnado para completar el instrumento.
    ejemplo: 5 minutos por exposición
prompt: |
  Actúa como especialista en evaluación formativa y en diseño de instrumentos de coevaluación.

  CONTEXTO
  - Etapa y curso: [CURSO]
  - Edad aproximada del alumnado: [EDAD]
  - Materia o módulo: [MATERIA]
  - Actividad que se coevalúa: [ACTIVIDAD]
  - Producto o evidencia que observarán los compañeros: [PRODUCTO]
  - Tiempo para completar el instrumento: [TIEMPO]

  CRITERIOS DE EVALUACIÓN (literales, no los modifiques):
  [CRITERIOS]

  TAREA
  Diseña un instrumento breve para que el alumnado valore el trabajo de sus compañeros.

  INSTRUCCIONES
  1. Propón entre cuatro y seis indicadores observables en este producto. Para cada uno, indica de qué criterio de evaluación procede. No añadas aspectos que no estén en esos criterios.
  2. Elige el formato más adecuado (lista de cotejo, escala de valoración, rúbrica breve o diana de evaluación) y justifica la elección en una frase. Si dudas, usa una lista de cotejo con las opciones «Sí», «En parte» y «Todavía no».
  3. Si usas niveles, define cuatro con descriptores concretos y progresivos. No uses «bien», «regular» o «mal» como descriptor.
  4. Añade una columna o un espacio para que quien evalúa anote la evidencia que justifica cada valoración parcial o negativa.
  5. Usa un lenguaje comprensible para alumnado de esa edad.
  6. Añade instrucciones de uso para el alumnado, dos preguntas de reflexión y una frase modelo para proponer una mejora respetuosa.
  7. Excluye simpatía, popularidad, personalidad, actitud, esfuerzo no observable y cualquier rasgo que no sea evidencia del aprendizaje.
  8. No asignes puntos, porcentajes ni notas: el instrumento es para recoger evidencias y mejorar, no para calcular una calificación.
  9. Comprueba que se puede completar en el tiempo indicado.
  10. Presenta el instrumento en una tabla lista para imprimir.
  11. Termina con una breve guía para el docente: posibles ambigüedades de los indicadores y qué debo revisar antes de usarlo.

  Si falta información imprescindible, pregúntame antes de completar el instrumento.
---

## Cómo usarlo

Lo más importante es **[CRITERIOS]**: pega los criterios de evaluación literales de tu currículo. Así cada indicador queda vinculado a un criterio y la IA no inventa objetivos. Describe en **[ACTIVIDAD]** y **[PRODUCTO]** qué van a ver exactamente los compañeros, porque solo se puede coevaluar lo que se observa.

No incluyas nombres ni datos del alumnado, y no subas a la IA las coevaluaciones ya rellenadas.

## Ejemplo de aplicación

Con los valores de ejemplo, una lista de cotejo razonable incluiría indicadores como «Muestra los cálculos de porcentajes de forma que se pueden seguir» o «Justifica la conclusión con los resultados obtenidos». Cada uno llevaría las opciones «Sí», «En parte» y «Todavía no», y un espacio para anotar la evidencia. Antes de usarlo, **pruébalo con un trabajo de muestra**: si dos estudiantes marcan opciones muy distintas sobre lo mismo, el indicador necesita más precisión.

El método completo, con un instrumento de ejemplo y la lista de comprobación, está en [Coevaluación con IA: instrumentos basados en evidencias](/articulos/coevaluacion-con-ia-instrumentos-basados-en-evidencias/).
