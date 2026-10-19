---
titulo: "Nuevas instrucciones de evaluación en Canarias: lo que la IA te propondrá y ya no vale"
descripcion: "Las instrucciones de evaluación y calificación del curso 2026/27 prohíben ponderar instrumentos y calcular medias. Justo lo que la IA hace por defecto."
fechaPublicacion: 2026-10-19
autor: jose-david-rivero
tipo: actualidad
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
etiquetas: [Canarias, LOMLOE, evaluación, calificación, criterios de evaluación, normativa]
necesidad: "¿Qué cambia al pedir a la IA pruebas, rúbricas o cuadernos de evaluación con las nuevas instrucciones de Canarias?"
estado: publicado
seo:
  titulo: "Instrucciones de evaluación Canarias 2026/27 y uso de la IA"
fuentes:
  - titulo: Instrucciones de la Dirección General de Ordenación de las Enseñanzas, Inclusión e Innovación para la evaluación y calificación del alumnado (curso 2026/2027)
    url: https://www.gobiernodecanarias.org/cmsgob1/export/sites/educacion/web/_galerias/descargas/normativa-internas/20261006-instrucciones-evaluacion-calificacion-lomloe-26-27.pdf
    editor: Consejería de Educación, Formación Profesional, Actividad Física y Deportes del Gobierno de Canarias
    fecha: 6 de octubre de 2026
    consultado: 2026-10-19
  - titulo: Evaluación, promoción y titulación en la ESO
    url: https://www.gobiernodecanarias.org/educacion/web/secundaria/informacion/evaluacion-promocion-titulacion/
    editor: Consejería de Educación del Gobierno de Canarias
    consultado: 2026-10-19
---

<div class="nota nota--hecho">

- La Dirección General de Ordenación de las Enseñanzas, Inclusión e Innovación firmó el **6 de octubre de 2026** unas instrucciones para la evaluación y calificación del alumnado, de aplicación **a partir del curso 2026/2027**.
- Afectan a **Educación Infantil, Primaria, ESO y Bachillerato**. No se aplican a la Formación Profesional.
- Son instrucciones dirigidas a los centros, no una orden publicada en el BOC. Desarrollan la Orden de 31 de mayo de 2023, que regula la evaluación y la promoción en esas etapas.
- El documento **no menciona la inteligencia artificial**. Lo que sigue es mi lectura de cómo afecta a quien usa la IA para preparar instrumentos de evaluación.

</div>

## Qué establecen, en cinco ideas

1. **El criterio de evaluación es el único referente.** Ni las competencias específicas ni los saberes básicos ni los descriptores operativos: la programación y las situaciones de aprendizaje parten del criterio (instrucción primera, puntos 1 y 3).
2. **Ningún criterio vale más que otro.** Todos contribuyen por igual, y la calificación de la materia no puede ponderarlos (primera.2 y segunda.11).
3. **No se puntúan ni se ponderan los instrumentos.** La calificación de un criterio sale del análisis de las evidencias contrastadas con las rúbricas LOMLOE Canarias, «y no será, por tanto, el resultado de cálculos aritméticos» sobre las notas de los instrumentos. Por eso la programación no puede asignar peso a los instrumentos (segunda.10).
4. **La nota final no es la media de las evaluaciones.** Refleja el nivel de logro en todos los criterios trabajados durante el curso (segunda.11). Ante varias evidencias de un mismo aprendizaje, el docente puede quedarse con el nivel más alto, el más repetido o el último (segunda.9).
5. **Los calificadores están fijados por etapa.** En Primaria y ESO, Insuficiente, Suficiente, Bien, Notable y Sobresaliente, y no se usan números ni siquiera con carácter informativo. En Bachillerato, de 0 a 10 sin decimales (segunda.6). Los criterios de calificación no pueden incluir puntualidad, asistencia, trabajo diario, actitud ni tareas (segunda.4).

## Por qué afecta a quien usa la IA

