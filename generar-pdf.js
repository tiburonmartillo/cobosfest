import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generarPDF() {
  console.log('🚀 Iniciando generación de PDF...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Ruta al archivo HTML
    const htmlPath = join(__dirname, 'build', 'index.html');
    const htmlUrl = `file://${htmlPath}`;
    
    console.log(`📄 Cargando: ${htmlUrl}`);
    
    // Navegar a la página
    await page.goto(htmlUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Esperar a que la aplicación React se cargue
    await page.waitForSelector('#root', { timeout: 10000 });
    
    // Esperar un poco más para que React renderice
    await page.waitForTimeout(2000);

    console.log('✅ Página cargada, generando PDF...\n');

    // Generar PDF
    await page.pdf({
      path: join(__dirname, 'build', 'presentacion.pdf'),
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5cm',
        right: '0.5cm',
        bottom: '0.5cm',
        left: '0.5cm'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: true,
    });

    console.log('✅ PDF generado exitosamente: build/presentacion.pdf\n');
    
  } catch (error) {
    console.error('❌ Error al generar PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Ejecutar
generarPDF().catch(console.error);
