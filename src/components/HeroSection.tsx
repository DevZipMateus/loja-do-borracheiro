import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient text-white relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background pattern/texture could be added here */}
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in">
            {/* Promotional badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <div className="w-6 h-4 bg-white rounded-sm"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12x no cartão</div>
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
                <div className="bg-white/20 rounded-lg p-2 text-2xl">%</div>
                <div>
                  <div className="text-xl font-bold">5% DE DESCONTO</div>
                  <div className="text-sm opacity-90">À VISTA</div>
                </div>
              </div>
            </div>

            {/* Product features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white" />
                <span className="text-lg">Acompanha 4 soquetes:</span>
              </div>
              <div className="pl-8 text-lg opacity-90">
                27 mm, 30 mm, 32 mm 33 mm;
              </div>
              
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white" />
                <span className="text-lg">Torque Máximo: 450 KGF</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white" />
                <span className="text-lg">Qualidade Comprovada</span>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-semibold"
            >
              CONFERIR PRODUTO
            </Button>
          </div>

          {/* Right content - Product */}
          <div className="relative animate-fade-in">
            <div className="text-right space-y-4 mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Chave de Impacto
              </h1>
              <p className="text-2xl opacity-90">1 Polegada FVA</p>
            </div>
            
            {/* Product image placeholder */}
            <div className="relative">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 shadow-strong">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-white opacity-20">FVA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default HeroSection;