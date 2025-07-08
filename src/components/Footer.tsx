import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
                alt="LOJA DO BORRACHEIRO RS" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              11 anos oferecendo produtos de qualidade para borracharias e auto centers com atendimento personalizado e compromisso com a excelência.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/loja_do_borracheirors/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="https://www.facebook.com/LojadoBorracheiroRS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('localizacao')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Localização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:51995048546" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (51) 99504-8546
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <a 
                  href="mailto:lojadoborracheiro2020@gmail.com" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors break-all"
                >
                  lojadoborracheiro2020@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  AV. Henrique Bier, 360<br />
                  Campina / São Leopoldo - RS
                </span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Horário de Funcionamento</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <div className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>8h às 12h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/80 text-sm">
              © {currentYear} LOJA DO BORRACHEIRO RS. Todos os direitos reservados.
            </p>
            <p className="text-secondary-foreground/80 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-primary" /> para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;