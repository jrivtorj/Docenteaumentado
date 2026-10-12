---
titulo: Revisión pedagógica de un material generado por IA
descripcion: Pide a la IA que actúe como revisor exigente de un material, señalando afirmaciones a verificar, desajustes curriculares, sesgos y problemas de accesibilidad.
finalidad: Obtener un diagnóstico estructurado de un material antes de llevarlo al aula, sin que la IA lo reescriba, para que el docente decida qué corregir.
tarea: revision-materiales
etapas: [todas]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [revisión, calidad, sesgos, accesibilidad]
temas: [ia-para-docentes, alfabetizacion-digital-pensamiento-critico]
relacionados: [revisar-materiales-generados-por-ia]
estado: publicado
variables:
  - nombre: MATERIAL
    descripcion: El material que quieres revisar (o indica que lo adjuntas).
    ejemplo: "(pega aquí la ficha, el texto o la actividad)"
  - nombre: CURSO
    descripcion: Curso y etapa del alumnado destinatario.
    ejemplo: 1.º ESO
  - nombre: CRITERIOS
    descripcion: Criterios de evaluación que el material debería trabajar.
    ejemplo: "(pega aquí los criterios literales)"
prompt: |
  Actúa como revisor pedagógico exigente. Tu tarea es diagnosticar, no reescribir.

  MATERIAL A REVISAR:
  [MATERIAL]

  DESTINATARIOS: alumnado de [CURSO].
  CRITERIOS DE EVALUACIÓN QUE DEBE TRABAJAR: [CRITERIOS]

  Revisa el material y organiza tus observaciones en estos apartados. En cada observación cita el fragmento exacto entre comillas y justifica brevemente:

  1. EXACTITUD: afirmaciones, datos, cifras, fechas o referencias que deben verificarse en una fuente primaria. Indica cuáles te parecen dudosas y por qué. No afirmes que algo es correcto si no puedes justificarlo.
  2. ALINEACIÓN CURRICULAR: partes que no trabajan los criterios indicados y criterios que quedan sin trabajar.
  3. ADECUACIÓN: lenguaje, longitud o ejemplos inadecuados para la edad y el contexto (ejemplos de otros países o sistemas educativos, por ejemplo).
  4. SESGOS Y REPRESENTACIÓN: estereotipos o falta de diversidad en ejemplos y personajes.
  5. ACCESIBILIDAD: estructura, instrucciones, información transmitida solo por color o imágenes sin descripción.

  Termina con una lista priorizada de las cinco correcciones más importantes.
  No reescribas el material.
---

## Cómo usarlo

Úsalo **después** de tu primera lectura, como segundo lector. La instrucción «no reescribas» es deliberada: quieres un diagnóstico que puedas evaluar, no una versión nueva con errores nuevos.

## Ejemplo de aplicación

Aplicado a una ficha de lectura sobre el ciclo del agua para 1.º ESO, este prompt suele detectar datos numéricos sin fuente (porcentajes de agua dulce, por ejemplo), ejemplos poco cercanos al alumnado de Canarias y preguntas finales que solo piden recordar. La verificación de los datos sigue siendo tuya: busca cada cifra en una fuente fiable o elimínala.

Protocolo completo en [Cómo revisar y mejorar materiales generados por IA](/articulos/revisar-materiales-generados-por-ia/).
