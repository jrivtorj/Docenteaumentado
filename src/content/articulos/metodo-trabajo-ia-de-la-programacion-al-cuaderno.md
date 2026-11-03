---
titulo: "Mi método de trabajo con IA: de la programación al cuaderno de evaluación"
descripcion: "Cómo encadeno con IA cuatro productos de una misma unidad: contenido, dossier de actividades, prueba competencial y cuaderno de evaluación."
fechaPublicacion: 2026-11-03
autor: jose-david-rivero
tipo: laboratorio
temas: [ia-para-docentes, situaciones-de-aprendizaje-ia, evaluacion-rubricas-ia]
etiquetas: [método de trabajo, situaciones de aprendizaje, dossier de actividades, prueba competencial, cuaderno de evaluación, Canarias]
necesidad: "¿Cómo organizo el trabajo con IA para que todos los materiales de una unidad salgan de mis criterios y sean coherentes entre sí?"
estado: publicado
fuentes:
  - titulo: Instrucciones de la Dirección General de Ordenación de las Enseñanzas, Inclusión e Innovación para la evaluación y calificación del alumnado (curso 2026/2027)
    url: https://www.gobiernodecanarias.org/cmsgob1/export/sites/educacion/web/_galerias/descargas/normativa-internas/20261006-instrucciones-evaluacion-calificacion-lomloe-26-27.pdf
    editor: Consejería de Educación, Formación Profesional, Actividad Física y Deportes del Gobierno de Canarias
    fecha: 6 de octubre de 2026
    consultado: 2026-11-03
---

Cuando preparo una unidad no le pido a la IA «una unidad didáctica». Le pido cuatro productos, siempre en el mismo orden y siempre sobre la misma base: **el contenido de la unidad, un dossier de actividades, una prueba competencial y un cuaderno de evaluación**. Este texto documenta ese método tal como lo aplico, para que puedas reproducirlo, criticarlo o adaptarlo.

Lo publico en el Laboratorio porque no es una receta cerrada: es un protocolo que voy corrigiendo con cada unidad, y algunas de esas correcciones las cuento aquí.

<div class="nota nota--clave">

- **Punto de partida:** mi programación didáctica y los criterios de evaluación literales del currículo. La IA no los redacta ni los «recuerda».
- **Cuatro productos encadenados:** contenido de la unidad → dossier de actividades → prueba competencial → cuaderno de evaluación. Cada uno se apoya en el anterior.
- **Un hilo conductor:** el criterio de evaluación. Cada actividad, ejercicio y pregunta dice qué criterio trabaja o evidencia.
- **Lo que no comparto con la IA:** nombres, notas ni ningún dato del alumnado o del centro.
- **Lo que no delego:** elegir los criterios, resolver la prueba, ajustar tiempo y dificultad al grupo y decidir el nivel de logro.

</div>

## Por qué cuatro productos y no uno

Pedirlo todo en un solo mensaje produce un documento largo y superficial que no se puede revisar por partes. Ya lo expliqué en el [tutorial de situaciones de aprendizaje](/articulos/situacion-de-aprendizaje-con-ia-paso-a-paso/) y en el artículo de opinión sobre [la unidad hecha en diez minutos](/articulos/unidad-didactica-en-diez-minutos/).

Separarlo en cuatro productos tiene otra ventaja: **cada producto sirve para comprobar el anterior**. Si un criterio de la unidad no tiene ningún ejercicio en el dossier, falta práctica. Si la prueba evalúa algo que no se trabajó en el dossier, la prueba es injusta. Y si el cuaderno no tiene una columna para un criterio, ese criterio no se está evaluando.

## Paso 0. El contexto fijo

Antes del primer producto preparo lo que la IA necesita saber y que no cambia durante la unidad:

