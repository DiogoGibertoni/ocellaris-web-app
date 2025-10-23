import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Users, 
  Calendar, 
  FileText,
  Settings,
  Play,
  Eye,
  Clock
} from "lucide-react";

const CreateCampaign = () => {
  const templates = [
    { id: 1, name: "Banco Seguro", category: "Financeiro", difficulty: "Médio" },
    { id: 2, name: "IT Support", category: "Técnico", difficulty: "Fácil" },
    { id: 3, name: "Social Media", category: "Redes Sociais", difficulty: "Difícil" },
    { id: 4, name: "Tech Support", category: "Suporte", difficulty: "Médio" },
    { id: 5, name: "HR Update", category: "RH", difficulty: "Fácil" }
  ];

  const userGroups = [
    { id: 1, name: "Funcionários TI", count: 45 },
    { id: 2, name: "Setor Financeiro", count: 78 },
    { id: 3, name: "Vendas", count: 123 },
    { id: 4, name: "Recursos Humanos", count: 34 },
    { id: 5, name: "Todos os Funcionários", count: 450 }
  ];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Nova Campanha</h1>
        <p className="text-muted-foreground">Configure uma nova campanha de simulação de phishing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaign Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Detalhes da Campanha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Campanha</Label>
                  <Input id="name" placeholder="Ex: Phishing Bancário Q1 2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baixa</SelectItem>
                      <SelectItem value="medium">Média</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea 
                  id="description" 
                  placeholder="Descreva o objetivo e contexto desta campanha..."
                  className="min-h-20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Data de Início</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Data de Término</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Template Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Selecionar Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                  <div 
                    key={template.id} 
                    className="p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{template.name}</h4>
                      <Badge className={getDifficultyColor(template.difficulty)}>
                        {template.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.category}</p>
                    <div className="mt-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="w-3 h-3" />
                        Visualizar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Groups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Grupos de Usuários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {userGroups.map((group) => (
                  <div key={group.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <div>
                        <h4 className="font-medium">{group.name}</h4>
                        <p className="text-sm text-muted-foreground">{group.count} usuários</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Campaign Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Configurações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="send-time">Horário de Envio</Label>
                <Input id="send-time" type="time" defaultValue="09:00" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reminder">Lembrete (dias)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 dias</SelectItem>
                    <SelectItem value="7">7 dias</SelectItem>
                    <SelectItem value="14">14 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="landing-page">Página de Destino</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Padrão</SelectItem>
                    <SelectItem value="training">Treinamento</SelectItem>
                    <SelectItem value="awareness">Conscientização</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Resumo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Template:</span>
                <span>Não selecionado</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Usuários:</span>
                <span>0 selecionados</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duração:</span>
                <span>-</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Status:</span>
                <span>Rascunho</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full gap-2">
              <Play className="w-4 h-4" />
              Iniciar Campanha
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Clock className="w-4 h-4" />
              Salvar Rascunho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;