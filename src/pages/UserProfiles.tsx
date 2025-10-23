import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, TrendingUp, Target, Calendar, DollarSign, Eye } from "lucide-react";
import { mockUsers, generateUserProfile } from "@/data/mockUsers";
import { UserProfile } from "@/types";

const UserProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);

  const handleViewProfile = (userId: string) => {
    const profile = generateUserProfile(userId);
    setSelectedProfile(profile);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Básico': return 'bg-secondary text-secondary-foreground';
      case 'Profissional': return 'bg-primary text-primary-foreground';
      case 'Enterprise': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Users className="w-6 h-6 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Perfis de Usuários</h1>
      </div>

      {!selectedProfile ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.map((user) => (
            <Card key={user.id} className="card-hover glass-effect">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription>{user.role}</CardDescription>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge className={getPlanColor(user.plan)}>
                    {user.plan}
                  </Badge>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Empresa:</strong> {user.company}</p>
                  <p><strong>Campanhas:</strong> {user.campaigns}</p>
                  <p><strong>Último acesso:</strong> {formatDate(user.lastAccess || user.createdAt)}</p>
                </div>
                <Button 
                  className="w-full button-primary" 
                  onClick={() => handleViewProfile(user.id)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <Button 
            variant="outline" 
            onClick={() => setSelectedProfile(null)}
            className="mb-4"
          >
            ← Voltar para Lista
          </Button>

          <Card className="glass-effect">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {selectedProfile.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{selectedProfile.user.name}</CardTitle>
                    <CardDescription className="text-lg">{selectedProfile.user.role}</CardDescription>
                    <p className="text-muted-foreground">{selectedProfile.user.company}</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Badge className={getPlanColor(selectedProfile.user.plan)}>
                    {selectedProfile.user.plan}
                  </Badge>
                  <Badge className={getStatusColor(selectedProfile.user.status)}>
                    {selectedProfile.user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Total de Campanhas</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-2">{selectedProfile.metrics.totalCampaigns}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium text-muted-foreground">Campanhas Ativas</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-2">{selectedProfile.metrics.activeCampaigns}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Budget Total</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-2">{formatCurrency(selectedProfile.metrics.totalBudget)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">CTR Médio</span>
                </div>
                <p className="text-2xl font-bold text-foreground mt-2">{selectedProfile.metrics.avgCTR}%</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="campaigns" className="space-y-6">
            <TabsList>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-4">
              {selectedProfile.campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{campaign.name}</CardTitle>
                        <CardDescription>{campaign.description}</CardDescription>
                      </div>
                      <Badge variant={
                        campaign.status === 'active' ? 'default' : 
                        campaign.status === 'completed' ? 'secondary' : 'outline'
                      }>
                        {campaign.status === 'active' ? 'Ativa' : 
                         campaign.status === 'completed' ? 'Concluída' : 
                         campaign.status === 'paused' ? 'Pausada' : 'Rascunho'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-semibold">{formatCurrency(campaign.budget)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gasto</p>
                      <p className="font-semibold">{formatCurrency(campaign.spent)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cliques</p>
                      <p className="font-semibold">{campaign.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Impressões</p>
                      <p className="font-semibold">{campaign.impressions.toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="insights">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Geral</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Budget Total:</span>
                      <span className="font-semibold">{formatCurrency(selectedProfile.metrics.totalBudget)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valor Gasto:</span>
                      <span className="font-semibold">{formatCurrency(selectedProfile.metrics.totalSpent)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de Uso do Budget:</span>
                      <span className="font-semibold">
                        {selectedProfile.metrics.totalBudget > 0 
                          ? ((selectedProfile.metrics.totalSpent / selectedProfile.metrics.totalBudget) * 100).toFixed(1)
                          : 0}%
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Melhor Campanha</p>
                      <p className="font-semibold">{selectedProfile.metrics.topPerformingCampaign || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CTR Médio</p>
                      <p className="font-semibold">{selectedProfile.metrics.avgCTR}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Membro desde</p>
                      <p className="font-semibold">{formatDate(selectedProfile.user.createdAt)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default UserProfiles;