# Ocellaris - Sistema de Simulação de Phishing

Sistema completo para simulação de campanhas de phishing educativo, desenvolvido com React + TypeScript no frontend e .NET 8 no backend.

## 🚀 Quick Start

### Opção 1: Setup Automático
```bash
# Windows
scripts\setup.bat

# Linux/Mac
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### Opção 2: Docker
```bash
docker-compose up -d
```

### Opção 3: Manual
Consulte o arquivo [SETUP.md](SETUP.md) para instruções detalhadas.

## 🏗️ Arquitetura

### Frontend (React + TypeScript)
- **Framework**: React 18 com TypeScript
- **UI**: shadcn/ui + Tailwind CSS
- **Roteamento**: React Router
- **Estado**: React Query para cache
- **Build**: Vite

### Backend (.NET 8)
- **Framework**: ASP.NET Core Web API
- **ORM**: Entity Framework Core
- **Banco**: SQL Server / LocalDB
- **Auth**: JWT + Identity Framework
- **Docs**: Swagger/OpenAPI

## 📋 Funcionalidades

### ✅ Implementadas
- 🎯 **Dashboard** com métricas em tempo real
- 📧 **Gerenciamento de Campanhas** (CRUD completo)
- 👥 **Gerenciamento de Usuários** com diferentes planos
- 📊 **Analytics e Relatórios** detalhados
- 🎨 **Templates** de phishing personalizáveis
- 📚 **Biblioteca** de recursos e assets
- 📈 **Perfis de Usuários** com métricas individuais
- 🔒 **Sistema de Autenticação** JWT
- ⚙️ **Configurações** avançadas do sistema

### 🚧 Em Desenvolvimento
- 📤 **Envio real de emails** via SMTP
- 🔗 **Landing pages** dinâmicas
- 📱 **Campanhas SMS**
- 🤖 **Automação** de campanhas
- 📊 **Relatórios** em PDF/Excel

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- React Query
- Vite
- Lucide Icons

### Backend
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Identity Framework
- JWT Authentication
- AutoMapper
- Serilog
- Swagger

## 📁 Estrutura do Projeto

```
ocellaris/
├── 🎨 Frontend (React)
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── hooks/         # Custom hooks
│   │   ├── types/         # Tipos TypeScript
│   │   └── data/          # Dados mock
│   └── public/            # Assets estáticos
├── 🔧 Backend (.NET)
│   ├── Ocellaris.Api/           # Controllers e configuração
│   ├── Ocellaris.Core/          # Entidades, DTOs e interfaces
│   └── Ocellaris.Infrastructure/ # Implementações e DbContext
├── 🐳 Docker
│   ├── docker-compose.yml
│   └── Dockerfiles
└── 📜 Scripts
    ├── setup.sh
    └── setup.bat
```

## 🚀 Como Executar

### Desenvolvimento Local

1. **Clone o repositório**
```bash
git clone <repository-url>
cd ocellaris
```

2. **Execute o setup**
```bash
# Windows
scripts\setup.bat

# Linux/Mac
./scripts/setup.sh
```

3. **Inicie os serviços**
```bash
# Terminal 1 - Backend
cd backend/Ocellaris.Api
dotnet run

# Terminal 2 - Frontend
npm run dev
```

### Docker
```bash
docker-compose up -d
```

## 🔗 URLs de Acesso

- **Frontend**: http://localhost:8080
- **Backend API**: https://localhost:7000
- **Swagger UI**: https://localhost:7000/swagger

## 🎯 Casos de Uso

### Para Empresas
- Treinar funcionários sobre segurança cibernética
- Avaliar vulnerabilidades humanas
- Criar campanhas educativas personalizadas
- Gerar relatórios de conscientização

### Para Consultores de Segurança
- Oferecer serviços de pentest social
- Demonstrar riscos para clientes
- Criar templates reutilizáveis
- Acompanhar progresso dos treinamentos

## 📊 Métricas e Analytics

- Taxa de cliques em emails maliciosos
- Taxa de relatórios de phishing
- Análise por departamento
- Evolução temporal da conscientização
- Comparação entre campanhas
- Identificação de usuários vulneráveis

## 🔒 Segurança

- Autenticação JWT
- Criptografia de senhas
- Validação de entrada
- Logs de auditoria
- Controle de acesso baseado em roles
- Proteção CORS

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas e suporte:
- 📧 Email: suporte@ocellaris.com
- 💬 Issues: [GitHub Issues](../../issues)
- 📖 Documentação: [Wiki](../../wiki)

---

<div align="center">
  <strong>🐟 Ocellaris - Educação em Segurança Cibernética</strong>
</div>