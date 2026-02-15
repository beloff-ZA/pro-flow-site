import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "27616642526";

const serviceTypes = [
  "Blocked Drains",
  "Leak Detection",
  "Geyser Repair/Installation",
  "Burst Pipe",
  "Emergency Plumbing",
  "Bathroom Renovation",
  "Toilet/Fixture Installation",
  "General Maintenance",
  "Compliance Certificate",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: "",
    service_type: "",
    urgency: "normal",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("service_requests").insert([formData]);

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        customer_name: "",
        email: "",
        phone: "",
        address: "",
        service_type: "",
        urgency: "normal",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need plumbing help!")}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Get in touch for a free quote or emergency service. We're here to help 24/7!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="061 234 5678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Main Street, Cape Town"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select
                      required
                      value={formData.service_type}
                      onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal - Within a few days</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="emergency">Emergency - ASAP!</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Describe Your Issue</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe the plumbing issue you're experiencing..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <a href="tel:+27616642526" className="text-accent hover:underline">
                          061 664 2526
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:info@eloffplumbing.co.za" className="text-accent hover:underline">
                          info@eloffplumbing.co.za
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Service Area</div>
                        <span className="text-muted-foreground">Cape Town & Surrounding Areas</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Hours</div>
                        <span className="text-muted-foreground">24/7 Emergency Service Available</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Emergency Box */}
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">🚨 Plumbing Emergency?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Don't wait! Call us immediately for burst pipes, flooding, or other urgent issues.
                  </p>
                  <Button asChild size="lg" variant="destructive" className="w-full">
                    <a href="tel:+27616642526">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line: 061 664 2526
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
