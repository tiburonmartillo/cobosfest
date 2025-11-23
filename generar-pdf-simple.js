import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Versión más simple usando Chromium desde el sistema
async function generarPDF() {
  console.log('🚀 Generando PDF de la presentación...\n');
  console.log('📝 Nota: Este script requiere Chrome/Chromium instalado\n');

  const buildPath = join(__dirname, 'build');
  const htmlPath = join(buildPath, 'index.html');
  const pdfPath = join(buildPath, 'presentacion.pdf');

  // Intentar usar Chrome/Chromium
  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    'google-chrome',
    'chromium',
    'chromium-browser'
  ];

  let chromeExecutable = null;
  for (const path of chromePaths) {
    try {
      // Verificar si existe
      if (path.startsWith('/')) {
        const fs = await import('fs');
        if (fs.existsSync(path)) {
          chromeExecutable = path;
          break;
        }
      } else {
        chromeExecutable = path;
        break;
      }
    } catch (e) {
      continue;
    }
  }

  if (!chromeExecutable) {
    console.log('❌ No se encontró Chrome/Chromium instalado.');
    console.log('\n📋 Alternativa manual:');
    console.log('   1. Abre build/index.html en Chrome');
    console.log('   2. Presiona Cmd+P (Mac) o Ctrl+P (Windows/Linux)');
    console.log('   3. Selecciona "Guardar como PDF"');
    console.log('   4. Activa "Más configuraciones" → "Gráficos de fondo"\n');
    return;
  }

  const args = [
    '--headless',
    '--disable-gpu',
    '--print-to-pdf=' + pdfPath,
    '--no-pdf-header-footer',
    `file://${htmlPath}`
  ];

  console.log(`📄 Generando PDF usando: ${chromeExecutable}\n`);

  const chrome = spawn(chromeExecutable, args);

  chrome.on('close', (code) => {
    if (code === 0) {
      console.log('✅ PDF generado exitosamente: build/presentacion.pdf\n');
    } else {
      console.log('⚠️  El proceso terminó con código:', code);
      console.log('\n📋 Alternativa manual:');
      console.log('   1. Abre build/index.html en Chrome');
      console.log('   2. Presiona Cmd+P (Mac) o Ctrl+P (Windows/Linux)');
      console.log('   3. Selecciona "Guardar como PDF"');
      console.log('   4. Activa "Más configuraciones" → "Gráficos de fondo"\n');
    }
  });

  chrome.on('error', (err) => {
    console.error('❌ Error:', err.message);
    console.log('\n📋 Alternativa manual:');
    console.log('   1. Abre build/index.html en Chrome');
    console.log('   2. Presiona Cmd+P (Mac) o Ctrl+P (Windows/Linux)');
    console.log('   3. Selecciona "Guardar como PDF"');
    console.log('   4. Activa "Más configuraciones" → "Gráficos de fondo"\n');
  });

  // Esperar 3 segundos para que Chrome genere el PDF
  setTimeout(() => {
    if (!chrome.killed) {
      chrome.kill();
    }
  }, 5000);
}

generarPDF();
