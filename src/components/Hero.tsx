import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ai-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <Sparkles className="w-4 h-4" />
              ASK Ceddie AI - Now Available
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Automated Pricing Tool 2.0</span>
                <br />
                <span className="text-foreground">AI-Driven Pricing for</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Coaches & Consultants
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                The ONLY pricing tool built for the leadership development industry. 
                Just click <span className="text-accent font-semibold">ASK Ceddie</span> and let the pricing begin.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 animate-glow">
                <Zap className="w-5 h-5 mr-2" />
                Ask Ceddie Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                AI-Powered Analytics
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Industry-Specific
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Real-Time Insights
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden card-shadow-hover animate-float">
              <img 
                src={heroImage} 
                alt="ASK Ceddie AI Dashboard - Automated Pricing Interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              ASK Ceddie
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              AI-Driven
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};