#!/bin/bash
# Script para subir la presentación a GitHub

echo "🚀 Configurando repositorio Git para cobosfest..."
echo ""

# Inicializar repositorio (si no existe)
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
else
    echo "✅ Repositorio Git ya existe"
fi

echo ""
echo "📝 Agregando archivos al repositorio..."
git add .

echo ""
echo "💾 Haciendo commit inicial..."
git commit -m "first commit: Presentación IA y Medio Ambiente"

echo ""
echo "🌿 Configurando rama main..."
git branch -M main

echo ""
echo "🔗 Conectando con GitHub..."
git remote add origin git@github.com:tiburonmartillo/cobosfest.git 2>/dev/null || {
    echo "⚠️  El remote ya existe, actualizando..."
    git remote set-url origin git@github.com:tiburonmartillo/cobosfest.git
}

echo ""
echo "📤 Subiendo código a GitHub..."
git push -u origin main

echo ""
echo "✅ ¡Listo! El código ha sido subido a GitHub"
echo "📍 Repositorio: https://github.com/tiburonmartillo/cobosfest"

