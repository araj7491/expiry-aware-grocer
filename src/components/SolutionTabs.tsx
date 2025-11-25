import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout, Snowflake, Store, ArrowRight, Zap, Brain, Network, Bell } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background border border-transparent hover:border-primary/20 transition-all duration-300 group hover:scale-102 hover:shadow-md">
    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex-1">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const SolutionTabs = () => {
  return (
    <section id="solution-section" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            One Platform. <span className="text-gradient">Three Integrated Tiers.</span> Complete Coverage.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From farm to retail, FreshGuard connects every link in India's food supply chain
          </p>
        </div>

        <Tabs defaultValue="agri" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50">
            <TabsTrigger value="agri" className="flex flex-col gap-2 py-4 data-[state=active]:bg-background">
              <Sprout className="h-6 w-6" />
              <span className="text-sm font-semibold">FreshGuard Agri</span>
            </TabsTrigger>
            <TabsTrigger value="cold" className="flex flex-col gap-2 py-4 data-[state=active]:bg-background">
              <Snowflake className="h-6 w-6" />
              <span className="text-sm font-semibold">Cold Chain</span>
            </TabsTrigger>
            <TabsTrigger value="retail" className="flex flex-col gap-2 py-4 data-[state=active]:bg-background">
              <Store className="h-6 w-6" />
              <span className="text-sm font-semibold">Retail</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agri" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Sprout className="h-4 w-4" />
                  Farm Gate Solution
                </div>
                <h3 className="text-3xl font-bold">Protect Value at the Source</h3>
                <p className="text-muted-foreground">
                  AI-powered quality monitoring from harvest to market, ensuring farmers get maximum value for their produce.
                </p>

                <div className="space-y-3">
                  <FeatureCard
                    icon={Zap}
                    title="IoT Quality Detection"
                    description="Real-time sensors detect early signs of decay based on temperature, humidity, and visual analysis"
                  />
                  <FeatureCard
                    icon={Brain}
                    title="AI Shelf-Life Prediction"
                    description="Machine learning predicts expiry based on harvest date, storage conditions, and produce variety"
                  />
                  <FeatureCard
                    icon={Network}
                    title="Direct Processing Alerts"
                    description="Automatically notify nearby processing units when produce is optimal for use"
                  />
                  <FeatureCard
                    icon={Bell}
                    title="Dynamic Pricing Engine"
                    description="Smart pricing based on quality grade, urgency, and market demand"
                  />
                </div>

                <div className="glass-card p-6 rounded-xl border-l-4 border-secondary">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mini Use Case</h4>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-secondary">When tomatoes reach 3 days until expiration,</span> the system automatically notifies nearby ketchup factories, generating instant offers and recovering 100% value instead of 70% loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-success text-white">
                      <Sprout className="h-12 w-12" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-4">
                        <div className="px-4 py-2 bg-background rounded-lg text-sm font-medium">Farm</div>
                        <ArrowRight className="h-5 w-5 text-primary" />
                        <div className="px-4 py-2 bg-background rounded-lg text-sm font-medium">Mandi</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                      <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Processing Unit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cold" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 text-tertiary text-sm font-medium">
                  <Snowflake className="h-4 w-4" />
                  Cold Chain Intelligence
                </div>
                <h3 className="text-3xl font-bold">4,000+ Facilities Connected</h3>
                <p className="text-muted-foreground">
                  Real-time monitoring and predictive analytics across India's entire cold storage network.
                </p>

                <div className="space-y-3">
                  <FeatureCard
                    icon={Zap}
                    title="Real-Time Monitoring"
                    description="Track temperature, humidity, and inventory across all connected facilities 24/7"
                  />
                  <FeatureCard
                    icon={Bell}
                    title="Breach Alerts"
                    description="Instant notifications for temperature violations or equipment failures"
                  />
                  <FeatureCard
                    icon={Brain}
                    title="Predictive Maintenance"
                    description="AI predicts equipment failures before they happen, preventing losses"
                  />
                  <FeatureCard
                    icon={Network}
                    title="Waste-to-Worth Marketplace"
                    description="Automated matching with food processors, animal feed units, biogas plants, and NGOs"
                  />
                </div>

                <div className="glass-card p-6 rounded-xl border-l-4 border-tertiary">
                  <h4 className="font-semibold mb-3">Marketplace Connections</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary" />
                      <span>Food Processors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary" />
                      <span>Animal Feed Units</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary" />
                      <span>Biogas Plants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary" />
                      <span>NGO Food Banks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-tertiary/20 to-primary/20 rounded-3xl p-8">
                  <div className="h-full flex flex-col justify-center space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-info text-white mb-4">
                        <Snowflake className="h-10 w-10" />
                      </div>
                      <div className="text-2xl font-bold mb-2">Cold Storage Network</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-background rounded-lg flex items-center justify-center">
                          <Snowflake className="h-6 w-6 text-tertiary" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span>4,000+ facilities monitored</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="retail" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Store className="h-4 w-4" />
                  Last-Mile Solution
                </div>
                <h3 className="text-3xl font-bold">Consumer-Facing Innovation</h3>
                <p className="text-muted-foreground">
                  QR-code tracking and rescue deals turn near-expiry products into savings for consumers and stores.
                </p>

                <div className="space-y-3">
                  <FeatureCard
                    icon={Zap}
                    title="QR-Code Expiry Tracking"
                    description="Every product gets a unique QR code with real-time shelf-life information"
                  />
                  <FeatureCard
                    icon={Store}
                    title="Multi-Format Support"
                    description="Works with grocery stores, supermarkets, kirana stores, and online delivery"
                  />
                  <FeatureCard
                    icon={Bell}
                    title="Consumer Rescue App"
                    description="Shoppers get notified about discounted near-expiry items they actually want"
                  />
                  <FeatureCard
                    icon={Brain}
                    title="Smart Discount Engine"
                    description="AI-powered pricing optimizes discounts based on shelf-life and demand"
                  />
                </div>

                <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">📱</div>
                    <div>
                      <h4 className="font-semibold mb-1">Consumer Win-Win</h4>
                      <p className="text-sm text-muted-foreground">
                        Shoppers save up to <span className="font-medium text-primary">50% on quality food</span>, stores reduce waste by <span className="font-medium text-primary">60%</span>, while reducing environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="space-y-6 text-center max-w-xs">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary text-white">
                      <Store className="h-12 w-12" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="glass-card p-4 rounded-xl">
                        <div className="text-sm text-muted-foreground mb-1">Near-Expiry Alert</div>
                        <div className="text-lg font-bold">Milk expires in 2 days</div>
                        <div className="text-2xl font-bold text-primary mt-2">30% OFF</div>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 bg-foreground/10 rounded" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary" />
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                          📱
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Consumer notified → Purchase made → Waste prevented
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
