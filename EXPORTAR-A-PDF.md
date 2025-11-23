# 📄 Exportar Presentación a PDF (Manteniendo Enlaces)

## 🎯 Método Recomendado: Usando Chrome/Edge (Mantiene enlaces)

Este es el método más confiable para mantener todos los enlaces funcionando en el PDF.

### Pasos:

1. **Inicia el servidor de la presentación:**
   ```bash
   cd build
   ./iniciar-servidor.command  # macOS
   # o
   ./iniciar-servidor.bat      # Windows
   ```

2. **Abre la presentación en Chrome o Edge:**
   - Ve a: http://localhost:8000

3. **Para cada slide que quieras guardar:**
   
   a. **Navega a la slide** usando las flechas o los indicadores
   
   b. **Presiona:**
      - **Mac:** `Cmd + P`
      - **Windows/Linux:** `Ctrl + P`
   
   c. **Configura la impresión:**
      - Destino: **"Guardar como PDF"**
      - Formato: **A4 Horizontal** (Landscape)
      - **IMPORTANTE:** Activa "Más configuraciones" → **"Gráficos de fondo"**
      - Márgenes: Normal o Personalizado
   
   d. **Guarda el PDF:**
      - Dale un nombre descriptivo: `slide-1-titulo.pdf`, `slide-2-presentacion.pdf`, etc.

4. **Verifica que los enlaces funcionen:**
   - Abre el PDF en Chrome/Edge o Adobe Reader
   - Haz clic en los enlaces para verificar que funcionen

### Para capturar todas las slides:

Puedes repetir el proceso anterior para cada slide y luego combinar los PDFs, o simplemente capturar la primera slide que muestre el contenido principal.

### Enlaces en la presentación:

- **Boletines SSMAA:** https://www.aguascalientes.gob.mx/SSMAA/BoletinesSMA/usuario_webexplorer.asp
- **Página ADN-Ags:** https://adn-a.org/

## ⚡ Método Rápido: Script Automático

Si ya tienes todo instalado, puedes usar el script:

```bash
npm run pdf
```

Esto generará un PDF en `build/presentacion.pdf`

**Nota:** El script puede no capturar todas las slides automáticamente. El método manual es más confiable para mantener los enlaces.

## ✅ Checklist para PDF de calidad

- [ ] Usar Chrome o Edge (los enlaces funcionan mejor)
- [ ] Activar "Gráficos de fondo" (las imágenes se verán correctamente)
- [ ] Formato A4 Horizontal (mejor para presentaciones)
- [ ] Verificar que los enlaces funcionen en el PDF generado
- [ ] Revisar que el texto sea legible
- [ ] Verificar que las imágenes se vean correctamente

## 🔗 Verificar enlaces en el PDF

Después de generar el PDF:

1. Abre el PDF en Chrome/Edge o Adobe Reader
2. Los enlaces deberían ser azules y subrayados
3. Haz clic en cada enlace para verificar que funcionen
4. Si los enlaces no funcionan, regenera el PDF usando Chrome/Edge

## 📝 Notas Importantes

- **Los enlaces solo funcionan en Chrome/Edge y Adobe Reader**
- Preview (macOS) puede no mostrar los enlaces como clicables
- Asegúrate de que los enlaces sean URLs completas (http:// o https://)
- El formato horizontal (landscape) se ve mejor para presentaciones

## 🐛 Solución de Problemas

**Los enlaces no funcionan:**
- Regenera el PDF usando Chrome o Edge
- Verifica que las URLs sean completas en el HTML original

**Las imágenes no se ven:**
- Activa "Gráficos de fondo" en las opciones de impresión
- Verifica que el servidor esté corriendo cuando generes el PDF

**El PDF está vacío o mal formateado:**
- Espera unos segundos a que la presentación cargue completamente
- Verifica que todas las dependencias estén cargadas (consola del navegador)
