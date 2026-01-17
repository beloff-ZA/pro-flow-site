import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/CTASection";

const testimonials = [
  {
    name: "Johan V.",
    location: "Pretoria East",
    rating: 5,
    text: "Excellent service! They came out within an hour of my call and fixed my burst pipe quickly. Very professional team. Highly recommend for any emergency plumbing needs.",
    service: "Emergency Plumbing",
  },
  {
    name: "Sarah M.",
    location: "Centurion",
    rating: 5,
    text: "Eloff Plumbing installed our new geyser and did a fantastic job. Fair pricing, quick work, and great workmanship. The team was friendly and cleaned up after themselves.",
    service: "Geyser Installation",
  },
  {
    name: "Peter K.",
    location: "Menlyn",
    rating: 5,
    text: "These guys really know their stuff. They found and fixed a leak that two other plumbers couldn't locate. Saved us thousands in potential water damage!",
    service: "Leak Detection",
  },
  {
    name: "Maria D.",
    location: "Hatfield",
    rating: 5,
    text: "Very happy with the bathroom renovation. On time, on budget, and the quality is excellent! They helped with design ideas and the final result exceeded expectations.",
    service: "Bathroom Renovation",
  },
  {
    name: "Andre B.",
    location: "Lynnwood",
    rating: 5,
    text: "Had a blocked drain emergency on a Sunday evening. They answered immediately and were at my house within 30 minutes. Problem solved quickly. True 24/7 service!",
    service: "Blocked Drains",
  },
  {
    name: "Lisa T.",
    location: "Brooklyn",
    rating: 5,
    text: "Professional from start to finish. Got my compliance certificate sorted quickly for our property sale. The plumber explained everything clearly and was very thorough.",
    service: "Compliance Certificate",
  },
  {
    name: "Willem S.",
    location: "Waterkloof",
    rating: 5,
    text: "Been using Eloff Plumbing for years now. They've helped with everything from simple tap repairs to major pipe replacements. Always reliable and fairly priced.",
    service: "General Maintenance",
  },
  {
    name: "Thandi N.",
    location: "Moot",
    rating: 5,
    text: "The quote was accurate, no surprises. Work was done efficiently and they even gave me tips on maintaining my plumbing. Will definitely use again!",
    service: "Toilet Installation",
  },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Customer <span className="text-accent">Testimonials</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Don't just take our word for it – hear from our satisfied customers across Pretoria.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-foreground">500+</div>
              <div className="text-accent-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-foreground">4.9/5</div>
              <div className="text-accent-foreground/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-foreground">10+</div>
              <div className="text-accent-foreground/80">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-accent mt-1">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
