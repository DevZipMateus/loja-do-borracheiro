
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const categories = [
  "Todos",
  "Câmaras de Ar",
  "Abraçadeiras",
  "Calibradores",
  "Ferramentas",
  "Acessórios"
];

const products = [
  {
    id: 1,
    name: "Abraçadeira Metálica Regulável",
    category: "Abraçadeiras",
    image: "/lovable-uploads/3e0cc181-0ac9-41a2-a562-d72f089b2895.png",
    price: "R$ 15,90",
    oldPrice: "R$ 18,90",
    badge: "NOVO"
  },
  {
    id: 2,
    name: "Câmara De Ar 12.4 x 24 - TR 218 - FVA",
    category: "Câmaras de Ar",
    image: "/placeholder-product-1.jpg",
    price: "R$ 89,90",
    oldPrice: "R$ 99,90",
    badge: "OFERTA"
  },
  {
    id: 3,
    name: "Câmara de ar GR 13/14 FVA",
    category: "Câmaras de Ar",
    image: "/placeholder-product-2.jpg", 
    price: "R$ 45,50",
    oldPrice: "R$ 52,90",
    badge: "DESTAQUE"
  },
  {
    id: 4,
    name: "Calibrador 150 LBS - HAS. Metal",
    category: "Calibradores",
    image: "/placeholder-product-3.jpg",
    price: "R$ 89,90",
    oldPrice: null,
    badge: null
  },
  {
    id: 5,
    name: "Bico de Encher Pneu Duplo - Schweers",
    category: "Acessórios",
    image: "/placeholder-product-4.jpg",
    price: "R$ 32,90",
    oldPrice: "R$ 38,90",
    badge: null
  },
  {
    id: 6,
    name: "Chave de Impacto Industrial",
    category: "Ferramentas",
    image: "/placeholder-product-5.jpg",
    price: "R$ 245,90",
    oldPrice: null,
    badge: "NOVO"
  }
];

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Explore nossa ampla linha de produtos para borracharia e oficinas mecânicas
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== "Todos" && ` em ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-0">
                  {/* Product image */}
                  <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                    {product.image.startsWith('/lovable-uploads/') ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-4xl font-bold text-primary/20">FVA</div>
                      </div>
                    )}
                    
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
                    <div className="space-y-1">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
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

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="sm"
                      >
                        Ver Detalhes
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="px-3"
                      >
                        💬
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                Nenhum produto encontrado
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchTerm("");
                }}
                variant="outline"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
