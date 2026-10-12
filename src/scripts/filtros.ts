/**
 * Filtros combinables + búsqueda de texto sobre tarjetas ya renderizadas en HTML.
 *
 * Marcado esperado:
 *   <form data-filtros="#lista">  ← selector del contenedor de tarjetas
 *     <input type="search" name="q">
 *     <select name="etapa" data-atributo="etapas" data-modo="token" data-comodin="todas">…
 *   </form>
 *   <p data-contador aria-live="polite"></p>
 *   <div id="lista"> <article data-filtrable data-etapas="eso fp" data-texto="…"> … </div>
 *   <p data-sin-resultados hidden>…</p>
 *
 * El estado se refleja en la URL (?q=…&etapa=…) para poder compartir una búsqueda,
 * pero la URL canónica sigue siendo la del listado, así que no se crean páginas indexables nuevas.
 */
const normalizar = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export function iniciarFiltros(form: HTMLFormElement) {
  const lista = document.querySelector<HTMLElement>(form.dataset.filtros ?? '');
  if (!lista) return;
  const tarjetas = [...lista.querySelectorAll<HTMLElement>('[data-filtrable]')];
  const contador = document.querySelector<HTMLElement>('[data-contador]');
  const vacio = document.querySelector<HTMLElement>('[data-sin-resultados]');
  const selects = [...form.querySelectorAll<HTMLSelectElement>('select[data-atributo]')];
  const texto = form.querySelector<HTMLInputElement>('input[name="q"]');
  const total = tarjetas.length;

  // Estado inicial desde la URL.
  const params = new URLSearchParams(location.search);
  if (texto && params.has('q')) texto.value = params.get('q') ?? '';
  for (const s of selects) {
    const v = params.get(s.name);
    if (v && [...s.options].some((o) => o.value === v)) s.value = v;
  }

  let temporizador: number | undefined;

  const aplicar = () => {
    const terminos = normalizar(texto?.value ?? '').split(/\s+/).filter(Boolean);
    let visibles = 0;
    for (const t of tarjetas) {
      const okTexto = terminos.every((term) => (t.dataset.texto ?? '').includes(term));
      const okSelects = selects.every((s) => {
        if (!s.value) return true;
        const valor = t.getAttribute(`data-${s.dataset.atributo}`) ?? '';
        if (s.dataset.modo === 'token') {
          const tokens = valor.split(/\s+/);
          return tokens.includes(s.value) || (!!s.dataset.comodin && tokens.includes(s.dataset.comodin));
        }
        return valor === s.value;
      });
      const visible = okTexto && okSelects;
      t.hidden = !visible;
      if (visible) visibles++;
    }
    if (vacio) vacio.hidden = visibles !== 0;
    if (contador) {
      contador.textContent =
        visibles === total ? `${total} resultados` : `${visibles} de ${total} resultados`;
    }
    // Sincroniza la URL sin crear entradas de historial.
    const nuevos = new URLSearchParams();
    if (texto?.value.trim()) nuevos.set('q', texto.value.trim());
    for (const s of selects) if (s.value) nuevos.set(s.name, s.value);
    const qs = nuevos.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    aplicar();
  });
  form.addEventListener('change', aplicar);
  texto?.addEventListener('input', () => {
    window.clearTimeout(temporizador);
    temporizador = window.setTimeout(aplicar, 150);
  });
  form.addEventListener('reset', () => window.setTimeout(aplicar, 0));
  form.dataset.listo = 'true';
  aplicar();
}

for (const f of document.querySelectorAll<HTMLFormElement>('form[data-filtros]')) iniciarFiltros(f);
