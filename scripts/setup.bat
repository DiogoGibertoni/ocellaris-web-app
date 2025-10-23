@echo off
echo 🐟 Configurando Projeto Ocellaris...

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado. Por favor, instale Node.js 18+ primeiro.
    pause
    exit /b 1
)

REM Verificar se .NET está instalado
dotnet --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ .NET SDK não encontrado. Por favor, instale .NET 8 SDK primeiro.
    pause
    exit /b 1
)

echo ✅ Pré-requisitos verificados

REM Instalar dependências do frontend
echo 📦 Instalando dependências do frontend...
npm install

REM Restaurar dependências do backend
echo 📦 Restaurando dependências do backend...
cd backend
dotnet restore

REM Verificar se Entity Framework CLI está instalado
dotnet ef --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔧 Instalando Entity Framework CLI...
    dotnet tool install --global dotnet-ef
)

REM Executar migrações
echo 🗄️ Configurando banco de dados...
cd Ocellaris.Api
dotnet ef database update

echo ✅ Setup concluído!
echo.
echo Para executar o projeto:
echo 1. Backend: cd backend\Ocellaris.Api ^&^& dotnet run
echo 2. Frontend: npm run dev
echo.
echo URLs:
echo - Frontend: http://localhost:8080
echo - Backend API: https://localhost:7000
echo - Swagger: https://localhost:7000/swagger

pause