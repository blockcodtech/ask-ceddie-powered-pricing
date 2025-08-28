import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const ClosingCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Ready to Transform Your Pricing Strategy?
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Unlock the <span className="text-primary">Future of Pricing Strategy</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From AI-powered insights to financial calculators, everything you need to 
                <span className="text-accent font-semibold"> win clients</span> and 
                <span className="text-primary font-semibold"> maximize profitability</span> is here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 animate-glow">
                Get Started with APT 2.0
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                Schedule Demo
              </Button>
            </div>

            {/* Trust elements */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Pricing Strategies Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">94%</div>
                <div className="text-muted-foreground">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
                <div className="text-muted-foreground">Additional Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};