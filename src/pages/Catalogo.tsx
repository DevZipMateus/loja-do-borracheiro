
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Alicate para Balanceamento - Corneta",
    image: "/lovable-uploads/galeria/ALICATE PARA BALANCEAMENTO - CORNETA.png"
  },
  {
    id: 2,
    name: "Anel Centralizador 71,9 Amarelo - Fiat",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AMARELO - FIAT - R.png"
  },
  {
    id: 3,
    name: "Anel Centralizador 71,9 Azul Escuro - GM",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AZUL ESCURO - GM - R.png"
  },
  {
    id: 4,
    name: "Anel Centralizador 71,9 Laranja - Volkswagen",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 LARANJA - VOLKSWAGEM.png"
  },
  {
    id: 5,
    name: "Anel Centralizador 71,9 Marrom - Renault",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 MARROM - RENAULT.png"
  },
  {
    id: 6,
    name: "Anel Centralizador Branco Peugeot",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR BRANCO PEUGEOT.png"
  },
  {
    id: 7,
    name: "Anel Centralizador Ford Verde",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR FORD VERDE.png"
  },
  {
    id: 8,
    name: "Anel Centralizador Preto Toyota",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR PRETO TOYOTA.png"
  },
  {
    id: 9,
    name: "Assentador de Talão para Montagem de Pneu - Canhão",
    image: "/lovable-uploads/galeria/ASSENTADOR DE TALÃO PARA MONTAGEM DE PNEU - CANHÃO.png"
  },
  {
    id: 10,
    name: "Agulha de Reposição para Moto 3mm",
    image: "/lovable-uploads/galeria/Agulha de reposição para moto 3mm.png"
  },
  {
    id: 11,
    name: "Agulha 72mm com Cabo",
    image: "/lovable-uploads/galeria/Agulha_72mm_com_cabo.png"
  },
  {
    id: 12,
    name: "Agulha de Reposição Caminhão 4mm",
    image: "/lovable-uploads/galeria/Agulha_de_reposicao_ caminhão 4mm.png"
  },
  {
    id: 13,
    name: "Agulha de Reposição Carro 4mm",
    image: "/lovable-uploads/galeria/Agulha_de_reposicao_ carro 4mm. png"
  },
  {
    id: 14,
    name: "Base para Válvula Universal",
    image: "/lovable-uploads/galeria/BASE PARA VALVULA UNIVERSAL.png"
  },
  {
    id: 15,
    name: "Bico de Encher Pneu Duplo - Schweers com Retenção",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO - SCHWEERS COM RETENÇÃO.png"
  },
  {
    id: 16,
    name: "Bico de Encher Pneu Duplo 45º com Retenção - Schweers",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO 45º C RETENCAO - SCHWEE.png"
  },
  {
    id: 17,
    name: "Bico de Encher Pneu Duplo Curto em Y",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO CURTO EM Y - 330.png"
  },
  {
    id: 18,
    name: "Bico de Encher Pneu Duplo Longo Reto Angular (em Y)",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO LONGO RETO ANGULAR ( EM Y ).png"
  },
  {
    id: 19,
    name: "Bico de Encher Pneu Macho - Válvula Simples - Tipo Bola",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU MACHO - VALVULA SIMPLES - TIPO BOLA.png"
  },
  {
    id: 20,
    name: "Bico de Encher Pneu Prendedor Haste Metal - Steula",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU PRENDEDOR HASTE METAL - STEULA.png"
  },
  {
    id: 21,
    name: "Bico de Encher Pneu Reto Longo - Schweers",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU RETO LONGO - SCHWEERS.png"
  },
  {
    id: 22,
    name: "Bico de Encher Pneu Tipo Engate com Retenção - Schweers Apito",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU TIPO ENGATE C RETENCAO - SCHW APITO.png"
  },
  {
    id: 23,
    name: "Bico de Encher Pneu Tipo Francês - Steula",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU TIPO FRANCES - STEULA.png"
  },
  {
    id: 24,
    name: "Bico de Sopro para Limpeza em Plástico com Bico e Válvula Metálica",
    image: "/lovable-uploads/galeria/BICO DE SOPRO P LIMPEZA EM PLÁSTICO C BICO E VALVULA METÁLICO.png"
  },
  {
    id: 25,
    name: "Bico Duplo para Encher Pneu Longo - Schweers 90°",
    image: "/lovable-uploads/galeria/BICO DUPLO PARA ENCHER PNEU LONGO - SCHWEERS 90°.png"
  },
  {
    id: 26,
    name: "Bico Pneumático 1850 Bremen em Alumínio 1/4",
    image: "/lovable-uploads/galeria/BICO PNEUMATICO 1850 BREMEN EM ALUMINIO 1 4.png"
  },
  {
    id: 27,
    name: "Borracha Vulcanite 1.5mm - 1kg",
    image: "/lovable-uploads/galeria/BORRACHA VULCANITE 1.5MM - 1KG VULCANITE.png"
  },
  {
    id: 28,
    name: "Borracha Vulk Rolo de 1kg - Vipal",
    image: "/lovable-uploads/galeria/BORRACHA VULK ROLO DE 1 KG - VIPAL.png"
  },
  {
    id: 29,
    name: "Borrachinha para Bico Duplo Modelo FVA",
    image: "/lovable-uploads/galeria/BORRACHINHA PARA BICO DUPLO MODELO FVA.png"
  },
  {
    id: 30,
    name: "Botão TK - Mafrisa",
    image: "/lovable-uploads/galeria/BOTAO TK - MAFRISA.png"
  },
  {
    id: 31,
    name: "Broca com Cabo de Metal Trançada 5x102mm Fina",
    image: "/lovable-uploads/galeria/BROCA COM CABO DE METAL TRANÇADA 5X102MM FINA.png"
  },
  {
    id: 32,
    name: "Cabo Alavanca da Chave de Roda 1200mm - Kraucher",
    image: "/lovable-uploads/galeria/CABO ALAVANCA DA CHAVE DE RODA 1200 MM - KRAUCHER.png"
  },
  {
    id: 33,
    name: "Calço D20 Fino - 1.00mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALCO D20 FINO - 1.00 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 34,
    name: "Calço D40 Fino - 1.50mm - Pacote com 25 un",
    image: "/lovable-uploads/galeria/CALCO D40 FINO - 1.50 MM - PACOTE COM 25 UN.png"
  },
  {
    id: 35,
    name: "Calibrador 150 lbs - Has. Metal",
    image: "/lovable-uploads/galeria/CALIBRADOR 150 LBS - HAS. METAL - 7188C.png"
  },
  {
    id: 36,
    name: "Calibrador 50 lbs",
    image: "/lovable-uploads/galeria/CALIBRADOR 50 LBS - 7750.png"
  },
  {
    id: 37,
    name: "Calibrador de Água para Trator 45L - BS",
    image: "/lovable-uploads/galeria/CALIBRADOR DE AGUA PARA TRATOR 45L - BS - 9350.png"
  },
  {
    id: 38,
    name: "Calibrador de Ar com Manômetro Bremen 0 a 170PSI",
    image: "/lovable-uploads/galeria/CALIBRADOR DE AR COM MANÔMETRO BREMEN 0 A 170PSI.png"
  },
  {
    id: 39,
    name: "Calibrador Eletrônico de Parede Premium",
    image: "/lovable-uploads/galeria/CALIBRADOR ELETRÔNICO DE PAREDE PREMIUM.png"
  },
  {
    id: 40,
    name: "Calço D20 Médio 1.50 - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO D20 MÉDIO 1.50 PCT 50 UN.png"
  },
  {
    id: 41,
    name: "Calço D40 Extra Fino - 0.75mm - Com 25 uni",
    image: "/lovable-uploads/galeria/CALÇO D40 EXTRA FINO - 0,75MM - COM 25UNI.png"
  },
  {
    id: 42,
    name: "Calço D40 Médio - 3.00mm - Pacote com 25 un",
    image: "/lovable-uploads/galeria/CALÇO D40 MÉDIO - 3.00MM - PACOTE COM 25 UN.png"
  },
  {
    id: 43,
    name: "Calço Opala Grosso - 3.00mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO OPALA GROSSO - 3.00 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 44,
    name: "Calço Opala Médio - 1.50mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO OPALA MÉDIO - 1.50 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 45,
    name: "Câmara Canello Diant. CMC 19 Cross Reforçada",
    image: "/lovable-uploads/galeria/CAMARA CANELLO DIANT. CMC 19 CROSS REFORÇADA.png"
  },
  {
    id: 46,
    name: "Câmara Cargo 14 de Biz",
    image: "/lovable-uploads/galeria/CAMARA CARGO 14 DE BIZ.png"
  },
  {
    id: 47,
    name: "Câmara de Ar 700 x 12 - Flexen",
    image: "/lovable-uploads/galeria/CAMARA DE AR 700 X 12- FLEXEN.png"
  }
];

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira nossa linha completa de produtos para borracharia
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-soft transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-0">
                  {/* Product image */}
                  <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product info */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="sm"
                    >
                      Consultar Preço
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
