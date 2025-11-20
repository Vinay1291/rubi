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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 min-w-0" data-testid="link-home">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate">
                Rubi Technologies
              </span>
              <span className="text-[10px] sm:text-xs ml-1 text-muted-foreground hidden sm:inline">®</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-2 xl:px-3 py-2 rounded-md transition-colors whitespace-nowrap"
                data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ThemeToggle />
            <Button
              onClick={() => setIsContactModalOpen(true)}
              data-testid="button-get-in-touch"
              className="whitespace-nowrap"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="p-2 -mr-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-14 sm:top-16 bg-background/98 backdrop-blur-lg border-b transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
        data-testid="mobile-menu"
      >
        <div className="h-full overflow-y-auto px-4 sm:px-6 py-6">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-lg transition-colors touch-manipulation"
                data-testid={`mobile-link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <Button
              className="w-full h-12 text-base font-medium touch-manipulation"
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
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </nav>
  );
}
