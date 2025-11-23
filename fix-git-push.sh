#!/bin/bash
# Script para solucionar el problema de push a GitHub

echo "🔍 Verificando estado del repositorio..."
echo ""

# Verificar si hay commits
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
    echo "❌ No hay commits en el repositorio"
    echo ""
    echo "📝 Agregando archivos..."
    git add .
    
    echo ""
    echo "💾 Haciendo commit inicial..."
    git commit -m "first commit: Presentación IA y Medio Ambiente"
    
    echo ""
    echo "✅ Commit creado"
else
    echo "✅ Ya hay commits en el repositorio"
    git log --oneline -1
fi

echo ""
echo "🌿 Verificando rama..."
current_branch=$(git branch --show-current)
echo "Rama actual: $current_branch"

if [ -z "$current_branch" ]; then
    echo "⚠️  No hay rama configurada, creando rama main..."
    git checkout -b main
elif [ "$current_branch" != "main" ]; then
    echo "⚠️  Rama actual es '$current_branch', renombrando a main..."
    git branch -M main
fi

echo ""
echo "🔗 Verificando remote..."
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ Remote 'origin' configurado:"
    git remote get-url origin
else
    echo "❌ No hay remote configurado"
    echo "📝 Agregando remote..."
    git remote add origin git@github.com:tiburonmartillo/cobosfest.git
fi

echo ""
echo "📤 Intentando push..."
git push -u origin main

echo ""
echo "✅ Proceso completado"

