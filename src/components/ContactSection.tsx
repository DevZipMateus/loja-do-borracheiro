import { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Vim do site da LOJA DO BORRACHEIRO RS.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5551995048546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-strong bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border focus:ring-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg flex items-center justify-center gap-2"
                >
                  <img 
                    src="/lovable-uploads/6da1d5af-1680-4789-bb4b-93fb54ac6f13.png?v=1" 
                    alt="WhatsApp" 
                    className="h-5 w-5"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3e%3cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386'/%3e%3c/svg%3e";
                    }}
                  />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Telefone</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Ligue agora e fale diretamente conosco
                </p>
                <Button 
                  onClick={() => window.open('tel:51995048546', '_self')}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  (51) 99504-8546
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Envie um email para nós
                </p>
                <Button 
                  onClick={() => window.open('mailto:lojadoborracheiro2020@gmail.com', '_self')}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  lojadoborracheiro2020@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Endereço</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Visite nossa loja física
                </p>
                <p className="text-card-foreground font-medium">
                  AV. Henrique Bier, 360<br />
                  Campina / São Leopoldo - RS
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-primary text-primary-foreground shadow-strong">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => window.open('https://www.instagram.com/loja_do_borracheirors/', '_blank')}
                    variant="secondary"
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    onClick={() => window.open('https://www.facebook.com/LojadoBorracheiroRS', '_blank')}
                    variant="secondary"
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;