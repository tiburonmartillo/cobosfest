# 📊 Presentación: El uso de la IA para la protección del Ambiente en Aguascalientes

Presentación interactiva sobre la transformación digital de los Boletines SSMAA con inteligencia artificial.

**Autor:** Sergio Villanueva | Diseñador de productos digitales

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en http://localhost:3000

### Construcción

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `build/`

## 📦 Uso Offline

Para usar la presentación completamente offline:

1. Ejecuta `npm run build`
2. Copia toda la carpeta `build/` a donde necesites
3. Inicia un servidor local en la carpeta `build/`:
   - **macOS/Linux:** `python3 -m http.server 8000`
   - **Windows:** `python -m http.server 8000`
   - O usa el script: `./servir-presentacion.sh`
4. Abre http://localhost:8000 en tu navegador

## 📄 Exportar a PDF

Para generar un PDF de la presentación manteniendo los enlaces:

1. Inicia el servidor y abre la presentación en Chrome/Edge
2. Para cada slide: `Cmd+P` (Mac) o `Ctrl+P` (Windows) → "Guardar como PDF"
3. Activa "Gráficos de fondo" en las opciones
4. O usa el script: `npm run pdf`

Consulta `EXPORTAR-A-PDF.md` para instrucciones detalladas.

## 🎮 Controles

- **Flechas del teclado:** ← → para navegar entre slides
- **Botones:** Clic en las flechas laterales
- **Indicadores:** Clic en los puntos para ir a un slide específico

## 📋 Slides

1. **Título** - Presentación principal
2. **Sobre mí** - Sergio Villanueva, colaboraciones y proyectos
3. **El Problema** - Limitaciones de navegación en PDFs
4. **La Solución** - Plataforma interactiva
5. **IA en el Diseño** - Análisis de usabilidad y optimización visual
6. **IA en la Programación** - Generación de código y optimización
7. **Línea de Tiempo** - Proceso del proyecto
8. **Conclusión** - Impacto y resultados

## 🔗 Enlaces

- **Boletines SSMAA:** https://www.aguascalientes.gob.mx/SSMAA/BoletinesSMA/usuario_webexplorer.asp
- **Página ADN-Ags:** https://adn-a.org/

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (iconos)
- Radix UI (componentes)

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── Presentation.tsx    # Componente principal de la presentación
│   │   └── ui/                 # Componentes de UI
│   ├── assets/                 # Imágenes y recursos
│   └── main.tsx               # Punto de entrada
├── build/                      # Archivos de producción (generado)
├── package.json
└── vite.config.ts
```

## 📝 Notas

- La presentación es completamente responsive
- Funciona en todos los navegadores modernos
- Optimizada para presentaciones en pantalla completa

## 👤 Autor

**Sergio Villanueva**
- Diseñador de productos digitales
- Colabora como diseñador en IMEPP
- Comunicación y diseño de plataformas ADN-Ags y Mapeo Verde
- Fotocaminante en Fotocaminantes

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.
# cobosfest
