import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Johan V.",
    rating: 5,
    text: "Excellent service! They came out within an hour of my call and fixed my burst pipe quickly. Very professional team.",
    service: "Emergency Plumbing",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Eloff Plumbing installed our new geyser and did a fantastic job. Fair pricing and great workmanship.",
    service: "Geyser Installation",
  },
  {
    name: "Peter K.",
    rating: 5,
    text: "These guys really know their stuff. They found and fixed a leak that two other plumbers couldn't locate.",
    service: "Leak Detection",
  },
  {
    name: "Maria D.",
    rating: 5,
    text: "Very happy with the bathroom renovation. On time, on budget, and the quality is excellent!",
    service: "Bathroom Renovation",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            What Our <span className="text-accent">Customers Say</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Cape Town.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-accent" />
                <p className="text-sm text-primary-foreground/90 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-accent">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
