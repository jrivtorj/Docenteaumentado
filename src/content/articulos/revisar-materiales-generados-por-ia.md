---
titulo: "Cómo revisar y mejorar materiales generados por IA antes de llevarlos al aula"
descripcion: Un protocolo de revisión en cinco capas (exactitud, alineación curricular, adecuación, sesgos y accesibilidad) para materiales generados con IA.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: tutorial
temas: [ia-para-docentes, alfabetizacion-digital-pensamiento-critico, ia-matematicas-ciencias]
etiquetas: [revisión, calidad, sesgos, accesibilidad, verificación]
necesidad: "¿Qué tengo que revisar exactamente en un material hecho con IA antes de dárselo a mi alumnado?"
estado: publicado
seo:
  titulo: "Cómo revisar materiales generados por IA antes de usarlos"
fuentes:
  - titulo: Does ChatGPT tell the truth?
    url: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
    editor: OpenAI Help Center
    consultado: 2026-10-12
  - titulo: Guía sobre el uso de la inteligencia artificial en el ámbito educativo
    url: https://code.intef.es/wp-content/uploads/2024/07/Gu%C3%ADa-sobre-el-uso-de-la-IA-en-el-%C3%A1mbito-educativo-INTEF_2024.pdf
    editor: INTEF
    fecha: "2024"
    consultado: 2026-10-12
---

Todo lo que genera una IA es un borrador. La cuestión práctica es **cómo revisarlo de forma eficiente**, porque una revisión superficial deja pasar errores y una revisión exhaustiva puede costar más que haber hecho el material desde cero. Este tutorial propone un protocolo en cinco capas, de la más crítica a la más fina, para que sepas dónde mirar primero.

**Necesitas:** el material generado, los referentes curriculares y entre 10 y 30 minutos según la extensión.

## Capa 1. Exactitud

Es la capa que no admite atajos.

- **Datos, cifras y fechas:** comprueba cada uno en una fuente primaria o en tu material de referencia. Si no puedes verificarlo, elimínalo o reformúlalo sin el dato.
- **Referencias y citas:** abre cada enlace y busca cada referencia. Las referencias inventadas son uno de los errores más conocidos de estos sistemas; la documentación de OpenAI menciona expresamente las citas o referencias a fuentes que no existen.
- **Cálculos y unidades:** resuelve los ejercicios numéricos. En ciencias, aplica el método de la guía [IA en matemáticas y ciencias](/articulos/ia-matematicas-ciencias-errores-y-usos-fiables/).
- **Conceptos:** busca simplificaciones que induzcan errores conceptuales.

**Atajo útil:** pide a la IA que liste todas las afirmaciones verificables del material. Revisar una lista es más rápido que releer el texto; aun así, la verificación la haces tú en las fuentes.

## Capa 2. Alineación curricular

- ¿El material trabaja los criterios de evaluación que pretendes?
- ¿Los criterios citados son literales de tu currículo o han sido parafraseados o inventados?
- ¿El nivel de exigencia corresponde al curso?

Si el material no está alineado, no lo pulas: vuelve a generarlo con los referentes pegados en el prompt, como explicamos en [cómo escribir prompts eficaces](/articulos/como-escribir-prompts-para-docentes/).

## Capa 3. Adecuación al grupo

- **Lenguaje:** ¿el vocabulario y la longitud de las frases son adecuados a la edad y al nivel lector?
- **Contexto:** ¿los ejemplos son reconocibles para tu alumnado? La IA tiende a ejemplos genéricos o de otros países (moneda, sistema educativo, referencias culturales).
- **Tiempo:** ¿es realizable en el tiempo previsto?
- **Variedad:** ¿hay un exceso de estructura repetida, típica de los textos generados (listas de tres, conclusiones que repiten la introducción)?

## Capa 4. Sesgos y representación

- ¿Quién aparece en los ejemplos? Revisa la diversidad de nombres, profesiones, roles y contextos.
- ¿Hay estereotipos de género, origen o capacidad en los ejemplos o en las imágenes?
- En temas controvertidos, ¿se presenta un solo punto de vista como si fuera el único?

Los modelos reproducen patrones de los datos con los que se entrenaron, incluidos los sesgos. No es un problema exclusivo de la IA, pero conviene revisarlo de forma explícita.

## Capa 5. Accesibilidad y formato

- Estructura con títulos claros y listas cuando ayuden.
- Imágenes con texto alternativo y sin información que solo se transmita por color.
- Tamaño de letra y contraste suficientes en materiales proyectados o impresos.
- Instrucciones separadas del contenido y numeradas.

## Una revisión asistida, pero no delegada

Puedes usar la propia IA como **segundo lector**, siempre después de tu primera revisión de exactitud:

```text
Actúa como revisor pedagógico exigente. Revisa el material adjunto para [CURSO] y señala, citando el fragmento exacto:
1. Afirmaciones que deberían verificarse.
2. Partes que no se ajustan a estos criterios de evaluación: [CRITERIOS].
3. Lenguaje inadecuado para la edad.
4. Posibles sesgos o estereotipos.
5. Problemas de accesibilidad.
No reescribas el material; solo señala y justifica.
```

Pedir que **no reescriba** es importante: quieres un diagnóstico que puedas evaluar, no una nueva versión con nuevos errores. El prompt completo está en la biblioteca: [revisión pedagógica de un material generado por IA](/prompts/revision-pedagogica-material-ia/).

## Cuánto revisar

No todo requiere la misma profundidad. Una orientación razonable:

| Tipo de material | Capas imprescindibles |
|---|---|
| Ideas o lluvia de propuestas para ti | 2 |
| Material que el alumnado leerá o usará | 1, 2, 3 y 5 |
| Pruebas y criterios de calificación | Todas, con especial atención a la 1 |
| Materiales con contenido social, histórico o de valores | Todas, con especial atención a la 4 |

## Conclusión práctica

Revisa en orden: **exactitud, alineación, adecuación, sesgos y accesibilidad**. La primera capa nunca se delega; las demás pueden apoyarse en una revisión asistida que señale sin reescribir. Con este protocolo, la revisión se vuelve sistemática y más rápida, y el material que llega al aula es tuyo de verdad.
