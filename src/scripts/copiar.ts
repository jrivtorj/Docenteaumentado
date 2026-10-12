/**
 * Botones de copiar con confirmación accesible.
 *   <button data-copiar="#id-del-elemento">Copiar</button>
 *   <p data-copiar-estado aria-live="polite"></p>  (dentro del mismo [data-copiar-zona])
 */
async function copiarTexto(texto: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return true;
    }
  } catch {
    /* sigue con el método alternativo */
  }
  // Alternativa para contextos sin Clipboard API (http, navegadores antiguos).
  const area = document.createElement('textarea');
  area.value = texto;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.append(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

for (const boton of document.querySelectorAll<HTMLButtonElement>('button[data-copiar]')) {
  boton.hidden = false;
  const zona = boton.closest('[data-copiar-zona]') ?? document;
  const estado = zona.querySelector<HTMLElement>('[data-copiar-estado]');
  const etiqueta = boton.querySelector<HTMLElement>('[data-etiqueta]');
  const original = etiqueta?.textContent ?? '';
  boton.addEventListener('click', async () => {
    const origen = document.querySelector<HTMLElement>(boton.dataset.copiar ?? '');
    if (!origen) return;
    const ok = await copiarTexto(origen.innerText.trim());
    boton.dataset.estado = ok ? 'copiado' : 'error';
    if (etiqueta) etiqueta.textContent = ok ? 'Copiado' : 'No se pudo copiar';
    if (estado) {
      estado.textContent = ok
        ? 'Prompt copiado al portapapeles.'
        : 'No se pudo copiar automáticamente. Selecciona el texto y cópialo con Ctrl+C (Cmd+C en Mac).';
    }
    if (!ok) {
      const sel = window.getSelection();
      const rango = document.createRange();
      rango.selectNodeContents(origen);
      sel?.removeAllRanges();
      sel?.addRange(rango);
    }
    window.setTimeout(() => {
      if (etiqueta) etiqueta.textContent = original;
      delete boton.dataset.estado;
    }, 2500);
  });
}
