import { Heart, DollarSign, ShoppingCart, Factory, GraduationCap, Building2 } from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", accent: "text-chart-1", bg: "from-[#fef3f2] to-[#fdecef]" },
  { icon: DollarSign, name: "Finance", accent: "text-chart-2", bg: "from-[#eef4ff] to-[#e3edff]" },
  { icon: ShoppingCart, name: "Retail", accent: "text-chart-3", bg: "from-[#ecfdf3] to-[#e1fbf3]" },
  { icon: Factory, name: "Manufacturing", accent: "text-chart-4", bg: "from-[#fff7e6] to-[#fff1d6]" },
  { icon: GraduationCap, name: "Education", accent: "text-chart-5", bg: "from-[#f1edff] to-[#ebe6ff]" },
  { icon: Building2, name: "Government", accent: "text-chart-1", bg: "from-[#f0f9ff] to-[#e1f2ff]" },
];

const metrics = [
  { label: "Employees", value: "150+" },
  { label: "Years Experience", value: "12+" },
  { label: "Satisfied Clients", value: "120+" },
  { label: "Projects Delivered", value: "350+" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-card" data-testid="industries-section">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Industries We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Sector-specific expertise rooted in real-world delivery
          </h2>
          <p className="text-lg text-muted-foreground">
            We translate domain complexity into digital clarity for enterprises spanning regulated,
            consumer, and public environments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br ${industry.bg} border border-white/60 shadow-sm hover:-translate-y-1 transition-all`}
              data-testid={`industry-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-4">
                <industry.icon size={24} className={industry.accent} />
              </div>
              <p className="text-lg font-semibold text-foreground">{industry.name}</p>
              <span className="mt-2 inline-block w-10 border-b-2 border-primary"></span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border/70 rounded-2xl p-6 bg-white/80 shadow-sm">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center space-y-1">
              <p className="text-3xl font-semibold text-primary">{metric.value}</p>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
