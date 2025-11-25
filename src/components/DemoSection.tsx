import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, Snowflake, Factory, Zap, MessageSquare, CheckCircle2, Package, Timer, TrendingDown, Sparkles } from "lucide-react";

export const DemoSection = () => {
  const [isMatching, setIsMatching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (isMatching) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isMatching]);

  useEffect(() => {
    if (isComplete) {
      const message = "Match found! Connecting...";
      let i = 0;
      setTypingText("");
      const typeInterval = setInterval(() => {
        if (i < message.length) {
          setTypingText(prev => prev + message[i]);
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [isComplete]);

  const runDemo = () => {
    setIsMatching(true);
    setIsComplete(false);
    setShowTooltip(false);
    
    setTimeout(() => {
      setIsMatching(false);
      setIsComplete(true);
    }, 3000);
  };

  const resetDemo = () => {
    setIsMatching(false);
    setIsComplete(false);
    setProgress(0);
    setTypingText("");
  };

  return (
    <section id="demo-section" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Watch <span className="text-gradient">FreshGuard AI</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience real-time AI matching that prevents waste and saves money
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Left: Cold Storage Inventory */}
            <div 
              className={`glass-card p-6 rounded-2xl transition-all duration-500 ${
                hoveredCard === 'storage' ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard('storage')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-tertiary/20 to-tertiary/5 text-tertiary">
                  <Snowflake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Cold Storage</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    📍 Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Tomatoes
                    </div>
                    <div className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">Fresh</div>
                  </div>
                  <div className="font-semibold">300kg</div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <Timer className="h-3 w-3 text-secondary" />
                    <span className="text-secondary">7 days left</span>
                  </div>
                </div>

                <div className={`p-4 rounded-xl transition-all duration-500 cursor-pointer transform ${
                  isMatching ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary animate-pulse scale-105 shadow-lg' : 
                  isComplete ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary shadow-lg' : 
                  'bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30 hover:border-destructive/60'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Potatoes
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                      isComplete ? 'bg-secondary/30 text-secondary' : 'bg-destructive/30 text-destructive animate-pulse'
                    }`}>
                      {isComplete ? 'Saved!' : 'Alert'}
                    </div>
                  </div>
                  <div className="font-bold text-lg">500kg</div>
                  <div className={`mt-2 flex items-center gap-2 text-xs font-medium ${
                    isComplete ? 'text-secondary' : 'text-destructive'
                  }`}>
                    {isComplete ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Matched & Saved!</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 animate-bounce" />
                        <span>3 days left - Act now!</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Onions
                    </div>
                    <div className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">Fresh</div>
                  </div>
                  <div className="font-semibold">200kg</div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <Timer className="h-3 w-3 text-secondary" />
                    <span className="text-secondary">10 days left</span>
                  </div>
                </div>
              </div>

              {hoveredCard === 'storage' && (
                <div className="mt-4 p-3 bg-primary/5 rounded-lg text-xs text-muted-foreground animate-fade-in border border-primary/20">
                  Real-time IoT monitoring tracks temperature, humidity and produce condition
                </div>
              )}
            </div>

            {/* Center: AI Processing */}
            <div 
              className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ${
                hoveredCard === 'ai' ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => {
                setHoveredCard('ai');
                setShowTooltip(true);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setShowTooltip(false);
              }}
            >
              <div className={`relative w-32 h-32 rounded-full gradient-primary flex items-center justify-center mb-6 transition-all duration-500 ${
                isMatching ? 'animate-pulse scale-110 shadow-2xl' : 'hover:scale-105'
              }`}>
                <Zap className="h-16 w-16 text-white" />
                {isMatching && (
                  <>
                    <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-30" />
                    <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </div>

              {/* Progress bar */}
              {isMatching && (
                <div className="w-full mb-6 animate-fade-in">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Processing...</span>
                    <span className="text-primary font-medium">{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {isMatching && (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex items-center gap-3 text-sm p-3 bg-muted/50 rounded-lg animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    <span>Analyzing 500kg potatoes...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-3 bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                    <span>Searching 50+ processors...</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-3 bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}>
                    <div className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                    <span>Calculating best match...</span>
                  </div>
                </div>
              )}

              {isComplete && (
                <div className="space-y-4 animate-fade-in">
                  <CheckCircle2 className="h-16 w-16 text-secondary mx-auto animate-bounce" />
                  <div className="space-y-2">
                    <div className="font-bold text-xl mb-1 text-secondary">{typingText}</div>
                    <div className="text-sm text-muted-foreground px-4 py-2 bg-secondary/10 rounded-lg">
                      Perfect match in 12 km radius
                    </div>
                  </div>
                </div>
              )}

              {!isMatching && !isComplete && (
                <div className="space-y-2">
                  <div className="text-muted-foreground">
                    Click below to view the AI matching process
                  </div>
                  {showTooltip && (
                    <div className="text-xs text-primary font-medium animate-fade-in">
                      95%+ matching accuracy
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${isMatching ? 'bg-primary animate-pulse' : 'bg-muted'} transition-all`} />
                <ArrowRight className={`h-8 w-8 text-primary transition-all ${
                  isMatching ? 'animate-bounce' : ''
                }`} />
                <div className={`w-8 h-8 rounded-full ${isComplete ? 'bg-secondary animate-pulse' : 'bg-muted'} transition-all`} />
              </div>

              {hoveredCard === 'ai' && !isMatching && !isComplete && (
                <div className="mt-4 p-3 bg-primary/5 rounded-lg text-xs text-muted-foreground animate-fade-in border border-primary/20">
                  Machine learning model trained on 1M+ data points
                </div>
              )}
            </div>

            {/* Right: Matched Processor */}
            <div 
              className={`glass-card p-6 rounded-2xl transition-all duration-500 ${
                isComplete ? 'border-2 border-secondary shadow-2xl scale-105' : ''
              } ${hoveredCard === 'processor' ? 'scale-105 shadow-2xl' : ''}`}
              onMouseEnter={() => setHoveredCard('processor')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary">
                  <Factory className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Food Processor</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    📍 Hadapsar, Pune
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`transition-all duration-500 ${isComplete ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                  <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Factory className="h-4 w-4" />
                    Premium Chip Factory
                  </div>
                  <div className="p-5 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/30 hover:border-secondary transition-all">
                    <div className="font-bold text-lg mb-3">Needs: 500kg Potatoes</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">📍 Distance</span>
                        <span className="font-semibold">12 km</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">💰 Offer</span>
                        <span className="font-semibold text-secondary">₹25,000</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">⏱ Pickup</span>
                        <span className="font-semibold">Same day</span>
                      </div>
                    </div>
                  </div>
                </div>

                {isComplete && (
                  <div className="p-4 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl border-2 border-secondary animate-fade-in">
                    <div className="flex items-center gap-2 text-sm font-bold text-secondary mb-2">
                      <CheckCircle2 className="h-5 w-5 animate-bounce" />
                      Deal Confirmed!
                    </div>
                    <div className="text-xs text-muted-foreground">
                      🚚 Pickup scheduled: Today 3 PM<br/>
                      📝 Contract generated automatically
                    </div>
                  </div>
                )}
              </div>

              {hoveredCard === 'processor' && (
                <div className="mt-4 p-3 bg-secondary/5 rounded-lg text-xs text-muted-foreground animate-fade-in border border-secondary/20">
                  🏭 Verified processor • 4.8⭐ rating • 100+ successful trades
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp notification */}
          {isComplete && (
            <div className="max-w-md mx-auto glass-card p-6 rounded-2xl animate-fade-in border-l-4 border-secondary shadow-xl hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <MessageSquare className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="font-bold mb-3 text-lg">WhatsApp Alert Sent ✓</div>
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-xl text-sm border border-secondary/30">
                    <p className="mb-3 font-medium">"🎉 500kg Potatoes matched with Hadapsar Chip Factory!"</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-secondary text-white rounded-lg text-xs font-medium hover:bg-secondary/90 transition-all">
                        Press 1: Confirm
                      </button>
                      <button className="flex-1 px-3 py-2 bg-muted text-foreground rounded-lg text-xs font-medium hover:bg-muted/80 transition-all">
                        Press 2: Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="text-center mt-8 flex flex-col items-center gap-4">
            <Button 
              size="lg"
              onClick={runDemo}
              disabled={isMatching}
              className="gradient-primary text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isMatching ? (
                <>
                  <span className="animate-pulse">AI Processing...</span>
                </>
              ) : isComplete ? (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Run Demo Again
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Start Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            {isComplete && (
              <Button 
                variant="outline"
                onClick={resetDemo}
                className="text-sm"
              >
                Reset Demo
              </Button>
            )}
          </div>

          {isComplete && (
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-secondary/10 via-primary/10 to-tertiary/10 rounded-2xl max-w-2xl mx-auto animate-fade-in border border-secondary/30 shadow-xl">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">₹25,000</div>
                  <div className="text-xs text-muted-foreground">Money Saved</div>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">500kg</div>
                  <div className="text-xs text-muted-foreground">Waste Prevented</div>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div>
                  <div className="text-3xl font-bold text-tertiary mb-1">1 Farmer</div>
                  <div className="text-xs text-muted-foreground">Protected</div>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">10 Jobs</div>
                  <div className="text-xs text-muted-foreground">Supported</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};