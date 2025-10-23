import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Básico",
    price: "R$ 29",
    period: "/mês",
    description: "Perfeito para iniciantes",
    icon: <Star className="w-5 h-5" />,
    features: [
      "Até 5 campanhas por mês",
      "Analytics básico",
      "Suporte por email",
      "Templates básicos",
      "1 usuário"
    ],
    popular: false,
    buttonText: "Começar",
    variant: "outline" as const
  },
  {
    name: "Profissional",
    price: "R$ 89",
    period: "/mês",
    description: "Para equipes em crescimento",
    icon: <Zap className="w-5 h-5" />,
    features: [
      "Até 50 campanhas por mês",
      "Analytics avançado",
      "Suporte prioritário",
      "Templates premium",
      "Até 5 usuários",
      "Automação de campanhas",
      "Relatórios personalizados"
    ],
    popular: true,
    buttonText: "Mais Popular",
    variant: "default" as const
  },
  {
    name: "Enterprise",
    price: "R$ 249",
    period: "/mês",
    description: "Para grandes empresas",
    icon: <Crown className="w-5 h-5" />,
    features: [
      "Campanhas ilimitadas",
      "Analytics enterprise",
      "Suporte 24/7",
      "Templates personalizados",
      "Usuários ilimitados",
      "API completa",
      "Integrações avançadas",
      "Gerente de conta dedicado"
    ],
    popular: false,
    buttonText: "Contatar Vendas",
    variant: "secondary" as const
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (planName: string) => {
    if (planName === "Enterprise") {
      // Simulate contact sales
      alert("Em breve entraremos em contato!");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Escolha o Plano Ideal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Potencialize suas campanhas com o Ocellaris. Escolha o plano que melhor se adequa às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative card-hover glass-effect transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-primary shadow-glow ring-2 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center space-y-4">
                <div className={`inline-flex p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.variant}
                  className={`w-full transition-all duration-300 hover:scale-105 ${
                    plan.popular ? 'button-primary' : 'hover:bg-primary/10'
                  }`}
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todos os planos incluem período de teste gratuito de 14 dias
          </p>
          <Button variant="outline" onClick={() => navigate("/login")}>
            Já tem uma conta? Faça login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;