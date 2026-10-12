---
titulo: "Qué es (y qué no es) la IA generativa: guía para docentes"
descripcion: Cómo funciona un modelo de lenguaje, por qué se equivoca con tanta seguridad y qué consecuencias tiene para preparar clases y evaluar.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: guia
temas: [ia-para-docentes, alfabetizacion-digital-pensamiento-critico]
etiquetas: [modelos de lenguaje, alucinaciones, fundamentos, criterio docente]
destacado: true
necesidad: "¿Qué tengo que saber de cómo funciona la IA para usarla bien en clase sin ser informático?"
estado: publicado
fuentes:
  - titulo: Does ChatGPT tell the truth?
    url: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
    editor: OpenAI Help Center
    consultado: 2026-10-12
  - titulo: Guidance for generative AI in education and research
    url: https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
    editor: UNESCO
    fecha: "2023"
    consultado: 2026-10-12
  - titulo: AI competency framework for teachers
    url: https://www.unesco.org/en/articles/ai-competency-framework-teachers
    editor: UNESCO
    fecha: "2024"
    consultado: 2026-10-12
  - titulo: Guía sobre el uso de la inteligencia artificial en el ámbito educativo
    url: https://code.intef.es/wp-content/uploads/2024/07/Gu%C3%ADa-sobre-el-uso-de-la-IA-en-el-%C3%A1mbito-educativo-INTEF_2024.pdf
    editor: INTEF, Ministerio de Educación
    fecha: "2024"
    consultado: 2026-10-12
---

Muchos docentes usan ya asistentes como ChatGPT, Claude o Gemini sin haber tenido tiempo de entender qué hay detrás. No hace falta saber programar para usarlos bien, pero sí conviene tener un **modelo mental correcto** de cómo funcionan. Casi todos los errores que se cometen al usarlos en educación (confiar en una cifra inventada, aceptar un criterio de evaluación que no existe, pedir al alumnado que «compruebe con la IA») nacen de un modelo mental equivocado.

Esta guía resume lo imprescindible y lo traduce a decisiones de aula.

## Un modelo de lenguaje predice texto, no consulta una base de datos

Un asistente conversacional se apoya en un **modelo de lenguaje**: un sistema entrenado con enormes cantidades de texto para estimar qué fragmento es más probable que venga a continuación de otro. A partir de esa capacidad, y de un entrenamiento adicional para seguir instrucciones y mantener conversaciones, el modelo es capaz de redactar, resumir, traducir, clasificar o reformular con una fluidez notable.

La clave está en lo que **no** hace por defecto: no busca la respuesta en un archivo de hechos verificados. Genera el texto que resulta plausible dado lo que ha aprendido y lo que tú le has escrito. Por eso:

- Un texto puede ser perfectamente redactado y, a la vez, falso.
- La seguridad con la que responde no indica que la respuesta sea correcta. La propia OpenAI advierte en su centro de ayuda de que ChatGPT puede expresar mucha confianza incluso cuando se equivoca.
- Si le pides una referencia bibliográfica, puede construir una que *parece* real (autor verosímil, revista existente, año razonable) y no lo es.

A ese fenómeno se le suele llamar **alucinación**. No es un fallo ocasional que se vaya a corregir del todo en la próxima versión: es una consecuencia de cómo funcionan estos sistemas. Las versiones recientes se equivocan menos y muchas pueden buscar en la web o trabajar con documentos que tú les das, lo que reduce el problema, pero no lo elimina.

<div class="nota nota--clave">

**Regla práctica:** trata cada respuesta como el borrador de un colaborador rápido y bien informado, pero que no siempre distingue lo que sabe de lo que supone. Todo lo que vaya a llegar al alumnado pasa antes por tu revisión.

</div>

## Lo que hace bien y lo que hace mal

Pensar en términos de tareas ayuda más que pensar en términos de herramientas.

