import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-6xl font-bold text-gradient">
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
};

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(25,100%,60%,0.15),transparent_50%)] animate-float" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(140,80%,25%,0.15),transparent_50%)] animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Powered by AI + IoT + Blockchain
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">₹92,000 Crores Wasted.</span>
            <br />
            <span className="text-foreground">190 Million Hungry.</span>
            <br />
            <span className="text-gradient">One AI Solution.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">FreshGuard:</span> Connecting India's Cold Chain to Prevent 10 Million Tonnes of Food Waste
          </p>

          {/* Live counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group border border-primary/10">
              <div className="space-y-2">
                <AnimatedCounter end={45678} suffix=" kg" />
                <p className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">Food Saved Today</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group border border-secondary/10">
              <div className="space-y-2">
                <AnimatedCounter end={1234} />
                <p className="text-sm text-muted-foreground font-medium group-hover:text-secondary transition-colors">Farmers Benefited</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group border border-tertiary/10">
              <div className="space-y-2">
                <AnimatedCounter end={892} suffix=" tonnes" />
                <p className="text-sm text-muted-foreground font-medium group-hover:text-tertiary transition-colors">CO₂ Emissions Prevented</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="gradient-primary text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 relative overflow-hidden group"
              onClick={scrollToDemo}
            >
              <span className="relative z-10">See Live Demo</span>
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
