import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { KeyFeatures } from "@/components/KeyFeatures";
import { Benefits } from "@/components/Benefits";
import { CalculatorGrid } from "@/components/CalculatorGrid";
import { ClosingCTA } from "@/components/ClosingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <KeyFeatures />
      <Benefits />
      <CalculatorGrid />
      <ClosingCTA />
    </main>
  );
};

export default Index;
