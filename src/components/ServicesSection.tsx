import { Wrench, Truck, Users, Clock, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Produtos para Borracharia",
      description: "Ampla linha de produtos especializados para borracharias e oficinas automotivas",
      features: [
        "Abraçadeiras e borrachas de escapamento",
        "Câmaras de ar de diversas medidas", 
        "Acessórios para reparos",
        "Ferramentas especializadas"
      ]
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Relacionamento próximo e atendimento diferenciado para cada cliente",
      features: [
        "Vendedores especializados",
        "Atendimento porta a porta",
        "Suporte técnico qualificado",
        "Relacionamento duradouro"
      ]
    },
    {
      icon: Truck,
      title: "Entrega Estratégica",
      description: "Logística eficiente com frota própria e rotas pré-definidas",
      features: [
        "3 camionetes em operação",
        "Rotas pré-definidas",
        "Entrega porta a porta",
        "Cobertura regional"
      ]
    },
    {
      icon: Clock,
      title: "Suporte Contínuo",
      description: "Apoio completo aos vendedores e clientes com estrutura consolidada",
      features: [
        "Balcão de atendimento físico",
        "Suporte aos vendedores",
        "Estoque sempre disponível",
        "Atendimento ágil"
      ]
    }
  ];

  const differentials = [
    {
      icon: Star,
      title: "11 Anos de Experiência",
      description: "Mais de uma década servindo o setor automotivo com excelência"
    },
    {
      icon: CheckCircle,
      title: "Relacionamento Sólido",
      description: "Cultura de seriedade e responsabilidade com fornecedores e clientes"
    },
    {
      icon: Truck,
      title: "Logística Própria",
      description: "Frota própria garantindo entregas rápidas e seguras"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para borracharias e auto centers com produtos de qualidade e atendimento especializado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {differentials.map((differential, index) => {
              const Icon = differential.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary p-4 rounded-full group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{differential.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
            >
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;