---
titulo: "Cómo diseñar una situación de aprendizaje con IA, paso a paso"
descripcion: Procedimiento en seis pasos para diseñar una situación de aprendizaje LOMLOE con ayuda de la IA, partiendo de tus criterios de evaluación reales.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: tutorial
temas: [situaciones-de-aprendizaje-ia, prompts-para-docentes]
etiquetas: [situaciones de aprendizaje, LOMLOE, programación didáctica, competencias]
necesidad: "¿Cómo uso la IA para diseñar una situación de aprendizaje que cumpla la LOMLOE y no sea genérica?"
estado: publicado
fuentes:
  - titulo: Real Decreto 217/2022, de 29 de marzo, por el que se establece la ordenación y las enseñanzas mínimas de la Educación Secundaria Obligatoria
    url: https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975
    editor: Boletín Oficial del Estado
    consultado: 2026-10-12
  - titulo: Decreto 30/2023, de 16 de marzo, por el que se establece la ordenación y el currículo de la Educación Secundaria Obligatoria y del Bachillerato en la Comunidad Autónoma de Canarias (BOC de 23 de marzo de 2023; reproducción en INAP)
    url: https://laadministracionaldia.inap.es/noticia.asp?id=1231728
    editor: Gobierno de Canarias / INAP
    consultado: 2026-10-12
---

Una situación de aprendizaje bien diseñada lleva tiempo, y es comprensible que la IA resulte tentadora para acelerar el proceso. El riesgo es obtener un documento con todos los apartados formales, una redacción impecable y ninguna coherencia real entre lo que se pide al alumnado y lo que se evalúa. Este tutorial propone un procedimiento en el que **la IA trabaja por fases y siempre sobre tus referentes curriculares**.

**Necesitas:** tu currículo oficial (en Canarias, el Decreto 30/2023 y sus anexos para ESO y Bachillerato; en otras comunidades, su decreto correspondiente), un asistente de IA y unos 45-60 minutos.

## Paso 0. Ten clara la definición

El Real Decreto 217/2022 define las situaciones de aprendizaje como «situaciones y actividades que implican el despliegue por parte del alumnado de actuaciones asociadas a competencias clave y competencias específicas y que contribuyen a la adquisición y desarrollo de las mismas». Es decir: el centro no es el producto final ni el tema, sino **lo que el alumnado tiene que hacer** y las competencias que despliega al hacerlo.

Tenlo presente porque la IA tiende a confundir una situación de aprendizaje con una unidad temática con actividades.

## Paso 1. Selecciona los referentes (sin IA)

Este paso es tuyo. Elige del currículo:

- Una o dos **competencias específicas**.
- Los **criterios de evaluación** asociados que vas a evaluar (pocos y bien elegidos).
- Los **saberes básicos** implicados.

Copia esos textos literalmente en un documento. Serán la base de todos los prompts.

<div class="nota nota--verificar">

No pidas a la IA que «busque» o «recuerde» los criterios de tu currículo autonómico: puede generar textos con apariencia oficial que no existen. Pégalos siempre tú desde la fuente oficial.

</div>

## Paso 2. Genera tres ideas de contexto

Pide propuestas de **situación problema** relevantes para tu alumnado, sin desarrollarlas todavía:

```text
Actúa como docente de [MATERIA] en [CURSO] con experiencia en diseño de situaciones de aprendizaje LOMLOE.
A partir de estos referentes curriculares, propón TRES contextos o retos distintos para una situación de aprendizaje.
Para cada uno: título, reto planteado al alumnado (2 líneas), producto final y por qué es relevante para estudiantes de [CONTEXTO DEL CENTRO].
No desarrolles actividades todavía.

REFERENTES (literales):
[pega aquí competencias específicas, criterios y saberes]
```

Elige uno, combina dos o descártalos todos y pide otros. Este es el momento de mayor valor de tu criterio: un buen contexto conecta con tu alumnado concreto, y eso solo lo sabes tú.

## Paso 3. Pide la secuencia de actividades

Con el contexto elegido, pide la secuencia indicando sesiones, duración y recursos:

```text
Desarrolla el contexto «[TÍTULO ELEGIDO]» en una secuencia de [N] sesiones de [DURACIÓN] minutos.
Para cada sesión: objetivo, actividades con tiempos, agrupamiento, recursos y qué evidencia de aprendizaje se obtiene.
Las actividades deben permitir observar los criterios de evaluación indicados; señala en cada actividad qué criterio se observa.
Recursos disponibles: [RECURSOS].
Grupo: [DESCRIPCIÓN GENÉRICA, sin datos personales].
```

La instrucción clave es la última línea de la tarea: obliga a vincular cada actividad con un criterio. Si alguna actividad no observa ningún criterio, o algún criterio no se observa en ninguna actividad, ya tienes el primer problema a corregir.

## Paso 4. Construye la matriz de coherencia

Pide una tabla de verificación:

```text
Crea una tabla con columnas: criterio de evaluación | actividades en las que se observa | evidencia o producto | instrumento de evaluación.
Señala los criterios que queden poco cubiertos y propón cómo reforzarlos.
```

Revisa esta tabla con calma. Es la herramienta más útil del proceso, porque hace visible la coherencia (o su ausencia) entre lo que se enseña, lo que se hace y lo que se evalúa.

## Paso 5. Atiende a la diversidad

Pide ajustes concretos desde el Diseño Universal para el Aprendizaje, describiendo necesidades de forma genérica:

```text
Propón ajustes de la secuencia según los principios del DUA para: [NECESIDADES GENÉRICAS, p. ej. dificultades de comprensión lectora, alta capacidad, desconocimiento del idioma].
Distingue entre ajustes de acceso a la información, de expresión del aprendizaje y de implicación.
No cambies los criterios de evaluación.
```

## Paso 6. Revisión final con lista de control

Antes de dar por buena la situación de aprendizaje, comprueba:

- [ ] Los criterios de evaluación son literales de tu currículo.
- [ ] Hay un reto o producto con sentido para el alumnado, no solo actividades encadenadas.
- [ ] Cada criterio se observa en al menos una actividad con una evidencia concreta.
- [ ] Los tiempos son realistas para tu grupo.
- [ ] No hay datos, cifras ni referencias sin comprobar.
- [ ] Los ajustes de diversidad son aplicables con tus recursos.
- [ ] El documento se entiende sin la conversación con la IA.

Para la evaluación, continúa con el tutorial de [rúbricas con IA paso a paso](/articulos/rubricas-con-ia-paso-a-paso/).

## Errores frecuentes

- **Pedirlo todo en un solo prompt.** El resultado parece completo y es superficial. Por fases, cada parte se puede revisar.
- **Aceptar apartados de relleno.** Fundamentaciones genéricas que podrían servir para cualquier situación de aprendizaje no aportan nada: bórralas o reescríbelas.
- **Olvidar el contexto real.** Si no le das información sobre tu entorno, la IA propondrá contextos genéricos.

## Conclusión práctica

La IA es útil para **generar alternativas de contexto, desarrollar secuencias y construir matrices de coherencia**, siempre que trabaje sobre tus referentes literales y por fases. La selección de criterios, la elección del contexto y la revisión final de la coherencia son tuyas. El prompt completo, con variables editables, está en la biblioteca: [diseñar una situación de aprendizaje](/prompts/disenar-situacion-de-aprendizaje/).
