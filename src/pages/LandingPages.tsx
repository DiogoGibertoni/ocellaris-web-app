import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  Plus,
  Eye,
  BarChart3,
  ExternalLink,
  Copy,
  Calendar,
  Activity,
  Trash2
} from "lucide-react";

interface LandingPage {
  pageId: string;
  url: string;
  templateId: string;
  status: "active" | "inactive" | "expired";
  accessCount: number;
  lastAccess: string;
  expirationDate: string;
}

const LandingPages = () => {
  const [pages, setPages] = useState<LandingPage[]>([
    {
      pageId: "LP001",
      url: "https://secure-bank-login.exemplo.com/auth",
      templateId: "TPL001",
      status: "active",
      accessCount: 342,
      lastAccess: "2025-10-24 14:32:15",
      expirationDate: "2025-11-24"
    },
    {
      pageId: "LP002",
      url: "https://corporate-email-verify.exemplo.com",
      templateId: "TPL003",
      status: "active",
      accessCount: 128,
      lastAccess: "2025-10-24 11:20:43",
      expirationDate: "2025-11-15"
    },
    {
      pageId: "LP003",
      url: "https://social-network-security.exemplo.com",
      templateId: "TPL005",
      status: "inactive",
      accessCount: 89,
      lastAccess: "2025-10-20 09:15:30",
      expirationDate: "2025-11-01"
    },
    {
      pageId: "LP004",
      url: "https://tech-support-portal.exemplo.com",
      templateId: "TPL002",
      status: "expired",
      accessCount: 456,
      lastAccess: "2025-10-10 16:45:22",
      expirationDate: "2025-10-22"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPage, setNewPage] = useState({
    url: "",
    templateId: "",
    expirationDate: ""
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-success/20 text-success",
      inactive: "bg-warning/20 text-warning",
      expired: "bg-destructive/20 text-destructive"
    };

    const labels = {
      active: "Ativa",
      inactive: "Inativa",
      expired: "Expirada"
    };

    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCreatePage = () => {
    const newLandingPage: LandingPage = {
      pageId: `LP${String(pages.length + 1).padStart(3, '0')}`,
      url: newPage.url,
      templateId: newPage.templateId,
      status: "active",
      accessCount: 0,
      lastAccess: "-",
      expirationDate: newPage.expirationDate
    };

    setPages([...pages, newLandingPage]);
    setIsDialogOpen(false);
    setNewPage({ url: "", templateId: "", expirationDate: "" });
  };

  const totalAccess = pages.reduce((sum, page) => sum + page.accessCount, 0);
  const activePages = pages.filter(p => p.status === "active").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Globe className="w-8 h-8" />
            Landing Pages Host
          </h1>
          <p className="text-muted-foreground">
            Gerenciamento de páginas de phishing simulado
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nova Landing Page
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Nova Landing Page</DialogTitle>
              <DialogDescription>
                Configure uma nova página para sua campanha de phishing
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="url">URL da Página</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/auth"
                  value={newPage.url}
                  onChange={(e) => setNewPage({ ...newPage, url: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <Select
                  value={newPage.templateId}
                  onValueChange={(value) => setNewPage({ ...newPage, templateId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TPL001">Login Bancário</SelectItem>
                    <SelectItem value="TPL002">Suporte Técnico</SelectItem>
                    <SelectItem value="TPL003">Email Corporativo</SelectItem>
                    <SelectItem value="TPL004">Portal Gov</SelectItem>
                    <SelectItem value="TPL005">Rede Social</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiration">Data de Expiração</Label>
                <Input
                  id="expiration"
                  type="date"
                  value={newPage.expirationDate}
                  onChange={(e) => setNewPage({ ...newPage, expirationDate: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleCreatePage}>
                Criar Página
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
                  Total de Páginas
                </p>
                <p className="text-2xl font-bold">{pages.length}</p>
              </div>
              <Globe className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Páginas Ativas
                </p>
                <p className="text-2xl font-bold">{activePages}</p>
              </div>
              <Activity className="w-8 h-8 text-success opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total de Acessos
                </p>
                <p className="text-2xl font-bold">{totalAccess}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Taxa Média Acesso
                </p>
                <p className="text-2xl font-bold">
                  {Math.round(totalAccess / pages.length)}
                </p>
              </div>
              <Eye className="w-8 h-8 text-warning opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Landing Pages Cadastradas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Acessos</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Expira em</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.pageId}>
                  <TableCell className="font-medium">{page.pageId}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 max-w-xs">
                      <span className="truncate text-sm">{page.url}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(page.url)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{page.templateId}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(page.status)}</TableCell>
                  <TableCell className="text-right font-semibold">
                    {page.accessCount}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {page.lastAccess}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-3 h-3" />
                      {page.expirationDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <BarChart3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-destructive" />
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

export default LandingPages;
