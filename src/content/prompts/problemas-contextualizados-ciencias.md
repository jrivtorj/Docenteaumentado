---
titulo: Problemas contextualizados de ciencias con resolución verificable
descripcion: Genera variantes contextualizadas de un problema de física, química o matemáticas que tú ya has resuelto, con resolución paso a paso y unidades.
finalidad: Obtener una batería de problemas contextualizados y graduados a partir de un problema modelo correcto, minimizando los errores de cálculo y de unidades típicos de la IA.
tarea: actividades
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [problemas, física y química, matemáticas, contextualización, unidades]
temas: [ia-matematicas-ciencias]
relacionados: [ia-matematicas-ciencias-errores-y-usos-fiables]
estado: publicado
variables:
  - nombre: PROBLEMA_MODELO
    descripcion: Un problema resuelto por ti, con su solución correcta.
    ejemplo: "(pega aquí el enunciado y tu resolución completa)"
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 4.º ESO
  - nombre: CONTEXTOS
    descripcion: Contextos cercanos al alumnado en los que situar los problemas.
    ejemplo: cocina, deporte, energía solar en viviendas canarias, transporte entre islas
  - nombre: CANTIDAD
    descripcion: Número de problemas.
    ejemplo: "6"
prompt: |
  Actúa como docente de ciencias de [CURSO] riguroso con el cálculo y las unidades.

  PROBLEMA MODELO (correcto, resuelto por mí):
  [PROBLEMA_MODELO]

  Genera [CANTIDAD] problemas nuevos que trabajen el mismo procedimiento, situados en estos contextos: [CONTEXTOS].

  Requisitos:
  - Gradúalos en tres niveles: dos de aplicación directa, dos que requieran un paso adicional (por ejemplo, un cambio de unidades o despejar otra variable) y dos que exijan interpretar el resultado.
  - Usa datos físicamente verosímiles y elige valores que den resultados manejables.
  - Si usas constantes o datos tabulados, indícalos explícitamente en el enunciado con su valor y unidades, para que puedan comprobarse.
  - Para cada problema, escribe la resolución paso a paso con unidades en todos los pasos y el resultado con las cifras significativas adecuadas.
  - Al final de cada resolución, haz una comprobación de coherencia: análisis dimensional y orden de magnitud del resultado.

  Después, revisa todos los cálculos y señala cualquier paso en el que hayas detectado o corregido un error.
  Recuerda que comprobaré los resultados con calculadora: no redondees en pasos intermedios.
---

## Cómo usarlo

Partir de **tu problema modelo resuelto** es lo que reduce los errores: la IA trabaja sobre un procedimiento correcto en lugar de inventarlo. Aun así, **resuelve tú al menos un problema de cada nivel** con calculadora antes de entregarlos, como se explica en [IA en matemáticas y ciencias](/articulos/ia-matematicas-ciencias-errores-y-usos-fiables/).

## Ejemplo de aplicación

Con un problema modelo de potencia y energía eléctrica para 4.º ESO, el resultado puede incluir problemas sobre el consumo de una placa de inducción, la energía producida por un panel solar doméstico o el coste de cargar un patinete. Revisa con especial atención los cambios de unidades (W a kW, s a h, J a kWh): es donde aparecen la mayoría de errores.