| Tarea | Rendimiento habitual | Qué hacer |
|---|---|---|
| Redactar borradores (actividades, comunicaciones, enunciados) | Muy bueno | Úsalo y corrige el tono y los detalles |
| Reformular un texto a otro nivel de lectura | Muy bueno | Comprueba que no se pierde rigor |
| Generar variantes de un ejercicio | Bueno | Revisa que todas tienen solución y la misma dificultad |
| Proponer ideas, analogías y ejemplos | Bueno | Selecciona; descarta lo genérico |
| Resumir documentos que tú le das | Bueno, con omisiones | Pide que cite el apartado de origen |
| Dar datos concretos (fechas, cifras, normativa) | Poco fiable | Verifica siempre en la fuente primaria |
| Cálculos encadenados y unidades | Irregular | Comprueba cada resultado; ver la [guía de matemáticas y ciencias](/articulos/ia-matematicas-ciencias-errores-y-usos-fiables/) |
| Citar bibliografía | Poco fiable si no busca en fuentes | No uses una referencia que no hayas abierto |

## El contexto lo es casi todo

Un modelo no sabe quién es tu alumnado, qué currículo aplicas ni cuánto tiempo tienes. Si no se lo dices, rellenará esos huecos con lo más probable, que suele ser lo más genérico. La diferencia entre «hazme una actividad sobre la célula» y una petición que indica etapa, nivel del grupo, duración, criterios de evaluación literales del currículo y formato de salida es la diferencia entre un material que acabas tirando y uno que puedes usar con ajustes menores.

Por eso dedicamos una guía completa a [cómo escribir prompts eficaces para tareas docentes](/articulos/como-escribir-prompts-para-docentes/) y mantenemos una [biblioteca de prompts](/prompts/) con variables que puedes rellenar.

Dos consecuencias prácticas:

1. **Dale tus referentes, no le pidas que los recuerde.** Si quieres que una actividad se alinee con unos criterios de evaluación, pégalos literalmente. Si le pides que los «busque» o los «recuerde», puede inventar criterios con apariencia oficial.
2. **Trabaja con documentos cuando puedas.** Las herramientas que responden a partir de las fuentes que tú subes, como [Gemini Notebook](/herramientas/gemini-notebook/), y que citan el pasaje del que sale cada afirmación, facilitan mucho la verificación.

## Por qué no es una fuente

Esta idea es tan importante para el docente como para el alumnado. Un asistente de IA puede ayudarte a *encontrar* y *comprender* fuentes, pero no es una fuente en sí mismo: no tiene autoría identificable, no es estable (la misma pregunta puede dar respuestas distintas) y no se responsabiliza de lo que dice.

En el aula esto se traduce en una norma sencilla: **lo que se afirma como hecho debe poder rastrearse hasta una fuente que una persona pueda consultar**. Es la base de la [alfabetización en IA para el alumnado](/articulos/alfabetizacion-ia-alumnado-pensamiento-critico/).

## Qué cambia en tu trabajo y qué no

La IA generativa acelera de forma real algunas tareas docentes, sobre todo las de producción de primeros borradores. No cambia, en cambio, las decisiones que dan sentido a esas tareas:

- **Qué** debe aprender este grupo concreto y **por qué**.
- **Cómo** sabremos que lo ha aprendido.
- **Qué** ajustes necesita cada alumno o alumna.

Los marcos de referencia internacionales apuntan en la misma dirección. El marco de competencias en IA para docentes que publicó la UNESCO en 2024 sitúa la «mentalidad centrada en el ser humano» y la ética de la IA como dimensiones propias, junto a los fundamentos técnicos y la pedagogía. La guía del INTEF de 2024 dedica apartados específicos a los retos, las limitaciones y las medidas preventivas para docentes y alumnado.

## Antes de pedirle algo, tres preguntas

1. **¿Puedo comprobar el resultado?** Si no tienes forma de saber si la respuesta es correcta, no la uses para esa tarea.
2. **¿Qué datos estoy compartiendo?** Nunca datos personales del alumnado en herramientas no autorizadas por tu administración. Lo explicamos en la guía de [protección de datos](/articulos/proteccion-datos-ia-centros-educativos/).
3. **¿Me ahorra tiempo de verdad?** Si revisar y corregir el resultado te lleva más que hacerlo tú, no compensa.

## Conclusión práctica

La IA generativa es una herramienta de **producción de borradores** y de **transformación de textos**, excelente para eso y poco fiable como fuente de datos. Úsala con tres hábitos: dale contexto y referentes literales, exígele que señale de dónde sale cada afirmación cuando trabaje con documentos, y revisa todo lo que vaya a llegar al alumnado. El criterio pedagógico, el que decide qué merece la pena enseñar y cómo, sigue siendo tuyo.
