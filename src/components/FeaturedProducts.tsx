
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Alicate para Balanceamento - Corneta",
    image: "/lovable-uploads/galeria/ALICATE PARA BALANCEAMENTO - CORNETA.png",
    price: "R$ 89,90",
    oldPrice: "R$ 99,90",
    badge: "NOVO"
  },
  {
    id: 2,
    name: "Anel Centralizador 71,9 Amarelo - Fiat",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AMARELO - FIAT - R.png",
    price: "R$ 25,50",
    oldPrice: null,
    badge: null
  },
  {
    id: 3,
    name: "Anel Centralizador 71,9 Azul Escuro - GM",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AZUL ESCURO - GM - R.png",
    price: "R$ 25,50",
    oldPrice: null,
    badge: null
  },
  {
    id: 4,
    name: "Anel Centralizador 71,9 Laranja - Volkswagen",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 LARANJA - VOLKSWAGEM.png",
    price: "R$ 25,50",
    oldPrice: null,
    badge: null
  },
  {
    id: 5,
    name: "Anel Centralizador 71,9 Marrom - Renault",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 MARROM - RENAULT.png",
    price: "R$ 25,50",
    oldPrice: null,
    badge: null
  },
  {
    id: 6,
    name: "Assentador de Talão para Montagem de Pneu - Canhão",
    image: "/lovable-uploads/galeria/ASSENTADOR DE TALÃO PARA MONTAGEM DE PNEU - CANHÃO.png",
    price: "R$ 125,90",
    oldPrice: "R$ 139,90",
    badge: "OFERTA"
  },
  {
    id: 7,
    name: "Agulha de Reposição para Moto 3mm",
    image: "/lovable-uploads/galeria/Agulha de reposição para moto 3mm.png",
    price: "R$ 15,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 8,
    name: "Agulha 72mm com Cabo",
    image: "/lovable-uploads/galeria/Agulha_72mm_com_cabo.png",
    price: "R$ 18,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 9,
    name: "Base para Válvula Universal",
    image: "/lovable-uploads/galeria/BASE PARA VALVULA UNIVERSAL.png",
    price: "R$ 8,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 10,
    name: "Bico de Encher Pneu Duplo - Schweers com Retenção",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO - SCHWEERS COM RETENÇÃO.png",
    price: "R$ 45,90",
    oldPrice: "R$ 52,90",
    badge: "DESTAQUE"
  },
  {
    id: 11,
    name: "Bico de Encher Pneu Duplo 45º com Retenção",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO 45º C RETENCAO - SCHWEE.png",
    price: "R$ 48,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 12,
    name: "Bico de Encher Pneu Duplo Curto em Y",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO CURTO EM Y - 330.png",
    price: "R$ 42,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 13,
    name: "Borracha Vulcanite 1.5mm - 1kg",
    image: "/lovable-uploads/galeria/BORRACHA VULCANITE 1.5MM - 1KG VULCANITE.png",
    price: "R$ 89,90",
    oldPrice: "R$ 98,90",
    badge: "OFERTA"
  },
  {
    id: 14,
    name: "Borracha Vulk Rolo de 1kg - Vipal",
    image: "/lovable-uploads/galeria/BORRACHA VULK ROLO DE 1 KG - VIPAL.png",
    price: "R$ 92,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 15,
    name: "Calibrador 150 lbs - Has. Metal",
    image: "/lovable-uploads/galeria/CALIBRADOR 150 LBS - HAS. METAL - 7188C.png",
    price: "R$ 165,90",
    oldPrice: "R$ 179,90",
    badge: "NOVO"
  },
  {
    id: 16,
    name: "Calibrador 50 lbs",
    image: "/lovable-uploads/galeria/CALIBRADOR 50 LBS - 7750.png",
    price: "R$ 125,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 17,
    name: "Calibrador Eletrônico de Parede Premium",
    image: "/lovable-uploads/galeria/CALIBRADOR ELETRÔNICO DE PAREDE PREMIUM.png",
    price: "R$ 2.890,90",
    oldPrice: "R$ 3.199,90",
    badge: "DESTAQUE"
  },
  {
    id: 18,
    name: "Câmara de Ar Canello 2.50 x 17",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 2.50 X 17 - TR 4 CMH 17.png",
    price: "R$ 65,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 19,
    name: "Câmara de Ar Canello Bicicleta 26",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO BICICLETA 26 CE 26.png",
    price: "R$ 32,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 20,
    name: "Chave de Impacto Industrial Bremen",
    image: "/lovable-uploads/galeria/CHAVE DE IMPACTO INDUSTRIAL P AUTOS 1.2_ C. KIT DE SOQUETES - TORQUE 680NM pneumatica BREMEN.png",
    price: "R$ 1.599,90",
    oldPrice: "R$ 1.899,90",
    badge: "OFERTA"
  }
];

const FeaturedProducts = () => {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWhatsAppClick = (productName: string) => {
    const message = `Olá! Vim do site da LOJA DO BORRACHEIRO RS e gostaria de consultar o preço do produto: ${productName}`;
    const whatsappUrl = `https://wa.me/5551995048546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção especial de produtos com a melhor qualidade e preços competitivos
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group hover:shadow-soft transition-all duration-300 bg-card border-border/50">
                    <CardContent className="p-0">
                      {/* Product image */}
                      <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {product.badge && (
                          <Badge 
                            className={`absolute top-3 left-3 ${
                              product.badge === 'NOVO' ? 'bg-green-500' :
                              product.badge === 'OFERTA' ? 'bg-accent' :
                              'bg-primary'
                            }`}
                          >
                            {product.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Product info */}
                      <div className="p-4 space-y-3">
                        <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors min-h-[2.5rem]">
                          {product.name}
                        </h3>
                        
                        <div className="space-y-1">
                          {product.oldPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {product.oldPrice}
                            </p>
                          )}
                          <p className="text-lg font-bold text-primary">
                            {product.price}
                          </p>
                        </div>

                        <Button 
                          onClick={() => handleWhatsAppClick(product.name)}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          Consultar Preço
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            onClick={() => window.location.href = '/catalogo'}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
