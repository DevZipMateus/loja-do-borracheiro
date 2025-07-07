import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Câmara De Ar 12.4 x 24 - TR 218 - FVA FV174",
    image: "/placeholder-product-1.jpg",
    price: "R$ 89,90",
    oldPrice: "R$ 99,90",
    badge: "NOVO"
  },
  {
    id: 2,
    name: "Câmara de ar GR 13/14 FVA FV1374",
    image: "/placeholder-product-2.jpg", 
    price: "R$ 45,50",
    oldPrice: "R$ 52,90",
    badge: "OFERTA"
  },
  {
    id: 3,
    name: "Adesivo Pastilhado De Ferro 10/05 E10055",
    image: "/placeholder-product-3.jpg",
    price: "R$ 12,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 4,
    name: "Chave De Impacto 1 FVA 450 KG - Força FV450",
    image: "/placeholder-product-4.jpg",
    price: "R$ 289,90",
    oldPrice: "R$ 329,90",
    badge: "DESTAQUE"
  }
];

const FeaturedProducts = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-0">
                {/* Product image */}
                <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/20">FVA</div>
                  </div>
                  
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
                  <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
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
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Ver Produto
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;