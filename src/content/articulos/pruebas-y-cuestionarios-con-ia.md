---
titulo: "Pruebas y cuestionarios con IA: cómo generar preguntas que evalúen de verdad"
descripcion: Tutorial para crear pruebas y cuestionarios con IA con preguntas de distintos niveles cognitivos, distractores plausibles y revisión de calidad.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: tutorial
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
etiquetas: [cuestionarios, exámenes, preguntas de opción múltiple, distractores, evaluación]
necesidad: "¿Cómo preparo con IA un cuestionario o un examen que no sea solo de memoria?"
estado: publicado
seo:
  titulo: "Cómo crear pruebas y cuestionarios con IA que evalúen de verdad"
fuentes:
  - titulo: Gemini Notebook para educación
    url: https://edu.google.com/intl/ALL_us/ai-gemini-notebook
    editor: Google for Education
    consultado: 2026-10-12
---

Generar veinte preguntas tipo test con IA lleva segundos. Generar veinte preguntas **buenas** lleva bastante más, porque la IA tiende a producir preguntas de memoria, con distractores evidentes y, a veces, con más de una respuesta correcta o con la respuesta marcada equivocada. Este tutorial muestra cómo evitarlo.

**Necesitas:** el contenido de referencia (tus apuntes o el tema), los criterios de evaluación y unos 30-40 minutos para generar y revisar un cuestionario de 10-15 preguntas.

## Paso 1. Ancla las preguntas a tu material

La mejor manera de reducir errores es que la IA genere las preguntas **a partir del texto que tú le das**, no de su conocimiento general. Pega el contenido o súbelo a una herramienta que trabaje sobre fuentes, como [Gemini Notebook](/herramientas/gemini-notebook/), que según Google genera cuestionarios basados exclusivamente en las fuentes que subes.

Indica en el prompt que no puede usar información que no esté en el material: así, cualquier pregunta fuera de él es un error fácil de detectar.

## Paso 2. Pide una tabla de especificaciones antes que las preguntas

Antes de generar preguntas, decide qué y cómo vas a evaluar:

```text
A partir del material adjunto y de estos criterios de evaluación [CRITERIOS], propón una tabla de especificaciones para una prueba de [N] preguntas:
filas = contenidos o apartados del material; columnas = recordar, comprender, aplicar, analizar.
Indica cuántas preguntas habría en cada celda. Al menos el 50 % deben ser de aplicar o analizar.
```

Ajusta la tabla según tu criterio. Es la pieza que garantiza que la prueba evalúa lo que importa y no solo lo que es fácil de preguntar.

## Paso 3. Genera las preguntas con reglas explícitas

```text
Redacta las preguntas siguiendo la tabla de especificaciones.
Para las preguntas de opción múltiple:
- 4 opciones, una sola correcta sin ambigüedad.
- Los distractores deben basarse en errores conceptuales frecuentes del alumnado, no en opciones absurdas.
- Las opciones tienen longitud y estructura parecidas.
- Evita «todas las anteriores» y «ninguna de las anteriores».
- Evita las negaciones en el enunciado; si son imprescindibles, resáltalas en mayúsculas.
Para cada pregunta indica: respuesta correcta, justificación breve, error conceptual que representa cada distractor y nivel cognitivo.
Usa solo información del material adjunto.
```

Pedir el **error conceptual que representa cada distractor** obliga a generar distractores con valor diagnóstico: si un estudiante elige uno, sabes qué no ha entendido.

## Paso 4. Revisa pregunta a pregunta

Esta revisión no es opcional. Comprueba cada pregunta con esta lista:

- [ ] La respuesta marcada es correcta y no hay otra defendible.
- [ ] El enunciado se entiende sin leer las opciones.
- [ ] La pregunta no se responde por descarte gramatical u ortográfico.
- [ ] Los datos y cálculos son correctos (en ciencias, resuelve las numéricas tú; ver [errores frecuentes en matemáticas y ciencias](/articulos/ia-matematicas-ciencias-errores-y-usos-fiables/)).
- [ ] El nivel cognitivo indicado es real: muchas preguntas etiquetadas como «aplicar» son en realidad de recordar.
- [ ] Ninguna pregunta da pistas sobre la respuesta de otra.

Descarta sin dudar las preguntas dudosas. Es mejor un cuestionario de doce preguntas buenas que uno de veinte con cinco defectuosas.

## Paso 5. Preguntas abiertas y su criterio de corrección

Las preguntas abiertas evalúan mejor el razonamiento. Pide la pregunta junto con una **respuesta modelo y criterios de corrección**:

```text
Redacta 2 preguntas abiertas de nivel analizar sobre [CONTENIDO].
Para cada una: respuesta modelo, elementos imprescindibles para considerarla correcta y errores frecuentes esperables.
```

## Paso 6. Versiones paralelas

Si necesitas varias versiones de la prueba, pide variantes **de los datos o del contexto** manteniendo la estructura y la dificultad, y resuelve al menos una variante de cada pregunta numérica.

## Conclusión práctica

Un cuestionario con IA será tan bueno como su **tabla de especificaciones** y su **revisión**. Ancla las preguntas a tu material, exige distractores basados en errores conceptuales y revisa una a una antes de usarlas. El prompt completo está en la biblioteca: [cuestionario de opción múltiple con distractores diagnósticos](/prompts/cuestionario-distractores-diagnosticos/).
