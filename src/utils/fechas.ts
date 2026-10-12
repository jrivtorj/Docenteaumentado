const largo = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const corto = new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });

export const fechaLarga = (d: Date) => largo.format(d);
export const fechaCorta = (d: Date) => corto.format(d);
export const fechaISO = (d: Date) => d.toISOString().slice(0, 10);