Si pides a un asistente de IA «una prueba de 10 puntos con su rúbrica y un cuaderno de calificación», lo más probable es que te devuelva justo el modelo que estas instrucciones descartan: apartados con puntuación, porcentajes por instrumento, la nota del criterio como suma de puntos, medias por trimestre y notas con decimales. No es un fallo del modelo. Es el modelo de calificación más frecuente en los textos con los que se ha entrenado, y no conoce la normativa de tu comunidad salvo que se la des.

Me ocurrió a mí. En la [prueba competencial de Matemáticas I](/articulos/prueba-competencial-matematicas-1-bachillerato-ia/) que diseñé con Claude, el cuaderno de evaluación calcula la nota de cada criterio sumando los puntos de los apartados asociados. Funcionaba bien y comprobé los cálculos, pero esa forma de calificar es la que la instrucción segunda.10 deja fuera. Revisé las matemáticas y no el modelo de calificación.

## Qué pedirle a la IA a partir de ahora

Si vas a usar la IA para preparar instrumentos de evaluación en Canarias, añade al prompt unas condiciones como estas:

```text
Condiciones de evaluación que debes respetar (Canarias, curso 2026/2027):
- El único referente son los criterios de evaluación que te doy, literales. No uses competencias específicas, saberes ni descriptores como referente.
- No asignes puntos ni porcentajes a los instrumentos ni a los criterios. Todos los criterios tienen el mismo valor.
- Para cada criterio, indica qué evidencias observables aporta el instrumento y en qué nivel de logro situarían al alumnado.
- No calcules la nota del criterio como suma ni media de puntuaciones.
- Calificadores: [ESO: Insuficiente, Suficiente, Bien, Notable, Sobresaliente, sin números] [Bachillerato: de 0 a 10, sin decimales].
- No incluyas actitud, asistencia, puntualidad, trabajo diario ni entrega de tareas como aspectos calificables.
```

Y revisa el resultado con estas preguntas:

- [ ] ¿Cada pregunta o tarea está vinculada a un criterio de evaluación concreto y produce una evidencia observable?
- [ ] ¿Hay algún porcentaje, peso o puntuación que se convierta automáticamente en la nota del criterio?
- [ ] ¿Aparece alguna media aritmética entre instrumentos o entre evaluaciones?
- [ ] ¿Los calificadores son los de la etapa? En ESO, ¿se ha colado algún número?
- [ ] ¿Se califica algo que no está en los criterios, como la actitud o la entrega de tareas?
- [ ] ¿Los instrumentos son variados y accesibles, con varias formas de expresión y de representación, como piden las instrucciones (primera.4)?

<div class="nota nota--opinion">

Las instrucciones permiten dar una calificación informativa de un instrumento, como una prueba (segunda.8), siempre que refleje el nivel de logro de los aprendizajes y no «una calificación del producto en sí», y con los calificadores de la etapa. Lo que no admiten es que una suma de puntos se convierta, sin más, en la calificación del criterio. Ahí es donde la IA, que tiende a automatizar el cálculo, empuja en la dirección contraria. Decidir el nivel de logro sigue siendo tarea del docente, y las instrucciones lo dicen expresamente (segunda.9).

</div>

<div class="nota nota--verificar">

Lee el documento completo antes de aplicar nada: tiene nueve folios y matices para cada etapa, las adaptaciones curriculares, el programa AICLE y los planes de refuerzo que aquí no resumo. Los criterios de calificación se acuerdan en el departamento o el ciclo (segunda.4), así que lo que te proponga la IA es un borrador para esa reunión, no una decisión.

</div>

Para diseñar rúbricas vinculadas a los criterios, tienes el procedimiento en [Cómo crear rúbricas con IA paso a paso](/articulos/rubricas-con-ia-paso-a-paso/) y el prompt de la [rúbrica analítica a partir de criterios de evaluación](/prompts/rubrica-analitica-criterios-evaluacion/).
