import { useState } from "react";
import { ChevronDown, Calendar, Target, MapPin, TrendingUp } from "lucide-react";

const PhaseCard = ({ 
  phase, 
  title, 
  investment, 
  timeline, 
  icon: Icon,
  details,
  isExpanded,
  onToggle 
}: any) => (
  <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-102 border border-primary/10 hover:border-primary/30">
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-sm font-medium text-primary">Phase {phase}</span>
            <span className="text-xs text-muted-foreground">{timeline}</span>
          </div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="text-sm text-muted-foreground">{investment}</div>
        </div>
      </div>
      <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
    </button>
    
    {isExpanded && (
      <div className="px-6 pb-6 animate-fade-in">
        <div className="pt-4 border-t border-border space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Activities</h4>
            <ul className="space-y-2">
              {details.activities.map((activity: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Target Metrics</h4>
            <div className="grid grid-cols-2 gap-3">
              {details.targets.map((target: any, i: number) => (
                <div key={i} className="p-3 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary">{target.value}</div>
                  <div className="text-xs text-muted-foreground">{target.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export const RoadmapSection = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const phases = [
    {
      phase: 1,
      title: "Pilot Launch",
      investment: "₹10L Investment",
      timeline: "Months 1-6",
      icon: MapPin,
      details: {
        activities: [
          "Deploy IoT sensors in 5 cold storages (Maharashtra/Punjab)",
          "Launch mobile app for storage managers and processors",
          "Onboard 20 food processing units",
          "Establish WhatsApp alert system",
          "Build initial AI training dataset (50,000+ data points)"
        ],
        targets: [
          { value: "25%", label: "Waste Reduction" },
          { value: "500T", label: "Food Saved" },
          { value: "5", label: "Cold Storages" },
          { value: "20", label: "Processors" }
        ]
      }
    },
    {
      phase: 2,
      title: "Scale + Government Integration",
      investment: "₹50L Investment",
      timeline: "Months 7-12",
      icon: Target,
      details: {
        activities: [
          "Expand to 50 cold storages across 3 states",
          "Sign MoU with National Horticulture Board",
          "Launch consumer marketplace for near-expiry products",
          "Integrate with APMC mandis for real-time pricing",
          "Carbon credit certification process begins"
        ],
        targets: [
          { value: "₹2Cr", label: "Revenue" },
          { value: "5,000T", label: "Prevented" },
          { value: "50", label: "Facilities" },
          { value: "3", label: "States" }
        ]
      }
    },
    {
      phase: 3,
      title: "National Network",
      investment: "₹2Cr+ Series A",
      timeline: "Year 2",
      icon: TrendingUp,
      details: {
        activities: [
          "1M+ AI training data points for 95%+ accuracy",
          "Integration with FCI (Food Corporation of India)",
          "500+ APMC mandis connected nationwide",
          "International expansion (Sri Lanka, Bangladesh)",
          "Blockchain traceability fully operational"
        ],
        targets: [
          { value: "₹50Cr", label: "Revenue" },
          { value: "10M T", label: "Impact" },
          { value: "4,000+", label: "Facilities" },
          { value: "15+", label: "States" }
        ]
      }
    }
  ];

  return (
    <section id="roadmap-section" className="py-20 md:py-32 bg-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            From Vision to <span className="text-gradient">Reality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear 18-month roadmap from pilot to national scale
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-tertiary transform md:-translate-x-1/2" />
          
          <div className="space-y-8">
            {phases.map((phase) => (
              <div key={phase.phase} className="relative">
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-primary rounded-full transform md:-translate-x-1/2 flex items-center justify-center border-4 border-background">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:odd:ml-auto md:odd:pl-12 md:odd:pr-0">
                  <PhaseCard
                    {...phase}
                    isExpanded={expandedPhase === phase.phase}
                    onToggle={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary metrics */}
        <div className="max-w-4xl mx-auto gradient-hero text-white p-8 rounded-3xl">
          <div className="text-center mb-8">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">18-Month Journey</h3>
            <p className="opacity-90">From 5 cold storages to 4,000+ national network</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-3xl font-bold mb-1">₹2.6Cr</div>
              <div className="text-sm opacity-80">Total Investment</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-3xl font-bold mb-1">₹52Cr</div>
              <div className="text-sm opacity-80">Revenue Target</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">States Covered</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
              <div className="text-3xl font-bold mb-1">10M T</div>
              <div className="text-sm opacity-80">Food Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
