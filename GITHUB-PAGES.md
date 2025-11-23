# 🚀 Configuración de GitHub Pages

El proyecto está configurado para deploy automático en GitHub Pages.

## ✅ Configuración Completada

1. ✅ **Vite configurado** con base path `/cobosfest/` para producción
2. ✅ **Workflow de GitHub Actions** creado (`.github/workflows/deploy.yml`)
3. ✅ **Cambios subidos** a GitHub

## 📋 Pasos Finales en GitHub

Para activar GitHub Pages, sigue estos pasos:

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio: https://github.com/tiburonmartillo/cobosfest
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, ve a **Pages**
4. En **Source**, selecciona:
   - **Source**: `GitHub Actions`
5. Haz clic en **Save**

### 2. Verificar el Deploy

1. El workflow se ejecutará automáticamente después de cada push a `main`
2. Puedes ver el progreso en la pestaña **Actions** de tu repositorio
3. Una vez completado, tu sitio estará disponible en:
   ```
   https://tiburonmartillo.github.io/cobosfest/
   ```

## 🔄 Deploy Automático

Cada vez que hagas push a la rama `main`, el workflow:
1. Instalará las dependencias
2. Construirá el proyecto
3. Desplegará automáticamente a GitHub Pages

## 📝 Comandos Útiles

```bash
# Hacer cambios y desplegar
git add .
git commit -m "Descripción de los cambios"
git push

# El deploy se ejecutará automáticamente
```

## 🔍 Verificar el Deploy

- **Actions**: https://github.com/tiburonmartillo/cobosfest/actions
- **Pages**: https://github.com/tiburonmartillo/cobosfest/settings/pages
- **Sitio**: https://tiburonmartillo.github.io/cobosfest/ (después de habilitar)

## ⚠️ Notas Importantes

- El base path está configurado como `/cobosfest/` en producción
- Si cambias el nombre del repositorio, actualiza el `base` en `vite.config.ts`
- El workflow usa Node.js 20 y npm ci para instalación limpia
- Los archivos se construyen en la carpeta `build/` (configurada en vite.config.ts)

## 🐛 Solución de Problemas

**El sitio no carga:**
- Verifica que GitHub Pages esté habilitado en Settings > Pages
- Revisa los logs en Actions para ver si hay errores de build
- Asegúrate de que el workflow se haya completado exitosamente

**Las rutas no funcionan:**
- Verifica que el base path en `vite.config.ts` coincida con el nombre del repositorio
- Si el repo está en la raíz de tu usuario, el base path debería ser `/[nombre-repo]/`

