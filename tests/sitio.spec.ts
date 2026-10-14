import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PRINCIPALES = [
  '/',
  '/actualidad/',
  '/ia-en-el-aula/',
  '/prompts/',
  '/herramientas/',
  '/laboratorio/',
  '/opinion/',
  '/sobre-el-autor/',
  '/articulos/',
  '/temas/',
  '/buscar/',
  '/contacto/',
  '/newsletter/',
  '/privacidad/',
  '/cookies/',
  '/aviso-legal/',
  '/laboratorio/constructor-de-prompts/',
  '/prompts/rubrica-analitica-criterios-evaluacion/',
  '/herramientas/gemini-notebook/',
  '/articulos/como-escribir-prompts-para-docentes/',
];

test.describe('Navegación', () => {
  for (const ruta of PRINCIPALES) {
    test(`${ruta} responde, tiene un único h1 y no da errores en consola`, async ({ page }) => {
      const erroresConsola: string[] = [];
      page.on('console', (m) => m.type() === 'error' && erroresConsola.push(m.text()));
      page.on('pageerror', (e) => erroresConsola.push(e.message));
      const r = await page.goto(ruta);
      expect(r?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page).toHaveTitle(/.+/);
      await page.waitForLoadState('networkidle');
      expect(erroresConsola).toEqual([]);
    });
  }

  test('una ruta inexistente muestra la página 404 personalizada', async ({ page }) => {
    const r = await page.goto('/no-existe-esta-pagina/');
    expect(r?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('no existe');
  });

  test('sin desbordamiento horizontal en las páginas principales', async ({ page }) => {
    for (const ruta of PRINCIPALES.slice(0, 8)) {
      await page.goto(ruta);
      const desborda = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      expect(desborda, `${ruta} desborda en horizontal`).toBe(false);
    }
  });
});

test.describe('Menú móvil', () => {
  test('se abre, se cierra con Escape y devuelve el foco', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Solo en móvil');
    await page.goto('/');
    const boton = page.locator('[data-menu-boton]');
    const nav = page.locator('#nav-principal');
    await expect(boton).toBeVisible();
    await expect(nav).toBeHidden();
    await expect(boton.locator('.menu-boton__abrir')).toBeVisible();
    await expect(boton.locator('.menu-boton__cerrar')).toBeHidden();
    await boton.click();
    await expect(boton).toHaveAttribute('aria-expanded', 'true');
    await expect(boton.locator('.menu-boton__abrir')).toBeHidden();
    await expect(boton.locator('.menu-boton__cerrar')).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Prompts' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(nav).toBeHidden();
    await expect(boton).toBeFocused();
  });
});

test.describe('Biblioteca de prompts', () => {
  test('los filtros son combinables y se reflejan en la URL', async ({ page }) => {
    await page.goto('/prompts/');
    const tarjetas = page.locator('#lista-prompts [data-filtrable]');
    const total = await tarjetas.count();
    expect(total).toBeGreaterThanOrEqual(12);
    await expect(page.locator('[data-contador]')).toHaveText(`${total} resultados`);

    await page.selectOption('#filtro-tarea', 'evaluacion');
    const trasTarea = await page.locator('#lista-prompts [data-filtrable]:visible').count();
    expect(trasTarea).toBeGreaterThan(0);
    expect(trasTarea).toBeLessThan(total);
    await expect(page).toHaveURL(/tarea=evaluacion/);

    await page.selectOption('#filtro-etapa', 'fp');
    await expect(page).toHaveURL(/etapa=fp/);
    expect(await page.locator('#lista-prompts [data-filtrable]:visible').count()).toBeLessThanOrEqual(trasTarea);

    await page.getByRole('button', { name: 'Limpiar' }).click();
    await expect(page.locator('#lista-prompts [data-filtrable]:visible')).toHaveCount(total);
  });

  test('la búsqueda de texto ignora tildes y muestra el estado vacío', async ({ page }) => {
    await page.goto('/prompts/?q=rubrica');
    await expect(page.locator('#lista-prompts [data-filtrable]:visible').first()).toBeVisible();
    await page.fill('#filtro-q', 'xyzzy-inexistente');
    await expect(page.locator('[data-sin-resultados]')).toBeVisible();
  });

  test('las variables se sustituyen y el botón copia el prompt rellenado', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'Permisos de portapapeles solo en Chromium');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/prompts/rubrica-analitica-criterios-evaluacion/');
    await page.fill('#var-CURSO', '2.º Bachillerato');
    await expect(page.locator('mark[data-var="CURSO"]').first()).toHaveText('2.º Bachillerato');
    await page.getByRole('button', { name: 'Copiar prompt', exact: true }).click();
    await expect(page.locator('[data-copiar-estado]').first()).toHaveText('Prompt copiado al portapapeles.');
    const copiado = await page.evaluate(() => navigator.clipboard.readText());
    expect(copiado).toContain('CURSO: 2.º Bachillerato');
    expect(copiado).toContain('Actúa como especialista en evaluación');
  });

  test('«Rellenar con el ejemplo» completa todas las variables', async ({ page }) => {
    await page.goto('/prompts/disenar-situacion-de-aprendizaje/');
    await page.getByRole('button', { name: 'Rellenar con el ejemplo' }).click();
    await expect(page.locator('mark[data-relleno="false"]')).toHaveCount(0);
  });
});

