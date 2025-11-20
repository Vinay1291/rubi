import aboutImage from "@assets/generated_images/About_section_team_photo_a8cc34d2.png";

const differentiators = [
  "Hybrid squads of designers, engineers, and product strategists",
  "Modular delivery model that de-risks large transformation",
  "Obsessive focus on measurable outcomes and adoption",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl shadow-primary/10">
              <img
                src={aboutImage}
                alt="Rubi Technologies team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">About Rubi Technologies</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Building technology that keeps pace with ambitious leaders
            </h2>
            <p className="text-lg text-foreground">
              We are a team of builders, analysts, and reliability experts who turn corporate
              strategies into scalable digital ecosystems. Every engagement blends research-backed UX,
              cloud-native engineering, and relentless program governance.
            </p>
            <p className="text-muted-foreground">
              Since 2013, Rubi Technologies has partnered with enterprises across finance,
              manufacturing, public sector, and consumer brands to modernize products and core
              systems. Our distributed delivery model keeps work close to stakeholders while tapping
              global expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Why teams choose us</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {differentiators.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/80 p-6 bg-white/70 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Client perspective</h3>
                <blockquote className="text-muted-foreground italic">
                  “Rubi orchestrated our cloud migration without disrupting operations. Their cadence
                  and quality obsessively matched our standards.”
                </blockquote>
                <p className="mt-4 text-sm font-medium text-foreground">CTO, Global Logistics Firm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
