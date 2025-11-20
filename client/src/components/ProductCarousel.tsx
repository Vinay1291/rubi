import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productImage1 from "@assets/generated_images/Product_showcase_web_app_58a137ff.png";
import productImage2 from "@assets/generated_images/Product_showcase_mobile_app_5987525d.png";
import productImage3 from "@assets/generated_images/Product_showcase_cloud_platform_bda89953.png";
import productImage4 from "@assets/generated_images/Product_showcase_ecommerce_ee7d2d39.png";
import productImage5 from "@assets/generated_images/Product_showcase_CRM_system_21121370.png";

const products = [
  {
    image: productImage1,
    name: "Enterprise Web Portal",
    description: "Scalable web applications with modern architecture and intuitive user experience",
  },
  {
    image: productImage2,
    name: "Mobile Business Suite",
    description: "Cross-platform mobile solutions that engage customers and streamline operations",
  },
  {
    image: productImage3,
    name: "Cloud Infrastructure Platform",
    description: "Robust cloud solutions with automated scaling and high availability",
  },
  {
    image: productImage4,
    name: "E-Commerce Solutions",
    description: "Complete online retail platforms with secure payment and inventory management",
  },
  {
    image: productImage5,
    name: "CRM & Analytics System",
    description: "Customer relationship management with powerful analytics and reporting",
  },
  {
    image: productImage1,
    name: "API Gateway Services",
    description: "Secure and scalable API infrastructure for seamless integrations",
  },
];

export default function ProductCarousel() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white via-background to-card"
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Our Product Suite
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight max-w-3xl">
              Purpose-built platforms engineered for modern enterprise needs
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl">
            Every Rubi Technologies solution blends intuitive experience design with robust engineering so your
            teams can move faster with confidence.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          data-testid="carousel-container"
        >
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/60 bg-white/70 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all cardbg"
              data-testid={`product-card-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.3em] bg-white/80 px-3 py-1 rounded-full text-foreground text-primary">
                  Featured
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mt-2">{product.description}</p>
                </div>
                <Button
                  variant="ghost"
                  className="mt-auto w-fit px-0 text-primary hover:text-primary"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