test.describe('Catálogo de herramientas', () => {
  test('filtra por categoría', async ({ page }) => {
    await page.goto('/herramientas/');
    const total = await page.locator('#lista-herramientas [data-filtrable]').count();
    expect(total).toBeGreaterThanOrEqual(8);
    await page.selectOption('#filtro-categoria', 'presentaciones');
    const visibles = page.locator('#lista-herramientas [data-filtrable]:visible');
    await expect(visibles.first()).toBeVisible();
    expect(await visibles.count()).toBeLessThan(total);
    for (const cat of await visibles.evaluateAll((els) => els.map((e) => e.getAttribute('data-categorias'))))
      expect(cat).toContain('presentaciones');
  });

  test('cada ficha muestra precio con fecha de verificación y enlace oficial', async ({ page }) => {
    await page.goto('/herramientas/claude/');
    await expect(page.getByText(/Verificado el/)).toBeVisible();
    await expect(page.getByRole('link', { name: /Web oficial/ })).toHaveAttribute('href', /^https:\/\//);
  });
});

test.describe('Buscador', () => {
  test('encuentra artículos, prompts y herramientas sin depender de tildes', async ({ page }) => {
    await page.goto('/buscar/?q=rubrica');
    const resultados = page.locator('[data-resultados] li');
    await expect(resultados.first()).toBeVisible();
    await expect(page.locator('[data-estado]')).toContainText('resultados');
    await page.getByLabel('Herramientas').check();
    await expect(page).toHaveURL(/tipo=Herramienta/);
    for (const tipo of await page.locator('[data-resultados] .antetitulo').allTextContents()) expect(tipo).toBe('Herramienta');
  });
});

test.describe('Constructor de prompts', () => {
  test('compone el prompt a partir de los campos', async ({ page }) => {
    await page.goto('/laboratorio/constructor-de-prompts/');
    await page.fill('#k-tarea', 'Diseña una actividad sobre el ciclo del agua');
    await expect(page.locator('#salida-prompt')).toContainText('TAREA\nDiseña una actividad sobre el ciclo del agua');
  });
});

test.describe('Formularios sin servicio configurado', () => {
  test('la newsletter y el contacto aparecen desactivados y lo explican', async ({ page }) => {
    await page.goto('/newsletter/');
    await expect(page.getByRole('button', { name: 'Suscribirme' })).toBeDisabled();
    await expect(page.getByText('Suscripción aún no disponible')).toBeVisible();
    await page.goto('/contacto/');
    await expect(page.getByRole('button', { name: 'Enviar mensaje' })).toBeDisabled();
    await expect(page.getByText('Formulario pendiente de configurar')).toBeVisible();
  });
});

test.describe('Accesibilidad automática (axe)', () => {
  for (const ruta of ['/', '/prompts/', '/prompts/rubrica-analitica-criterios-evaluacion/', '/herramientas/', '/herramientas/claude/', '/articulos/como-escribir-prompts-para-docentes/', '/buscar/', '/contacto/', '/laboratorio/constructor-de-prompts/']) {
    test(`${ruta} sin infracciones graves`, async ({ page }) => {
      await page.goto(ruta);
      const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      const graves = r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(graves.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([]);
    });
  }
});

test.describe('Accesibilidad en modo oscuro (axe)', () => {
  test.use({ colorScheme: 'dark' });
  for (const ruta of ['/', '/prompts/rubrica-analitica-criterios-evaluacion/', '/articulos/proteccion-datos-ia-centros-educativos/', '/herramientas/']) {
    test(`${ruta} sin infracciones graves en oscuro`, async ({ page }) => {
      await page.goto(ruta);
      const r = await new AxeBuilder({ page }).withTags(['wcag2aa']).analyze();
      const graves = r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(graves.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')}`)).toEqual([]);
    });
  }
});
