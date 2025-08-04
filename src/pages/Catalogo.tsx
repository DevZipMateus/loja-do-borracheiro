
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Em breve disponibilizaremos nosso catálogo completo de produtos
            </p>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="text-6xl mb-8">📦</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Catálogo em Construção
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Estamos organizando nosso catálogo de produtos. Em breve você encontrará aqui toda nossa linha de produtos para borracharia.
            </p>
            <p className="text-sm text-muted-foreground">
              Para consultas sobre produtos, entre em contato conosco pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
