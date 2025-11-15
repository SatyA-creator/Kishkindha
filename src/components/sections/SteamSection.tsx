import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

export const SteamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="steam" className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 sm:w-32 sm:h-32 border border-primary/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: 0.5,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4 sm:mb-6 animate-float" />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6">
            Join the Journey
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Be part of bringing ancient Indian mythology to modern gaming. Wishlist Kishkindha Kand on Steam
            and get notified on launch.
          </p>

          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="gradient-gold text-primary-foreground font-bold px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl hover:scale-110 transition-transform animate-glow-pulse w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 sm:mr-3" size={20} />
              Wishlist on Steam
            </Button>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ParchmentCard variant="primary">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Early supporters will receive:</p>
              <ul className="text-foreground/90 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>✦ Day-one launch notification</li>
                <li>✦ Exclusive behind-the-scenes updates</li>
                <li>✦ Priority access to beta testing opportunities</li>
              </ul>
            </ParchmentCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
