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
                    src="/lovable-uploads/whatsapp-icon.png" 
                    alt="WhatsApp" 
                    className="h-5 w-5"
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