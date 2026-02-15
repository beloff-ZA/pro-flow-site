import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/eloff-logo.png";

const services = [
  { href: "/services/blocked-drains", label: "Blocked Drains" },
  { href: "/services/leak-detection", label: "Leak Detection" },
  { href: "/services/geyser-repair", label: "Geyser Repair" },
  { href: "/services/emergency-plumbing", label: "Emergency Plumbing" },
  { href: "/services/bathroom-renovations", label: "Bathroom Renovations" },
];

const areas = [
  "Boston",
  "Bellville",
  "Cape Town CBD",
  "Northern Suburbs",
  "Southern Suburbs",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Eloff Plumbing" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              The Plumber You Can Trust! Professional plumbing services for residential and commercial properties in Cape Town.
            </p>
            <p className="text-sm italic text-accent">
              "We repair what your husband fixed"
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm text-primary-foreground/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+27616642526" className="hover:text-accent transition-colors">
                  061 664 2526
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@eloffplumbing.co.za" className="hover:text-accent transition-colors">
                  info@eloffplumbing.co.za
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Cape Town, Western Cape, South Africa
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  24/7 Emergency Service Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Eloff Plumbing. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/admin" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
