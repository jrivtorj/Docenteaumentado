---
titulo: "He usado IA para diseñar una prueba competencial de Matemáticas I: qué funcionó y qué no"
descripcion: "Experiencia real en 1.º de Bachillerato: el prompt, la prueba que generó Claude, cómo la revisé, cómo funcionó en clase y el tiempo que llevó de verdad."
fechaPublicacion: 2026-10-15
autor: jose-david-rivero
tipo: experiencia
temas: [evaluacion-rubricas-ia, ia-matematicas-ciencias, claude-en-educacion]
etiquetas: [Bachillerato, Matemáticas I, prueba competencial, evaluación, Claude]
necesidad: "¿Puede la IA diseñar una prueba competencial de Bachillerato que se pueda usar en clase?"
estado: publicado
---

<div class="nota nota--clave">

- **Curso y materia:** 1.º de Bachillerato, Matemáticas I.
- **Unidad:** UP1, Números reales y lenguaje matemático.
- **Herramienta:** Claude.
- **Producto:** prueba competencial de 55 minutos, solucionario, rúbrica y cuaderno de evaluación en hoja de cálculo.
- **Datos del alumnado compartidos con la IA:** ninguno. Solo se aportó la programación didáctica.

</div>

## Contexto

Al terminar la primera unidad de programación necesitaba una prueba competencial alineada con los criterios de evaluación que había fijado en la programación didáctica. Esa programación se basa en el currículo de Bachillerato vigente en Canarias, y los criterios de la prueba son los mismos que recoge.

El nivel del grupo era el adecuado para el curso.

## El prompt

Adjunté la programación didáctica y escribí:

```text
Esta es mi programación de matemáticas para primero de bachillerato. Estoy acabando la UP1: Números reales y lenguaje matemático. Quiero realizar una prueba competencial con los correspondientes criterios de evaluación que he establecido en la programación. Quiero que diseñes dicha prueba competencial para dicho curso, la prueba tiene como duración 55 minutos, el nivel de mi alumnado es adecuado, quiero una prueba con diseño profesional. Me la presentas en formato docx. Incluye un cuaderno de evaluación en formato hoja de calculo.
```

## Lo que generó la IA

Claude devolvió una prueba de 10 puntos, más una reflexión final no puntuable, con seis ejercicios contextualizados:

1. **Intervalos y valor absoluto (2 puntos):** control de calidad de varillas de acero.
2. **Errores absoluto y relativo (1,5 puntos):** la distancia de la Tierra a la Luna, con una pregunta de argumentación crítica.
3. **Potencias y radicales (2 puntos):** simplificación, racionalización y cambio de índice.
4. **Notación científica (1,5 puntos):** masas de bacterias y virus, en conexión con Biología.
5. **Logaritmos decimales y neperianos (2 puntos):** ecuaciones y cálculo del pH, en conexión con Química.
6. **Investigación (1 punto):** comprobar una afirmación sobre la escala de Richter aplicando las propiedades de los logaritmos.

Cada ejercicio indicaba los criterios de evaluación que trabaja (1.1, 1.2, 2.1, 3.1, 4.1, 5.1 y 6.1), y la reflexión final se vinculaba a los criterios 9.1 y 9.2. Incluía espacio de respuesta para imprimir y un anexo docente con el solucionario resumido y notas de corrección. Esas notas remitían a la rúbrica general de resolución de problemas de mi programación para matizar los ejercicios 1, 2 y 6. Además, ofreció generar un segundo modelo de la prueba para evitar copias.

## Cómo la revisé

Resolví yo mismo todos los ejercicios y comparé mis resultados con el solucionario: coincidían. También comprobé que los criterios asignados a cada ejercicio eran los de mi programación. No encontré errores de cálculo y utilicé la prueba sin modificaciones.

Hay un matiz que conviene aclarar al alumnado en el ejercicio de Richter. Dentro del modelo que da el enunciado, M = log(I/I₀), la conclusión del solucionario es correcta: tres grados de diferencia equivalen a un cociente de 10³. Pero en sismología la magnitud de Richter se calcula a partir de la amplitud de las ondas registradas, no de la energía liberada, y la energía crece bastante más deprisa que la amplitud. La frase del divulgador («libera una intensidad 1000 veces mayor») mezcla las dos ideas.

## Cómo funcionó en el aula

Los 55 minutos no fueron suficientes. Se presentaron 13 alumnos y alumnas y los resultados fueron bajos: la nota media fue de 4,1 y la mediana de 3,5, y solo tres superaron el 5.

El reparto por apartados dice más que la nota media:

- **Lo que mejor salió** fue el cálculo directo: el error absoluto (98 % de los puntos posibles, de media), la notación científica (77 %) y el error relativo (73 %).
- **Lo que peor salió** fueron los apartados que piden argumentar o justificar: la investigación sobre la escala de Richter (10 %; solo una persona la resolvió completa), el razonamiento sobre errores absoluto y relativo (15 %) y la inecuación con valor absoluto (20 %). También costaron la simplificación de radicales (15 %) y la racionalización (19 %).

Aun así, la valoración del alumnado fue positiva: percibieron que la prueba les exigía más que un examen de ejercicios tipo.

## Tiempo empleado

La generación de la prueba, el solucionario, la rúbrica y el cuaderno de evaluación llevó unos 10 minutos. A eso hay que sumar el tiempo de resolver la prueba completa para revisarla. Sin IA, el diseño, el formato y el reparto de la puntuación me habrían llevado alrededor de una hora, sin contar el cuaderno de evaluación.

## Valoración y limitaciones

El resultado fue útil desde la primera respuesta porque el modelo tenía el contexto completo: la programación, la unidad, la duración y el formato de entrega. Después aprendí a usar los proyectos del asistente, en los que se guarda ese contexto (programación, rúbricas, criterios) una vez y se reutiliza en cada petición. Así no hay que repetirlo y los resultados son más coherentes.

El documento y el cuaderno de evaluación funcionaron sin retoques. La limitación apareció en el aula: la IA dimensionó la prueba para 55 minutos y no bastaron, y el nivel de los apartados de argumentación resultó alto para el grupo. Un modelo no conoce a tu alumnado: la duración y la dificultad hay que ajustarlas con el criterio docente antes de imprimir.

## Material descargable

- [Prueba competencial completa (PDF, 7 páginas)](/descargas/prueba-competencial-numeros-reales-1-bachillerato.pdf). Incluye al final el anexo para el profesorado con el solucionario y los criterios de corrección.
- [Cuaderno de evaluación por criterios (hoja de cálculo, vacío)](/descargas/cuaderno-evaluacion-prueba-numeros-reales-1-bachillerato.xlsx). Calcula la nota de la prueba y la de cada criterio a partir de la puntuación de cada apartado. La asignación de apartados a criterios se puede cambiar en la hoja «Configuración».

<div class="nota nota--verificar">

Si reproduces esta experiencia, resuelve tú la prueba antes de usarla y comprueba los datos de contexto: los modelos de IA pueden equivocarse en cálculos, unidades y datos científicos aunque el resultado parezca impecable. Nunca subas a la IA el cuaderno de evaluación con nombres o notas del alumnado.

</div>
