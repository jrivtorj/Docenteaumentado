---
titulo: "IA en matemáticas y ciencias: usos fiables y errores que debes detectar"
descripcion: Dónde aporta la IA en matemáticas, física, química y biología, qué errores comete con números, unidades y conceptos, y cómo comprobarlos.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: guia
temas: [ia-matematicas-ciencias, ia-para-docentes]
etiquetas: [matemáticas, física y química, biología, cálculo, unidades, verificación]
destacado: true
necesidad: "¿Puedo fiarme de la IA para preparar problemas y explicaciones de ciencias y matemáticas?"
estado: publicado
fuentes:
  - titulo: Does ChatGPT tell the truth?
    url: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
    editor: OpenAI Help Center
    consultado: 2026-10-12
  - titulo: Real Decreto 217/2022, de 29 de marzo (enseñanzas mínimas de la ESO)
    url: https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975
    editor: Boletín Oficial del Estado
    consultado: 2026-10-12
---

En las materias científicas, un error no es una cuestión de estilo. Un factor de conversión mal aplicado, un signo cambiado o una ecuación química sin ajustar convierten un ejercicio en un mal ejemplo, y el alumnado tiende a confiar en lo que le llega impreso. Al mismo tiempo, la IA puede ahorrar mucho trabajo en estas materias si se usa para lo que hace bien.

Esta guía está escrita desde la experiencia de aula en Física y Química y Matemáticas, y se centra en una pregunta: **¿qué puedo delegar y qué tengo que comprobar siempre?**

## Por qué la IA falla precisamente en lo cuantitativo

Un modelo de lenguaje genera texto plausible; no ejecuta cálculos salvo que la herramienta active expresamente una función de cálculo o de ejecución de código, y no siempre sabrás si lo ha hecho. Por eso los errores típicos no son aleatorios, sino que siguen patrones reconocibles. Si necesitas repasar el porqué, lo explicamos en [qué es y qué no es la IA generativa](/articulos/que-es-la-ia-generativa-para-docentes/).

### Errores que aparecen con frecuencia

- **Aritmética en pasos intermedios.** El planteamiento es correcto, pero un producto o una potencia de diez sale mal y arrastra el error.
- **Unidades.** Conversiones de unidades de volumen (mL, cm³, dm³, L), confusión entre masa y peso, unidades que desaparecen a mitad del cálculo.
- **Cifras significativas y redondeos.** Resultados con una precisión absurda o redondeos prematuros que alteran el resultado final.
- **Ecuaciones químicas.** Coeficientes que no conservan la masa o la carga, fórmulas mal escritas, estados de agregación omitidos.
- **Datos de tablas.** Masas atómicas, constantes o propiedades físicas con valores aproximados o erróneos.
- **Conceptos simplificados de más.** Explicaciones que reproducen errores conceptuales frecuentes (por ejemplo, el electrón «orbitando» como un planeta presentado sin matices en Bachillerato).
- **Enunciados sin solución o con datos incoherentes.** Al generar problemas nuevos, puede proponer datos físicamente imposibles o un sistema sin solución.

## Lo que sí puedes delegar con confianza razonable

| Tarea | Por qué funciona | Qué revisar |
|---|---|---|
| Contextualizar problemas (situaciones cotidianas, profesionales, del entorno) | Es una tarea de redacción | Que el contexto no altere la física del problema |
| Generar variantes de un problema que tú has resuelto | Partes de un modelo correcto | Resolver al menos una variante completa |
| Explicar un mismo concepto de tres formas distintas | Reformular es su punto fuerte | Rigor conceptual de cada versión |
| Anticipar errores conceptuales frecuentes del alumnado | Se apoya en mucha literatura didáctica | Contrastar con tu experiencia |
| Redactar guiones de prácticas de laboratorio | Estructura y redacción | Seguridad, cantidades, residuos |
| Crear preguntas de razonamiento cualitativo | No dependen de cálculos | Que haya una única respuesta defendible |

## Método de verificación en cuatro pasos

1. **Resuelve tú un caso.** Antes de usar una batería de problemas generada, resuelve al menos uno completo. Si falla, revisa todos.
2. **Comprueba las unidades de principio a fin.** Es la forma más rápida de detectar errores de planteamiento.
3. **Contrasta los datos con una fuente de referencia.** Masas atómicas y constantes, siempre desde una tabla fiable (el libro de texto, una tabla periódica oficial), nunca desde la respuesta del chat.
4. **Usa herramientas de cálculo para el cálculo.** Calculadora, hoja de cálculo o software matemático. La IA puede proponer el planteamiento; el número final lo verificas con una herramienta que calcula de verdad.

<div class="nota nota--clave">

Pide siempre la resolución **paso a paso con unidades** y revisa el paso, no solo el resultado. Un resultado correcto con un razonamiento incorrecto es tan peligroso como un resultado erróneo, porque el alumnado aprende el razonamiento.

</div>

## Ejemplos de aula

**Matemáticas, 2.º ESO. Proporcionalidad.** Pide diez problemas de proporcionalidad directa e inversa contextualizados en situaciones del entorno del alumnado (recetas, consumo de agua, transporte), con datos que den resultados enteros o con un decimal. Comprueba que cada uno es de verdad directa o inversa: es habitual que la IA presente como proporcional una relación que no lo es (por ejemplo, el precio con una tarifa fija más una parte variable).

**Física y Química, 4.º ESO. Estequiometría.** Pide un problema contextualizado sobre la combustión de un combustible doméstico. Ajusta tú la ecuación, recalcula las masas molares con tu tabla y revisa que el resultado tenga las cifras significativas adecuadas.

**Biología y Geología, 1.º Bachillerato.** Pide tres analogías para explicar la replicación del ADN y una lista de los límites de cada analogía. Es una tarea de reformulación en la que la IA rinde bien y que obliga a pensar en los errores que cada analogía puede inducir.

**FP, módulos técnicos.** Pide casos prácticos con datos verosímiles del sector, pero contrasta cualquier valor normativo (límites, tolerancias, normas técnicas) con la documentación oficial: la IA no es fuente para esos datos.

## Con el alumnado: convertir los errores en contenido

Los errores de la IA en ciencias son un recurso didáctico excelente. Entregar al alumnado una resolución generada por IA con errores reales y pedirle que los encuentre y los justifique trabaja a la vez el contenido científico y el pensamiento crítico. Tienes un prompt preparado para ello en la biblioteca: [detectar errores en una resolución generada por IA](/prompts/detectar-errores-resolucion-ia/), y un procedimiento completo en el tutorial [cómo revisar y mejorar materiales generados por IA](/articulos/revisar-materiales-generados-por-ia/).

## Conclusión práctica

En matemáticas y ciencias, usa la IA para **contextualizar, reformular, variar y anticipar errores**, y no para aportar datos ni hacer cálculos finales. Resuelve siempre un caso completo, revisa unidades de principio a fin y verifica los datos en una fuente de referencia. Así ganas tiempo sin introducir en el aula los errores que precisamente tratamos de corregir.
