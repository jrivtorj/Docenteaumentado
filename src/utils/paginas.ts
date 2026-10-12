/** Artículos por página en los listados. */
export const POR_PAGINA = 12;

/** Título con sufijo de página para evitar títulos duplicados en la paginación. */
export const conPagina = (titulo: string, n: number) => (n > 1 ? `${titulo} (página ${n})` : titulo);
