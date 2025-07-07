import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  const handleDirections = () => {
    window.open('https://g.co/kgs/XHiqjgi', '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visite nossa loja física em São Leopoldo ou agende uma visita de nossa equipe na sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden shadow-strong">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8234567890123!2d-51.14567890123456!3d-29.756789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Henrique%20Bier%2C%20360%20-%20Campina%2C%20S%C3%A3o%20Leopoldo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização LOJA DO BORRACHEIRO RS"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Mapa Interativo</p>
                      <p className="text-sm opacity-90">São Leopoldo/RS</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              onClick={handleDirections}
              className="absolute bottom-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Como Chegar
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AV. Henrique Bier, 360<br />
                      Campina / São Leopoldo - RS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Contato</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <a href="tel:51995048546" className="hover:text-primary transition-colors">
                          (51) 99504-8546
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:lojadoborracheiro2020@gmail.com" className="hover:text-primary transition-colors break-all">
                          lojadoborracheiro2020@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Atendimento Porta a Porta
              </h4>
              <p className="text-muted-foreground mb-4">
                Nossa equipe também faz visitas programadas. Entre em contato e agende!
              </p>
              <Button 
                onClick={() => window.open('https://wa.me/5551995048546', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;