- La **programación didáctica** del curso.
- Los **criterios de evaluación de la unidad**, copiados literalmente del currículo (en Canarias, el Decreto 30/2023 y sus anexos).
- Las **rúbricas** que uso para esos criterios: las rúbricas LOMLOE Canarias que publica la Consejería de Educación y las propias de mi programación, como la de resolución de problemas.
- Las **condiciones de evaluación** de las [instrucciones de Canarias para el curso 2026/2027](/articulos/instrucciones-evaluacion-canarias-2026-27-ia/): sin ponderar instrumentos ni criterios, sin calcular la calificación de un criterio como suma o media y con los calificadores de cada etapa.
- Una **descripción genérica del grupo**: curso, número de sesiones, duración, recursos y necesidades sin datos personales.

Trabajo con Claude por proyectos: **un proyecto por curso** (por ejemplo, 1.º de Bachillerato), con todo lo anterior cargado como conocimiento del proyecto. Así cada petición parte del mismo contexto sin repetirlo.

Dentro del proyecto abro **tres conversaciones por unidad**, una por fase:

1. El contenido de la unidad.
2. El dossier de actividades.
3. La prueba competencial y su cuaderno de evaluación, juntos, porque el cuaderno depende de cómo esté construida la prueba.

Separar las conversaciones evita que una fase arrastre los errores o las decisiones descartadas de la anterior. Como las conversaciones de un proyecto no comparten historial, el documento que sale de cada fase, ya revisado, lo adjunto al abrir la conversación siguiente.

<div class="nota nota--verificar">

No pidas a la IA que busque los criterios de tu currículo autonómico: puede devolver textos con apariencia oficial que no existen. Pégalos tú desde la fuente oficial.

</div>

## Paso 1. El contenido de la unidad

El primer producto es el **documento de contenido teórico** de la situación de aprendizaje o de la unidad: lo que el alumnado tiene que estudiar. La situación de aprendizaje ya está definida en mi programación, con sus criterios, así que no le pido a la IA que la invente, sino que desarrolle su contenido.

Este es el prompt que uso:

```text
A partir de la programación didáctica que te he proporcionado, desarrolla un documento completo con los contenidos de la Unidad de Trabajo / Situación de Aprendizaje seleccionada, de acuerdo con el currículo LOMLOE de la Consejería de Educación del Gobierno de Canarias.

El documento debe:
- Desarrollar de manera clara, rigurosa y estructurada todos los contenidos previstos en la unidad.
- Respetar los objetivos didácticos, las competencias específicas, los criterios de evaluación y los saberes básicos establecidos en la programación.
- Indicar en cada apartado qué criterio o criterios de evaluación trabaja.
- Incluir explicaciones teóricas, conceptos fundamentales, ejemplos prácticos y aplicaciones contextualizadas.
- Incorporar esquemas, tablas, gráficos e ilustraciones cuando faciliten la comprensión.
- Utilizar un lenguaje adaptado al nivel educativo del alumnado, manteniendo el rigor científico y académico.
- Organizar los contenidos de forma progresiva, facilitando el aprendizaje significativo.
- Incluir ejemplos relacionados con situaciones reales y, cuando resulte pertinente, con el contexto de Canarias.

Elabora un documento didáctico completo, no un simple resumen ni un índice de contenidos.

Utiliza un diseño profesional, minimalista, visualmente atractivo y organizado, adecuado para su utilización en el aula y como material de estudio del alumnado.

Comprueba que el contenido está alineado con la programación didáctica del proyecto y señálame cualquier apartado que no corresponda a sus saberes o criterios.

Entrega el documento en formato Word editable y PDF listo para imprimir, si tienes capacidad para generar ambos archivos.

Unidad de Trabajo / Situación de Aprendizaje que debes desarrollar: [INDICAR NOMBRE DE LA UNIDAD].
Curso y materia: [INDICAR CURSO Y MATERIA].
```

**Qué compruebo:** que el contenido es correcto (definiciones, ejemplos, cálculos y datos, también los de los gráficos y los ejemplos «de Canarias», que el modelo puede inventar), que no se sale de los saberes de la unidad y que cada criterio tiene su parte de contenido. Es la primera capa del [protocolo de revisión de materiales](/articulos/revisar-materiales-generados-por-ia/), y aquí no se puede recortar: todo lo que viene después se construye sobre este documento.

## Paso 2. El dossier de actividades

