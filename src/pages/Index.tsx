import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionTabs } from "@/components/SolutionTabs";
import { DemoSection } from "@/components/DemoSection";
import { AITechnologySection } from "@/components/AITechnologySection";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { RoadmapSection } from "@/components/RoadmapSection";
import { RevenueSection } from "@/components/RevenueSection";
import { GovernmentSection } from "@/components/GovernmentSection";
import { CompetitiveAdvantage } from "@/components/CompetitiveAdvantage";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionTabs />
      <DemoSection />
      <AITechnologySection />
      <ImpactMetrics />
      <RoadmapSection />
      <RevenueSection />
      <GovernmentSection />
      <CompetitiveAdvantage />
      <CTASection />
    </div>
  );
};

export default Index;
