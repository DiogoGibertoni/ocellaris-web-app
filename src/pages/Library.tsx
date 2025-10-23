import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Search, 
  Plus, 
  Download,
  Star,
  Eye,
  Copy,
  Globe,
  Mail,
  Smartphone,
  FileText,
  Image,
  Video
} from "lucide-react";

const Library = () => {
  const emailTemplates = [
    {
      id: 1,
      name: "Verificação Bancária Premium",
      category: "Financeiro",
      difficulty: "Alto",
      description: "Template sofisticado simulando notificação de segurança bancária",
      rating: 4.8,
      downloads: 234,
      preview: "/api/placeholder/300/200",
      language: "PT-BR",
      lastUpdated: "2024-01-20"
    },
    {
      id: 2,
      name: "Suporte Microsoft",
      category: "Técnico",
      difficulty: "Médio",
      description: "E-mail falso do suporte da Microsoft solicitando verificação",
      rating: 4.5,
      downloads: 189,
      preview: "/api/placeholder/300/200",
      language: "PT-BR",
      lastUpdated: "2024-01-18"
    },
    {
      id: 3,
      name: "Atualização de Política",
      category: "Corporativo",
      difficulty: "Baixo",
      description: "Comunicado interno sobre atualização de políticas da empresa",
      rating: 4.2,
      downloads: 156,
      preview: "/api/placeholder/300/200",
      language: "PT-BR",
      lastUpdated: "2024-01-15"
    }
  ];

  const landingPages = [
    {
      id: 1,
      name: "Página de Login Bancário",
      category: "Financeiro",
      difficulty: "Alto",
      description: "Réplica convincente de página de login de banco",
      rating: 4.9,
      downloads: 167,
      preview: "/api/placeholder/300/200",
      language: "PT-BR",
      lastUpdated: "2024-01-22"
    },
    {
      id: 2,
      name: "Portal Corporativo",
      category: "Corporativo",
      difficulty: "Médio",
      description: "Página de login de sistema corporativo interno",
      rating: 4.4,
      downloads: 98,
      preview: "/api/placeholder/300/200",
      language: "PT-BR",
      lastUpdated: "2024-01-19"
    }
  ];

  const assets = [
    {
      id: 1,
      name: "Logos Bancários",
      type: "image",
      description: "Coleção de logos de bancos brasileiros",
      downloads: 445,
      size: "2.3 MB",
      format: "PNG/SVG"
    },
    {
      id: 2,
      name: "Ícones de Segurança",
      type: "image",
      description: "Ícones relacionados à segurança e autenticação",
      downloads: 234,
      size: "1.8 MB",
      format: "PNG/ICO"
    },
    {
      id: 3,
      name: "Vídeo Treinamento",
      type: "video",
      description: "Vídeo educativo sobre identificação de phishing",
      downloads: 89,
      size: "45 MB",
      format: "MP4"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Baixo":
        return "bg-success/20 text-success";
      case "Médio":
        return "bg-warning/20 text-warning";
      case "Alto":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "image":
        return Image;
      case "video":
        return Video;
      default:
        return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Biblioteca de Templates</h1>
          <p className="text-muted-foreground">Explore e baixe recursos para suas campanhas</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Contribuir
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Pesquisar na biblioteca..." className="pl-10" />
            </div>
            <Button variant="outline">Filtros Avançados</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="emails" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="emails" className="gap-2">
            <Mail className="w-4 h-4" />
            E-mails
          </TabsTrigger>
          <TabsTrigger value="landing" className="gap-2">
            <Globe className="w-4 h-4" />
            Landing Pages
          </TabsTrigger>
          <TabsTrigger value="sms" className="gap-2">
            <Smartphone className="w-4 h-4" />
            SMS
          </TabsTrigger>
          <TabsTrigger value="assets" className="gap-2">
            <FileText className="w-4 h-4" />
            Assets
          </TabsTrigger>
        </TabsList>

        {/* Email Templates */}
        <TabsContent value="emails" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={template.preview} 
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Eye className="w-3 h-3" />
                      Visualizar
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium line-clamp-1">{template.name}</h4>
                    <Badge className={getDifficultyColor(template.difficulty)}>
                      {template.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-2">
                      <Download className="w-3 h-3" />
                      Baixar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Landing Pages */}
        <TabsContent value="landing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingPages.map((page) => (
              <Card key={page.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={page.preview} 
                    alt={page.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Eye className="w-3 h-3" />
                      Visualizar
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium line-clamp-1">{page.name}</h4>
                  <Badge className={getDifficultyColor(page.difficulty)}>
                    {page.difficulty}
                  </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {page.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span>{page.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{page.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gap-2">
                      <Download className="w-3 h-3" />
                      Baixar
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* SMS Templates */}
        <TabsContent value="sms" className="space-y-6">
          <div className="text-center py-12">
            <Smartphone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Templates SMS em breve</h3>
            <p className="text-muted-foreground">Estamos trabalhando para adicionar templates de SMS à biblioteca.</p>
          </div>
        </TabsContent>

        {/* Assets */}
        <TabsContent value="assets" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset) => {
              const AssetIcon = getAssetIcon(asset.type);
              return (
                <Card key={asset.id} className="transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <AssetIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{asset.name}</h4>
                        <p className="text-sm text-muted-foreground">{asset.type.toUpperCase()}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {asset.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Downloads</p>
                        <p className="font-medium">{asset.downloads}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Tamanho</p>
                        <p className="font-medium">{asset.size}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Formato</p>
                        <p className="font-medium">{asset.format}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full gap-2">
                      <Download className="w-4 h-4" />
                      Baixar Asset
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;