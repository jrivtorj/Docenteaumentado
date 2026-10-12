---
titulo: "Cómo crear rúbricas con IA paso a paso (y revisarlas bien)"
descripcion: Tutorial para elaborar rúbricas analíticas con IA a partir de criterios de evaluación reales, con descriptores observables y revisión de calidad.
fechaPublicacion: 2026-10-12
autor: jose-david-rivero
tipo: tutorial
temas: [evaluacion-rubricas-ia, prompts-para-docentes]
etiquetas: [rúbricas, evaluación, instrumentos de evaluación, descriptores]
necesidad: "¿Cómo consigo que la IA me haga una rúbrica útil y no una lista de adjetivos?"
estado: publicado
fuentes:
  - titulo: Real Decreto 217/2022, de 29 de marzo (enseñanzas mínimas de la ESO)
    url: https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975
    editor: Boletín Oficial del Estado
    consultado: 2026-10-12
---

Pide a cualquier asistente «una rúbrica para evaluar una exposición oral» y obtendrás algo parecido a esto: *Excelente: el alumno se expresa de forma excelente. Bueno: el alumno se expresa bien. Mejorable: el alumno se expresa con algunas dificultades.* Una rúbrica así no sirve ni para evaluar ni para que el alumnado sepa qué mejorar.

El problema no es la IA, sino que una rúbrica de calidad exige decisiones que el modelo no puede tomar sin información: **qué se evalúa exactamente, qué evidencia se observa y qué distingue un nivel de otro**. Este tutorial te guía para dárselas.

**Necesitas:** los criterios de evaluación literales, una descripción de la tarea y unos 30 minutos.

## Paso 1. Define la tarea y su evidencia (sin IA)

Escribe en dos o tres líneas qué produce o hace el alumnado y qué vas a poder observar. Por ejemplo:

> Exposición oral de 5 minutos, por parejas, explicando un fenómeno químico cotidiano con apoyo de una presentación de un máximo de 5 diapositivas. Se observa la explicación oral, la respuesta a dos preguntas del público y la presentación.

## Paso 2. Selecciona los criterios y conviértelos en dimensiones

Pega los criterios de evaluación del currículo y pide que los descomponga en **dimensiones observables** en esa tarea:

```text
Actúa como especialista en evaluación competencial.
Tarea: [DESCRIPCIÓN DE LA TAREA].
Criterios de evaluación (literales): [CRITERIOS].
Propón entre 3 y 5 dimensiones observables en esta tarea concreta que permitan valorar esos criterios.
Para cada dimensión, indica qué criterio evalúa y qué evidencia concreta se observa.
No redactes todavía los niveles.
```

Revisa las dimensiones: ¿son observables en *esta* tarea? ¿Están todos los criterios? ¿Sobra alguna?

## Paso 3. Redacta los niveles con descriptores observables

Con las dimensiones validadas, pide los descriptores:

```text
Para cada dimensión, redacta 4 niveles de desempeño (de 1 a 4).
Reglas:
- Cada descriptor describe lo que se observa, no un adjetivo de calidad. Prohibido usar «excelente», «adecuado», «correcto», «bien» o «mal» como descriptor.
- La diferencia entre niveles debe ser cualitativa y verificable (qué hace o qué incluye), no de intensidad («algunos», «bastantes», «muchos»).
- Lenguaje comprensible para estudiantes de [CURSO].
Formato: tabla con dimensiones en filas y niveles en columnas.
```

La regla de prohibir adjetivos valorativos es la que más mejora el resultado.

## Paso 4. Revisa la calidad de la rúbrica

Pide una autoevaluación antes de revisarla tú:

```text
Revisa la rúbrica con estas preguntas y propón cambios concretos:
1. ¿Podrían dos docentes distintos asignar el mismo nivel a la misma producción?
2. ¿Hay descriptores que se solapan entre niveles?
3. ¿Hay algún descriptor que no se pueda observar en la tarea?
4. ¿El nivel 3 describe un desempeño que cumple el criterio?
```

Después, tu revisión. Comprueba en especial:

- **Fiabilidad:** aplica mentalmente la rúbrica a dos trabajos reales de cursos anteriores. Si dudas entre niveles, el descriptor no es preciso.
- **Alineación:** cada dimensión remite a un criterio de evaluación.
- **Utilidad para el alumnado:** un estudiante debería saber qué hacer para pasar de un nivel al siguiente.

## Paso 5. Versión para el alumnado

Pide una versión en lenguaje cercano, en segunda persona, para entregar antes de la tarea:

```text
Reescribe la rúbrica en segunda persona («Explicas…», «Incluyes…»), con lenguaje claro para estudiantes de [CURSO], sin cambiar el contenido de los descriptores.
```

Entregar la rúbrica antes de la tarea la convierte en una herramienta de aprendizaje, no solo de calificación.

## Ejemplo de resultado (fragmento)

| Dimensión | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Explicación del fenómeno | Describe lo que se observa sin explicar la causa. | Nombra el proceso químico pero no lo relaciona con lo observado. | Explica el fenómeno como un cambio químico, identificando reactivos y productos. | Además, justifica la explicación con una evidencia observable y la representa con una ecuación ajustada. |

Observa que cada nivel añade algo **verificable**. Puedes señalar en el trabajo dónde está.

## Errores frecuentes

- **Demasiadas dimensiones.** Más de cinco hace la rúbrica inmanejable. Mejor pocas y bien definidas.
- **Puntuaciones automáticas.** La rúbrica orienta tu juicio; no la uses para que la IA califique trabajos del alumnado, por motivos pedagógicos y de [protección de datos](/articulos/proteccion-datos-ia-centros-educativos/).
- **No probarla.** Una rúbrica se valida aplicándola a producciones reales, no leyéndola.

## Conclusión práctica

Una buena rúbrica con IA se construye **por capas**: tarea y evidencia (tú), dimensiones (IA, revisadas por ti), descriptores sin adjetivos valorativos (IA, con reglas estrictas) y validación con trabajos reales (tú). El prompt completo está en la biblioteca: [rúbrica analítica a partir de criterios de evaluación](/prompts/rubrica-analitica-criterios-evaluacion/).
