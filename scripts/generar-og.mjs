// Genera public/og-default.png (1200×630) a partir de un SVG. Uso: node scripts/generar-og.mjs
// Se ejecuta una sola vez o cuando cambie la identidad; el PNG se versiona.
// Versión inversa del manual de identidad: fondo petróleo, símbolo y nombre en blanco, acento menta.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const sans = "Inter, 'DejaVu Sans', Arial, sans-serif";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#172a3a"/>
  <g transform="translate(96 120) scale(2.6)" fill="none" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">
    <path d="M32 4 56.2 18v28L32 60 7.8 46V18Z" stroke="#ffffff"/>
    <path d="M32 20.5 43.3 27v13L32 46.5 20.7 40V27Z M20.7 27 32 33.5 43.3 27 M32 33.5v13" stroke="#70d6c1"/>
  </g>
  <text font-family="${sans}" font-size="72" font-weight="700" letter-spacing="3" fill="#ffffff">
    <tspan x="320" y="225">EL DOCENTE</tspan><tspan x="320" y="310">AUMENTADO</tspan>
  </text>
  <text x="96" y="430" font-family="${sans}" font-size="40" fill="#f2f0eb">Más criterio. Mejor enseñanza.</text>
  <rect x="96" y="470" width="160" height="4" fill="#70d6c1"/>
  <text x="96" y="540" font-family="${sans}" font-size="28" fill="#70d6c1">Tutoriales · Prompts · Herramientas · Análisis crítico</text>
</svg>`;

const destino = fileURLToPath(new URL('../public/og-default.png', import.meta.url));
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(destino);
console.log('Generado', destino);
