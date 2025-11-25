import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="cta-section" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        {/* Main CTA card */}
        <div className="max-w-5xl mx-auto gradient-hero text-white rounded-3xl overflow-hidden">
          <div className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Partner in India's ₹92,000 Crore Food Waste Solution
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Together, we can prevent 10 million tonnes of food waste, protect farmer livelihoods, and address food security challenges across India.
            </p>

            {/* Investment ask */}
            <div className="max-w-md mx-auto bg-white/20 backdrop-blur-md border-2 border-white/30 p-8 rounded-2xl mb-8 text-center shadow-2xl">
              <div className="text-sm font-semibold text-white mb-2">Seed Investment Opportunity</div>
              <div className="text-5xl font-bold text-white mb-4">₹10 Lakh</div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-bold text-2xl text-white">5</div>
                  <div className="text-white font-medium">Cold Storages</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-white">6</div>
                  <div className="text-white font-medium">Month Pilot</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-white">500T</div>
                  <div className="text-white font-medium">Food Saved</div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110"
              >
                <FileText className="mr-2 h-5 w-5" />
                Request Full Proposal
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white bg-transparent hover:bg-white/10 hover:border-white px-8 py-6 text-lg rounded-full transition-all duration-500 hover:scale-110 shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">contact@freshguard.in</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">+91 98765 43210</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 6 PM IST</p>
          </div>
        </div>

        {/* Final stats banner */}
        <div className="mt-16 max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">The Time to Act is Now</h3>
            <p className="text-muted-foreground">Every day we wait, India loses:</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-destructive mb-1">₹250 Cr</div>
              <div className="text-xs text-muted-foreground">Economic Loss</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-destructive mb-1">27,000T</div>
              <div className="text-xs text-muted-foreground">Food Wasted</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-destructive mb-1">54,000T</div>
              <div className="text-xs text-muted-foreground">CO₂ Emitted</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-destructive mb-1">520K</div>
              <div className="text-xs text-muted-foreground">Go Hungry</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
