import { Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 importa o Link
import logo from "@/assets/logo.png"; // <-- ajusta o caminho conforme a tua estrutura

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo e descrição */}
          <div>
            <div className="mb-4">
              <Link to="/" onClick={handleLogoClick} className="inline-block">
                <img
                  src={logo}
                  alt="AUTO DS Logo"
                  className="h-14 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-sm opacity-90">
              Seu parceiro de confiança na compra e venda de carros e motos.
              Transparência e qualidade em primeiro lugar.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="/vehicles" className="opacity-90 hover:opacity-100 transition-opacity">
                  Veículos
                </a>
              </li>
              <li>
                <a href="/custom-order" className="opacity-90 hover:opacity-100 transition-opacity">
                  Encomenda Personalizada
                </a>
              </li>
              <li>
                <a href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:autods.comercial@gmail.com"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail size={18} />
                autods.comercial@gmail.com
              </a>
              <a
                href="https://instagram.com/autods.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <Instagram size={18} />
                autods.pt
              </a>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Auto DS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
