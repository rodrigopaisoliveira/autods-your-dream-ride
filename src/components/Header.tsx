import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // <-- importa o logo (ajusta o caminho conforme a tua estrutura)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center">
            <img
              src={logo}
              alt="AUTO DS Logo"
              className="h-14 w-auto object-contain" // ajusta o tamanho aqui
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Início
            </Link>
            <Link
              to="/vehicles"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Veículos
            </Link>
            <Link
              to="/custom-order"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Encomenda
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Sobre Nós
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <Button variant="default" size="sm">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Início
            </Link>
            <Link
              to="/vehicles"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Veículos
            </Link>
            <Link
              to="/custom-order"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Encomenda
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Sobre Nós
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <Button variant="default" size="sm" className="w-full">
                Contacto
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
