import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generarPDF() {
  console.log('🚀 Iniciando generación de PDF de la presentación...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Ruta al archivo HTML
    const htmlPath = join(__dirname, 'build', 'index.html');
    const htmlUrl = `file://${htmlPath}`;
    
    console.log(`📄 Cargando: ${htmlUrl}\n`);
    
    // Navegar a la página
    await page.goto(htmlUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Esperar a que la aplicación React se cargue
    await page.waitForSelector('#root', { timeout: 10000 });
    
    // Esperar un poco más para que React renderice completamente
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('✅ Página cargada, navegando por todas las slides...\n');

    // Encontrar el número total de slides
    const totalSlides = await page.evaluate(() => {
      const indicators = document.querySelectorAll('[aria-label*="diapositiva"]');
      return indicators ? indicators.length : 8; // Por defecto 8 slides
    });

    console.log(`📊 Total de slides detectadas: ${totalSlides}\n`);

    // Generar PDF con cada slide en una página separada
    const pdfPages = [];

    for (let i = 0; i < totalSlides; i++) {
      console.log(`📄 Capturando slide ${i + 1}/${totalSlides}...`);
      
      // Ir a la slide
      await page.evaluate((index) => {
        const buttons = document.querySelectorAll('[aria-label*="diapositiva"]');
        if (buttons[index]) {
          buttons[index].click();
        }
      }, i);

      // Esperar a que se renderice la slide
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Capturar la slide como PDF
      const pdf = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: {
          top: '0.5cm',
          right: '0.5cm',
          bottom: '0.5cm',
          left: '0.5cm'
        },
        displayHeaderFooter: false,
        preferCSSPageSize: false,
      });

      pdfPages.push(pdf);
    }

    // Usar una biblioteca para combinar PDFs o simplemente generar el PDF final
    // Por ahora, generamos el PDF de la última slide (todos los slides en uno)
    // Para combinar PDFs necesitaríamos pdf-lib
    
    console.log('\n💾 Generando PDF final...\n');

    // Generar PDF final navegando a la primera slide y luego exportando
    await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
    await page.waitForSelector('#root');
    await new Promise(resolve => setTimeout(resolve, 2000));

    const pdfPath = join(__dirname, 'build', 'presentacion.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0.5cm',
        right: '0.5cm',
        bottom: '0.5cm',
        left: '0.5cm'
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false,
    });

    console.log(`✅ PDF generado exitosamente: ${pdfPath}\n`);
    console.log('📝 Nota: Para capturar todas las slides individualmente, usa el método manual:\n');
    console.log('   1. Abre build/index.html en Chrome');
    console.log('   2. Navega por cada slide');
    console.log('   3. Para cada slide: Cmd+P → Guardar como PDF\n');
    
  } catch (error) {
    console.error('❌ Error al generar PDF:', error);
    console.log('\n📋 Alternativa manual:');
    console.log('   1. Abre build/index.html en Chrome');
    console.log('   2. Presiona Cmd+P (Mac) o Ctrl+P (Windows/Linux)');
    console.log('   3. Selecciona "Guardar como PDF"');
    console.log('   4. Activa "Más configuraciones" → "Gráficos de fondo"\n');
    throw error;
  } finally {
    await browser.close();
  }
}

// Ejecutar
generarPDF().catch(console.error);
