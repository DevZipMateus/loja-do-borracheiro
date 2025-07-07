import { ArrowRight, Star, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-hero-gradient text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                LOJA DO
                <span className="block text-secondary">BORRACHEIRO</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed">
                Produtos para borracharia e auto center
              </p>
              <p className="text-base sm:text-lg opacity-80 max-w-lg mx-auto lg:mx-0">
                11 anos de experiência oferecendo produtos de qualidade para o setor automotivo com atendimento personalizado e compromisso com a excelência.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center bg-secondary/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">11</div>
                <div className="text-xs sm:text-sm opacity-80">Anos</div>
              </div>
              <div className="text-center bg-secondary/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">500+</div>
                <div className="text-xs sm:text-sm opacity-80">Clientes</div>
              </div>
              <div className="text-center bg-secondary/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">5</div>
                <div className="text-xs sm:text-sm opacity-80">Estrelas</div>
              </div>
              <div className="text-center bg-secondary/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">24h</div>
                <div className="text-xs sm:text-sm opacity-80">Suporte</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection('sobre')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group min-h-[48px]"
              >
                Conheça Nossa História
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full min-h-[48px]"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image/Graphic */}
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main image container */}
              <div className="bg-secondary/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-strong">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
                    alt="LOJA DO BORRACHEIRO - Mascote profissional" 
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-secondary text-secondary-foreground rounded-full p-2 sm:p-3 lg:p-4 shadow-lg animate-pulse">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-background text-foreground rounded-full p-2 sm:p-3 shadow-lg">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;