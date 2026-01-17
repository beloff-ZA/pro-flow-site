import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for urgent plumbing emergencies.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified plumbers with comprehensive insurance coverage.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of trusted service in the Pretoria area.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with quality guarantees.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose <span className="text-accent">Eloff Plumbing?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing reliable, professional plumbing services 
            that you can count on.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center space-y-4 p-6 rounded-xl bg-secondary"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
