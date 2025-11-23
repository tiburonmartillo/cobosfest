# 📤 Comandos para subir a GitHub

Ejecuta estos comandos en orden para subir la presentación a GitHub:

```bash
# 1. Inicializar repositorio Git (si no está inicializado)
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer commit inicial
git commit -m "first commit: Presentación IA y Medio Ambiente"

# 4. Configurar rama main
git branch -M main

# 5. Conectar con GitHub (repositorio cobosfest)
git remote add origin git@github.com:tiburonmartillo/cobosfest.git

# Si el remote ya existe, usa esto en lugar del comando anterior:
# git remote set-url origin git@github.com:tiburonmartillo/cobosfest.git

# 6. Subir código a GitHub
git push -u origin main
```

## ⚡ O usa el script automático

```bash
chmod +x subir-github.sh
./subir-github.sh
```

## 📝 Notas

- Asegúrate de tener configurado SSH para GitHub, o usa HTTPS:
  ```bash
  git remote add origin https://github.com/tiburonmartillo/cobosfest.git
  ```

- Si encuentras problemas de autenticación, puedes usar HTTPS con token personal

- El `.gitignore` está configurado para excluir `node_modules/` y `build/`

