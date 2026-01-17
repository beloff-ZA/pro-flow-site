import { Shield, Clock, Award, ThumbsUp, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/home/CTASection";
import vanImage from "@/assets/eloff-van.jpeg";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We show up on time and complete the job right the first time.",
  },
  {
    icon: Clock,
    title: "Availability",
    description: "24/7 emergency service means we're always there when you need us.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We use quality materials and stand behind our workmanship.",
  },
  {
    icon: ThumbsUp,
    title: "Transparency",
    description: "Upfront pricing with no hidden fees or surprise charges.",
  },
];

const areas = [
  "Boston",
  "Bellville",
  "Cape Town CBD",
  "Northern Suburbs",
  "Southern Suburbs",
  "Durbanville",
  "Brackenfell",
  "Kraaifontein",
  "Parow",
  "Goodwood",
  "Milnerton",
  "Table View",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                About <span className="text-accent">Eloff Plumbing</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                The Plumber You Can Trust!
              </p>
              <p className="text-primary-foreground/70">
                With 9 years of qualified experience and 5 years serving the Cape Town community as Eloff Plumbing, 
                we've built a reputation for reliable, professional plumbing services. From emergency 
                repairs to complete bathroom renovations, we handle it all with expertise and care.
              </p>
            </div>
            <div className="relative">
              <img
                src={vanImage}
                alt="Eloff Plumbing Service Van"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Eloff Plumbing was founded with a simple mission: to provide honest, reliable 
              plumbing services to homes and businesses in Cape Town. With 9 years of qualified 
              plumbing experience and 5 years operating as Eloff Plumbing, we've grown from a 
              one-man operation into a trusted team of professional plumbers.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe in doing things right the first time. That means arriving on time, 
              communicating clearly, using quality materials, and standing behind our work. 
              Our customers aren't just clients – they're our neighbours, and we treat every 
              job as if it were in our own home.
            </p>
            <p className="italic text-accent text-lg">
              "We repair what your husband fixed" 😄
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center space-y-4 p-6 rounded-xl bg-secondary"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide professional plumbing services throughout Cape Town and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
