import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  commonProblems: string[];
}> = {
  "blocked-drains": {
    title: "Blocked Drains & Drain Cleaning",
    description: "Professional drain unblocking and cleaning services for all drain types.",
    longDescription: "A blocked drain can cause significant inconvenience and potential damage to your property. Our experienced team uses the latest equipment to quickly identify and clear blockages, getting your drains flowing freely again.",
    features: [
      "High-pressure water jetting",
      "CCTV drain inspection",
      "Root removal",
      "Preventive maintenance",
      "Same-day service available",
    ],
    commonProblems: [
      "Slow draining sinks or showers",
      "Gurgling sounds from drains",
      "Unpleasant odours",
      "Water backing up",
      "Multiple blocked drains",
    ],
  },
  "leak-detection": {
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix leaks quickly.",
    longDescription: "Hidden leaks can cause extensive water damage and increase your water bills. Our advanced leak detection equipment can locate leaks behind walls, under floors, and in underground pipes without causing unnecessary damage to your property.",
    features: [
      "Non-invasive detection methods",
      "Thermal imaging technology",
      "Acoustic leak detection",
      "Pressure testing",
      "Underground pipe location",
    ],
    commonProblems: [
      "Unexplained high water bills",
      "Damp patches on walls or ceilings",
      "Sound of running water when taps are off",
      "Mould or mildew growth",
      "Low water pressure",
    ],
  },
  "geyser-repair": {
    title: "Geyser Installation & Repair",
    description: "Expert geyser services including installation, repair, and maintenance.",
    longDescription: "Your geyser is essential for hot water in your home. Whether you need a new installation, repairs, or regular maintenance, our certified technicians ensure your geyser operates safely and efficiently.",
    features: [
      "New geyser installation",
      "Emergency repairs",
      "Element replacement",
      "Thermostat repairs",
      "COC certificates",
    ],
    commonProblems: [
      "No hot water",
      "Water not hot enough",
      "Strange noises from geyser",
      "Water leaking from geyser",
      "Geyser tripping electricity",
    ],
  },
  "burst-pipes": {
    title: "Burst Pipe Repair",
    description: "Emergency burst pipe repair services to minimize water damage.",
    longDescription: "A burst pipe is a plumbing emergency that requires immediate attention. Our team is available 24/7 to respond quickly, stop the water flow, and repair the damage to prevent further issues.",
    features: [
      "24/7 emergency response",
      "Fast water shutoff",
      "Pipe repair and replacement",
      "Water damage assessment",
      "Insurance documentation",
    ],
    commonProblems: [
      "Visible water leak",
      "Flooding in home",
      "Water pressure loss",
      "Unusual sounds in walls",
      "Wet spots on floors or walls",
    ],
  },
  "emergency-plumbing": {
    title: "24/7 Emergency Plumbing",
    description: "Round-the-clock emergency plumbing services when you need us most.",
    longDescription: "Plumbing emergencies don't wait for convenient hours. That's why we offer 24/7 emergency plumbing services across Cape Town. Our rapid response team is ready to handle any urgent plumbing situation.",
    features: [
      "Available 24 hours, 7 days a week",
      "Fast response times",
      "Fully equipped service vehicles",
      "Experienced emergency plumbers",
      "Fair emergency rates",
    ],
    commonProblems: [
      "Burst pipes",
      "Severe blockages",
      "Gas leaks",
      "Overflowing toilets",
      "No water supply",
    ],
  },
  "bathroom-renovations": {
    title: "Bathroom Renovations",
    description: "Complete bathroom renovation and remodeling services.",
    longDescription: "Transform your bathroom with our professional renovation services. From simple upgrades to complete remodels, we handle all plumbing aspects of your bathroom project with attention to detail and quality workmanship.",
    features: [
      "Full bathroom remodeling",
      "Fixture installation",
      "Shower and bath installation",
      "Vanity and basin fitting",
      "Plumbing reconfiguration",
    ],
    commonProblems: [
      "Outdated bathroom fixtures",
      "Poor water pressure",
      "Inefficient layout",
      "Leaking fixtures",
      "Accessibility needs",
    ],
  },
  "toilet-fixtures": {
    title: "Toilet & Fixture Installation",
    description: "Professional installation and repair of toilets and plumbing fixtures.",
    longDescription: "Whether you need a new toilet installed, an existing one repaired, or other fixtures updated, our team provides expert installation and repair services for all bathroom and kitchen fixtures.",
    features: [
      "Toilet installation and repair",
      "Tap and mixer installation",
      "Basin and sink fitting",
      "Shower head installation",
      "Dishwasher and washing machine connections",
    ],
    commonProblems: [
      "Running toilet",
      "Leaking taps",
      "Low flush power",
      "Cracked toilet bowl",
      "Dripping fixtures",
    ],
  },
  "general-maintenance": {
    title: "General Plumbing Maintenance",
    description: "Regular maintenance services to prevent costly plumbing repairs.",
    longDescription: "Preventive maintenance is the key to avoiding expensive emergency repairs. Our maintenance services help identify potential issues before they become problems, saving you money in the long run.",
    features: [
      "Annual plumbing inspections",
      "Pipe condition assessment",
      "Water heater maintenance",
      "Drain cleaning",
      "Pressure checks",
    ],
    commonProblems: [
      "Ageing plumbing systems",
      "Minor leaks",
      "Slow drains",
      "Water quality issues",
      "Preventive care needs",
    ],
  },
  "compliance-certificates": {
    title: "Plumbing Compliance Certificates",
    description: "Official plumbing certificates for property sales and compliance.",
    longDescription: "When selling your property, you need a valid Plumbing Certificate of Compliance. Our certified plumbers can inspect your plumbing system, identify any issues, and issue the necessary certificates.",
    features: [
      "Full plumbing inspection",
      "Certificate of Compliance (COC)",
      "Issue identification",
      "Remedial work if needed",
      "Quick turnaround",
    ],
    commonProblems: [
      "Property sale requirements",
      "Insurance requirements",
      "Municipal compliance",
      "Property transfer",
      "Rental regulations",
    ],
  },
};

export default function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? servicesData[serviceSlug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+27616642526">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                <p className="text-muted-foreground">{service.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Common Problems We Solve</h3>
              <ul className="space-y-3">
                {service.commonProblems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-accent">
                  Need help with this issue?
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Contact us now for a free assessment and quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
