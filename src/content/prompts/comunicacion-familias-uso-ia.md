---
titulo: Comunicación a las familias sobre el uso de la IA en clase
descripcion: Redacta una comunicación clara y honesta a las familias sobre cómo y para qué se usará la IA en una materia, qué no se hará y cómo se protegen los datos.
finalidad: Informar a las familias con transparencia, anticipar dudas y preocupaciones habituales y reforzar las normas de uso responsable de la IA acordadas con el grupo.
tarea: comunicacion
etapas: [eso, bachillerato, fp]
generico: true
herramientas: [chatgpt, claude, gemini]
fechaPublicacion: 2026-10-12
etiquetas: [familias, comunicación, transparencia, normas de uso]
temas: [privacidad-y-etica, alfabetizacion-digital-pensamiento-critico]
relacionados: [proteccion-datos-ia-centros-educativos, evaluar-cuando-el-alumnado-tiene-ia]
estado: publicado
variables:
  - nombre: MATERIA
    descripcion: Materia o módulo.
    ejemplo: Lengua Castellana y Literatura
  - nombre: CURSO
    descripcion: Curso y etapa.
    ejemplo: 3.º ESO
  - nombre: USOS
    descripcion: Para qué se usará la IA en clase, de forma concreta.
    ejemplo: "analizar en clase textos generados por IA para detectar errores; el alumnado no usará cuentas propias"
  - nombre: NORMAS
    descripcion: Normas sobre el uso de IA en las tareas, acordadas con el grupo o el departamento.
    ejemplo: "en los trabajos para casa se permite usar IA para buscar ideas y revisar la ortografía, declarándolo; los textos argumentativos se escriben en clase"
  - nombre: HERRAMIENTAS
    descripcion: Herramientas que se usarán y con qué cuentas, según lo autorizado por el centro.
    ejemplo: ninguna cuenta del alumnado; el docente usa una herramienta autorizada por el centro
prompt: |
  Actúa como docente de [MATERIA] que escribe a las familias del alumnado de [CURSO].

  Redacta una comunicación breve (máximo 300 palabras), en un tono cercano, claro y profesional, sin tecnicismos, que explique:

  1. Para qué usaremos la inteligencia artificial en la materia: [USOS]
  2. Con qué herramientas y cuentas: [HERRAMIENTAS]
  3. Normas sobre el uso de IA en las tareas: [NORMAS]
  4. Qué NO haremos: introducir datos personales del alumnado en herramientas no autorizadas ni usar la IA para calificar.
  5. Por qué lo hacemos: aprender a usar estas herramientas con sentido crítico, igual que se aprende a usar cualquier fuente de información.
  6. Cómo pueden ayudar desde casa: dos sugerencias concretas.
  7. A quién dirigirse si tienen dudas.

  Reglas:
  - No exageres beneficios ni riesgos; no prometas resultados.
  - No menciones normativa concreta salvo que yo te la indique.
  - Evita la jerga tecnológica; si usas un término técnico, explícalo en pocas palabras.

  Después, propón tres preguntas que probablemente harán las familias y una respuesta breve para cada una.
---

## Cómo usarlo

Antes de enviarla, comprueba que [HERRAMIENTAS] y [NORMAS] coinciden con lo que ha **autorizado tu centro** y lo que ha acordado tu departamento. La comunicación debe describir la realidad, no una intención.

## Ejemplo de aplicación

Con los valores de ejemplo, el resultado es una carta que explica que en clase se analizarán textos generados por IA para aprender a detectar errores, que el alumnado no necesita cuentas propias y que los textos argumentativos se escribirán en el aula. Las preguntas anticipadas suelen ser del tipo «¿puede mi hijo usar ChatGPT para los deberes?» o «¿es seguro?», y conviene tener la respuesta preparada antes de la reunión de familias.
