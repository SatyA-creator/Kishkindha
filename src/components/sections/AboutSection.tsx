import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ForestBackground } from "@/components/ForestBackground";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden min-h-screen"
      ref={ref}
    >
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      {/* Vali Image (Left side) - Mobile version */}
      <motion.img
        src="/1.png"
        alt="Adult Vali"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "-20%", opacity: 0.6 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="block sm:hidden absolute left-0 bottom-0 h-[50vh] w-auto object-contain object-bottom select-none pointer-events-none z-20"
      />

      {/* Sugriva Image (Right side) - Mobile version */}
      <motion.img
        src="/2.png"
        alt="Adult Sugreev"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: "20%", opacity: 0.6 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="block sm:hidden absolute right-0 bottom-0 h-[50vh] w-auto object-contain object-bottom select-none pointer-events-none z-20"
      />

      {/* Vali Image (Left side) - Desktop version */}
      <motion.img
        src="/1.png"
        alt="Adult Vali"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "-35%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden sm:block absolute left-0 bottom-0 h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] w-auto object-contain object-bottom select-none pointer-events-none z-30"
        style={{ maxHeight: 'none' }}
      />

      {/* Sugriva Image (Right side) - Desktop version */}
      <motion.img
        src="/2.png"
        alt="Adult Sugreev"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: "35%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden sm:block absolute right-0 bottom-0 h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] w-auto object-contain object-bottom select-none pointer-events-none z-30"
        style={{ maxHeight: 'none' }}
      />

      {/* Center Content */}
      <div className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-10 md:pt-20">
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8 jungle-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          The Vision
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Vali and Sugriva—brothers, kings, and reflections of each other. Bound by love. Divided by a
          single moment of fear. The game lets you live both their stories to see how two versions of
          truth and misunderstanding can destroy a kingdom. You don't play heroes. You play memory,
          pride, guilt, and forgiveness.
        </motion.p>
      </div>
    </section>
  );
};
