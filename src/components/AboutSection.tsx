import { Clock, Users, Truck, Award, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const milestones = [
    {
      year: "2013",
      title: "Início da Jornada",
      description: "Começamos com um Celta e um pequeno estoque de abraçadeiras e borrachas de escapamento",
      icon: Clock
    },
    {
      year: "2014",
      title: "Primeira Expansão",
      description: "Adquirimos um Fiat Doblô para atender melhor nossos clientes",
      icon: Truck
    },
    {
      year: "2017",
      title: "Crescimento Acelerado",
      description: "Aquisição da Renault Master zero km e expansão do estoque",
      icon: TrendingUp
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "11 anos de sucesso com 3 camionetes e ponto físico estabelecido",
      icon: Award
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Seriedade",
      description: "Compromisso sério com fornecedores e clientes"
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Cultura de relacionamento diferenciado e duradouro"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos de qualidade superior para o setor automotivo"
    },
    {
      icon: Truck,
      title: "Logística",
      description: "Atendimento porta a porta e ponto físico estratégico"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma jornada de 11 anos construindo relacionamentos sólidos e oferecendo produtos de qualidade para o setor automotivo
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <Card key={milestone.year} className="group hover:shadow-soft transition-all duration-300 bg-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Do Sonho à Realidade</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nossas atividades iniciaram em meados de 2013, quando começamos a trilhar o caminho que nos levaria ao que hoje é a LOJA DO BORRACHEIRO. De início era o sonho de um homem que sempre foi empreendedor, e que com recursos limitados, um automóvel Celta e um pequeno estoque de abraçadeiras e borrachas de escapamentos.
              </p>
              <p>
                Em menos de um ano aquele valente Celta não comportava mais o volume e nem o peso das mercadorias, levando à necessidade de um veículo com mais espaço. Foi quando houve a aquisição de um Fiat Doblô, facilitando o trabalho e aumentando nossa capacidade de atendimento.
              </p>
              <p>
                O crescimento continuou de forma surpreendente, levando à aquisição de uma Renault Master zero km em 2016. Hoje, completamos 11 anos de sucesso com um relacionamento diferenciado com fornecedores e clientes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/5 rounded-3xl p-8 shadow-soft">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
                  alt="LOJA DO BORRACHEIRO - Nossa história" 
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;