El dossier se genera **a partir del documento de contenido** del paso anterior, ya revisado. Tiene unos **20 ejercicios graduados en tres niveles de dificultad**, con un solucionario para el profesorado. Se puede trabajar en el aula o en casa, según lo que decida cada docente.

Los tres niveles son de dificultad dentro de los mismos criterios. No son las [tareas en tres niveles](/articulos/tareas-en-tres-niveles-adaptaciones-curriculares/) para pendientes y adaptaciones curriculares, que trabajan con referentes curriculares distintos.

Este es el prompt que uso, con dos ajustes recientes: el criterio de evaluación como referente de cada ejercicio y el solucionario.

```text
A partir de la programación didáctica inicial y del documento de contenidos de esta Unidad de Trabajo / Situación de Aprendizaje que te adjunto, elabora un dossier de actividades para mi alumnado.

El dossier debe:
- Estar completamente relacionado con los contenidos de la unidad y con sus criterios de evaluación.
- Ajustarse al currículo de la Consejería de Educación de Canarias y a los criterios de evaluación establecidos.
- Incluir actividades variadas, prácticas y contextualizadas, con dificultad progresiva.
- Favorecer la comprensión, el razonamiento y la aplicación de los aprendizajes.
- Estar adaptado al nivel educativo del alumnado.
- Incluir ejercicios de refuerzo, consolidación y aplicación competencial.
- Presentar enunciados claros y espacios para responder.
- Indicar en cada ejercicio su nivel (refuerzo, consolidación o aplicación competencial) y el criterio de evaluación que trabaja.
- Incluir al final un solucionario para el profesorado, en un anexo separado que se pueda quitar antes de imprimir.

Diseña un documento profesional, atractivo, minimalista y organizado, listo para imprimir y entregar al alumnado.

No desarrolles nuevamente la unidad didáctica. Utiliza exclusivamente como referencia la programación y el documento de contenidos adjunto.

Entrega el dossier completamente elaborado en formato Word editable y PDF, si tienes capacidad para generar ambos archivos.
```

Dos instrucciones hacen casi todo el trabajo. «Refuerzo, consolidación y aplicación competencial» fija los tres niveles. «No desarrolles nuevamente la unidad» reduce el riesgo de que el modelo vuelva a explicar la teoría en lugar de proponer ejercicios.

**Qué compruebo:** resuelvo los ejercicios, o al menos los del nivel más alto, y comparo con el solucionario; compruebo que los tres niveles son realmente distintos, que cada criterio tiene práctica suficiente y que los datos de contexto (cifras, unidades, fenómenos) son correctos.

## Paso 3. La prueba competencial

La prueba es el instrumento que cierra la unidad. Pido tareas contextualizadas, cada una vinculada a uno o varios criterios, y un anexo para el profesorado con el solucionario.

Este es el punto más delicado del método. En la [prueba de Matemáticas I](/articulos/prueba-competencial-matematicas-1-bachillerato-ia/) la IA repartió diez puntos entre los ejercicios y el cuaderno calculaba la nota de cada criterio sumando puntos. Las instrucciones de Canarias para 2026/2027 no admiten que la calificación de un criterio sea el resultado de cálculos aritméticos sobre los instrumentos (instrucción segunda.10).

En Bachillerato sigo puntuando los apartados, porque me sirve para registrar con precisión qué ha resuelto cada estudiante. Lo que ha cambiado es el uso de esa puntuación. **Ya no es la calificación del criterio, sino una evidencia más**, y el nivel de logro lo decido yo contrastando lo resuelto con la rúbrica. En ESO no puntúo: registro directamente el nivel de logro de cada criterio, porque allí no se usan calificadores numéricos ni siquiera con carácter informativo (segunda.6). En los dos casos añado las condiciones de evaluación al prompt.

Este es el prompt que uso, ajustado a las instrucciones de 2026/2027:

