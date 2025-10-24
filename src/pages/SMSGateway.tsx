import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MessageSquare,
  Plus,
  Send,
  CheckCircle2,
  XCircle,
  Clock,
  Smartphone,
  Signal,
  TrendingUp,
  AlertCircle
} from "lucide-react";

interface SMSMessage {
  messageId: string;
  from: string;
  to: string;
  message: string;
  sendStatus: "pending" | "sent" | "delivered" | "failed";
  sendTimestamp: string;
  deliveryConfirmation: boolean;
  carrierInfo: string;
}

const SMSGateway = () => {
  const [messages, setMessages] = useState<SMSMessage[]>([
    {
      messageId: "MSG001",
      from: "+55 11 98765-4321",
      to: "+55 11 91234-5678",
      message: "Seu código de verificação bancária: 849273. Válido por 10 minutos.",
      sendStatus: "delivered",
      sendTimestamp: "2025-10-24 14:32:15",
      deliveryConfirmation: true,
      carrierInfo: "Vivo"
    },
    {
      messageId: "MSG002",
      from: "+55 11 98765-4321",
      to: "+55 21 93456-7890",
      message: "Alerta de segurança: Nova tentativa de acesso detectada. Clique para confirmar.",
      sendStatus: "delivered",
      sendTimestamp: "2025-10-24 13:45:30",
      deliveryConfirmation: true,
      carrierInfo: "Claro"
    },
    {
      messageId: "MSG003",
      from: "+55 11 98765-4321",
      to: "+55 11 99876-5432",
      message: "Seu pacote está disponível para retirada. Confirme em: bit.ly/pkg2849",
      sendStatus: "sent",
      sendTimestamp: "2025-10-24 12:20:10",
      deliveryConfirmation: false,
      carrierInfo: "TIM"
    },
    {
      messageId: "MSG004",
      from: "+55 11 98765-4321",
      to: "+55 85 98234-1122",
      message: "Atualize seus dados cadastrais urgente. Acesse: portal.exemplo.com/atualizar",
      sendStatus: "failed",
      sendTimestamp: "2025-10-24 11:15:45",
      deliveryConfirmation: false,
      carrierInfo: "Oi"
    },
    {
      messageId: "MSG005",
      from: "+55 11 98765-4321",
      to: "+55 11 97654-3210",
      message: "Promoção especial! Ganhe 50% de desconto. Cadastre-se já!",
      sendStatus: "pending",
      sendTimestamp: "2025-10-24 10:30:00",
      deliveryConfirmation: false,
      carrierInfo: "Vivo"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMessage, setNewMessage] = useState({
    from: "+55 11 98765-4321",
    to: "",
    message: ""
  });

  const getStatusBadge = (status: string) => {
    const config = {
      pending: {
        icon: Clock,
        className: "bg-warning/20 text-warning",
        label: "Pendente"
      },
      sent: {
        icon: Send,
        className: "bg-primary/20 text-primary",
        label: "Enviado"
      },
      delivered: {
        icon: CheckCircle2,
        className: "bg-success/20 text-success",
        label: "Entregue"
      },
      failed: {
        icon: XCircle,
        className: "bg-destructive/20 text-destructive",
        label: "Falhou"
      }
    };

    const { icon: Icon, className, label } = config[status as keyof typeof config];

    return (
      <Badge className={`${className} flex items-center gap-1 w-fit`}>
        <Icon className="w-3 h-3" />
        {label}
      </Badge>
    );
  };

  const handleSendMessage = () => {
    const newSMS: SMSMessage = {
      messageId: `MSG${String(messages.length + 1).padStart(3, '0')}`,
      from: newMessage.from,
      to: newMessage.to,
      message: newMessage.message,
      sendStatus: "pending",
      sendTimestamp: new Date().toLocaleString('pt-BR'),
      deliveryConfirmation: false,
      carrierInfo: "Vivo"
    };

    setMessages([newSMS, ...messages]);
    setIsDialogOpen(false);
    setNewMessage({ ...newMessage, to: "", message: "" });

    setTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.messageId === newSMS.messageId
          ? { ...msg, sendStatus: "sent" }
          : msg
      ));
    }, 2000);

    setTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.messageId === newSMS.messageId
          ? { ...msg, sendStatus: "delivered", deliveryConfirmation: true }
          : msg
      ));
    }, 4000);
  };

  const totalMessages = messages.length;
  const deliveredMessages = messages.filter(m => m.sendStatus === "delivered").length;
  const failedMessages = messages.filter(m => m.sendStatus === "failed").length;
  const deliveryRate = ((deliveredMessages / totalMessages) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MessageSquare className="w-8 h-8" />
            SMS Gateway
          </h1>
          <p className="text-muted-foreground">
            Gerenciamento de mensagens SMS para campanhas
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Enviar SMS
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enviar Nova Mensagem SMS</DialogTitle>
              <DialogDescription>
                Configure e envie uma mensagem para sua campanha
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="from">De (Remetente)</Label>
                <Input
                  id="from"
                  placeholder="+55 11 98765-4321"
                  value={newMessage.from}
                  onChange={(e) => setNewMessage({ ...newMessage, from: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">Para (Destinatário)</Label>
                <Input
                  id="to"
                  placeholder="+55 11 91234-5678"
                  value={newMessage.to}
                  onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Digite a mensagem..."
                  rows={4}
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                  maxLength={160}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {newMessage.message.length}/160 caracteres
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleSendMessage} className="gap-2">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total de Mensagens
                </p>
                <p className="text-2xl font-bold">{totalMessages}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Entregues
                </p>
                <p className="text-2xl font-bold">{deliveredMessages}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-success opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Falharam
                </p>
                <p className="text-2xl font-bold">{failedMessages}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-destructive opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Taxa de Entrega
                </p>
                <p className="text-2xl font-bold">{deliveryRate}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Mensagens</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>De</TableHead>
                <TableHead>Para</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Enviado em</TableHead>
                <TableHead>Confirmação</TableHead>
                <TableHead>Operadora</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.messageId}>
                  <TableCell className="font-medium">{msg.messageId}</TableCell>
                  <TableCell className="text-sm">{msg.from}</TableCell>
                  <TableCell className="text-sm">{msg.to}</TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate text-sm">
                      {msg.message}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(msg.sendStatus)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {msg.sendTimestamp}
                  </TableCell>
                  <TableCell>
                    {msg.deliveryConfirmation ? (
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    ) : (
                      <XCircle className="w-4 h-4 text-muted-foreground opacity-30" />
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Signal className="w-3 h-3" />
                      <span className="text-sm">{msg.carrierInfo}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Carrier Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Distribuição por Operadora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Vivo", "Claro", "TIM", "Oi"].map((carrier) => {
                const count = messages.filter(m => m.carrierInfo === carrier).length;
                const percentage = ((count / totalMessages) * 100).toFixed(1);
                return (
                  <div key={carrier} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Signal className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{carrier}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-16 text-right">
                        {count} ({percentage}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Status das Mensagens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { status: "delivered", label: "Entregues", color: "bg-success" },
                { status: "sent", label: "Enviadas", color: "bg-primary" },
                { status: "pending", label: "Pendentes", color: "bg-warning" },
                { status: "failed", label: "Falharam", color: "bg-destructive" }
              ].map(({ status, label, color }) => {
                const count = messages.filter(m => m.sendStatus === status).length;
                const percentage = ((count / totalMessages) * 100).toFixed(1);
                return (
                  <div key={status} className="flex items-center justify-between">
                    <span className="font-medium">{label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className={`${color} h-2 rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-16 text-right">
                        {count} ({percentage}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SMSGateway;
