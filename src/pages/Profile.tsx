import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail,
  Shield,
  Key,
  Bell,
  Activity,
  Edit,
  Save,
  Calendar,
  Award,
  Target,
  BarChart3
} from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "Campanhas Criadas", value: "24", icon: Mail },
    { label: "Usuários Testados", value: "1,247", icon: Target },
    { label: "Taxa Média de Sucesso", value: "22.4%", icon: BarChart3 },
    { label: "Dias Ativos", value: "89", icon: Activity }
  ];

  const recentActivity = [
    {
      action: "Criou campanha",
      target: "Phishing Bancário Q4",
      date: "2024-01-25",
      time: "14:30"
    },
    {
      action: "Concluiu campanha",
      target: "E-mail Corporativo",
      date: "2024-01-24",
      time: "09:15"
    },
    {
      action: "Pausou campanha",
      target: "Rede Social Falsa",
      date: "2024-01-23",
      time: "16:45"
    },
    {
      action: "Exportou relatório",
      target: "Relatório Mensal",
      date: "2024-01-22",
      time: "11:20"
    }
  ];

  const achievements = [
    { title: "Primeiro Phishing", description: "Criou sua primeira campanha", earned: true },
    { title: "100 Testados", description: "Testou mais de 100 usuários", earned: true },
    { title: "Taxa Expert", description: "Alcançou taxa de detecção > 30%", earned: true },
    { title: "Mestre da Segurança", description: "10 campanhas concluídas", earned: false }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Perfil do Usuário</h1>
        <p className="text-muted-foreground">Gerencie suas informações e configurações pessoais</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback className="text-lg">AD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Admin Silva</h3>
                  <p className="text-muted-foreground">admin@empresa.com</p>
                  <Badge className="mt-2">Administrador</Badge>
                </div>
                <Button variant="outline" className="gap-2">
                  <Edit className="w-4 h-4" />
                  Editar Foto
                </Button>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue="admin@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Input id="department" defaultValue="Segurança da Informação" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="+55 11 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Cargo</Label>
                  <Input id="role" defaultValue="Especialista em Segurança" />
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="gap-2">
                  <Save className="w-4 h-4" />
                  Salvar Alterações
                </Button>
                <Button variant="outline">Cancelar</Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Configurações de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Alterar Senha</h4>
                    <p className="text-sm text-muted-foreground">Última alteração há 45 dias</p>
                  </div>
                </div>
                <Button variant="outline">Alterar</Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Autenticação em Duas Etapas</h4>
                    <p className="text-sm text-muted-foreground">Proteja sua conta com 2FA</p>
                  </div>
                </div>
                <Badge className="bg-success/20 text-success">Ativo</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Notificações de Segurança</h4>
                    <p className="text-sm text-muted-foreground">Receba alertas sobre atividades suspeitas</p>
                  </div>
                </div>
                <Badge className="bg-success/20 text-success">Ativo</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="font-medium">
                        {activity.action} <span className="text-primary">{activity.target}</span>
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(activity.date).toLocaleDateString('pt-BR')} às {activity.time}
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
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Estatísticas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{stat.label}</span>
                    </div>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Conquistas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-3 border rounded-lg ${achievement.earned ? 'bg-primary/5 border-primary/20' : 'opacity-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Award className={`w-4 h-4 ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h4 className="font-medium">{achievement.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Membro desde:</span>
                <span>Janeiro 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Último acesso:</span>
                <span>Hoje às 14:30</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plano:</span>
                <Badge>Professional</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;