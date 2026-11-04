// Genera los favicons rasterizados a partir de public/favicon.svg. Uso: node scripts/generar-favicons.mjs
// Google admite SVG, pero los PNG/ICO cuadrados en múltiplos de 48 px son la opción más fiable
// para el icono de los resultados de búsqueda y para navegadores y sistemas antiguos.
// Se ejecuta cuando cambie el símbolo; los archivos generados se versionan.
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const publico = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));
const svg = await readFile(publico('favicon.svg'));
const png = (lado, fondo) => {
  let img = sharp(svg, { density: 72 * Math.ceil(lado / 64) * 4 }).resize(lado, lado);
  if (fondo) img = img.flatten({ background: fondo });
  return img.png({ compressionLevel: 9 }).toBuffer();
};

// PNG para Google y Android (192 = 4 × 48) y para iOS (180, con fondo opaco: iOS no admite transparencia).
await writeFile(publico('favicon-192.png'), await png(192));
await writeFile(publico('apple-touch-icon.png'), await png(180, '#f2f0eb'));

// favicon.ico con PNG embebidos de 16, 32 y 48 px.
const tamanos = [16, 32, 48];
const imagenes = await Promise.all(tamanos.map((t) => png(t)));
const cabecera = Buffer.alloc(6 + 16 * tamanos.length);
cabecera.writeUInt16LE(0, 0);
cabecera.writeUInt16LE(1, 2);
cabecera.writeUInt16LE(tamanos.length, 4);
let desplazamiento = cabecera.length;
tamanos.forEach((t, i) => {
  const o = 6 + 16 * i;
  cabecera.writeUInt8(t, o);
  cabecera.writeUInt8(t, o + 1);
  cabecera.writeUInt16LE(1, o + 4);
  cabecera.writeUInt16LE(32, o + 6);
  cabecera.writeUInt32LE(imagenes[i].length, o + 8);
  cabecera.writeUInt32LE(desplazamiento, o + 12);
  desplazamiento += imagenes[i].length;
});
await writeFile(publico('favicon.ico'), Buffer.concat([cabecera, ...imagenes]));
console.log('Favicons generados en public/');
