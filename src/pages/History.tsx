import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  History as HistoryIcon, 
  Search, 
  Filter,
  Calendar,
  Download,
  Eye,
  BarChart3,
  Mail,
  Users,
  Clock
} from "lucide-react";

const History = () => {
  const campaigns = [
    {
      id: 1,
      name: "Phishing Bancário Q4 2024",
      type: "Email",
      status: "Concluída",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      duration: "31 dias",
      participants: 450,
      clickRate: 23.4,
      reportRate: 12.8,
      template: "Banco Seguro",
      createdBy: "Admin",
      completionRate: 100
    },
    {
      id: 2,
      name: "E-mail Corporativo Interno",
      type: "Email",
      status: "Concluída",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      duration: "30 dias",
      participants: 230,
      clickRate: 18.7,
      reportRate: 45.2,
      template: "IT Support",
      createdBy: "Admin",
      completionRate: 100
    },
    {
      id: 3,
      name: "Teste de Conscientização Q3",
      type: "Landing Page",
      status: "Concluída",
      startDate: "2023-10-01",
      endDate: "2023-10-31",
      duration: "30 dias",
      participants: 380,
      clickRate: 28.9,
      reportRate: 35.7,
      template: "Social Media",
      createdBy: "Security Team",
      completionRate: 100
    },
    {
      id: 4,
      name: "Simulação Suporte Técnico",
      type: "Email",
      status: "Cancelada",
      startDate: "2023-12-01",
      endDate: "2023-12-15",
      duration: "14 dias",
      participants: 150,
      clickRate: 15.3,
      reportRate: 22.1,
      template: "Tech Support",
      createdBy: "Admin",
      completionRate: 67
    },
    {
      id: 5,
      name: "Campanha RH - Benefícios",
      type: "SMS",
      status: "Concluída",
      startDate: "2023-11-15",
      endDate: "2023-11-30",
      duration: "15 dias",
      participants: 89,
      clickRate: 31.5,
      reportRate: 18.9,
      template: "HR Update",
      createdBy: "HR Team",
      completionRate: 100
    },
    {
      id: 6,
      name: "Phishing Financeiro Q3",
      type: "Email",
      status: "Concluída",
      startDate: "2023-09-01",
      endDate: "2023-09-30",
      duration: "29 dias",
      participants: 520,
      clickRate: 26.7,
      reportRate: 28.4,
      template: "Financial Alert",
      createdBy: "Security Team",
      completionRate: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída":
        return "bg-success/20 text-success";
      case "Cancelada":
        return "bg-destructive/20 text-destructive";
      case "Pausada":
        return "bg-warning/20 text-warning";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Email":
        return Mail;
      case "SMS":
        return Mail;
      case "Landing Page":
        return Eye;
      default:
        return Mail;
    }
  };

  const totalCampaigns = campaigns.length;
  const completedCampaigns = campaigns.filter(c => c.status === "Concluída").length;
  const totalParticipants = campaigns.reduce((sum, c) => sum + c.participants, 0);
  const avgClickRate = campaigns.reduce((sum, c) => sum + c.clickRate, 0) / campaigns.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Histórico de Campanhas</h1>
          <p className="text-muted-foreground">Visualize e analise campanhas anteriores</p>
        </div>
        <Button className="gap-2">
          <Download className="w-4 h-4" />
          Exportar Histórico
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Campanhas</p>
                <p className="text-2xl font-bold">{totalCampaigns}</p>
              </div>
              <HistoryIcon className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Concluídas</p>
                <p className="text-2xl font-bold">{completedCampaigns}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Participantes</p>
                <p className="text-2xl font-bold">{totalParticipants.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Taxa Média</p>
                <p className="text-2xl font-bold">{avgClickRate.toFixed(1)}%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Pesquisar campanhas..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Filtrar por Data
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Mais Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon className="w-5 h-5" />
            Campanhas Anteriores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => {
              const TypeIcon = getTypeIcon(campaign.type);
              return (
                <div key={campaign.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <TypeIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{campaign.name}</h4>
                        <p className="text-sm text-muted-foreground">{campaign.template}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Badge variant="outline">{campaign.type}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Período</p>
                      <p className="font-medium">{campaign.duration}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(campaign.startDate).toLocaleDateString('pt-BR')} - {new Date(campaign.endDate).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Participantes</p>
                      <p className="font-medium">{campaign.participants}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Taxa de Cliques</p>
                      <p className="font-medium text-warning">{campaign.clickRate}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Taxa de Relatórios</p>
                      <p className="font-medium text-success">{campaign.reportRate}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Conclusão</p>
                      <p className="font-medium">{campaign.completionRate}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Criado por</p>
                      <p className="font-medium">{campaign.createdBy}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-3 h-3" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <BarChart3 className="w-3 h-3" />
                      Relatório
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-3 h-3" />
                      Exportar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;