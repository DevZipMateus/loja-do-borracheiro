import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar com informações de contato */}
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:51995048546" className="hover:text-primary transition-colors">
                  (51) 99504-8546
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:lojadoborracheiro2020@gmail.com" className="hover:text-primary transition-colors">
                  lojadoborracheiro2020@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>São Leopoldo/RS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
                alt="LOJA DO BORRACHEIRO RS Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                WhatsApp
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 py-4 border-t bg-background/95 backdrop-blur-md rounded-lg shadow-soft">
              <div className="flex flex-col space-y-3 px-4">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('localizacao')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Localização
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Contato
                </button>
                <Button 
                  onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;