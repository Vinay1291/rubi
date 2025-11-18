import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";
import heroImage1 from "@assets/generated_images/Hero_slide_1_tech_workspace_1b60ba7a.png";
import heroImage2 from "@assets/generated_images/Hero_slide_2_cloud_infrastructure_792fcb16.png";
import heroImage3 from "@assets/generated_images/Hero_slide_3_product_engineering_887d6a3f.png";

const slides = [
  {
    image: heroImage1,
    headline: "Transform Your Business with Smart IT Solutions",
    tagline:
      "Enterprise-grade technology services that drive innovation and growth for modern businesses",
    cta1: "Get Started",
    cta2: "Read More",
  },
  {
    image: heroImage2,
    headline: "Cloud-First Digital Transformation",
    tagline:
      "Seamlessly migrate and scale your infrastructure with our cutting-edge cloud solutions",
    cta1: "Get Started",
    cta2: "Read More",
  },
  {
    image: heroImage3,
    headline: "Build Tomorrow's Products Today",
    tagline:
      "Full-stack product engineering and development services from concept to deployment",
    cta1: "Get Started",
    cta2: "Read More",
  },
];

const heroStats = [
  { label: "Years of Excellence", value: "12+" },
  { label: "Projects Delivered", value: "350+" },
  { label: "Active Clients", value: "120+" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handlePrimaryCta = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryCta = () => {
    setIsContactModalOpen(true);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden" data-testid="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-3xl">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                data-testid={`hero-headline-${index}`}
              >
                {slide.headline}
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                data-testid={`hero-tagline-${index}`}
              >
                {slide.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button
                    size="lg"
                    onClick={handlePrimaryCta}
                    className="flex-1 bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
                    data-testid="button-explore-services"
                  >
                    {slide.cta1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleSecondaryCta}
                    className="flex-1 border-primary/40 text-primary bg-background/70 backdrop-blur-sm hover:bg-primary/10"
                    data-testid="button-talk-to-expert"
                  >
                    {slide.cta2}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-6">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="min-w-[120px]">
                      <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                      <p className="text-sm uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
        data-testid="button-prev-slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
        data-testid="button-next-slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
}
