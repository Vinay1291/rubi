import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";
import heroImage1 from "@assets/generated_images/Hero_slide_1_tech_workspace_1b60ba7a.png";
import heroImage2 from "@assets/generated_images/Hero_slide_2_cloud_infrastructure_792fcb16.png";
import heroImage3 from "@assets/generated_images/Hero_slide_3_product_engineering_887d6a3f.png";

const slides = [
  {
    badge: "technology",
    image: heroImage1,
    headline: "Transform Your Business with Smart IT Solutions",
    tagline:
      "Enterprise-grade services blending cloud, AI, and product engineering to accelerate growth.",
    cta1: "Get Started",
    cta2: "Talk to Experts",
    points: ["AI-driven automation", "Product engineering pods", "CX design studios"],
  },
  {
    badge: "cloud native",
    image: heroImage2,
    headline: "Cloud-First Digital Transformation",
    tagline:
      "Modernize infrastructure with battle-tested migration playbooks and 24/7 SRE support.",
    cta1: "Plan Migration",
    cta2: "View Case Studies",
    points: ["Landing zones on AWS/Azure", "Observability blueprints", "Zero-downtime rollouts"],
  },
  {
    badge: "product labs",
    image: heroImage3,
    headline: "Build Tomorrow's Products Today",
    tagline:
      "From discovery to launch—dedicated teams deliver delightful apps, platforms, and ecosystems.",
    cta1: "Launch Sprint",
    cta2: "Schedule Demo",
    points: ["Full-stack squads", "UX research & motion", "Secure DevOps automation"],
  },
];

const heroStats = [
  { label: "Years of Excellence", value: "12+" },
  { label: "Projects Delivered", value: "350+" },
  { label: "Active Clients", value: "120+" },
];

function AnimatedHeadline({
  text,
  slideIndex,
}: {
  text: string;
  slideIndex: number;
}) {
  return (
    <>
      {text.split(" ").map((word, idx) => (
        <span
          key={`${slideIndex}-${idx}-${word}`}
          className="hero-word"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          {word}
        </span>
      ))}
    </>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const activeSlide = slides[currentSlide];

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
    <section
      id="home"
      className="relative min-h-[640px] md:h-screen overflow-hidden bg-background"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.15,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.headline} className="relative w-full flex-shrink-0 h-full">
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-background via-background to-background/95" />

      <div className="relative z-10 h-full hidden md:block">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center">
          <div className="w-full space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {activeSlide.badge}
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight flex flex-wrap gap-3"
              data-testid={`hero-headline-${currentSlide}`}
            >
              <AnimatedHeadline text={activeSlide.headline} slideIndex={currentSlide} />
            </h1>

            <p
              key={currentSlide}
              className="hero-tagline text-lg md:text-xl text-muted-foreground max-w-3xl"
              data-testid={`hero-tagline-${currentSlide}`}
            >
              {activeSlide.tagline}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-3xl">
              {activeSlide.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 flex items-center gap-3 backdrop-blur-sm hero-word"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(0,0,0,0.25)]" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handlePrimaryCta}
                  className="flex-1 bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90"
                  data-testid="button-explore-services"
                >
                  {activeSlide.cta1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleSecondaryCta}
                  className="flex-1 border-primary/40 text-primary bg-background/70 backdrop-blur-sm hover:bg-primary/10"
                  data-testid="button-talk-to-expert"
                >
                  {activeSlide.cta2}
                </Button>
              </div>

              <div className="flex flex-wrap gap-6">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[140px] rounded-2xl border border-border/60 bg-background/60 px-5 py-4 backdrop-blur hero-word"
                  >
                    <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
        data-testid="button-prev-slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
        data-testid="button-next-slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="hidden md:block absolute bottom-8 left-0 right-0 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-10 bg-primary" : "w-2 bg-muted/70"
                }`}
                data-testid={`slide-indicator-${index}`}
              />
            ))}
          </div>
          <div className="text-sm font-mono text-muted-foreground">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative z-10 px-4 pt-24 pb-12">
        <div className="rounded-[32px] border border-border/60 bg-background/90 shadow-2xl backdrop-blur-lg overflow-hidden">
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={activeSlide.image}
              alt={activeSlide.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
              {activeSlide.badge}
            </div>
          </div>

          <div className="space-y-5 px-5 pb-6 pt-5">
            <h2
              className="text-3xl font-semibold text-foreground leading-snug flex flex-wrap gap-2"
              data-testid="hero-mobile-headline"
            >
              <AnimatedHeadline text={activeSlide.headline} slideIndex={currentSlide} />
            </h2>

            <p
              key={`mobile-${currentSlide}`}
              className="hero-tagline text-base text-muted-foreground"
              data-testid="hero-mobile-tagline"
            >
              {activeSlide.tagline}
            </p>

            <div className="space-y-3">
              {activeSlide.points.map((point) => (
                <div
                  key={`mobile-point-${point}`}
                  className="rounded-2xl border border-border/50 bg-background/80 px-4 py-3 flex items-center gap-3 text-sm font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,0,0,0.25)]" />
                  {point}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button
                size="lg"
                onClick={handlePrimaryCta}
                className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90"
              >
                {activeSlide.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleSecondaryCta}
                className="w-full border-primary/40 text-primary bg-background/80 backdrop-blur-sm hover:bg-primary/10"
              >
                {activeSlide.cta2}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {heroStats.map((stat) => (
                <div
                  key={`mobile-stat-${stat.label}`}
                  className="rounded-2xl border border-border/70 bg-background/70 px-3 py-3 text-center"
                >
                  <p className="text-xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/80 shadow hover:bg-background"
            data-testid="button-mobile-prev"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="flex gap-2 flex-1 justify-center">
            {slides.map((_, index) => (
              <button
                key={`mobile-indicator-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted/70"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/80 shadow hover:bg-background"
            data-testid="button-mobile-next"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
}
