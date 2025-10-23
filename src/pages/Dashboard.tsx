import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Clock,
  Eye,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Campanhas Ativas",
      value: "12",
      icon: Mail,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Usuários Testados",
      value: "2,847",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Taxa de Cliques",
      value: "23.4%",
      icon: Target,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Phishing Detectados",
      value: "89",
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  const recentCampaigns = [
    { name: "Phishing Bancário Q4", status: "Ativa", progress: 67, users: 450 },
    { name: "E-mail Corporativo", status: "Concluída", progress: 100, users: 230 },
    { name: "Rede Social Falsa", status: "Pausada", progress: 34, users: 180 },
    { name: "Suporte Técnico", status: "Ativa", progress: 89, users: 320 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral das suas campanhas de simulação</p>
        </div>
        <Link to="/create-campaign">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            Nova Campanha
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Campanhas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div key={campaign.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{campaign.name}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {campaign.users} usuários
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {campaign.progress}% concluído
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      campaign.status === "Ativa" ? "bg-success/20 text-success" :
                      campaign.status === "Concluída" ? "bg-primary/20 text-primary" :
                      "bg-warning/20 text-warning"
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/create-campaign">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Mail className="w-4 h-4" />
                Criar Campanha
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="outline" className="w-full justify-start gap-2">
                <CheckCircle className="w-4 h-4" />
                Ver Templates
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline" className="w-full justify-start gap-2">
                <TrendingUp className="w-4 h-4" />
                Relatórios
              </Button>
            </Link>
            <Link to="/users">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Users className="w-4 h-4" />
                Gerenciar Usuários
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;