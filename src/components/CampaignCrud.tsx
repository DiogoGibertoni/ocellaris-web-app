import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Campaign } from "@/types";
import { mockCampaigns } from "@/data/mockUsers";
import { toast } from "sonner";

const CampaignCrud = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    budget: "",
    startDate: "",
    endDate: "",
    targetAudience: "",
    platform: [] as string[]
  });

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      budget: "",
      startDate: "",
      endDate: "",
      targetAudience: "",
      platform: []
    });
    setEditingCampaign(null);
  };

  const handleCreate = () => {
    setIsDialogOpen(true);
    resetForm();
  };

  const handleEdit = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setFormData({
      name: campaign.name,
      description: campaign.description,
      budget: campaign.budget.toString(),
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      targetAudience: campaign.targetAudience || "",
      platform: campaign.platform || []
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
    toast.success("Campanha excluída com sucesso!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCampaign) {
      // Update existing campaign
      setCampaigns(campaigns.map(c => 
        c.id === editingCampaign.id 
          ? {
              ...c,
              name: formData.name,
              description: formData.description,
              budget: parseFloat(formData.budget),
              startDate: formData.startDate,
              endDate: formData.endDate,
              targetAudience: formData.targetAudience,
              platform: formData.platform
            }
          : c
      ));
      toast.success("Campanha atualizada com sucesso!");
    } else {
      // Create new campaign
      const newCampaign: Campaign = {
        id: `c${Date.now()}`,
        name: formData.name,
        description: formData.description,
        status: "draft",
        budget: parseFloat(formData.budget),
        spent: 0,
        clicks: 0,
        impressions: 0,
        createdAt: new Date().toISOString().split('T')[0],
        startDate: formData.startDate,
        endDate: formData.endDate,
        userId: "1", // Mock user ID
        targetAudience: formData.targetAudience,
        platform: formData.platform
      };
      setCampaigns([...campaigns, newCampaign]);
      toast.success("Campanha criada com sucesso!");
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'completed': return 'bg-secondary text-secondary-foreground';
      case 'paused': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Gerenciar Campanhas</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleCreate} className="button-primary">
              <Plus className="w-4 h-4 mr-2" />
              Nova Campanha
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCampaign ? "Editar Campanha" : "Nova Campanha"}
              </DialogTitle>
              <DialogDescription>
                {editingCampaign ? "Edite os dados da campanha" : "Crie uma nova campanha de marketing"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Campanha</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (R$)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Data de Início</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">Data de Fim</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Público-Alvo</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  placeholder="Ex: Empresários de 25-45 anos"
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="button-primary">
                  {editingCampaign ? "Atualizar" : "Criar"} Campanha
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="card-hover glass-effect">
        <CardHeader>
          <CardTitle>Lista de Campanhas</CardTitle>
          <CardDescription>
            Gerencie todas as suas campanhas de marketing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Gasto</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm text-muted-foreground">{campaign.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status === 'active' ? 'Ativa' : 
                       campaign.status === 'completed' ? 'Concluída' : 
                       campaign.status === 'paused' ? 'Pausada' : 'Rascunho'}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatCurrency(campaign.budget)}</TableCell>
                  <TableCell>{formatCurrency(campaign.spent)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{campaign.clicks.toLocaleString()} cliques</p>
                      <p className="text-muted-foreground">
                        {campaign.impressions.toLocaleString()} impressões
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(campaign)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => handleDelete(campaign.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignCrud;