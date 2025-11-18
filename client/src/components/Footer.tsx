import { Mail, Phone, MapPin } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

const productHighlights = [
  "Enterprise Web Portal",
  "Mobile Business Suite",
  "Cloud Infrastructure",
  "E-Commerce Solutions",
];

const serviceHighlights = [
  "Product Development",
  "Web Development",
  "App Development",
  "Cloud Services",
  "Infrastructure Services",
  "IT Security & Managed Services",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted text-foreground pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Rubi Technologies</p>
            <h3 className="text-3xl font-serif text-foreground leading-snug">
              Smart IT Solutions for Modern Business
            </h3>
            <p className="text-muted-foreground max-w-md">
              We build digital products and managed platforms that help enterprises modernize faster
              without compromising reliability.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3" data-testid="contact-phone">
                <Phone size={18} className="text-primary" />
                <a href="tel:+91 7991893433" className="hover:text-primary transition-colors">
                  +91 7991893433
                </a>
              </div>
              <div className="flex items-center gap-3" data-testid="contact-email">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:info@rubitechnologies.in"
                  className="hover:text-primary transition-colors"
                >
                  info@rubitechnologies.in
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground" data-testid="contact-address">
                <MapPin size={18} className="text-primary mt-1" />
                <span>
                  06, Opp. Building 262, Sant Dnyaneshwar Nagar,
                  <br />
                  Kherwadi Road, Bandra (East), Mumbai 400051, India
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Products</h4>
              <ul className="space-y-2 text-sm">
                {productHighlights.map((item) => (
                  <li key={item}>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm columns-1 sm:columns-2 gap-4">
              {serviceHighlights.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/70 text-center text-muted-foreground text-sm">
          <p>© 2025 Rubi Technologies – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
