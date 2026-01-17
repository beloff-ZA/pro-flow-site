import { Link } from "react-router-dom";
import { 
  Droplets, 
  Search, 
  Flame, 
  AlertTriangle, 
  Bath, 
  Wrench, 
  ClipboardCheck,
  ShowerHead,
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Blocked Drains",
    description: "Fast drain unblocking and cleaning services for all drain types.",
    href: "/services/blocked-drains",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced leak detection and repair to prevent water damage.",
    href: "/services/leak-detection",
  },
  {
    icon: Flame,
    title: "Geyser Repair",
    description: "Expert geyser installation, repair, and maintenance services.",
    href: "/services/geyser-repair",
  },
  {
    icon: AlertTriangle,
    title: "Burst Pipe Repair",
    description: "Emergency burst pipe repair to minimize water damage.",
    href: "/services/burst-pipes",
  },
  {
    icon: ShowerHead,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services when you need us most.",
    href: "/services/emergency-plumbing",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description: "Complete bathroom renovation and remodeling services.",
    href: "/services/bathroom-renovations",
  },
  {
    icon: Wrench,
    title: "Toilet & Fixtures",
    description: "Professional toilet and fixture installation and repair.",
    href: "/services/toilet-fixtures",
  },
  {
    icon: Settings,
    title: "General Maintenance",
    description: "Regular plumbing maintenance to prevent costly repairs.",
    href: "/services/general-maintenance",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Certificates",
    description: "Plumbing compliance certificates for property sales.",
    href: "/services/compliance-certificates",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to full bathroom renovations, we provide comprehensive 
            plumbing solutions for homes and businesses across Pretoria.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} to={service.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-accent group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
