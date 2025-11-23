#!/bin/bash
# Script para servir la presentación offline

cd "$(dirname "$0")/build"

echo "🚀 Iniciando servidor local para la presentación..."
echo ""
echo "📍 Abre tu navegador en:"
echo "   http://localhost:8000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Intentar usar Python 3 primero, luego Python 2, luego PHP
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "❌ Error: No se encontró Python ni PHP instalado."
    echo "   Por favor instala Python o PHP para servir la presentación."
    exit 1
fi
