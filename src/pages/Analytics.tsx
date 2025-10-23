import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Mail,
  AlertTriangle,
  CheckCircle,
  Download,
  Calendar,
  Target,
  Shield
} from "lucide-react";

const Analytics = () => {
  const overviewStats = [
    {
      title: "Taxa de Cliques Média",
      value: "23.4%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      color: "text-warning"
    },
    {
      title: "Taxa de Relatórios",
      value: "31.2%",
      change: "+5.3%",
      trend: "up",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "Usuários Testados",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Campanhas Concluídas",
      value: "18",
      change: "-1",
      trend: "down",
      icon: CheckCircle,
      color: "text-accent"
    }
  ];

  const campaignResults = [
    {
      name: "Phishing Bancário Q4",
      totalUsers: 450,
      clickedUsers: 105,
      reportedUsers: 58,
      clickRate: 23.3,
      reportRate: 12.9,
      status: "Concluída"
    },
    {
      name: "E-mail Corporativo",
      totalUsers: 230,
      clickedUsers: 43,
      reportedUsers: 104,
      clickRate: 18.7,
      reportRate: 45.2,
      status: "Concluída"
    },
    {
      name: "Suporte Técnico",
      totalUsers: 320,
      clickedUsers: 49,
      reportedUsers: 124,
      clickRate: 15.3,
      reportRate: 38.7,
      status: "Ativa"
    },
    {
      name: "Rede Social Falsa",
      totalUsers: 180,
      clickedUsers: 56,
      reportedUsers: 15,
      clickRate: 31.1,
      reportRate: 8.3,
      status: "Pausada"
    }
  ];

  const departmentStats = [
    { department: "TI", users: 45, vulnerable: 8, rate: 17.8 },
    { department: "Financeiro", users: 78, vulnerable: 23, rate: 29.5 },
    { department: "Vendas", users: 123, vulnerable: 41, rate: 33.3 },
    { department: "RH", users: 34, vulnerable: 6, rate: 17.6 },
    { department: "Marketing", users: 56, vulnerable: 18, rate: 32.1 }
  ];

  const topThreats = [
    { type: "Phishing Bancário", incidents: 45, severity: "Alta" },
    { type: "Suporte Técnico", incidents: 32, severity: "Média" },
    { type: "Redes Sociais", incidents: 28, severity: "Alta" },
    { type: "E-mail Corporativo", incidents: 19, severity: "Baixa" },
    { type: "Anexos Maliciosos", incidents: 15, severity: "Alta" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Alta":
        return "bg-destructive/20 text-destructive";
      case "Média":
        return "bg-warning/20 text-warning";
      case "Baixa":
        return "bg-success/20 text-success";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Relatórios & Analytics</h1>
          <p className="text-muted-foreground">Análise detalhada das campanhas de simulação</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Filtrar Período
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={stat.title} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      <TrendIcon className="w-3 h-3" />
                      {stat.change}
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-primary/10`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Campaign Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Resultados por Campanha
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignResults.map((campaign) => (
              <div key={campaign.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{campaign.name}</h4>
                  <Badge className={
                    campaign.status === "Concluída" ? "bg-success/20 text-success" :
                    campaign.status === "Ativa" ? "bg-primary/20 text-primary" :
                    "bg-warning/20 text-warning"
                  }>
                    {campaign.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total de Usuários</p>
                    <p className="font-medium">{campaign.totalUsers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Clicaram</p>
                    <p className="font-medium text-warning">{campaign.clickedUsers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Relataram</p>
                    <p className="font-medium text-success">{campaign.reportedUsers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Taxa de Cliques</p>
                    <p className="font-medium">{campaign.clickRate}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Taxa de Relatórios</p>
                    <p className="font-medium">{campaign.reportRate}%</p>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Vulnerável: {campaign.clickRate}%</span>
                    <span>Consciente: {campaign.reportRate}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 flex">
                    <div 
                      className="bg-warning h-2 rounded-l-full" 
                      style={{ width: `${campaign.clickRate}%` }}
                    />
                    <div 
                      className="bg-success h-2 rounded-r-full" 
                      style={{ width: `${campaign.reportRate}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Análise por Departamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept) => (
                <div key={dept.department} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{dept.department}</h4>
                    <p className="text-sm text-muted-foreground">
                      {dept.vulnerable}/{dept.users} usuários vulneráveis
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      dept.rate > 25 ? "text-destructive" : 
                      dept.rate > 15 ? "text-warning" : "text-success"
                    }`}>
                      {dept.rate}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Threats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Principais Ameaças
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topThreats.map((threat) => (
                <div key={threat.type} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{threat.type}</h4>
                    <p className="text-sm text-muted-foreground">{threat.incidents} incidentes</p>
                  </div>
                  <Badge className={getSeverityColor(threat.severity)}>
                    {threat.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;