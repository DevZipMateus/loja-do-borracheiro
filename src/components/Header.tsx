import { Search, User, ShoppingCart, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar com informações de contato */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>54 9 9948.6962</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>54 3452.2010</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-medium">FVA DISTRIBUIDORA DE MATERIAL PARA BORRACHARIA</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Siga-nos:</span>
              {/* Social icons would go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-white text-primary px-6 py-2 rounded font-bold text-2xl">
              FVA
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="O QUE VOCÊ PROCURA?"
                className="w-full pl-4 pr-12 py-3 rounded-full border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 p-0 bg-accent hover:bg-accent/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10">
              PRODUTOS
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;