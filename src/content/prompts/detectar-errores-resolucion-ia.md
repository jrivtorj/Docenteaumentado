---
titulo: Actividad para detectar errores en una resolución generada por IA
descripcion: Genera una resolución con errores sutiles y realistas para que el alumnado los encuentre, los clasifique y justifique la corrección.
finalidad: Preparar una actividad de pensamiento crítico en la que el alumnado trabaja el contenido de la materia corrigiendo errores plausibles, y aprende a no fiarse de un texto por su buena apariencia.
tarea: alfabetizacion-ia
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [pensamiento crítico, errores, matemáticas, ciencias, verificación]
temas: [alfabetizacion-digital-pensamiento-critico, ia-matematicas-ciencias]
relacionados: [alfabetizacion-ia-alumnado-pensamiento-critico, ia-matematicas-ciencias-errores-y-usos-fiables]
estado: publicado
variables:
  - nombre: MATERIA
    descripcion: Materia o módulo.
    ejemplo: Matemáticas
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 3.º ESO
  - nombre: CONTENIDO
    descripcion: Contenido o tipo de problema que el grupo ya ha trabajado.
    ejemplo: resolución de problemas con ecuaciones de primer grado
  - nombre: NUMERO_ERRORES
    descripcion: Cuántos errores debe contener la resolución.
    ejemplo: "3"
prompt: |
  Actúa como docente de [MATERIA] en [CURSO] que prepara una actividad de detección de errores.

  Contenido trabajado por el grupo: [CONTENIDO].

  1. Redacta un problema o una explicación propia de este contenido, con un nivel adecuado al curso.
  2. Escribe una resolución o explicación con apariencia de correcta y bien redactada que contenga exactamente [NUMERO_ERRORES] errores. Los errores deben ser variados y realistas, del tipo que comete el alumnado o que cometen los asistentes de IA: un error de cálculo en un paso intermedio, un error de unidades o de notación, un error conceptual o un paso no justificado. No marques los errores en este texto.
  3. Por separado, en un apartado titulado «SOLUCIONARIO PARA EL DOCENTE», indica cada error: dónde está, de qué tipo es, por qué es un error y cuál es la corrección. Incluye la resolución correcta completa.
  4. Propón tres preguntas para la puesta en común con el grupo sobre por qué estos errores pasan desapercibidos.

  Los errores deben ser sutiles pero detectables por un estudiante que domine el contenido del curso. No introduzcas errores en datos que el alumnado no pueda comprobar.
---

## Cómo usarlo

Entrega al alumnado **solo** el problema y la resolución con errores (pasos 1 y 2). El solucionario es para ti. Antes de usarlo, **comprueba tú el solucionario**: la propia IA puede equivocarse al describir sus errores o introducir alguno que no ha señalado.

## Ejemplo de aplicación

Con Matemáticas de 3.º ESO y ecuaciones de primer grado, el resultado típico es un problema contextualizado (por ejemplo, un reparto de gastos) con un error al trasponer un término, otro al operar con fracciones y un tercero en la interpretación final del resultado. Por parejas, el alumnado localiza los errores, los clasifica y redacta la corrección; en la puesta en común se debate por qué un texto bien presentado transmite una confianza que no merece.

Más actividades en [Alfabetización en IA para el alumnado](/articulos/alfabetizacion-ia-alumnado-pensamiento-critico/).
