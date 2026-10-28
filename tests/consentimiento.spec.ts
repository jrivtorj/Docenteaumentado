import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Aviso de cookies y carga condicionada de Google Analytics.
 *
 * Analytics solo se carga en el dominio canónico, así que las páginas se sirven bajo
 * https://eldocenteaumentado.com reenviando cada petición a `astro preview`, y gtag.js se
 * sustituye por un script vacío: no sale ninguna petición real a Google.
 */
const DOMINIO = 'https://eldocenteaumentado.com';

async function prepararDominio(page: Page) {
  const peticionesGoogle: string[] = [];
  await page.route(`${DOMINIO}/**`, async (route) => {
    const url = new URL(route.request().url());
    const respuesta = await route.fetch({ url: `http://localhost:4321${url.pathname}${url.search}` });
    await route.fulfill({ response: respuesta });
  });
  await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => {
    peticionesGoogle.push(route.request().url());
    return route.fulfill({ status: 200, contentType: 'text/javascript', body: '' });
  });
  return peticionesGoogle;
}

const aviso = (page: Page) => page.getByRole('complementary', { name: '¿Acepta las cookies de analítica?' });

test.describe('Consentimiento de cookies', () => {
  test('sin decisión no se carga nada de Google y el aviso ofrece aceptar y rechazar', async ({ page }) => {
    const google = await prepararDominio(page);
    await page.goto(`${DOMINIO}/`);
    await expect(aviso(page)).toBeVisible();
    await expect(aviso(page).getByRole('button', { name: 'Aceptar' })).toBeVisible();
    await expect(aviso(page).getByRole('button', { name: 'Rechazar' })).toBeVisible();
    await page.waitForLoadState('networkidle');
    expect(google).toEqual([]);
    expect(await page.evaluate(() => 'dataLayer' in window)).toBe(false);
  });

  test('al rechazar no se carga Analytics y la decisión se recuerda', async ({ page }) => {
    const google = await prepararDominio(page);
    await page.goto(`${DOMINIO}/`);
    await aviso(page).getByRole('button', { name: 'Rechazar' }).click();
    await expect(aviso(page)).toBeHidden();
    await page.goto(`${DOMINIO}/articulos/`);
    await expect(aviso(page)).toBeHidden();
    await page.waitForLoadState('networkidle');
    expect(google).toEqual([]);
  });

  test('al aceptar se carga gtag.js con el ID y sin almacenamiento publicitario', async ({ page }) => {
    const google = await prepararDominio(page);
    await page.goto(`${DOMINIO}/`);
    await aviso(page).getByRole('button', { name: 'Aceptar' }).click();
    await expect(aviso(page)).toBeHidden();
    await expect.poll(() => google.length).toBeGreaterThan(0);
    expect(google[0]).toContain('gtag/js?id=G-TJ5V8MPE4D');
    const capa = await page.evaluate(() => JSON.stringify((window as unknown as { dataLayer: unknown[] }).dataLayer));
    expect(capa).toContain('"ad_storage":"denied"');
    // gtag.js recibe objetos arguments, que se serializan como {"0": …, "1": …}.
    expect(capa).toContain('{"0":"config","1":"G-TJ5V8MPE4D"}');
    // En la siguiente página se carga directamente, sin volver a preguntar.
    google.length = 0;
    await page.goto(`${DOMINIO}/articulos/`);
    await expect(aviso(page)).toBeHidden();
    await expect.poll(() => google.length).toBeGreaterThan(0);
  });

  test('«Configurar cookies» reabre el aviso y retirar el consentimiento borra las cookies _ga', async ({ page, context }) => {
    await prepararDominio(page);
    await page.goto(`${DOMINIO}/`);
    await aviso(page).getByRole('button', { name: 'Aceptar' }).click();
    await context.addCookies([
      { name: '_ga', value: 'GA1.1.123.456', domain: '.eldocenteaumentado.com', path: '/' },
      { name: '_ga_TJ5V8MPE4D', value: 'GS1.1.1', domain: '.eldocenteaumentado.com', path: '/' },
    ]);
    await page.getByRole('button', { name: 'Configurar cookies' }).click();
    await expect(aviso(page)).toBeVisible();
    await aviso(page).getByRole('button', { name: 'Rechazar' }).click();
    const nombres = (await context.cookies()).map((c) => c.name);
    expect(nombres.filter((n) => n.startsWith('_ga'))).toEqual([]);
  });

  test('en local no se carga Analytics aunque se acepte', async ({ page }) => {
    const google: string[] = [];
    await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => {
      google.push(route.request().url());
      return route.abort();
    });
    await page.goto('/');
    await aviso(page).getByRole('button', { name: 'Aceptar' }).click();
    await page.waitForLoadState('networkidle');
    expect(google).toEqual([]);
  });

  test('la política de cookies enumera las cookies y permite cambiar la elección', async ({ page }) => {
    await page.goto('/cookies/');
    await expect(page.getByRole('cell', { name: '_ga', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '_ga_TJ5V8MPE4D' })).toBeVisible();
    await page.getByRole('button', { name: 'Rechazar' }).click();
    await page.getByRole('button', { name: 'Cambiar mi elección sobre las cookies' }).click();
    await expect(aviso(page)).toBeVisible();
    await page.goto('/privacidad/');
    await expect(page.getByRole('cell', { name: 'Estadísticas de uso (Google Analytics)' })).toBeVisible();
  });

  for (const esquema of ['light', 'dark'] as const) {
    test(`el aviso no tiene infracciones graves de accesibilidad (${esquema})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: esquema });
      await page.goto('/');
      await expect(aviso(page)).toBeVisible();
      const r = await new AxeBuilder({ page }).include('.consentimiento').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const graves = r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(graves.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([]);
    });
  }
});
