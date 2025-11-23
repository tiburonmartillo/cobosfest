# 🔧 Solución al error "src refspec main does not match any"

Este error ocurre cuando intentas hacer push pero no hay commits en la rama `main`.

## ✅ Solución

Ejecuta estos comandos en orden:

```bash
# 1. Verificar estado
git status

# 2. Si no hay commits, agregar archivos y hacer commit
git add .
git commit -m "first commit: Presentación IA y Medio Ambiente"

# 3. Verificar/crear rama main
git branch -M main

# 4. Verificar que hay commits
git log --oneline

# 5. Ahora sí, hacer push
git push -u origin main
```

## 🚀 Script automático

He creado un script que hace todo automáticamente:

```bash
chmod +x fix-git-push.sh
./fix-git-push.sh
```

## 📋 Pasos detallados

### 1. Verificar si hay archivos sin agregar

```bash
git status
```

Si ves archivos sin agregar, ejecuta:
```bash
git add .
```

### 2. Hacer commit

```bash
git commit -m "first commit: Presentación IA y Medio Ambiente"
```

### 3. Verificar la rama

```bash
git branch
```

Si no estás en `main`, ejecuta:
```bash
git branch -M main
```

### 4. Verificar que hay commits

```bash
git log --oneline
```

Deberías ver al menos un commit. Si no hay commits, vuelve al paso 2.

### 5. Hacer push

```bash
git push -u origin main
```

## 🔍 Diagnóstico

Si el error persiste, verifica:

1. **¿Hay commits?**
   ```bash
   git log --oneline
   ```

2. **¿Estás en la rama correcta?**
   ```bash
   git branch
   ```

3. **¿Está configurado el remote?**
   ```bash
   git remote -v
   ```

4. **¿Tienes permisos en el repositorio?**
   - Verifica que tienes acceso de escritura en `github.com:tiburonmartillo/cobosfest.git`
   - Si usas SSH, verifica que tu clave SSH esté configurada

## 🔐 Si usas HTTPS en lugar de SSH

Si tienes problemas con SSH, usa HTTPS:

```bash
git remote set-url origin https://github.com/tiburonmartillo/cobosfest.git
git push -u origin main
```

Te pedirá usuario y token de acceso personal.

