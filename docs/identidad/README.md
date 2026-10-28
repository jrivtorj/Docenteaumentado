# Símbolo de El docente aumentado

Archivos del símbolo, según la guía de identidad visual v2 (octubre de 2026). Todas las versiones salen de la misma geometría (`simbolo-maestro.svg`, cuadrícula de 64 × 64, trazo de 3,5). El hexágono y el cubo comparten el centro (32, 32) y el cubo mide el 46 % del marco.

| Archivo | Versión de la guía | Colores |
|---|---|---|
| `simbolo-maestro.svg` | Principal sobre claro | Petróleo `#172A3A` + menta `#70D6C1` |
| `simbolo-inversa-color.svg` | Inversa sobre oscuro | Blanco + menta |
| `simbolo-monocromo-negro.svg` | Monocroma negra | Negro sólido |
| `simbolo-monocromo-blanco.svg` | Monocroma blanca | Blanco sólido |
| `simbolo-reducido.svg` | Símbolo reducido (igual que `public/favicon.svg`) | Hexágono relleno de petróleo y cubo menta con trazo más grueso |

La cabecera (`src/components/Cabecera.astro`) y la imagen social (`scripts/generar-og.mjs`) usan los mismos trazados. Si cambia el maestro, hay que actualizar los tres sitios.

`comprobacion-favicon-16-32-48.png` muestra el favicon a 16, 32 y 48 px sobre fondo claro y oscuro, ampliado ×4. A 16 px las líneas interiores del cubo se funden. El símbolo reducido todavía no está validado en navegadores ni móviles reales, que es el paso 3 de la guía.
