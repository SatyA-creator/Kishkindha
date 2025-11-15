import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users } from "lucide-react";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

const timeline = [
  { period: "Current", status: "Prototype stage with 8-member team", progress: 100 },
  { period: "Q1 2026", status: "Full production (20 levels)", progress: 0 },
  { period: "Q4 2026", status: "Alpha & Closed Playtest", progress: 0 },
  { period: "Q1 2027", status: "Final Launch", progress: 0 },
];

// const teamMembers = [
//   { role: "Lead Game Designer", name: "Ayush Parganiha" },
//   { role: "3D Artist", name: "Vaishnav Bhalerao" },
//   { role: "2D Concept Artist", name: "Ritika Dua" },
//   { role: "Developer", name: "Kunal" },
//   { role: "Technical Artist", name: "Ronik" },
//   { role: "Animator", name: "Uzma Aftab" },
//   { role: "Music Composer", name: "Adarsh // DJ Cazpie" },
// ];

export const DevlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="devlog" className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6">
            Development Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto px-4">
            Follow our progress as we bring Kishkindha Kand to life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 space-y-3 sm:space-y-4">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <ParchmentCard variant="dark" className="group cursor-pointer hover:shadow-xl hover:shadow-golden/20 transition-all duration-500">
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
                  <div className="absolute left-1 sm:left-1.5 top-6 sm:top-8 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-golden" />
                      <span className="font-display text-lg sm:text-xl text-golden tracking-wider">{item.period}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                  <p className="text-foreground/90 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.status}</p>
                  <div className="w-full bg-muted/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <motion.div
                      className="h-full gradient-gold"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                </div>
              </ParchmentCard>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-3 sm:mb-4">
              Zenith Studio LLC
            </h3>
            <p className="text-foreground/90 max-w-2xl mx-auto px-4 text-sm sm:text-base">
              A compact, focused, multi-disciplinary team led by a designer moving with a singular vision
              of making games meaningful and satisfying
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <ParchmentCard variant="dark" className="h-full text-center hover:shadow-xl hover:shadow-golden/20 transition-all duration-500">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary via-golden to-crimson rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl shadow-primary/20 group-hover:shadow-golden/40 transition-shadow">
                      <span className="text-3xl font-display text-primary-foreground">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-primary font-semibold mb-2 group-hover:text-golden transition-colors text-sm uppercase tracking-wide">{member.role}</p>
                    <p className="text-foreground/90">{member.name}</p>
                  </div>
                </ParchmentCard>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
