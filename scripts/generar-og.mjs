// Genera public/og-default.png (1200×630) a partir de un SVG. Uso: node scripts/generar-og.mjs
// Se ejecuta una sola vez o cuando cambie la identidad; el PNG se versiona.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="16" height="630" fill="#0b5f70"/>
  <text x="96" y="210" font-family="Georgia, 'DejaVu Serif', serif" font-size="80" fill="#16191d">El docente <tspan font-weight="700" fill="#0b5f70">aumentado</tspan></text>
  <text x="96" y="320" font-family="'DejaVu Sans', Arial, sans-serif" font-size="40" fill="#4a525c">La inteligencia artificial no sustituye al docente.</text>
  <text x="96" y="375" font-family="'DejaVu Sans', Arial, sans-serif" font-size="40" fill="#4a525c">Amplía lo que un buen docente puede hacer.</text>
  <line x1="96" y1="470" x2="1104" y2="470" stroke="#e3e6ea" stroke-width="2"/>
  <text x="96" y="530" font-family="'DejaVu Sans', Arial, sans-serif" font-size="30" fill="#0b5f70">Tutoriales · Prompts · Herramientas · Análisis crítico</text>
</svg>`;

const destino = fileURLToPath(new URL('../public/og-default.png', import.meta.url));
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(destino);
console.log('Generado', destino);
