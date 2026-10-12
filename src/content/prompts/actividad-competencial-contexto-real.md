---
titulo: Actividad competencial con un contexto real del entorno
descripcion: Diseña una actividad competencial breve (1-2 sesiones) ligada a un problema real del entorno del alumnado, con producto final y evidencias observables.
finalidad: Convertir un contenido del currículo en una actividad en la que el alumnado tenga que usar lo aprendido para resolver una situación con sentido, sin llegar a una situación de aprendizaje completa.
tarea: actividades
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [actividades competenciales, contexto real, aprendizaje significativo]
temas: [situaciones-de-aprendizaje-ia, prompts-para-docentes]
relacionados: [situacion-de-aprendizaje-con-ia-paso-a-paso, como-escribir-prompts-para-docentes]
estado: publicado
variables:
  - nombre: MATERIA
    descripcion: Materia o módulo.
    ejemplo: Biología y Geología
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 1.º ESO
  - nombre: SABER
    descripcion: Saber básico o contenido que se quiere movilizar.
    ejemplo: los ecosistemas y las relaciones entre los seres vivos
  - nombre: ENTORNO
    descripcion: Rasgos del entorno del centro que puedan aportar el contexto.
    ejemplo: municipio con un barranco cercano y problemas de especies invasoras
  - nombre: CRITERIO
    descripcion: Criterio de evaluación literal que se observará.
    ejemplo: "(pega aquí el criterio literal)"
  - nombre: DURACION
    descripcion: Tiempo disponible.
    ejemplo: dos sesiones de 55 minutos
prompt: |
  Actúa como docente de [MATERIA] en [CURSO] especializado en metodologías activas.

  Diseña una actividad competencial de [DURACION] en la que el alumnado tenga que usar [SABER] para resolver una situación real relacionada con este entorno: [ENTORNO].

  El criterio de evaluación que se observará es (literal):
  [CRITERIO]

  Incluye:
  1. Situación de partida: un problema o encargo realista, redactado para el alumnado en un máximo de seis líneas.
  2. Pregunta o reto que deben responder.
  3. Secuencia de pasos con tiempos y agrupamientos.
  4. Producto final concreto y destinatario real o verosímil (no «el profesor»).
  5. Evidencias observables del criterio de evaluación durante la actividad y en el producto.
  6. Una lista de cotejo de 4 a 6 ítems vinculada al criterio.
  7. Una variante simplificada y una ampliación para atender a distintos ritmos.

  Criterios de calidad:
  - Si incluyes datos sobre el entorno (especies, cifras, lugares), márcalos como «a verificar» e indica qué fuente oficial podría confirmarlos. No inventes datos locales.
  - Evita actividades que puedan resolverse copiando la respuesta de un buscador o de un asistente de IA.
  - Si te falta información, pregúntame antes de responder.
---

## Cómo usarlo

La variable que más mejora el resultado es **[ENTORNO]**. Describe rasgos reales de tu municipio o tu centro; la IA no los conoce y, si no se los das, propondrá contextos genéricos.

## Ejemplo de aplicación

Con los valores de ejemplo, una propuesta razonable es que el alumnado elabore una ficha informativa para el ayuntamiento sobre cómo una especie invasora altera las relaciones del ecosistema del barranco. La IA marcará como «a verificar» las especies concretas; confírmalas con fuentes oficiales (por ejemplo, el catálogo de especies invasoras del Ministerio o los servicios de medio ambiente del Cabildo) antes de usar la actividad.
