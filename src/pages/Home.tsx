import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Package, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-car.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Bem-vindo ao <span className="text-metallic">AUTO DS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Seu parceiro de confiança na compra e venda de carros e motos. 
            Trabalhamos com total transparência e comprometimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicles">
              <Button size="lg" variant="default" className="text-lg px-8">
                Ver Veículos
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Entre em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades automotivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Car}
              title="Compra e Venda"
              description="Facilitamos a compra e venda de carros e motos com total transparência e segurança."
            />
            <ServiceCard
              icon={Package}
              title="Encomenda Personalizada"
              description="Encomende o veículo dos seus sonhos, seja importado ou local. Nós tratamos de tudo."
            />
            <ServiceCard
              icon={Sparkles}
              title="Veículos Higienizados"
              description="Todos os veículos são entregues completamente limpos e higienizados."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para encontrar seu veículo ideal?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contacto connosco hoje e descubra como podemos ajudá-lo a encontrar 
            ou vender o veículo perfeito.
          </p>
          <Link to="/custom-order">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Fazer Encomenda
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
