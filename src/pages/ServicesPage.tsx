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
  Settings,
  ArrowRight
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    icon: Droplets,
    title: "Blocked Drains & Drain Cleaning",
    description: "Fast drain unblocking and cleaning services for all drain types including kitchen, bathroom, and outdoor drains.",
    href: "/services/blocked-drains",
  },
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix hidden leaks, preventing water damage and high bills.",
    href: "/services/leak-detection",
  },
  {
    icon: Flame,
    title: "Geyser Installation & Repair",
    description: "Expert geyser installation, repair, and maintenance services. We handle all makes and models.",
    href: "/services/geyser-repair",
  },
  {
    icon: AlertTriangle,
    title: "Burst Pipe Repair",
    description: "Emergency burst pipe repair services available 24/7 to minimize water damage to your property.",
    href: "/services/burst-pipes",
  },
  {
    icon: ShowerHead,
    title: "24/7 Emergency Plumbing",
    description: "Round-the-clock emergency plumbing services. We're here when you need us most, day or night.",
    href: "/services/emergency-plumbing",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description: "Complete bathroom renovation and remodeling services from design to installation.",
    href: "/services/bathroom-renovations",
  },
  {
    icon: Wrench,
    title: "Toilet & Fixture Installation",
    description: "Professional installation and repair of toilets, taps, basins, and other plumbing fixtures.",
    href: "/services/toilet-fixtures",
  },
  {
    icon: Settings,
    title: "General Plumbing Maintenance",
    description: "Regular maintenance services to keep your plumbing in top condition and prevent costly repairs.",
    href: "/services/general-maintenance",
  },
  {
    icon: ClipboardCheck,
    title: "Plumbing Compliance Certificates",
    description: "Official plumbing compliance certificates for property sales, transfers, and insurance requirements.",
    href: "/services/compliance-certificates",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From emergency repairs to full bathroom renovations, we provide comprehensive 
              plumbing solutions for homes and businesses across Pretoria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} to={service.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-accent group">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
