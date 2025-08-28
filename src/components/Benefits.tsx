import { CheckCircle, TrendingUp, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Enhanced Decision-Making",
    description: "Make confident pricing decisions backed by comprehensive data analysis and AI insights.",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Increased Profitability",
    description: "Capture maximum value from every project with scientifically optimized pricing strategies.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Improved Customer Satisfaction",
    description: "Deliver fair, competitive pricing that builds trust and long-term client relationships.",
    color: "text-accent"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your <span className="text-primary">Business Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of coaches and consultants who've revolutionized their pricing strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-card rounded-2xl card-shadow mx-auto mb-6 group-hover:card-shadow-hover transition-all duration-300 group-hover:-translate-y-2">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scientific Validation Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-2xl card-shadow">
            <Award className="w-6 h-6 text-accent" />
            <span className="font-semibold text-lg">
              <span className="text-accent">Scientific Validation</span> - Present evidence-backed proposals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};