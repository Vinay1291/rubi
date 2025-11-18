import { useState, useEffect, useRef } from "react";
import { SiAdobe, SiAutodesk, SiOracle, SiSap, SiCisco, SiDell, SiHp, SiLenovo, SiVmware, SiAmazon, SiIntel, SiNvidia } from "react-icons/si";

const clients = [
  { icon: SiIntel, name: "Intel" },
  { icon: SiAdobe, name: "Adobe" },
  { icon: SiAutodesk, name: "Autodesk" },
  { icon: SiNvidia, name: "NVIDIA" },
  { icon: SiOracle, name: "Oracle" },
  { icon: SiSap, name: "SAP" },
  { icon: SiCisco, name: "Cisco" },
  { icon: SiDell, name: "Dell" },
  { icon: SiHp, name: "HP" },
  { icon: SiLenovo, name: "Lenovo" },
  { icon: SiVmware, name: "VMware" },
  { icon: SiAmazon, name: "AWS" },
];

export default function ClientsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovered && scrollRef.current) {
      const interval = setInterval(() => {
        const maxScroll = scrollRef.current!.scrollWidth - scrollRef.current!.clientWidth;
        setScrollPosition((prev) => {
          const newPos = prev + 1;
          return newPos >= maxScroll ? 0 : newPos;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section id="clients" className="py-20 bg-card" data-testid="clients-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Clients & Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-testid="clients-carousel"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 rounded-lg hover-elevate active-elevate-2 transition-all group cursor-pointer flex-shrink-0 w-48"
              data-testid={`client-${index}`}
            >
              <client.icon
                size={80}
                className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
