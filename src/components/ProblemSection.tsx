import { useEffect, useRef, useState } from "react";

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-700 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{label}</div>
    </div>
  );
};

export const ProblemSection = () => {
  return (
    <section id="problem-section" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background transition-colors duration-500">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-gradient">₹92,000 Crore</span> Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            India loses more food than most countries produce. Here's the scale of the problem.
          </p>
        </div>

        {/* India map visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsYSgyNDAsNSUsMTAlLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <StatCard value="40%" label="Fruits & vegetables rot before reaching consumers" delay={0} />
              <StatCard value="30-40%" label="Cold storage wastage across India" delay={200} />
              <StatCard value="₹15,000 Cr" label="Lost annually to expiry mismanagement" delay={400} />
              <StatCard value="20-30%" label="Farmer losses due to produce nearing expiry" delay={600} />
            </div>
          </div>
        </div>

        {/* Before/After comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-destructive">Without FreshGuard</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>10M tonnes of food waste annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>₹92,000 crores economic loss</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>20M tonnes CO₂ emissions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">✕</span>
                <span>190M people remain hungry</span>
              </li>
            </ul>
          </div>

          <div className="gradient-success text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">With FreshGuard</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Save 10M tonnes through AI-powered matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Recover ₹2,000-5,000 crores value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Cut 20M tonnes CO₂ emissions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span>Feed 100M people for a month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
