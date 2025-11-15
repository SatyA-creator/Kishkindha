import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swords, Users, Flame, Shield, Zap, Target } from "lucide-react";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

const features = [
  {
    icon: Users,
    title: "Dual Narrative Play",
    desc: "One conflict, two perspectives. Experience moral dilemmas through both protagonists' eyes",
  },
  {
    icon: Swords,
    title: "Tight Combat System",
    desc: "Weighty melee inspired by Hades and God of War (2018). One weapon: The Mace",
  },
  {
    icon: Flame,
    title: "Authentic Canon",
    desc: "Based on Valmiki's Ramayana—researched, respectful, emotionally true",
  },
  {
    icon: Target,
    title: "Action Packed",
    desc: "Fight 3 main bosses, several sub-bosses, and different enemy types",
  },
  {
    icon: Zap,
    title: "12 Unique Abilities",
    desc: "2 active abilities switchable between 12 total - create your own playstyle",
  },
  {
    icon: Shield,
    title: "Core Mechanics",
    desc: "JUMP - EVADE - LIGHT ATTACK - HEAVY ATTACK - CHARACTER SHIFT",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="relative py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6 jungle-title">
            Gameplay Loop
          </h2>
          <p className="text-2xl md:text-3xl font-display text-accent mb-6 jungle-text">
            Fight. Feel. Reflect.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            Isometric narrative-action adventure where players alternate between Vali and Sugriva across
            20 handcrafted levels.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <ParchmentCard variant="dark" className="h-full group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="relative z-10 flex flex-col h-full">
                  <feature.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 group-hover:text-golden transition-all duration-300" />
                  <h3 className="font-display text-xl text-primary mb-4 group-hover:text-golden transition-colors jungle-text">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed flex-grow">
                    {feature.desc}
                  </p>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-transparent" 
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
                    />
                  </div>
                </div>
              </ParchmentCard>
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ParchmentCard variant="primary">
            <h3 className="font-display text-3xl text-primary mb-6 text-center">Target Audience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-primary mb-2">Platform</p>
                <p className="text-foreground/90">PC (Unity Engine)</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Age</p>
                <p className="text-foreground/90">12+</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Genre Appeal</p>
                <p className="text-foreground/90">Indie narrative players and mythic action audiences</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Audience</p>
                <p className="text-foreground/90">All genders, role-playing and action lovers</p>
              </div>
            </div>
          </ParchmentCard>
        </motion.div>
      </div>
    </section>
  );
};
