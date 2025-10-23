export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
  company?: string;
  department?: string;
  plan: 'Básico' | 'Profissional' | 'Enterprise';
  status: 'active' | 'inactive';
  createdAt: string;
  campaigns?: number;
  lastAccess?: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  clicks: number;
  impressions: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  userId: string;
  targetAudience?: string;
  platform?: string[];
}

export interface UserProfile {
  user: User;
  campaigns: Campaign[];
  metrics: {
    totalCampaigns: number;
    activeCampaigns: number;
    totalBudget: number;
    totalSpent: number;
    avgCTR: number;
    topPerformingCampaign?: string;
  };
}