---
titulo: Diseñar una situación de aprendizaje a partir de tus criterios de evaluación
descripcion: Prompt por fases para diseñar una situación de aprendizaje LOMLOE coherente, con reto, secuencia de sesiones y matriz de criterios y evidencias.
finalidad: Obtener un borrador completo y coherente de situación de aprendizaje en el que cada actividad esté vinculada a un criterio de evaluación real de tu currículo, para revisarlo y adaptarlo.
tarea: programacion-didactica
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [situaciones de aprendizaje, LOMLOE, programación, competencias específicas]
temas: [situaciones-de-aprendizaje-ia, prompts-para-docentes]
relacionados: [situacion-de-aprendizaje-con-ia-paso-a-paso, como-escribir-prompts-para-docentes]
estado: publicado
seo:
  titulo: "Prompt para diseñar una situación de aprendizaje LOMLOE"
variables:
  - nombre: MATERIA
    descripcion: Materia, ámbito o módulo profesional.
    ejemplo: Física y Química
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 3.º ESO
  - nombre: GRUPO
    descripcion: Descripción genérica del grupo, sin datos personales.
    ejemplo: 25 estudiantes; conocen el modelo de partículas; dos necesitan apoyo en comprensión lectora
  - nombre: SESIONES
    descripcion: Número y duración de las sesiones.
    ejemplo: 6 sesiones de 55 minutos
  - nombre: RECURSOS
    descripcion: Recursos disponibles.
    ejemplo: laboratorio en dos sesiones, portátiles por parejas
  - nombre: CONTEXTO
    descripcion: Entorno del centro que pueda dar sentido al reto.
    ejemplo: centro de costa en Gran Canaria, con alumnado interesado en el mar y la pesca
  - nombre: REFERENTES
    descripcion: Competencias específicas, criterios de evaluación y saberes básicos copiados literalmente del currículo oficial.
    ejemplo: "(pega aquí los textos literales del decreto de currículo)"
prompt: |
  Actúa como docente de [MATERIA] con experiencia en el diseño de situaciones de aprendizaje según la LOMLOE.

  Vamos a diseñar una situación de aprendizaje para [CURSO]. Trabajaremos por fases y no pasarás a la siguiente fase hasta que yo te lo indique.

  DATOS
  - Grupo: [GRUPO]
  - Temporalización: [SESIONES]
  - Recursos: [RECURSOS]
  - Contexto del centro: [CONTEXTO]

  REFERENTES CURRICULARES (literales; no los modifiques, no los resumas y no añadas otros):
  [REFERENTES]

  FASE 1. Propón tres retos o contextos distintos para la situación de aprendizaje. Para cada uno indica: título, reto que se plantea al alumnado (máximo dos líneas), producto final y por qué puede resultar significativo para este grupo. No desarrolles actividades todavía.

  Cuando elija un reto, harás:
  FASE 2. Secuencia de sesiones. Para cada sesión: objetivo, actividades con tiempo estimado, agrupamiento, recursos y evidencia de aprendizaje que se obtiene. Indica en cada actividad qué criterio de evaluación permite observar.
  FASE 3. Matriz de coherencia en una tabla con columnas: criterio de evaluación | actividades donde se observa | evidencia | instrumento de evaluación. Señala los criterios poco cubiertos y cómo reforzarlos.
  FASE 4. Ajustes según el Diseño Universal para el Aprendizaje, distinguiendo acceso a la información, expresión y implicación, sin modificar los criterios de evaluación.

  CRITERIOS DE CALIDAD
  - No inventes normativa, datos ni referencias. Si mencionas un dato concreto, indica que debe verificarse.
  - Evita los apartados genéricos que servirían para cualquier situación de aprendizaje.
  - Si te falta información imprescindible, pregúntame antes de empezar.
---

## Cómo usarlo

Este prompt está pensado para una **conversación por fases**. Envíalo completo; el asistente propondrá tres retos (fase 1) y esperará a que elijas. Después, pide cada fase con un mensaje breve: «Elijo el reto 2. Pasa a la fase 2».

La variable decisiva es **[REFERENTES]**: copia literalmente las competencias específicas, los criterios de evaluación y los saberes básicos de tu decreto de currículo. Si la dejas vacía o pides al asistente que los busque, puede inventarlos.

## Ejemplo de aplicación

Con los valores de ejemplo (Física y Química, 3.º ESO, centro de costa), una de las propuestas de reto podría girar en torno a analizar por qué cambian las propiedades del agua de mar en distintos puntos de la costa, con un informe para una cofradía de pescadores como producto final. La fase 3 mostrará si los criterios sobre trabajo experimental y comunicación científica quedan bien cubiertos o si hace falta reforzarlos.

Revisa el resultado con la lista de control del tutorial [Cómo diseñar una situación de aprendizaje con IA](/articulos/situacion-de-aprendizaje-con-ia-paso-a-paso/).
