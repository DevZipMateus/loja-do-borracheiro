import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim do site da LOJA DO BORRACHEIRO RS e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5551995048546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Expanded Info Card */}
      {isExpanded && (
        <div className="absolute bottom-12 sm:bottom-16 right-0 mb-2 p-3 sm:p-4 bg-card rounded-lg shadow-strong border border-border/50 w-64 sm:w-72 animate-fade-in">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
                  alt="WhatsApp" 
                  className="h-3 w-3 sm:h-4 sm:w-4"
                />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground text-xs sm:text-sm">LOJA DO BORRACHEIRO</h4>
                <p className="text-xs text-green-500">Online agora</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-5 w-5 sm:h-6 sm:w-6 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
            Olá! 👋 Como podemos ajudar você hoje?
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm py-2"
          >
            Iniciar Conversa
          </Button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <img 
            src="/lovable-uploads/01e636d7-7ca8-47cf-a97f-47b4d0390a04.png" 
            alt="WhatsApp" 
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
        </Button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
          1
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;