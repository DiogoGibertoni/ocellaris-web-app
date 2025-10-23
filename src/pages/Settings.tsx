import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  Mail,
  Bell,
  Shield,
  Database,
  Globe,
  Users,
  Server,
  Key,
  AlertTriangle
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Configurações do Sistema</h1>
        <p className="text-muted-foreground">Configure as preferências e configurações globais do Ocellaris</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="gap-2">
            <SettingsIcon className="w-4 h-4" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="email" className="gap-2">
            <Mail className="w-4 h-4" />
            E-mail
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="advanced" className="gap-2">
            <Database className="w-4 h-4" />
            Avançado
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Configurações Gerais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa</Label>
                  <Input id="company-name" defaultValue="Empresa LTDA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="domain">Domínio Principal</Label>
                  <Input id="domain" defaultValue="empresa.com.br" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Select defaultValue="america-sao_paulo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-sao_paulo">América/São_Paulo</SelectItem>
                      <SelectItem value="america-new_york">América/Nova_York</SelectItem>
                      <SelectItem value="europe-london">Europa/Londres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma Padrão</Label>
                  <Select defaultValue="pt-br">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                      <SelectItem value="en-us">English (US)</SelectItem>
                      <SelectItem value="es-es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Interface</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Modo Escuro Automático</Label>
                      <p className="text-sm text-muted-foreground">Ativar automaticamente baseado no horário</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Animações Reduzidas</Label>
                      <p className="text-sm text-muted-foreground">Reduzir animações para melhor performance</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Configurações de E-mail
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-host">Servidor SMTP</Label>
                  <Input id="smtp-host" placeholder="smtp.gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">Porta</Label>
                  <Input id="smtp-port" type="number" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-user">Usuário</Label>
                  <Input id="smtp-user" type="email" placeholder="usuario@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-password">Senha</Label>
                  <Input id="smtp-password" type="password" placeholder="••••••••" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Usar TLS/SSL</Label>
                    <p className="text-sm text-muted-foreground">Conexão segura com o servidor</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Autenticação SMTP</Label>
                    <p className="text-sm text-muted-foreground">Requer autenticação para envio</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Envio</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sender-name">Nome do Remetente</Label>
                    <Input id="sender-name" defaultValue="Ocellaris Security" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sender-email">E-mail do Remetente</Label>
                    <Input id="sender-email" defaultValue="security@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reply-to">Responder Para</Label>
                    <Input id="reply-to" defaultValue="noreply@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-rate">Taxa Máxima (emails/hora)</Label>
                    <Input id="max-rate" type="number" defaultValue="100" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button>Salvar Configurações</Button>
                <Button variant="outline">Testar Conexão</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Configurações de Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Notificações de Sistema</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Campanhas Iniciadas</Label>
                      <p className="text-sm text-muted-foreground">Notificar quando uma campanha for iniciada</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Campanhas Concluídas</Label>
                      <p className="text-sm text-muted-foreground">Notificar quando uma campanha for concluída</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Altas Taxas de Clique</Label>
                      <p className="text-sm text-muted-foreground">Alertar quando taxa exceder 30%</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Notificações de Segurança</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Tentativas de Login Suspeitas</Label>
                      <p className="text-sm text-muted-foreground">Alertar sobre atividades suspeitas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Alterações de Configuração</Label>
                      <p className="text-sm text-muted-foreground">Notificar mudanças importantes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Relatórios Automáticos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="daily-report">Relatório Diário</Label>
                    <Select defaultValue="disabled">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Desabilitado</SelectItem>
                        <SelectItem value="enabled">Habilitado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weekly-report">Relatório Semanal</Label>
                    <Select defaultValue="enabled">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="disabled">Desabilitado</SelectItem>
                        <SelectItem value="enabled">Habilitado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Configurações de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Políticas de Senha</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-length">Comprimento Mínimo</Label>
                    <Input id="min-length" type="number" defaultValue="8" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Expiração (dias)</Label>
                    <Input id="password-expiry" type="number" defaultValue="90" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Requer Caracteres Especiais</Label>
                      <p className="text-sm text-muted-foreground">!@#$%^&*</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Requer Números</Label>
                      <p className="text-sm text-muted-foreground">0-9</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Requer Maiúsculas</Label>
                      <p className="text-sm text-muted-foreground">A-Z</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Controle de Acesso</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Autenticação em Duas Etapas Obrigatória</Label>
                      <p className="text-sm text-muted-foreground">Força 2FA para todos os usuários</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Logout Automático</Label>
                      <p className="text-sm text-muted-foreground">Após 30 minutos de inatividade</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Auditoria e Logs</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Log de Atividades</Label>
                      <p className="text-sm text-muted-foreground">Registrar todas as ações do sistema</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Retenção de Logs (dias)</Label>
                      <p className="text-sm text-muted-foreground">Período de armazenamento</p>
                    </div>
                    <Input className="w-20" type="number" defaultValue="365" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced */}
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Configurações Avançadas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Banco de Dados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="db-host">Host do Banco</Label>
                    <Input id="db-host" defaultValue="localhost" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-port">Porta</Label>
                    <Input id="db-port" type="number" defaultValue="5432" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-name">Nome do Banco</Label>
                    <Input id="db-name" defaultValue="ocellaris" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="db-pool">Pool de Conexões</Label>
                    <Input id="db-pool" type="number" defaultValue="20" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Performance e Cache</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Cache Redis</Label>
                      <p className="text-sm text-muted-foreground">Habilitar cache para melhor performance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compressão GZIP</Label>
                      <p className="text-sm text-muted-foreground">Comprimir respostas HTTP</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Backup e Manutenção</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Frequência de Backup</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">A cada hora</SelectItem>
                        <SelectItem value="daily">Diário</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-retention">Retenção (dias)</Label>
                    <Input id="backup-retention" type="number" defaultValue="30" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium text-destructive flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Zona de Perigo
                </h4>
                <div className="space-y-4 p-4 border border-destructive/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-destructive">Resetar Todas as Configurações</Label>
                      <p className="text-sm text-muted-foreground">Restaura todas as configurações para o padrão</p>
                    </div>
                    <Button variant="destructive">Reset</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-destructive">Limpar Todos os Dados</Label>
                      <p className="text-sm text-muted-foreground">Remove todas as campanhas e dados (irreversível)</p>
                    </div>
                    <Button variant="destructive">Limpar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;