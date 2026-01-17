import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/eloff-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Eloff Plumbing" className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Emergency Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+27616442526" className="flex items-center gap-2 text-sm font-semibold text-accent">
            <Phone className="h-4 w-4" />
            24/7 Emergency
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <a href="tel:+27616442526" className="flex items-center gap-2 text-sm font-semibold text-accent">
              <Phone className="h-4 w-4" />
              24/7 Emergency: 061 644 2526
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
