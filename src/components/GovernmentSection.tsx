import { Target, Leaf, Building, Users, TrendingUp, Globe } from "lucide-react";

const AlignmentCard = ({ icon: Icon, title, subtitle, color }: any) => (
  <div className={`glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover:scale-105 group border-l-4 ${color}`}>
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 rounded-lg bg-background">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    </div>
  </div>
);

export const GovernmentSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Aligned with <span className="text-gradient">National Priorities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            FreshGuard directly supports government initiatives and UN Sustainable Development Goals
          </p>
        </div>

        {/* Main initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <AlignmentCard
            icon={TrendingUp}
            title="Doubling Farmer Income"
            subtitle="PM Modi's 2022 Vision"
            color="border-secondary"
          />
          
          <AlignmentCard
            icon={Target}
            title="Zero Food Waste Vision"
            subtitle="National Policy Goal"
            color="border-primary"
          />
          
          <AlignmentCard
            icon={Leaf}
            title="SDG 2: Zero Hunger"
            subtitle="UN Sustainable Development"
            color="border-secondary"
          />
          
          <AlignmentCard
            icon={Globe}
            title="SDG 13: Climate Action"
            subtitle="Carbon Emission Reduction"
            color="border-tertiary"
          />
          
          <AlignmentCard
            icon={Building}
            title="Startup India"
            subtitle="Innovation & Entrepreneurship"
            color="border-primary"
          />
          
          <AlignmentCard
            icon={Users}
            title="PM-KISAN Integration"
            subtitle="Direct Farmer Support"
            color="border-secondary"
          />
        </div>

        {/* Government integrations */}
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Ready for Government Integration</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                National Integration Partners
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>National Horticulture Board:</strong> Real-time data on perishable inventory across India</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>NAFED (National Agricultural Federation):</strong> Cold storage network integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>FCI (Food Corporation of India):</strong> Government food distribution optimization</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>eNAM Platform:</strong> Compatible with electronic National Agriculture Market</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary" />
                State & Local Programs
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>APMC Mandis:</strong> 500+ wholesale markets across 15 states</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>State Horticulture Departments:</strong> Regional cold storage networks</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Mid-Day Meal Programs:</strong> Supply rescued food to schools</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Annapurna Kitchens:</strong> Donate near-expiry items to community kitchens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Policy compliance */}
          <div className="mt-8 p-6 bg-background rounded-xl">
            <h4 className="font-semibold mb-4 text-center">Policy Compliance & Certifications</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs text-muted-foreground">FSSAI Registered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1">✓</div>
                <div className="text-xs text-muted-foreground">ISO 22000 Ready</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tertiary mb-1">✓</div>
                <div className="text-xs text-muted-foreground">Data Privacy Act</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">✓</div>
                <div className="text-xs text-muted-foreground">Carbon Standard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 max-w-4xl mx-auto gradient-hero text-white p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-3">
            From Local Innovation to National Impact
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            FreshGuard isn't just a business - it's a mission to transform India's food system, one cold storage at a time.
          </p>
        </div>
      </div>
    </section>
  );
};
