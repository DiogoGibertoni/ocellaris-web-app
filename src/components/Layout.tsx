import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Mail,
  Settings,
  Users,
  FileText,
  History,
  BookOpen,
  Shield,
  Plus,
  Home,
  Fish,
  CreditCard,
  Globe,
  MessageSquare,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ocellarisLogo from "@/assets/ocellaris-logo.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/campaigns", icon: Mail, label: "Campanhas" },
    { path: "/create-campaign", icon: Plus, label: "Nova Campanha" },
    { path: "/templates", icon: FileText, label: "Templates" },
    { path: "/landing-pages", icon: Globe, label: "Landing Pages" },
    { path: "/sms-gateway", icon: MessageSquare, label: "SMS Gateway" },
    { path: "/backup-service", icon: Database, label: "Backup Service" },
    { path: "/analytics", icon: BarChart3, label: "Relatórios" },
    { path: "/users", icon: Users, label: "Usuários" },
    { path: "/user-profiles", icon: Users, label: "Perfis de Usuários" },
    { path: "/pricing", icon: CreditCard, label: "Planos" },
    { path: "/history", icon: History, label: "Histórico" },
    { path: "/library", icon: BookOpen, label: "Biblioteca" },
    { path: "/profile", icon: Shield, label: "Perfil" },
    { path: "/settings", icon: Settings, label: "Configurações" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b glass-effect sticky top-0 z-50 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={ocellarisLogo} 
              alt="Ocellaris Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Ocellaris
            </h1>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-80px)] glass-effect border-r p-4 fade-in">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 transition-all duration-200 hover:scale-105 ${
                      isActive ? "button-primary shadow-lg" : "hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 slide-up">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;