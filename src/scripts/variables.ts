/**
 * Variables editables de un prompt: cada <input data-variable="NOMBRE"> sustituye
 * en vivo todas las marcas <mark data-var="NOMBRE"> del prompt. Vacío = vuelve a [NOMBRE].
 */
const editor = document.querySelector<HTMLElement>('[data-editor-variables]');
if (editor) {
  editor.hidden = false;
  const entradas = [...editor.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-variable]')];
  const actualizar = (nombre: string, valor: string) => {
    for (const m of document.querySelectorAll<HTMLElement>(`mark[data-var="${nombre}"]`)) {
      m.textContent = valor.trim() || `[${nombre}]`;
      m.dataset.relleno = valor.trim() ? 'true' : 'false';
    }
  };
  for (const e of entradas) e.addEventListener('input', () => actualizar(e.dataset.variable!, e.value));
  editor.querySelector('[data-rellenar-ejemplo]')?.addEventListener('click', () => {
    for (const e of entradas) {
      e.value = e.dataset.ejemplo ?? '';
      actualizar(e.dataset.variable!, e.value);
    }
  });
  editor.querySelector('[data-limpiar]')?.addEventListener('click', () => {
    for (const e of entradas) {
      e.value = '';
      actualizar(e.dataset.variable!, '');
    }
  });
}
