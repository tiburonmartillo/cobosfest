# 📤 Subir Presentación a GitHub

Guía paso a paso para crear un repositorio en GitHub y subir la presentación.

## 🚀 Pasos

### 1. Configurar Git (si no lo has hecho)

```bash
git config --global user.name "Sergio Villanueva"
git config --global user.email "tu.email@ejemplo.com"
```

### 2. Ejecutar script de configuración

**macOS/Linux:**
```bash
chmod +x setup-git.sh
./setup-git.sh
```

**Windows:**
```cmd
setup-git.bat
```

### 3. Hacer el commit inicial

```bash
git commit -m "Initial commit: Presentación IA y Medio Ambiente"
```

### 4. Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Ingresa un nombre para el repositorio (ej: `presentacion-ia-medio-ambiente`)
3. **NO marques** "Add a README file" (ya tenemos uno)
4. Puedes elegir si será público o privado
5. Haz clic en "Create repository"

### 5. Conectar con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Ejecuta estos:

```bash
# Reemplaza TU-USUARIO y TU-REPO con tu información
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

**Ejemplo:**
```bash
git remote add origin https://github.com/sergiovillanueva/presentacion-ia-medio-ambiente.git
git branch -M main
git push -u origin main
```

### 6. Verificar

Ve a tu repositorio en GitHub. Deberías ver todos los archivos subidos.

## 🌐 Publicar con GitHub Pages

Si quieres que la presentación sea accesible públicamente:

1. Ve a **Settings** en tu repositorio
2. En el menú lateral, ve a **Pages**
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/build`
4. Haz clic en **Save**
5. Espera unos minutos y tu presentación estará disponible en:
   `https://TU-USUARIO.github.io/TU-REPO/`

## 📝 Notas Importantes

- **`.gitignore`** ya está configurado para excluir `node_modules/`, `build/`, etc.
- Si quieres incluir `build/` en el repositorio, elimínalo de `.gitignore` antes del commit
- Para GitHub Pages, necesitarás incluir la carpeta `build/` o configurar un workflow de GitHub Actions

## 🔄 Actualizar el repositorio

Después de hacer cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## 🔐 Si el repositorio es privado

Si creaste un repositorio privado, necesitarás autenticarte:

- Usa **Personal Access Token** en lugar de tu contraseña
- O configura **SSH keys** para GitHub

## 📦 Archivos incluidos en el repositorio

- ✅ Código fuente (`src/`)
- ✅ Archivos de configuración (`package.json`, `vite.config.ts`, etc.)
- ✅ README y documentación
- ❌ `node_modules/` (excluido por `.gitignore`)
- ❌ `build/` (excluido por `.gitignore` - agrega si necesitas GitHub Pages)

## 🆘 Problemas comunes

**Error: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
```

**Error: "Authentication failed"**
- Usa un Personal Access Token en lugar de tu contraseña
- O configura SSH keys

**Para incluir `build/` en el repositorio:**
1. Edita `.gitignore` y elimina la línea `build/`
2. Ejecuta: `git add build/`
3. Haz commit: `git commit -m "Add build files"`

