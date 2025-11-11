import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl text-muted-foreground">
              Conheça a equipa por trás do Auto DS
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No Auto DS, a nossa missão é proporcionar uma experiência de compra e venda de veículos 
              totalmente transparente e personalizada. Acreditamos que cada cliente merece atenção 
              dedicada e um serviço que supere as expectativas. Trabalhamos com paixão e compromisso 
              para garantir que encontre o veículo perfeito ou venda o seu nas melhores condições.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Transparência</h3>
                  <p className="text-muted-foreground">
                    Comunicação clara e honesta em todas as etapas do processo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
                  <p className="text-muted-foreground">
                    Apenas veículos em excelente estado, entregues limpos e higienizados.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Dedicação</h3>
                  <p className="text-muted-foreground">
                    Atendimento personalizado e comprometido com sua satisfação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Nossa Equipa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">Diogo Carvão</h3>
                  <p className="text-sm text-muted-foreground mb-4">Sócio-Fundador</p>
                  <p className="text-muted-foreground">
                    Com anos de experiência no setor automóvel, Diogo traz conhecimento profundo 
                    do mercado e uma paixão genuína por veículos. A sua dedicação à satisfação 
                    do cliente e à transparência define o padrão de serviço do Auto DS.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">Sérgio</h3>
                  <p className="text-sm text-muted-foreground mb-4">Sócio-Fundador</p>
                  <p className="text-muted-foreground">
                    Sérgio combina expertise técnica com um talento natural para entender as 
                    necessidades dos clientes. A sua abordagem meticulosa garante que cada 
                    veículo e cada transação atenda aos mais altos padrões de qualidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
