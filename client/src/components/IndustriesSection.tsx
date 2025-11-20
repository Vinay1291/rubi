import { useState } from "react";
import { 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const industries = [
  { 
    icon: Heart, 
    name: "Healthcare", 
    description: "HIPAA-compliant platforms, telemedicine solutions, and patient data management systems.",
    services: ["EHR Integration", "Telehealth Platforms", "HIPAA Compliance"],
    accent: "text-red-500",
    bg: "from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30",
    border: "border-red-200 dark:border-red-800"
  },
  { 
    icon: DollarSign, 
    name: "Finance", 
    description: "Secure banking systems, fintech applications, and regulatory compliance solutions.",
    services: ["Banking Systems", "Fintech Apps", "Regulatory Compliance"],
    accent: "text-blue-500",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
    border: "border-blue-200 dark:border-blue-800"
  },
  { 
    icon: ShoppingCart, 
    name: "Retail", 
    description: "E-commerce platforms, inventory management, and omnichannel customer experiences.",
    services: ["E-commerce", "Inventory Management", "Omnichannel"],
    accent: "text-green-500",
    bg: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
    border: "border-green-200 dark:border-green-800"
  },
  { 
    icon: Factory, 
    name: "Manufacturing", 
    description: "IoT integration, supply chain optimization, and industrial automation systems.",
    services: ["IoT Integration", "Supply Chain", "Automation"],
    accent: "text-amber-500",
    bg: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
    border: "border-amber-200 dark:border-amber-800"
  },
  { 
    icon: GraduationCap, 
    name: "Education", 
    description: "Learning management systems, student portals, and educational analytics platforms.",
    services: ["LMS Platforms", "Student Portals", "Analytics"],
    accent: "text-purple-500",
    bg: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
    border: "border-purple-200 dark:border-purple-800"
  },
  { 
    icon: Building2, 
    name: "Government", 
    description: "Citizen portals, digital governance, and secure public sector infrastructure.",
    services: ["Citizen Portals", "Digital Governance", "Security"],
    accent: "text-indigo-500",
    bg: "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
    border: "border-indigo-200 dark:border-indigo-800"
  },
];

const metrics = [
  { label: "Employees", value: "150+", icon: "👥" },
  { label: "Years Experience", value: "12+", icon: "⭐" },
  { label: "Satisfied Clients", value: "120+", icon: "💼" },
  { label: "Projects Delivered", value: "350+", icon: "🚀" },
];

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-card/50" data-testid="industries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            Sector-specific expertise rooted in real-world delivery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We translate domain complexity into digital clarity for enterprises spanning regulated,
            consumer, and public environments.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${industry.bg} border-2 ${industry.border} transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer overflow-hidden`}
                data-testid={`industry-${index}`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                    <Icon size={28} className={industry.accent} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 mb-4">
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className={industry.accent} />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className={`flex items-center gap-2 text-sm font-medium ${industry.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span>Learn more</span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl shadow-lg">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label} 
                className="text-center space-y-2 sm:space-y-3 group"
              >
                <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
