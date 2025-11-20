import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "#home" },
    { label: "Products", path: "#products" },
    { label: "Services", path: "#services" },
    { label: "Industries", path: "#industries" },
    { label: "About Us", path: "#about" },
    { label: "Clients", path: "#clients" },
    { label: "Contact", path: "#contact" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-foreground">Rubi Technologies</span>
              <span className="text-xs ml-1 text-muted-foreground">®</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
                data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => setIsContactModalOpen(true)}
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-muted-foreground">
                Appearance
              </span>
              <ThemeToggle />
            </div>
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`mobile-link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-mobile-get-in-touch"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </nav>
  );
}
