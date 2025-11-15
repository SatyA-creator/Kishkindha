import { ChevronRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="
        relative 
        border-t border-border/20 
        py-14 
        bg-gradient-to-b 
        from-[#0e1912] via-[#09130d] to-[#050806]
      "
    >
      {/* Subtle forest glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-green-900/20 to-transparent blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-900/10 blur-2xl rounded-full opacity-30" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-800/10 blur-2xl rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-24 lg:gap-32 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Kishkindha Kand Logo" 
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <h3 className="font-display text-xl md:text-2xl text-primary jungle-text">
                KISHKINDHA KAND
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovating games for a changing world of players.
            </p>
          </div>

          {/* Vision */}
          <div className="pt-6">
            <h4 className="font-display text-lg text-primary mb-4">Our Vision</h4>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              <span className="font-semibold text-foreground">Mission:</span>
              <br />Empowering progress through innovation and integrity.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-semibold text-foreground">Vision:</span>
              <br />Setting a global benchmark for authentic and player-centric experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-6">
            <h4 className="font-display text-lg text-primary mb-4">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Development", href: "#devlog" },
                { label: "Support", href: "#support" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} /> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-8 text-center text-muted-foreground text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Zenith Studio LLC. All rights reserved.
          </p>
          <p className="italic text-foreground/80">
            "To make gameplay a medium to convey truth and authenticity with fun and engagement."
          </p>
        </div>
      </div>
    </footer>
  );
};
