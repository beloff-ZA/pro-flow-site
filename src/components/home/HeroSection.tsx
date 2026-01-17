import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import vanImage from "@/assets/eloff-van.jpeg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              24/7 Emergency Service Available
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              The Plumber You Can{" "}
              <span className="text-accent">Trust!</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              Professional plumbing services in Pretoria. From blocked drains to geyser repairs, 
              we handle it all with expertise and care.
            </p>
            <p className="text-sm italic text-accent">
              "We repair what your husband fixed" 😄
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+27616442526">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: 061 644 2526
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={vanImage}
                alt="Eloff Plumbing Service Van"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">10+</div>
              <div className="text-xs md:text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
