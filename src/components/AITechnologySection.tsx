import { Eye, Network, Shield, MessageSquare } from "lucide-react";

const TechCard = ({ icon: Icon, title, description, examples }: { 
  icon: any; 
  title: string; 
  description: string;
  examples: string[];
}) => (
  <div className="glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="space-y-2">
      {examples.map((example, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <span className="text-primary mt-0.5">→</span>
          <span>{example}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const AITechnologySection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Powered by <span className="text-gradient">Cutting-Edge AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four core technologies working together to eliminate food waste
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <TechCard
            icon={Eye}
            title="Predictive Decay Algorithm"
            description="Computer vision and machine learning combine to predict exactly when produce will expire"
            examples={[
              "Analyze produce images for visual decay indicators",
              "Factor in product type, storage temp, and humidity",
              "Track ethylene exposure and climate data",
              "Predict optimal processing window with 95% accuracy"
            ]}
          />

          <TechCard
            icon={Network}
            title="Smart Routing & Demand Matching"
            description="Real-time inventory-demand matching finds the perfect buyer for every expiring product"
            examples={[
              "Match 500kg expiring tomatoes with ketchup factory",
              "Calculate optimal route: Nashik → Pune (120km, 5 days)",
              "Consider processing capacity and quality requirements",
              "Negotiate pricing based on urgency and quality grade"
            ]}
          />

          <TechCard
            icon={Shield}
            title="Blockchain Traceability"
            description="Immutable ledger tracks every product's journey from farm to final destination"
            examples={[
              "Complete supply chain visibility: Farm → Storage → Processing → Retail",
              "Carbon footprint tracking for environmental credits",
              "Quality certifications and compliance records",
              "Build consumer trust with transparent sourcing"
            ]}
          />

          <TechCard
            icon={MessageSquare}
            title="WhatsApp/SMS Integration"
            description="AI-powered alerts reach 90% of cold storages that don't use apps"
            examples={[
              "Instant WhatsApp alerts: '500kg potatoes expiring in 3 days'",
              "Simple responses: 'Press 1 to connect with chip factory'",
              "Multi-language support (Hindi, Marathi, Tamil, Telugu)",
              "Works on any phone - no smartphone or app needed"
            ]}
          />
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">&lt;30s</div>
            <div className="text-sm text-muted-foreground">Matching Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Real-Time Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Indian Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};
