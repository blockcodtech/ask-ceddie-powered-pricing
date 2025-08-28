import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Tag, 
  PieChart, 
  Handshake, 
  FileText, 
  Briefcase, 
  FileSignature, 
  Target 
} from "lucide-react";

const calculators = [
  {
    icon: Calculator,
    title: "Advanced Price Exhibit Calculator",
    description: "Build clear, accurate price exhibits for clients",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "HOT Deals Calculator",
    description: "Spot and showcase irresistible offers",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Gross Profit Margin Calculator",
    description: "Instantly calculate GP percentage",
    color: "text-green-500"
  },
  {
    icon: BarChart3,
    title: "Net Profit Margin Calculator",
    description: "Reveal true profitability per project",
    color: "text-blue-500"
  },
  {
    icon: Tag,
    title: "Sale Price Calculator",
    description: "Generate sale prices with margins built-in",
    color: "text-accent"
  },
  {
    icon: PieChart,
    title: "Selling Price Calculator",
    description: "Set competitive selling prices",
    color: "text-purple-500"
  },
  {
    icon: Handshake,
    title: "Strategic Partnership Discount Calculator",
    description: "Model collaboration discounts",
    color: "text-indigo-500"
  },
  {
    icon: FileText,
    title: "Proposal Template Collection",
    description: "Ready-to-use client proposals",
    color: "text-primary"
  },
  {
    icon: Briefcase,
    title: "Business Plan Templates",
    description: "Strategy and financial templates",
    color: "text-gray-600"
  },
  {
    icon: FileSignature,
    title: "Agreement Template Collection",
    description: "Professional contracts for your industry",
    color: "text-green-600"
  },
  {
    icon: Target,
    title: "Profitability Module",
    description: "Deep dive into overall financial health",
    color: "text-primary"
  }
];

export const CalculatorGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete <span className="text-primary">Toolkit</span> Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From calculators to templates - everything you need to win clients and maximize profitability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group border border-border/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-card border-2 border-border group-hover:border-primary/30 transition-colors duration-300`}>
                  <calc.icon className={`w-6 h-6 ${calc.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {calc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {calc.description}
                  </p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
              >
                Try Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};