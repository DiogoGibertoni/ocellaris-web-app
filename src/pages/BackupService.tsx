import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Cloud,
  Plus,
  Download,
  Upload,
  Database,
  HardDrive,
  Shield,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  Archive,
  Lock,
  AlertTriangle,
  Calendar,
  Trash2,
  RefreshCw
} from "lucide-react";

interface Backup {
  backup_id: string;
  backup_type: "Full" | "Incremental" | "Differential";
  storage_location: string;
  data_size_mb: number;
  compression_type: "gzip" | "bzip2" | "xz" | "none";
  encryption_enabled: boolean;
  status: "InProgress" | "Completed" | "Failed" | "Restoring";
  retention_days: number;
  checksum: string;
  created_at: string;
  completed_at: string;
}

const BackupService = () => {
  const [backups, setBackups] = useState<Backup[]>([
    {
      backup_id: "BKP-2025-001",
      backup_type: "Full",
      storage_location: "s3://ocellaris-backups/full/2025-10-24-001.tar.gz",
      data_size_mb: 24567.89,
      compression_type: "gzip",
      encryption_enabled: true,
      status: "Completed",
      retention_days: 90,
      checksum: "a3f5d8e9c7b2f4a6e1d9c8b7a6f5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c0b9a8f7",
      created_at: "2025-10-24 02:00:00",
      completed_at: "2025-10-24 03:45:23"
    },
    {
      backup_id: "BKP-2025-002",
      backup_type: "Incremental",
      storage_location: "s3://ocellaris-backups/incremental/2025-10-24-002.tar.gz",
      data_size_mb: 1234.56,
      compression_type: "bzip2",
      encryption_enabled: true,
      status: "Completed",
      retention_days: 30,
      checksum: "b4e6d9f0c8d3f5a7e2d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8",
      created_at: "2025-10-24 14:00:00",
      completed_at: "2025-10-24 14:15:42"
    },
    {
      backup_id: "BKP-2025-003",
      backup_type: "Differential",
      storage_location: "azure://ocellaris-backups/differential/2025-10-24-003.tar.xz",
      data_size_mb: 5678.12,
      compression_type: "xz",
      encryption_enabled: true,
      status: "InProgress",
      retention_days: 60,
      checksum: "",
      created_at: "2025-10-24 18:00:00",
      completed_at: ""
    },
    {
      backup_id: "BKP-2025-004",
      backup_type: "Full",
      storage_location: "gcp://ocellaris-backups/full/2025-10-20-004.tar.gz",
      data_size_mb: 23456.78,
      compression_type: "gzip",
      encryption_enabled: true,
      status: "Completed",
      retention_days: 90,
      checksum: "c5f7e0a1d9e4f6b8f3e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9",
      created_at: "2025-10-20 02:00:00",
      completed_at: "2025-10-20 03:32:15"
    },
    {
      backup_id: "BKP-2025-005",
      backup_type: "Incremental",
      storage_location: "s3://ocellaris-backups/incremental/2025-10-18-005.tar.gz",
      data_size_mb: 987.65,
      compression_type: "gzip",
      encryption_enabled: false,
      status: "Failed",
      retention_days: 30,
      checksum: "",
      created_at: "2025-10-18 10:00:00",
      completed_at: "2025-10-18 10:05:30"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newBackup, setNewBackup] = useState({
    backup_type: "",
    storage_provider: "",
    compression_type: "",
    retention_days: "90"
  });

  const getStatusConfig = (status: string) => {
    const config = {
      InProgress: {
        icon: Loader2,
        className: "bg-primary/20 text-primary animate-spin",
        label: "Em Progresso"
      },
      Completed: {
        icon: CheckCircle2,
        className: "bg-success/20 text-success",
        label: "Concluído"
      },
      Failed: {
        icon: XCircle,
        className: "bg-destructive/20 text-destructive",
        label: "Falhou"
      },
      Restoring: {
        icon: RefreshCw,
        className: "bg-warning/20 text-warning animate-spin",
        label: "Restaurando"
      }
    };

    return config[status as keyof typeof config];
  };

  const getBackupTypeColor = (type: string) => {
    const colors = {
      Full: "bg-primary/20 text-primary",
      Incremental: "bg-accent/20 text-accent",
      Differential: "bg-warning/20 text-warning"
    };
    return colors[type as keyof typeof colors];
  };

  const getStorageProvider = (location: string) => {
    if (location.startsWith("s3://")) return "AWS S3";
    if (location.startsWith("azure://")) return "Azure Blob";
    if (location.startsWith("gcp://")) return "Google Cloud";
    return "Unknown";
  };

  const formatSize = (mb: number) => {
    if (mb >= 1024) {
      return `${(mb / 1024).toFixed(2)} GB`;
    }
    return `${mb.toFixed(2)} MB`;
  };

  const handleCreateBackup = () => {
    const providers = {
      "aws": "s3://ocellaris-backups",
      "azure": "azure://ocellaris-backups",
      "gcp": "gcp://ocellaris-backups"
    };

    const provider = providers[newBackup.storage_provider as keyof typeof providers];
    const timestamp = new Date().toISOString().split('T')[0];
    const backupNum = String(backups.length + 1).padStart(3, '0');

    const newBackupData: Backup = {
      backup_id: `BKP-2025-${backupNum}`,
      backup_type: newBackup.backup_type as any,
      storage_location: `${provider}/${newBackup.backup_type.toLowerCase()}/${timestamp}-${backupNum}.tar.gz`,
      data_size_mb: 0,
      compression_type: newBackup.compression_type as any,
      encryption_enabled: true,
      status: "InProgress",
      retention_days: parseInt(newBackup.retention_days),
      checksum: "",
      created_at: new Date().toLocaleString('pt-BR'),
      completed_at: ""
    };

    setBackups([newBackupData, ...backups]);
    setIsDialogOpen(false);
    setNewBackup({
      backup_type: "",
      storage_provider: "",
      compression_type: "",
      retention_days: "90"
    });

    setTimeout(() => {
      setBackups(prev => prev.map(b =>
        b.backup_id === newBackupData.backup_id
          ? {
              ...b,
              status: "Completed",
              data_size_mb: Math.random() * 10000 + 1000,
              checksum: "d6g8f1b2e0f5g7c9f4f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0",
              completed_at: new Date().toLocaleString('pt-BR')
            }
          : b
      ));
    }, 5000);
  };

  const totalBackups = backups.length;
  const completedBackups = backups.filter(b => b.status === "Completed").length;
  const totalSize = backups.reduce((sum, b) => sum + b.data_size_mb, 0);
  const successRate = ((completedBackups / totalBackups) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Cloud className="w-8 h-8" />
            Backup Service
          </h1>
          <p className="text-muted-foreground">
            Gerenciamento de backups em nuvem com criptografia AES-256
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Backup
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Backup</DialogTitle>
              <DialogDescription>
                Configure um novo backup para armazenamento seguro em nuvem
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="backup_type">Tipo de Backup</Label>
                <Select
                  value={newBackup.backup_type}
                  onValueChange={(value) => setNewBackup({ ...newBackup, backup_type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full">Full (Completo)</SelectItem>
                    <SelectItem value="Incremental">Incremental</SelectItem>
                    <SelectItem value="Differential">Differential (Diferencial)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage_provider">Provedor de Armazenamento</Label>
                <Select
                  value={newBackup.storage_provider}
                  onValueChange={(value) => setNewBackup({ ...newBackup, storage_provider: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o provedor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aws">AWS S3</SelectItem>
                    <SelectItem value="azure">Azure Blob Storage</SelectItem>
                    <SelectItem value="gcp">Google Cloud Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="compression_type">Tipo de Compressão</Label>
                <Select
                  value={newBackup.compression_type}
                  onValueChange={(value) => setNewBackup({ ...newBackup, compression_type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a compressão" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gzip">Gzip (Padrão)</SelectItem>
                    <SelectItem value="bzip2">Bzip2 (Alta compressão)</SelectItem>
                    <SelectItem value="xz">XZ (Máxima compressão)</SelectItem>
                    <SelectItem value="none">Sem compressão</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="retention_days">Retenção (dias)</Label>
                <Select
                  value={newBackup.retention_days}
                  onValueChange={(value) => setNewBackup({ ...newBackup, retention_days: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a retenção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 dias</SelectItem>
                    <SelectItem value="60">60 dias</SelectItem>
                    <SelectItem value="90">90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Lock className="w-4 h-4 text-success" />
                <span className="text-sm">Criptografia AES-256 ativada automaticamente</span>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleCreateBackup} className="gap-2">
                <Upload className="w-4 h-4" />
                Iniciar Backup
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
                  Total de Backups
                </p>
                <p className="text-2xl font-bold">{totalBackups}</p>
              </div>
              <Database className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Concluídos
                </p>
                <p className="text-2xl font-bold">{completedBackups}</p>
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
                  Armazenamento Total
                </p>
                <p className="text-2xl font-bold">{formatSize(totalSize)}</p>
              </div>
              <HardDrive className="w-8 h-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Taxa de Sucesso
                </p>
                <p className="text-2xl font-bold">{successRate}%</p>
              </div>
              <Shield className="w-8 h-8 text-warning opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Backups Progress */}
      {backups.some(b => b.status === "InProgress") && (
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Loader2 className="w-5 h-5 animate-spin" />
              Backups em Progresso
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {backups
              .filter(b => b.status === "InProgress")
              .map((backup) => (
                <div key={backup.backup_id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{backup.backup_id}</span>
                    <Badge className={getBackupTypeColor(backup.backup_type)}>
                      {backup.backup_type}
                    </Badge>
                  </div>
                  <Progress value={45} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Compressão: {backup.compression_type} | Destino: {getStorageProvider(backup.storage_location)}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
      )}

      {/* Backups Table */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Backups</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead className="text-right">Tamanho</TableHead>
                <TableHead>Compressão</TableHead>
                <TableHead>Criptografia</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Retenção</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Concluído em</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {backups.map((backup) => {
                const statusConfig = getStatusConfig(backup.status);
                const StatusIcon = statusConfig.icon;

                return (
                  <TableRow key={backup.backup_id}>
                    <TableCell className="font-medium">{backup.backup_id}</TableCell>
                    <TableCell>
                      <Badge className={getBackupTypeColor(backup.backup_type)}>
                        {backup.backup_type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate text-sm">
                        <div className="flex items-center gap-1">
                          <Cloud className="w-3 h-3" />
                          <span className="font-medium">{getStorageProvider(backup.storage_location)}</span>
                        </div>
                        <span className="text-xs text-muted-foreground truncate block">
                          {backup.storage_location}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {backup.data_size_mb > 0 ? formatSize(backup.data_size_mb) : "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Archive className="w-3 h-3" />
                        <span className="text-sm">{backup.compression_type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {backup.encryption_enabled ? (
                        <div className="flex items-center gap-1 text-success">
                          <Lock className="w-3 h-3" />
                          <span className="text-xs">AES-256</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-destructive">
                          <AlertTriangle className="w-3 h-3" />
                          <span className="text-xs">Não</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={`${statusConfig.className} flex items-center gap-1 w-fit`}>
                        <StatusIcon className="w-3 h-3" />
                        {statusConfig.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="text-sm">{backup.retention_days}d</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {backup.created_at}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {backup.completed_at || "-"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled={backup.status !== "Completed"}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled={backup.status !== "Completed"}
                        >
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Storage Distribution & Backup Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="w-5 h-5" />
              Distribuição por Provedor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["AWS S3", "Azure Blob", "Google Cloud"].map((provider) => {
                const count = backups.filter(b => getStorageProvider(b.storage_location) === provider).length;
                const percentage = ((count / totalBackups) * 100).toFixed(1);
                return (
                  <div key={provider} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{provider}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-20 text-right">
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
              <Archive className="w-5 h-5" />
              Tipos de Backup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Full", color: "bg-primary" },
                { type: "Incremental", color: "bg-accent" },
                { type: "Differential", color: "bg-warning" }
              ].map(({ type, color }) => {
                const count = backups.filter(b => b.backup_type === type).length;
                const percentage = ((count / totalBackups) * 100).toFixed(1);
                return (
                  <div key={type} className="flex items-center justify-between">
                    <span className="font-medium">{type}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className={`${color} h-2 rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-20 text-right">
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

      {/* Checksum Info Card */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4" />
            Informações de Segurança
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <Lock className="w-3 h-3 inline mr-1" />
            Todos os backups são criptografados com AES-256
          </p>
          <p>
            <Shield className="w-3 h-3 inline mr-1" />
            Checksums SHA-256 garantem integridade dos dados
          </p>
          <p>
            <Cloud className="w-3 h-3 inline mr-1" />
            Redundância geográfica em múltiplas regiões
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupService;
