import { 
  Brain, 
  TrendingUp, 
  Target, 
  Sliders, 
  BarChart3, 
  FileText, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Market, competitor & customer insights powered by advanced AI"
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing Adjustments", 
    description: "Real-time automated updates based on market conditions"
  },
  {
    icon: Target,
    title: "Recommended & Local Pricing",
    description: "Dual pricing options with scientific validation"
  },
  {
    icon: Sliders,
    title: "Customizable Models",
    description: "Cost-plus, value-based, or dynamic pricing strategies"
  },
  {
    icon: BarChart3,
    title: "User-Friendly Dashboard",
    description: "Intuitive, fast, and simple to use interface"
  },
  {
    icon: FileText,
    title: "Comprehensive Proposals",
    description: "Full or quick proposal formats for any client"
  },
  {
    icon: Zap,
    title: "Scalability",
    description: "Works for small businesses to enterprise level"
  }
];

export const KeyFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="text-primary">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for intelligent pricing decisions in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};