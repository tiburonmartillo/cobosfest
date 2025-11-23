# Presentación Standalone - Instrucciones para uso offline

Esta presentación puede funcionar completamente offline siguiendo estos pasos:

## Opción 1: Usar la carpeta build completa (Recomendado)

1. Copia toda la carpeta `build` a donde quieras usar la presentación (USB, carpeta local, etc.)
2. Abre el archivo `build/index.html` en tu navegador
3. Si encuentras problemas de CORS al abrir directamente el HTML, usa un servidor local:

### Servidor local rápido:

**Python:**
```bash
cd build
python -m http.server 8000
```
Luego abre: http://localhost:8000

**Node.js:**
```bash
cd build
npx serve .
```

**PHP:**
```bash
cd build
php -S localhost:8000
```

## Opción 2: Archivos necesarios

Para que funcione completamente offline, necesitas estos archivos:

```
presentacion/
├── index.html (o presentacion-standalone.html)
└── assets/
    ├── index-BVYo0Klu.css
    ├── index-Dg7MWG2k.js
    ├── de60ffc62a98ebea5d3bd70bd56d5762224586bc-BwjQa3Tv.png
    ├── e38d6271b9c67f390110f8962edb49c5d0ab0c61-w0-J0SuA.png
    ├── fotocaminantes -Df5W9f4x.png
    ├── Logo ADN-A completo-TwMYU-j1.png
    ├── mapeo-DLgbHAuS.png
    ├── para fondo claro-D0X4fTxf.png
    └── pic-xgJJfoXS.jpg
```

## Notas importantes

- **CORS:** Algunos navegadores pueden bloquear la carga de archivos locales por políticas de seguridad. Usa un servidor local para evitar este problema.
- **Navegación:** La presentación funciona con navegación por teclado (flechas izquierda/derecha) y clics en los controles.
- **Responsive:** La presentación se adapta a diferentes tamaños de pantalla.

## Generar nueva versión

Si haces cambios en la presentación:

```bash
npm run build
```

Esto generará una nueva versión en la carpeta `build` con todos los archivos optimizados.

