@echo off
REM Script para Windows para inicializar el repositorio Git

echo Inicializando repositorio Git...
echo.

REM Inicializar repositorio
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    echo Repositorio inicializado
) else (
    echo Repositorio Git ya existe
)

echo.

REM Agregar todos los archivos
echo Agregando archivos al repositorio...
git add .

echo.
echo Archivos preparados para commit
echo.
echo Para completar el proceso:
echo.
echo 1. Configura tu identidad de Git:
echo    git config --global user.name "Tu Nombre"
echo    git config --global user.email "tu.email@ejemplo.com"
echo.
echo 2. Haz el commit inicial:
echo    git commit -m "Initial commit: Presentacion IA y Medio Ambiente"
echo.
echo 3. Crea un repositorio en GitHub:
echo    - Ve a https://github.com/new
echo    - Crea un nuevo repositorio
echo    - Copia la URL del repositorio
echo.
echo 4. Conecta y sube el codigo:
echo    git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
echo    git branch -M main
echo    git push -u origin main
echo.
pause

