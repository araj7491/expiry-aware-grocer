import { Check, X } from "lucide-react";

const ComparisonRow = ({ feature, freshguard, competitors }: any) => (
  <tr className="border-b border-border hover:bg-muted/20 transition-all duration-300">
    <td className="py-4 px-6 font-medium">{feature}</td>
    <td className="py-4 px-6 text-center">
      {freshguard === true ? (
        <Check className="h-6 w-6 text-secondary mx-auto" />
      ) : (
        <span className="text-secondary font-semibold">{freshguard}</span>
      )}
    </td>
    <td className="py-4 px-6 text-center text-muted-foreground">
      {competitors === false ? (
        <X className="h-6 w-6 text-destructive mx-auto" />
      ) : (
        <span>{competitors}</span>
      )}
    </td>
  </tr>
);

export const CompetitiveAdvantage = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why <span className="text-gradient">FreshGuard Wins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not just better technology - a fundamentally different approach
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div className="glass-card p-6 rounded-xl border border-secondary/10 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="w-12 h-12 rounded-lg gradient-success flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Cold Chain Specific</h3>
            <p className="text-sm text-muted-foreground">
              Built exclusively for cold storage, not generic inventory software adapted for food
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">End-to-End Connection</h3>
            <p className="text-sm text-muted-foreground">
              Links all supply chain gaps: Farm → Storage → Processing → Retail → Consumer
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg gradient-info flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Social Impact Built-In</h3>
            <p className="text-sm text-muted-foreground">
              NGO partnerships and food bank integration from day one, not an afterthought
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg gradient-success flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">AI-First, Predictive</h3>
            <p className="text-sm text-muted-foreground">
              Prevents waste before it happens, not just tracks it after the fact
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">WhatsApp-First Access</h3>
            <p className="text-sm text-muted-foreground">
              Works for 90% of cold storages without smartphones or expensive apps
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg gradient-info flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Government-Ready</h3>
            <p className="text-sm text-muted-foreground">
              Pre-integrated with NAFED, FCI, eNAM, and state agriculture departments
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="gradient-hero text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">FreshGuard</th>
                  <th className="py-4 px-6 text-center">Generic Competitors</th>
                </tr>
              </thead>
              <tbody className="bg-background">
                <ComparisonRow
                  feature="Cold storage expertise"
                  freshguard={true}
                  competitors={false}
                />
                <ComparisonRow
                  feature="AI shelf-life prediction"
                  freshguard="95% accuracy"
                  competitors="Basic tracking"
                />
                <ComparisonRow
                  feature="Waste-to-Worth marketplace"
                  freshguard={true}
                  competitors={false}
                />
                <ComparisonRow
                  feature="WhatsApp/SMS integration"
                  freshguard="90% reach"
                  competitors="App-only"
                />
                <ComparisonRow
                  feature="Government integrations"
                  freshguard="Pre-built"
                  competitors="Manual setup"
                />
                <ComparisonRow
                  feature="Social impact focus"
                  freshguard="Core feature"
                  competitors="Not included"
                />
                <ComparisonRow
                  feature="Blockchain traceability"
                  freshguard={true}
                  competitors={false}
                />
                <ComparisonRow
                  feature="Carbon credit tracking"
                  freshguard={true}
                  competitors={false}
                />
                <ComparisonRow
                  feature="Consumer marketplace"
                  freshguard={true}
                  competitors={false}
                />
                <ComparisonRow
                  feature="Multi-language support"
                  freshguard="12+ languages"
                  competitors="English only"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 glass-card rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-2">4x</div>
              <div className="text-sm text-muted-foreground">Faster Implementation</div>
            </div>
            <div className="p-6 glass-card rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Lower Cost</div>
            </div>
            <div className="p-6 glass-card rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Better Reach</div>
            </div>
            <div className="p-6 glass-card rounded-xl">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">India-Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
