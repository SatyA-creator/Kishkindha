import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { ParchmentCard } from "@/components/ui/parchment-card";

export const HeroSection = () => {
  const scrollToMedia = () => {
    const mediaSection = document.getElementById('media');
    if (mediaSection) {
      mediaSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full particle-glow"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-glow jungle-title leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          KISHKINDHA KAND
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary font-semibold mb-3 sm:mb-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovating Games for a Changing World of Players
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-2 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We're not retelling history. We're making it as a new experience.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Every myth ends in a war. Ours ends in understanding.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            className="gradient-gold text-primary-foreground font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:scale-105 transition-transform animate-glow-pulse w-full sm:w-auto"
          >
            <ExternalLink className="mr-2" size={18} />
            Wishlist on Steam
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            onClick={scrollToMedia}
          >
            <Play className="mr-2" size={18} />
            Watch Trailer
          </Button>
        </motion.div>

        {/* Quick Preview Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { title: "Dual Narrative", desc: "Play as both brothers" },
            { title: "Epic Combat", desc: "Tight, weighty melee action" },
            { title: "Authentic Lore", desc: "Based on Valmiki's Ramayana" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <ParchmentCard variant="dark" className="cursor-pointer hover:shadow-xl hover:shadow-golden/20 transition-all duration-500">
                <h3 className="font-display text-primary text-lg sm:text-xl mb-2 group-hover:text-golden transition-colors jungle-text">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm group-hover:text-foreground transition-colors">{item.desc}</p>
              </ParchmentCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
