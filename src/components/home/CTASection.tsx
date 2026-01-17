import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "27616442526";
const WHATSAPP_MESSAGE = "Hi, I need plumbing help!";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Ready to Fix Your Plumbing Issues?
          </h2>
          <p className="text-lg text-accent-foreground/80">
            Get in touch today for a free quote. We're available 24/7 for emergencies!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
              <a href="tel:+27616442526">
                <Phone className="mr-2 h-4 w-4" />
                Call: 061 644 2526
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
