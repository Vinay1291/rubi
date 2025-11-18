import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Server, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Product Development",
    description: "End-to-end product engineering from ideation to deployment with agile methodologies",
    path: "/services/product-development",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest frameworks and technologies",
    path: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices",
    path: "/services/app-development",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, deployment, and optimization for AWS, Azure, and Google Cloud",
    path: "/services/cloud-services",
  },
  {
    icon: Server,
    title: "Infrastructure Services",
    description: "Robust IT infrastructure design, implementation, and 24/7 monitoring",
    path: "/services/infrastructure",
  },
  {
    icon: Shield,
    title: "IT Security & Managed Services",
    description: "Comprehensive security solutions and proactive IT management for peace of mind",
    path: "/services/security-managed",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Explore Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight max-w-3xl">
              On-demand technology capabilities for your boldest transformations
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl">
            We embed with your teams to ship resilient products, scalable infrastructure, and
            world-class customer experiences.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          data-testid="services-carousel"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card shadow-sm border border-border/70 hover:-translate-y-1 hover:shadow-xl transition-all"
              data-testid={`service-card-${index}`}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon size={28} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="link" className="px-0 text-primary hover:text-primary">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
