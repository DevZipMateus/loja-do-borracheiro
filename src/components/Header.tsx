
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Se não estamos na página inicial, navegar primeiro para a página inicial
    if (location.pathname !== '/') {
      navigate('/');
      // Aguardar um pouco para a página carregar antes de fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estamos na página inicial, fazer scroll diretamente
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleCatalogClick = () => {
    navigate('/catalogo');
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header principal */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/bb7abda3-e754-4615-9024-79356f09a9fd.png" 
                alt="LOJA DO BORRACHEIRO RS Logo" 
                className="h-10 sm:h-12 w-auto cursor-pointer"
                onClick={handleHomeClick}
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
                onClick={handleCatalogClick}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Catálogo
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2"
              >
                <img 
                  src="/lovable-uploads/99f33249-a010-4276-ba41-9e76e59a952d.png" 
                  alt="WhatsApp" 
                  className="h-4 w-4"
                />
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
            <nav className="lg:hidden absolute top-full left-0 right-0 mt-2 py-4 bg-background/98 backdrop-blur-md rounded-lg shadow-strong border border-border/50 mx-4 animate-fade-in">
              <div className="flex flex-col space-y-1 px-4">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Serviços
                </button>
                <button 
                  onClick={handleCatalogClick}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Catálogo
                </button>
                <button 
                  onClick={() => scrollToSection('localizacao')}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Localização
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3 px-2 rounded-md"
                >
                  Contato
                </button>
                <div className="pt-2 mt-2 border-t border-border/50">
                  <Button 
                    onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 flex items-center justify-center gap-2"
                  >
                    <img 
                      src="/lovable-uploads/99f33249-a010-4276-ba41-9e76e59a952d.png" 
                      alt="WhatsApp" 
                      className="h-4 w-4"
                    />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
