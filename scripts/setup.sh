#!/bin/bash

echo "🐟 Configurando Projeto Ocellaris..."

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js 18+ primeiro."
    exit 1
fi

# Verificar se .NET está instalado
if ! command -v dotnet &> /dev/null; then
    echo "❌ .NET SDK não encontrado. Por favor, instale .NET 8 SDK primeiro."
    exit 1
fi

echo "✅ Pré-requisitos verificados"

# Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
npm install

# Restaurar dependências do backend
echo "📦 Restaurando dependências do backend..."
cd backend
dotnet restore

# Verificar se Entity Framework CLI está instalado
if ! command -v dotnet-ef &> /dev/null; then
    echo "🔧 Instalando Entity Framework CLI..."
    dotnet tool install --global dotnet-ef
fi

# Executar migrações
echo "🗄️ Configurando banco de dados..."
cd Ocellaris.Api
dotnet ef database update

echo "✅ Setup concluído!"
echo ""
echo "Para executar o projeto:"
echo "1. Backend: cd backend/Ocellaris.Api && dotnet run"
echo "2. Frontend: npm run dev"
echo ""
echo "URLs:"
echo "- Frontend: http://localhost:8080"
echo "- Backend API: https://localhost:7000"
echo "- Swagger: https://localhost:7000/swagger"