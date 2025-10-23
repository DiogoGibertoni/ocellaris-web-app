import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Search, 
  Eye, 
  Copy, 
  Edit,
  Plus,
  Filter,
  Mail,
  Globe,
  Smartphone
} from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Banco Seguro - Verificação de Conta",
      category: "Financeiro",
      type: "Email",
      difficulty: "Médio",
      description: "E-mail simulando verificação de conta bancária com link malicioso",
      usage: 156,
      successRate: 23.4,
      language: "PT-BR",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      name: "IT Support - Reset de Senha",
      category: "Técnico",
      type: "Email",
      difficulty: "Fácil",
      description: "Solicitação falsa de reset de senha do departamento de TI",
      usage: 89,
      successRate: 18.7,
      language: "PT-BR",
      lastUpdated: "2024-01-12"
    },
    {
      id: 3,
      name: "LinkedIn - Convite de Conexão",
      category: "Redes Sociais",
      type: "Landing Page",
      difficulty: "Difícil",
      description: "Página falsa do LinkedIn para captura de credenciais",
      usage: 234,
      successRate: 31.2,
      language: "PT-BR",
      lastUpdated: "2024-01-18"
    },
    {
      id: 4,
      name: "Suporte Técnico Urgente",
      category: "Suporte",
      type: "Email",
      difficulty: "Médio",
      description: "E-mail urgente solicitando acesso remoto para manutenção",
      usage: 67,
      successRate: 15.3,
      language: "PT-BR",
      lastUpdated: "2024-01-20"
    },
    {
      id: 5,
      name: "RH - Atualização de Benefícios",
      category: "Recursos Humanos",
      type: "Email",
      difficulty: "Fácil",
      description: "Comunicado falso do RH sobre atualização de benefícios",
      usage: 45,
      successRate: 12.8,
      language: "PT-BR",
      lastUpdated: "2024-01-22"
    },
    {
      id: 6,
      name: "WhatsApp Web - Login",
      category: "Mensagem",
      type: "SMS",
      difficulty: "Médio",
      description: "SMS falso do WhatsApp solicitando verificação de login",
      usage: 123,
      successRate: 28.6,
      language: "PT-BR",
      lastUpdated: "2024-01-25"
    }
  ];

  const categories = ["Todos", "Financeiro", "Técnico", "Redes Sociais", "Suporte", "Recursos Humanos", "Mensagem"];
  const types = ["Todos", "Email", "Landing Page", "SMS"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-success/20 text-success";
      case "Médio":
        return "bg-warning/20 text-warning";
      case "Difícil":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Email":
        return Mail;
      case "Landing Page":
        return Globe;
      case "SMS":
        return Smartphone;
      default:
        return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Templates</h1>
          <p className="text-muted-foreground">Biblioteca de templates para campanhas de phishing</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Template
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Pesquisar templates..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Categoria:</span>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tipo:</span>
              {types.map((type) => (
                <Badge key={type} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => {
          const TypeIcon = getTypeIcon(template.type);
          return (
            <Card key={template.id} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon className="w-4 h-4 text-primary" />
                    <Badge variant="outline">{template.type}</Badge>
                  </div>
                  <Badge className={getDifficultyColor(template.difficulty)}>
                    {template.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{template.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Categoria:</span>
                    <span>{template.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uso:</span>
                    <span>{template.usage} campanhas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxa de Sucesso:</span>
                    <span className="font-medium text-warning">{template.successRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Atualizado:</span>
                    <span>{new Date(template.lastUpdated).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Eye className="w-3 h-3" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Template Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">42</p>
              <p className="text-sm text-muted-foreground">Total de Templates</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">1,247</p>
              <p className="text-sm text-muted-foreground">Uso Total</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-warning">22.4%</p>
              <p className="text-sm text-muted-foreground">Taxa Média</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">8</p>
              <p className="text-sm text-muted-foreground">Novos Este Mês</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Templates;