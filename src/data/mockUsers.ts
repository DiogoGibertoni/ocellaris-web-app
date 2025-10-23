import { User, Campaign, UserProfile } from "@/types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@techcorp.com.br",
    role: "Marketing Manager",
    company: "TechCorp Brasil",
    plan: "Profissional",
    status: "active",
    createdAt: "2024-01-15",
    campaigns: 12,
    lastAccess: "2024-01-20"
  },
  {
    id: "2", 
    name: "Carlos Mendes",
    email: "carlos@startup.io",
    role: "CEO",
    company: "Startup Inovadora",
    plan: "Básico",
    status: "active",
    createdAt: "2024-02-10",
    campaigns: 5,
    lastAccess: "2024-01-19"
  },
  {
    id: "3",
    name: "Maria Oliveira",
    email: "maria.oliveira@bigcorp.com",
    role: "Digital Marketing Director",
    company: "BigCorp International",
    plan: "Enterprise",
    status: "active",
    createdAt: "2023-11-20",
    campaigns: 45,
    lastAccess: "2024-01-20"
  },
  {
    id: "4",
    name: "João Santos",
    email: "joao@agencia.com.br",
    role: "Creative Director",
    company: "Agência Criativa",
    plan: "Profissional",
    status: "active",
    createdAt: "2024-01-05",
    campaigns: 8,
    lastAccess: "2024-01-18"
  },
  {
    id: "5",
    name: "Fernanda Costa",
    email: "fernanda@ecommerce.com.br",
    role: "Growth Hacker",
    company: "E-commerce Plus",
    plan: "Básico",
    status: "inactive",
    createdAt: "2024-03-01",
    campaigns: 3,
    lastAccess: "2024-01-10"
  },
  {
    id: "6",
    name: "Roberto Lima",
    email: "roberto@consultoria.com",
    role: "Marketing Consultant",
    company: "Consultoria Estratégica",
    plan: "Enterprise",
    status: "active",
    createdAt: "2023-09-15",
    campaigns: 67,
    lastAccess: "2024-01-20"
  }
];

export const mockCampaigns: Campaign[] = [
  // Ana Silva - TechCorp
  {
    id: "c1",
    name: "Lançamento Produto Tech Q1",
    description: "Campanha para lançamento do novo software SaaS",
    status: "active",
    budget: 15000,
    spent: 8500,
    clicks: 1250,
    impressions: 45000,
    createdAt: "2024-01-10",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    userId: "1",
    targetAudience: "Desenvolvedores e CTOs",
    platform: ["Google Ads", "LinkedIn"]
  },
  {
    id: "c2", 
    name: "Brand Awareness TechCorp",
    description: "Aumentar conhecimento da marca no mercado B2B",
    status: "active",
    budget: 25000,
    spent: 12000,
    clicks: 890,
    impressions: 78000,
    createdAt: "2024-01-05",
    startDate: "2024-01-08",
    endDate: "2024-03-08",
    userId: "1",
    targetAudience: "Empresas de tecnologia",
    platform: ["Facebook", "LinkedIn", "Google Display"]
  },

  // Carlos Mendes - Startup
  {
    id: "c3",
    name: "Captação de Leads Startup",
    description: "Gerar leads qualificados para o produto MVP",
    status: "active",
    budget: 5000,
    spent: 3200,
    clicks: 580,
    impressions: 25000,
    createdAt: "2024-02-12",
    startDate: "2024-02-15",
    endDate: "2024-03-15",
    userId: "2",
    targetAudience: "Pequenas empresas",
    platform: ["Facebook", "Google Ads"]
  },

  // Maria Oliveira - BigCorp
  {
    id: "c4",
    name: "Campanha Global Q1 2024",
    description: "Campanha internacional multi-canal para novo produto",
    status: "active",
    budget: 150000,
    spent: 89000,
    clicks: 15600,
    impressions: 890000,
    createdAt: "2023-12-15",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    userId: "3",
    targetAudience: "Mercado global B2B",
    platform: ["Google Ads", "LinkedIn", "Facebook", "Twitter"]
  },
  {
    id: "c5",
    name: "Retenção de Clientes Enterprise",
    description: "Campanha focada em upsell para clientes existentes",
    status: "completed",
    budget: 75000,
    spent: 71000,
    clicks: 8900,
    impressions: 340000,
    createdAt: "2023-11-01",
    startDate: "2023-11-15",
    endDate: "2023-12-31",
    userId: "3",
    targetAudience: "Clientes enterprise atuais",
    platform: ["Email", "LinkedIn", "Google Ads"]
  },

  // João Santos - Agência
  {
    id: "c6",
    name: "Campanha Criativa Cliente A",
    description: "Campanha criativa para cliente do varejo",
    status: "active",
    budget: 20000,
    spent: 14500,
    clicks: 2100,
    impressions: 67000,
    createdAt: "2024-01-08",
    startDate: "2024-01-12",
    endDate: "2024-02-12",
    userId: "4",
    targetAudience: "Consumidores jovens 18-35",
    platform: ["Instagram", "Facebook", "TikTok"]
  },

  // Fernanda Costa - E-commerce
  {
    id: "c7",
    name: "Black Friday E-commerce",
    description: "Campanha especial para Black Friday",
    status: "completed",
    budget: 8000,
    spent: 7800,
    clicks: 3200,
    impressions: 89000,
    createdAt: "2023-11-01",
    startDate: "2023-11-15",
    endDate: "2023-11-30",
    userId: "5",
    targetAudience: "Consumidores online",
    platform: ["Google Shopping", "Facebook", "Instagram"]
  },

  // Roberto Lima - Consultoria
  {
    id: "c8",
    name: "Thought Leadership B2B",
    description: "Posicionamento como especialista em marketing",
    status: "active",
    budget: 35000,
    spent: 28000,
    clicks: 1890,
    impressions: 125000,
    createdAt: "2023-12-01",
    startDate: "2023-12-15",
    endDate: "2024-03-15",
    userId: "6",
    targetAudience: "Executivos C-level",
    platform: ["LinkedIn", "Google Ads"]
  }
];

export const generateUserProfile = (userId: string): UserProfile => {
  const user = mockUsers.find(u => u.id === userId);
  const campaigns = mockCampaigns.filter(c => c.userId === userId);
  
  if (!user) {
    throw new Error("User not found");
  }

  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0);
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0);
  const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
  const totalImpressions = campaigns.reduce((sum, c) => sum + c.impressions, 0);
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  
  const topPerformingCampaign = campaigns
    .sort((a, b) => (b.clicks / Math.max(b.impressions, 1)) - (a.clicks / Math.max(a.impressions, 1)))
    [0]?.name;

  return {
    user,
    campaigns,
    metrics: {
      totalCampaigns: campaigns.length,
      activeCampaigns,
      totalBudget,
      totalSpent,
      avgCTR: parseFloat(avgCTR.toFixed(2)),
      topPerformingCampaign
    }
  };
};