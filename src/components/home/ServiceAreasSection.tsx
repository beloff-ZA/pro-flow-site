import { MapPin } from "lucide-react";

const areas = [
  "Pretoria East",
  "Pretoria North",
  "Pretoria Central",
  "Pretoria West",
  "Moot / Gezina",
  "Centurion",
  "Midrand",
  "Hatfield",
  "Menlyn",
  "Brooklyn",
  "Waterkloof",
  "Lynnwood",
];

export function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-accent">Areas</span> We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide professional plumbing services throughout Pretoria and surrounding areas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-accent transition-colors"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Don't see your area? <a href="tel:+27616442526" className="text-accent hover:underline">Call us</a> - we may still be able to help!
        </p>
      </div>
    </section>
  );
}
