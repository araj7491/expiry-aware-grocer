import { DollarSign, TrendingUp, Database, Building, Leaf } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { year: 'Year 1', revenue: 2 },
  { year: 'Year 2', revenue: 12 },
  { year: 'Year 3', revenue: 50 }
];

const RevenueStreamCard = ({ icon: Icon, title, amount, description }: any) => (
  <div className="glass-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:scale-105 group">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold mb-1">{title}</h3>
        <div className="text-2xl font-bold text-primary mb-2">{amount}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export const RevenueSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Sustainable <span className="text-gradient">Business Model</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five complementary revenue streams ensure long-term profitability
          </p>
        </div>

        {/* Revenue streams grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <RevenueStreamCard
            icon={DollarSign}
            title="SaaS Subscription"
            amount="₹5K-50K/mo"
            description="Tiered pricing for cold storages, processors, and retail chains based on facility size and features"
          />
          
          <RevenueStreamCard
            icon={TrendingUp}
            title="Transaction Fee"
            amount="2-3%"
            description="Commission on every successful match made through the Waste-to-Worth Marketplace"
          />
          
          <RevenueStreamCard
            icon={Database}
            title="API Licensing"
            amount="₹10-50L/yr"
            description="Sell aggregated data insights to FMCGs, processors, and supply chain companies"
          />
          
          <RevenueStreamCard
            icon={Building}
            title="Government Contracts"
            amount="₹5-20Cr/yr"
            description="State departments, NAFED, FCI integration for national-scale food loss prevention"
          />
          
          <RevenueStreamCard
            icon={Leaf}
            title="Carbon Credits"
            amount="10% facilitation"
            description="Help clients earn carbon credits from food waste reduction, take facilitation commission"
          />
        </div>

        {/* Revenue growth chart */}
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Projected Revenue Growth</h3>
          
          <div className="h-80 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  stroke="hsl(var(--border))"
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  stroke="hsl(var(--border))"
                  label={{ value: 'Revenue (₹ Crores)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`₹${value} Cr`, 'Revenue']}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={4}
                  dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-primary mb-1">₹2 Cr</div>
              <div className="text-sm text-muted-foreground">Year 1 Revenue</div>
            </div>
            <div className="p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-1">₹12 Cr</div>
              <div className="text-sm text-muted-foreground">Year 2 Revenue</div>
            </div>
            <div className="p-4 bg-background rounded-xl">
              <div className="text-3xl font-bold text-tertiary mb-1">₹50 Cr</div>
              <div className="text-sm text-muted-foreground">Year 3 Revenue</div>
            </div>
          </div>
        </div>

        {/* Unit economics */}
        <div className="mt-12 max-w-3xl mx-auto glass-card p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-center">Unit Economics (per cold storage)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground">Monthly Costs</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>IoT Hardware (amortized)</span>
                  <span className="font-medium">₹2,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cloud Infrastructure</span>
                  <span className="font-medium">₹1,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Support & Maintenance</span>
                  <span className="font-medium">₹1,000</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total Cost</span>
                  <span className="text-destructive">₹4,500</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground">Monthly Revenue</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>SaaS Subscription</span>
                  <span className="font-medium">₹15,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Transaction Fees</span>
                  <span className="font-medium">₹8,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Data Insights</span>
                  <span className="font-medium">₹3,000</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total Revenue</span>
                  <span className="text-secondary">₹26,000</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 gradient-success text-white rounded-xl text-center">
            <div className="text-sm opacity-90 mb-1">Gross Margin per Facility</div>
            <div className="text-4xl font-bold">₹21,500/month</div>
            <div className="text-sm opacity-90 mt-1">83% profit margin</div>
          </div>
        </div>
      </div>
    </section>
  );
};