```text
A partir de la programación didáctica, los contenidos desarrollados y los criterios de evaluación establecidos previamente para esta Unidad de Trabajo / Situación de Aprendizaje, elabora una PRUEBA COMPETENCIAL para evaluar al alumnado. La prueba dura [DURACIÓN] minutos.

La prueba debe:
- Estar alineada con el currículo LOMLOE de la Consejería de Educación del Gobierno de Canarias.
- Evaluar los criterios de evaluación establecidos en la programación, indicando en cada actividad qué criterio o criterios evidencia.
- Incluir situaciones contextualizadas y problemas relacionados con la vida cotidiana o situaciones reales.
- Incorporar actividades variadas que permitan evaluar la comprensión, aplicación, razonamiento y resolución de problemas.
- Presentar una dificultad progresiva y estar adaptada al nivel educativo del alumnado.
- Incluir enunciados claros, datos suficientes y cuestiones bien estructuradas.
- Evitar ejercicios exclusivamente memorísticos o mecánicos.
- Permitir obtener evidencias de aprendizaje evaluables y objetivas.

[Bachillerato:] Incluye una puntuación orientativa por apartado, indicando a qué criterio corresponde, para registrar lo resuelto. No ponderes los criterios ni calcules su calificación como suma de puntos.
[ESO:] No incluyas puntuaciones. Para cada actividad, indica qué evidencia situaría al alumnado en cada nivel de logro de la rúbrica.

Elabora una prueba completa, lista para entregar al alumnado, con un diseño profesional, minimalista y adecuado para su impresión.

Al finalizar, incluye un documento independiente con el solucionario, los procedimientos de resolución y las respuestas correctas.

Si tienes capacidad para generar documentos, entrega la prueba en Word editable y PDF listo para imprimir, junto con el solucionario.
```

**Qué compruebo:** resuelvo la prueba entera y comparo con el solucionario; compruebo que no evalúa nada que no se haya trabajado en el dossier; y ajusto la extensión. La IA calcula el tiempo para un alumnado ideal: en mi experiencia, una prueba pensada para 55 minutos no cupo en 55 minutos.

## Paso 4. El cuaderno de evaluación

El último producto es una hoja de cálculo para registrar lo que hace cada estudiante. Uso **un cuaderno por instrumento de evaluación**:

- El de la **prueba competencial** recoge los criterios que evalúa la prueba y, para cada estudiante, la puntuación de cada apartado agrupada por criterio en Bachillerato, o directamente el nivel de logro en ESO.
- El del **dossier**, cuando lo evalúo, tiene una columna por criterio.

Lo genero en la misma conversación que la prueba, porque las columnas dependen de cómo esté construida. En Bachillerato, la suma de puntos de cada criterio es solo un registro: me ayuda a ver qué ha resuelto cada estudiante, pero no es la calificación del criterio ni fija su nivel de logro.

Este es el prompt que uso para el cuaderno de una prueba competencial, ajustado a las instrucciones de evaluación de 2026/2027:

```text
A partir de la programación didáctica, los criterios de evaluación y las rúbricas de evaluación establecidos previamente para esta Unidad de Trabajo / Situación de Aprendizaje, elabora un CUADERNO DE EVALUACIÓN DOCENTE para evaluar una prueba competencial del alumnado.

El cuaderno debe:
- Estar alineado con el currículo LOMLOE de la Consejería de Educación del Gobierno de Canarias.
- Utilizar los criterios de evaluación y las rúbricas previamente establecidos, sin modificarlos arbitrariamente.
- Incluir indicadores de logro claros y observables.
- Incorporar rúbricas con niveles de desempeño diferenciados y descriptores específicos.
- Permitir evaluar individualmente a cada estudiante.
- Incluir una tabla de registro por criterio de evaluación, con la puntuación de cada apartado agrupada por criterio [solo en Bachillerato] y una columna en la que el docente anota el nivel de logro.
- No calcular la calificación de los criterios como suma ni media de puntos, y no ponderar los criterios: todos tienen el mismo valor.
- Usar los calificadores de la etapa: [ESO: Insuficiente, Suficiente, Bien, Notable, Sobresaliente, sin números] [Bachillerato: de 0 a 10, sin decimales].
- Incorporar un apartado de observaciones y retroalimentación individualizada.

Diseña un documento profesional, minimalista, organizado y funcional para su utilización durante la corrección de la prueba competencial.

El cuaderno debe ser un instrumento de evaluación docente práctico, no un documento teórico.

Entrega el resultado en formato Excel editable, con fórmulas que sumen las puntuaciones de los apartados de cada criterio como apoyo [solo en Bachillerato], y en PDF listo para imprimir, si tienes capacidad para generar ambos formatos.

La suma de puntuaciones tiene exclusivamente una función descriptiva y de registro de evidencias. No constituye una calificación del criterio ni determina automáticamente su nivel de logro. Indícalo así en el propio cuaderno, junto a la columna de la suma.

Antes de elaborarlo, comprueba que los criterios de evaluación y las rúbricas coinciden exactamente con los de la programación didáctica del proyecto y señálame cualquier discrepancia.
```

