---
titulo: Retroalimentación formativa sobre una producción escrita anonimizada
descripcion: Obtén propuestas de retroalimentación formativa, concreta y accionable sobre un texto del alumnado anonimizado, vinculada a los criterios de la rúbrica.
finalidad: Ahorrar tiempo en la redacción de comentarios formativos de calidad, manteniendo la decisión sobre qué comentar y cómo calificar en manos del docente.
tarea: retroalimentacion
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [retroalimentación, evaluación formativa, escritura, feedback]
temas: [evaluacion-rubricas-ia]
relacionados: [rubricas-con-ia-paso-a-paso, proteccion-datos-ia-centros-educativos]
estado: publicado
variables:
  - nombre: TEXTO
    descripcion: Producción del alumnado, eliminando cualquier dato que permita identificar a su autor.
    ejemplo: "(pega aquí el texto anonimizado)"
  - nombre: TAREA
    descripcion: Qué se pidió en la tarea.
    ejemplo: texto argumentativo de 300 palabras sobre si debería limitarse el uso del móvil en los centros
  - nombre: RUBRICA
    descripcion: Rúbrica o criterios con los que se valora.
    ejemplo: "(pega aquí la rúbrica o los criterios)"
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 4.º ESO
prompt: |
  Actúa como docente de [CURSO] experto en evaluación formativa y en la enseñanza de la escritura.

  TAREA ENCARGADA: [TAREA]

  RÚBRICA O CRITERIOS:
  [RUBRICA]

  PRODUCCIÓN (anonimizada):
  [TEXTO]

  Redacta una propuesta de retroalimentación formativa dirigida al estudiante, en segunda persona y con un tono respetuoso y motivador, con esta estructura:
  1. Dos fortalezas concretas, citando el fragmento del texto donde se observan.
  2. Dos aspectos prioritarios de mejora, citando el fragmento, explicando por qué conviene mejorarlos según la rúbrica y proponiendo una acción concreta para hacerlo.
  3. Una pregunta que invite al estudiante a revisar su texto por sí mismo.

  Reglas:
  - No pongas nota ni nivel de la rúbrica: la valoración la hará el docente.
  - Céntrate en lo más importante; no corrijas todos los errores menores.
  - No hagas suposiciones sobre la persona que escribió el texto.

  Por separado, para el docente, indica en una línea qué criterio de la rúbrica te parece más débil en esta producción y por qué.
---

## Cómo usarlo

<div class="nota nota--verificar">

Antes de usarlo, comprueba que **tu administración permite** tratar producciones del alumnado con la herramienta que vas a usar. Elimina nombres y cualquier dato identificativo; ten en cuenta que el propio contenido de un texto puede identificar a su autor. Más detalles en [IA y protección de datos en el centro](/articulos/proteccion-datos-ia-centros-educativos/).

</div>

La propuesta es un borrador: decide tú qué comentarios mantener y adáptalos a lo que conoces del estudiante. La regla «no pongas nota» es deliberada: la calificación es una decisión docente.

## Ejemplo de aplicación

Con un texto argumentativo de 4.º ESO, una retroalimentación útil podría reconocer que la tesis está clara en el primer párrafo y señalar como mejora prioritaria que el segundo argumento no se apoya en ningún ejemplo ni dato, proponiendo añadir un caso concreto. La pregunta final («¿qué respondería alguien que piensa lo contrario a tu tercer párrafo?») invita a incorporar la refutación.
