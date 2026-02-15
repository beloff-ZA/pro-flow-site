import { Link } from "react-router-dom";
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import vanImage from "@/assets/eloff-van.jpeg";
import worksiteImage from "@/assets/eloff-worksite.png";
import plumberImage from "@/assets/plumber-working.jpg";

const slides = [
  {
    image: worksiteImage,
    alt: "Eloff Plumbing on-site at a Cape Town home",
    headline: "Cape Town's Trusted",
    highlight: "Plumber",
    description:
      "Professional plumbing services across Cape Town. From blocked drains to geyser repairs, we handle it all with expertise and care.",
  },
  {
    image: vanImage,
    alt: "Eloff Plumbing Service Van",
    headline: "24/7 Emergency",
    highlight: "Service",
    description:
      "Day or night, we're just a call away. Our fully equipped vans are ready to solve any plumbing emergency fast.",
  },
  {
    image: plumberImage,
    alt: "Professional plumber repairing pipes",
    headline: "Quality Work",
    highlight: "Guaranteed",
    description:
      "9+ years of qualified experience. We take pride in every job — big or small — and stand behind our workmanship.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-primary">
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative h-full container flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            24/7 Emergency Service Available
          </div>

          {slides.map((slide, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                opacity: current === i ? 1 : 0,
                transform: current === i ? "translateY(0)" : "translateY(20px)",
                position: current === i ? "relative" : "absolute",
                pointerEvents: current === i ? "auto" : "none",
              }}
            >
              {current === i && (
                <>
                  <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
                    {slide.headline}{" "}
                    <span className="text-accent">{slide.highlight}</span>
                  </h1>
                  <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
                    {slide.description}
                  </p>
                </>
              )}
            </div>
          ))}

          <p className="text-sm italic text-accent">
            "We repair what your husband fixed" 😄
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="tel:+27616442526">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: 061 644 2526
              </a>
            </Button>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/70 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/70 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