<div class="nota nota--opinion">

El cuaderno organiza las evidencias; no decide la calificación. Las instrucciones permiten dar una calificación informativa de un instrumento si refleja el nivel de logro (segunda.8), pero dejan la decisión del nivel de logro al docente (segunda.9). Una hoja de cálculo que convierte automáticamente puntos en notas empuja justo en la dirección contraria. En ESO, además, no se usan calificadores numéricos ni siquiera con carácter informativo (segunda.6).

</div>

<div class="nota nota--verificar">

El cuaderno lo genera la IA **vacío**. Los nombres y las notas del alumnado se escriben después, en tu equipo, y ese archivo no vuelve nunca al asistente. Lo explico en [IA y protección de datos en el centro educativo](/articulos/proteccion-datos-ia-centros-educativos/).

</div>

## La matriz que lo une todo

Al terminar los cuatro productos pido a la IA una última comprobación cruzada: una tabla que muestre, para cada criterio, dónde aparece en cada producto. Como cada producto sale de una conversación distinta, la pido en la última y adjunto el contenido y el dossier.

```text
Con el documento de contenidos, el dossier, la prueba y el cuaderno de esta unidad, elabora una tabla con una fila por criterio de evaluación y estas columnas: apartados del contenido, ejercicios del dossier, actividades de la prueba y columna del cuaderno. Señala los criterios que no aparecen en algún producto.
```

La tabla la hace la IA, pero no la doy por buena sin más: es el mismo modelo comprobando su propio trabajo. Compruebo al azar dos o tres celdas contra los documentos.

| Criterio | Apartados del contenido | Ejercicios del dossier | Tareas de la prueba | Columna del cuaderno |
| --- | --- | --- | --- | --- |
| 1.1 | ✔ | ✔ | ✔ | ✔ |
| 2.1 | ✔ | ✔ | — | ✔ |

Un hueco en una fila es una decisión que tomar: o el criterio se evalúa con otro instrumento, o falta algo. En el ejemplo, el criterio 2.1 se practica pero la prueba no lo evidencia.

## Tiempo y límites

La revisión de los documentos de una unidad me lleva unos **20 minutos**, una vez que el proyecto tiene la programación, los criterios y las rúbricas bien cargados. A eso hay que sumar el tiempo de resolver la prueba entera, que no cuento en esos 20 minutos y que no me salto. La generación es la parte corta; la revisión es la que no conviene recortar.

Los límites que he encontrado hasta ahora:

- **La IA no conoce a tu grupo.** Dimensiona tiempos y dificultad para un alumnado medio que no existe.
- **Tiende a calificar con puntos y medias**, porque es el modelo más frecuente en los textos de los que aprende. Hay que pedirle lo contrario de forma explícita y revisarlo.
- **La coherencia depende del contexto.** Si una conversación no recibe el documento de la fase anterior, su producto se aleja de lo que ya está hecho.
- **El método está pensado para ESO y Bachillerato en Canarias.** En Formación Profesional las instrucciones de 2026/2027 no se aplican y la evaluación se organiza por resultados de aprendizaje, así que las condiciones de evaluación del Paso 0 cambian.

## Conclusión práctica

Si quieres probar el método, empieza por el Paso 0: reúne tus criterios literales, tus rúbricas y tus condiciones de evaluación en un único sitio antes de pedir nada. Con ese contexto, los cuatro productos salen coherentes entre sí; sin él, salen cuatro documentos con buen aspecto que no hablan entre ellos.
