# Estrategia editorial y de posicionamiento

Documento de trabajo para planificar contenidos. No promete posiciones en buscadores: organiza lo que sí está bajo nuestro control (utilidad, originalidad, estructura, enlazado interno y actualización).

## 1. Principios

1. **Una pieza, una necesidad real.** Cada texto responde a una pregunta concreta del profesorado (campo `necesidad` del esquema). Si no se puede formular la pregunta, no se escribe el texto.
2. **Aplicado antes que divulgativo.** Prioridad: tutoriales, prompts y recursos reutilizables; después, análisis y opinión; en último lugar, noticias.
3. **Contenido que conserve su valor.** Preferir métodos y criterios (cómo evaluar, cómo revisar, cómo pedir) a comparativas de versiones que caducan en meses.
4. **Nada de páginas casi idénticas.** No crear «prompts para profesores de X» por cada materia si solo cambia una palabra. Una página fuerte con variables vale más que veinte variantes.
5. **Verificabilidad.** Fuentes primarias enlazadas, fechas visibles y dudas declaradas.

## 2. Grupos temáticos (clusters)

Cada grupo tiene una **página pilar** (guía amplia) y **piezas satélite** (tutoriales, prompts, fichas) que enlazan a la pilar y entre sí. Los grupos están definidos en `src/content/temas.json` y generan las páginas `/temas/<tema>/`.

| Grupo | Intención principal | Pilar actual | Satélites actuales | Huecos prioritarios |
|---|---|---|---|---|
| IA para docentes | Entender la IA generativa y decidir cómo usarla | Qué es (y qué no es) la IA generativa | Elegir asistente; revisar materiales; fichas | Glosario básico; «primeros pasos en una semana» |
| Prompts para docentes | Escribir prompts eficaces | Cómo escribir prompts eficaces | 12 prompts; constructor | Prompts por materia con ejemplos reales; errores frecuentes |
| Situaciones de aprendizaje con IA | Diseñar SA LOMLOE con IA | Tutorial de SA paso a paso | Prompts de SA, actividad competencial y DUA | SA completas de ejemplo por etapa (ESO, Bachillerato, FP) |
| Evaluación y rúbricas con IA | Crear instrumentos y evaluar con integridad | Tutorial de rúbricas | Pruebas y cuestionarios; detectores; evaluar con IA | Listas de cotejo; evaluación de la oralidad; coevaluación |
| IA para matemáticas y ciencias | Usar IA sin errores de cálculo y concepto | IA en matemáticas y ciencias | Problemas contextualizados; detectar errores | Laboratorio: comparativa de asistentes resolviendo problemas; IA y hoja de cálculo |
| Alfabetización digital y pensamiento crítico | Enseñar al alumnado a usar la IA con criterio | Cinco actividades de alfabetización en IA | Verificación de fuentes; detectar errores | Secuencia trimestral para tutoría; IA e imágenes falsas |
| Privacidad, ética y normativa | Usar IA respetando datos y normativa | IA y protección de datos | Comunicación a familias; detectores | Reglamento de IA explicado para centros (cuando se confirme el calendario) |
| ChatGPT para profesores | Usos docentes de ChatGPT | — (thin: noindex) | Ficha; comparativa | Guía específica de ChatGPT para docentes |
| Claude aplicado a la educación | Usos docentes de Claude | — (thin: noindex) | Ficha; comparativa | Guía específica de Claude para docentes |

Los grupos de ChatGPT y Claude tienen hoy menos de tres recursos, así que su página de tema existe pero no se indexa. Se indexarán solos al alcanzar el mínimo (`MINIMO_INDEXABLE` en `src/pages/temas/[tema].astro`).

## 3. Calendario propuesto (primer trimestre)

Ritmo realista para un docente en activo: **una pieza sustancial por semana** y un prompt nuevo cada dos semanas.

| Semana | Pieza | Tipo | Grupo |
|---|---|---|---|
| 1 | ChatGPT para profesores: guía práctica | Guía | ChatGPT |
| 2 | Situación de aprendizaje completa de Física y Química (3.º ESO) | Tutorial / ejemplo | Situaciones de aprendizaje |
| 3 | Claude para profesores: guía práctica | Guía | Claude |
| 4 | Laboratorio: tres asistentes resuelven los mismos 10 problemas de química | Laboratorio | Matemáticas y ciencias |
| 5 | Listas de cotejo y escalas con IA | Tutorial | Evaluación |
| 6 | Adaptar materiales para alumnado que aprende español | Tutorial | IA para docentes |
| 7 | Secuencia de alfabetización en IA para tutoría | Guía | Alfabetización |
| 8 | Revisión trimestral de fichas de herramientas | Mantenimiento | — |

## 4. Preguntas frecuentes del profesorado (banco de temas)

Usar como fuente de títulos y secciones. Validar el interés real con Search Console cuando haya datos.

- ¿Puedo usar ChatGPT con datos de mis alumnos?
- ¿Qué IA puede usar mi alumnado de ESO?
- ¿Cómo hago una rúbrica con IA que sirva de verdad?
- ¿Cómo diseño una situación de aprendizaje con IA?
- ¿Cómo sé si un alumno ha usado IA en un trabajo?
- ¿Qué herramientas de IA son gratuitas para docentes?
- ¿Cómo creo un examen tipo test con IA?
- ¿La IA se equivoca en matemáticas?
- ¿Cómo adapto un texto a distintos niveles con IA?
- ¿Qué dice la ley sobre la IA en los centros educativos?

## 5. Enlazado interno

- Cada pieza nueva enlaza **a su pilar** y a **al menos dos** piezas relacionadas, con texto de enlace descriptivo (nunca «aquí»).
- Cada prompt declara en `relacionados` los artículos que lo explican; el artículo muestra automáticamente «Prompts para aplicar este artículo».
- Al publicar una pieza, actualizar la pilar del grupo para que la enlace.

## 6. Medición (cuando se active)

- **Search Console:** consultas con impresiones y CTR bajo (revisar título y descripción), páginas con impresiones sin clics, errores de cobertura.
- **Analítica sin cookies:** páginas de entrada, tiempo en tutoriales y uso de la biblioteca de prompts.
- Revisar trimestralmente qué piezas atraen visitas y cuáles conviene actualizar, fusionar o retirar (con redirección).
