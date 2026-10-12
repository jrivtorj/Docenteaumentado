---
titulo: Cómo escribir prompts eficaces para tareas docentes
descripcion: Las seis partes de un buen prompt docente (rol, contexto, tarea, referentes, formato y criterios) con ejemplos antes y después para el aula.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: guia
temas: [prompts-para-docentes, ia-para-docentes]
etiquetas: [prompts, ingeniería de prompts, contexto, método]
destacado: true
necesidad: "¿Por qué la IA me da resultados tan genéricos y cómo lo arreglo?"
estado: publicado
fuentes:
  - titulo: Real Decreto 217/2022, de 29 de marzo, por el que se establece la ordenación y las enseñanzas mínimas de la Educación Secundaria Obligatoria
    url: https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975
    editor: Boletín Oficial del Estado
    consultado: 2026-10-12
  - titulo: Does ChatGPT tell the truth?
    url: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
    editor: OpenAI Help Center
    consultado: 2026-10-12
---

Si la IA te devuelve actividades genéricas, rúbricas vagas o explicaciones que no encajan con tu grupo, lo más probable es que el problema no sea la herramienta, sino la petición. Un asistente rellena con lo más probable todo lo que no le dices, y lo más probable es, por definición, lo más genérico.

Escribir buenos prompts no requiere trucos ni fórmulas mágicas. Requiere lo mismo que un buen encargo a un compañero: **explicar quién eres, para quién es, qué necesitas, con qué referentes, en qué formato y cómo sabrás que está bien hecho**.

## Las seis partes de un prompt docente

### 1. Rol

Indica desde qué perspectiva debe trabajar. «Actúa como docente de Física y Química de 3.º de ESO con experiencia en aprendizaje basado en la indagación» orienta el vocabulario, el nivel de exigencia y el tipo de propuestas mucho más que un «eres un experto».

### 2. Contexto

Describe el grupo y las condiciones sin datos personales: etapa y curso, número aproximado de estudiantes, conocimientos previos, necesidades de apoyo relevantes (de forma genérica), número y duración de sesiones, recursos disponibles.

> 3.º ESO, 26 estudiantes. Han trabajado el modelo de partículas pero confunden masa y volumen. Dos estudiantes necesitan textos con apoyo visual. Cuatro sesiones de 55 minutos. Laboratorio disponible en una sesión.

### 3. Tarea

Formula una sola tarea principal, con un verbo concreto: diseña, reescribe, compara, propone tres alternativas, identifica errores. Si necesitas varias cosas, pídelas por pasos.

### 4. Referentes

Es la parte que más se omite y la que más mejora el resultado en contexto LOMLOE. **Pega literalmente** los criterios de evaluación, competencias específicas y saberes básicos de tu currículo. No le pidas que los recuerde: puede inventar criterios con apariencia oficial.

Recuerda que el Real Decreto 217/2022 define los criterios de evaluación como «referentes que indican los niveles de desempeño esperados en el alumnado en las situaciones o actividades a las que se refieren las competencias específicas». Si quieres que la IA diseñe algo evaluable, necesita esos referentes.

### 5. Formato

Di cómo quieres la respuesta: una tabla con columnas concretas, un documento con apartados numerados, un texto para entregar al alumnado con un nivel de lectura determinado, una lista de no más de diez elementos. Un formato claro ahorra mucho tiempo de edición.

### 6. Criterios de calidad y restricciones

Indica qué hace que el resultado sea bueno y qué no admites:

- «No inventes datos, normativa ni referencias.»
- «Si te falta información imprescindible, pregúntame antes de responder.»
- «Usa ejemplos del contexto canario.»
- «Al final, lista los aspectos que debo revisar antes de usarlo en clase.»

## Un ejemplo antes y después

**Antes:**

```text
Hazme una actividad sobre las reacciones químicas para 3.º de ESO.
```

**Después:**

```text
Actúa como docente de Física y Química de 3.º ESO con experiencia en aprendizaje por indagación.

CONTEXTO
Grupo de 26 estudiantes. Conocen el modelo de partículas, pero confunden cambio físico y cambio químico. Dos estudiantes necesitan apoyo visual en los textos. Dispongo de dos sesiones de 55 minutos y del laboratorio en una de ellas.

TAREA
Diseña una actividad de indagación en la que el alumnado distinga cambios físicos y químicos a partir de fenómenos cotidianos.

REFERENTES CURRICULARES (úsalos literalmente)
[Pega aquí el criterio de evaluación y los saberes básicos de tu currículo]

FORMATO
Documento con: objetivo, materiales, secuencia por sesión con tiempos, preguntas guía, producto final y una lista de cotejo de 5 ítems vinculada al criterio.

CRITERIOS DE CALIDAD
- Usa solo materiales seguros y de bajo coste.
- No inventes datos ni referencias.
- Si te falta información, pregúntame antes.
- Al final, señala los riesgos de seguridad y los aspectos que debo revisar.
```

El segundo prompt tarda dos minutos más en escribirse y ahorra mucho más tiempo de corrección. Además, al ser una plantilla, puedes reutilizarlo cambiando las partes variables. Esa es la lógica de nuestra [biblioteca de prompts](/prompts/) y del [constructor de prompts](/laboratorio/constructor-de-prompts/).

## Técnicas que funcionan en tareas docentes

**Pide preguntas antes de la respuesta.** Añadir «hazme hasta tres preguntas si te falta información» evita que el modelo rellene huecos con suposiciones.

**Trabaja por pasos.** Primero la estructura de la situación de aprendizaje; cuando la valides, las actividades; después, los instrumentos de evaluación. Corregir un esquema es más rápido que rehacer un documento completo.

**Da un ejemplo del resultado que quieres.** Si tienes una rúbrica que te gusta, pégala como modelo de formato (no de contenido).

**Pide alternativas.** «Propón tres enfoques distintos y explica en una línea las ventajas de cada uno» te devuelve el papel de decidir.

**Pide que se autoevalúe contra tus criterios.** «Revisa tu propuesta contra el criterio de evaluación y señala qué parte no queda cubierta» suele detectar huecos. No sustituye tu revisión, pero la orienta.

## Errores frecuentes

- **Pedir datos en lugar de transformaciones.** La IA es mucho más fiable transformando un texto que le das que aportando datos de memoria.
- **Aceptar el primer resultado.** La primera respuesta es un borrador. Itera: «más breve», «más concreto», «con ejemplos de la vida diaria del alumnado».
- **Incluir datos personales.** Nunca nombres, calificaciones ni informes del alumnado. Describe las necesidades de forma genérica.
- **Prompts kilométricos y desordenados.** La longitud no es el objetivo; la claridad sí. Usa apartados.

<div class="nota nota--clave">

Guarda los prompts que te funcionen. Un buen prompt es un material didáctico reutilizable: con cambiar el curso, los criterios y el contexto, sirve para todo el año.

</div>

## Conclusión práctica

Antes de enviar un prompt, comprueba que tiene las seis partes: **rol, contexto, tarea, referentes literales, formato y criterios de calidad**. Si falta alguna, el modelo la rellenará por ti, y no como tú lo harías. Empieza adaptando uno de los prompts de la [biblioteca](/prompts/), por ejemplo el de [diseño de una situación de aprendizaje](/prompts/disenar-situacion-de-aprendizaje/).
