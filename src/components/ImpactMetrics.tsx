import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const economicData = [
  { year: 'Year 1', processors: 500, farmers: 300, jobs: 100 },
  { year: 'Year 2', processors: 2000, farmers: 1200, jobs: 300 },
  { year: 'Year 3', processors: 5000, farmers: 3000, jobs: 500 }
];

const environmentalData = [
  { name: 'Waste Reduced', value: 10, color: 'hsl(140, 80%, 35%)' },
  { name: 'CO₂ Cut', value: 20, color: 'hsl(25, 100%, 60%)' },
  { name: 'Water Saved', value: 15, color: 'hsl(240, 100%, 35%)' }
];

const socialImpactData = [
  { month: 'M1', people: 2, meals: 5 },
  { month: 'M3', people: 10, meals: 25 },
  { month: 'M6', people: 30, meals: 75 },
  { month: 'M9', people: 60, meals: 150 },
  { month: 'M12', people: 100, meals: 250 }
];

const COLORS = ['hsl(140, 80%, 35%)', 'hsl(25, 100%, 60%)', 'hsl(240, 100%, 35%)'];

export const ImpactMetrics = () => {
  return (
    <section id="impact-section" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-gradient">FreshGuard Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable impact across economy, environment, and society
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Economic Impact */}
          <div className="glass-card p-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Economic Impact</h3>
              <p className="text-sm text-muted-foreground">Creating value across the supply chain</p>
            </div>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={economicData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="processors" fill="hsl(var(--primary))" name="Processors (Cr ₹)" />
                  <Bar dataKey="farmers" fill="hsl(var(--secondary))" name="Farmers (Cr ₹)" />
                  <Bar dataKey="jobs" fill="hsl(var(--tertiary))" name="Jobs (100s)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Processing Units Saved</span>
                <span className="font-bold text-primary">₹2,000-5,000 Cr</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Farmer Income Increase</span>
                <span className="font-bold text-secondary">15-20%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Jobs Created</span>
                <span className="font-bold text-tertiary">50,000+</span>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="glass-card p-6 rounded-2xl border border-secondary/10 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Environmental Impact</h3>
              <p className="text-sm text-muted-foreground">Protecting our planet's resources</p>
            </div>

            <div className="h-64 mb-6 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={environmentalData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}M`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {environmentalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Food Waste Reduced</span>
                <span className="font-bold text-secondary">10M tonnes</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">CO₂ Emissions Cut</span>
                <span className="font-bold text-primary">20M tonnes</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Carbon Credits</span>
                <span className="font-bold text-tertiary">Eligible</span>
              </div>
            </div>
          </div>

          {/* Social Impact */}
          <div className="glass-card p-6 rounded-2xl border border-tertiary/10 hover:border-tertiary/30 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Social Impact</h3>
              <p className="text-sm text-muted-foreground">Fighting hunger, feeding hope</p>
            </div>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={socialImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="people" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="People Fed (M)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="meals" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    name="Meals (M)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">People Fed</span>
                <span className="font-bold text-primary">100M+ for 1 month</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">Mid-Day Meals Supported</span>
                <span className="font-bold text-secondary">50M+ meals</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm">NGO Partnerships</span>
                <span className="font-bold text-tertiary">500+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-16 max-w-5xl mx-auto gradient-hero text-white p-8 md:p-12 rounded-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Saving Money. Saving Food. Saving Lives.
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every tonne of food saved creates ₹50,000 in economic value, prevents 2 tonnes of CO₂, and can feed 250 people for a day.
          </p>
        </div>
      </div>
    </section>
  );
};
