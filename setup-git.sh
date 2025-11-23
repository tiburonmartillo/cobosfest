#!/bin/bash
# Script para inicializar el repositorio Git y preparar para subir a GitHub

echo "🚀 Configurando repositorio Git..."
echo ""

# Inicializar repositorio
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    echo "✅ Repositorio inicializado"
else
    echo "✅ Repositorio Git ya existe"
fi

echo ""

# Agregar todos los archivos
echo "📝 Agregando archivos al repositorio..."
git add .

echo ""
echo "💾 Archivos preparados para commit"
echo ""
echo "📋 Para completar el proceso:"
echo ""
echo "1. Configura tu identidad de Git (si no lo has hecho):"
echo "   git config --global user.name 'Tu Nombre'"
echo "   git config --global user.email 'tu.email@ejemplo.com'"
echo ""
echo "2. Haz el commit inicial:"
echo "   git commit -m 'Initial commit: Presentación IA y Medio Ambiente'"
echo ""
echo "3. Crea un repositorio en GitHub:"
echo "   - Ve a https://github.com/new"
echo "   - Crea un nuevo repositorio (no inicialices con README)"
echo "   - Copia la URL del repositorio"
echo ""
echo "4. Conecta y sube el código:"
echo "   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "✅ Listo para subir a GitHub!"

