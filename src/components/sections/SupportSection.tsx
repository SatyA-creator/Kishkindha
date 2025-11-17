import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

const faqs = [
  {
    question: "What is Kishkindha Kand about?",
    answer: "Kishkindha Kand is an isometric narrative-action adventure that tells the story of two brothers, Vali and Sugriva, divided by misunderstanding. Players experience both perspectives across 20 handcrafted levels, exploring themes of memory, pride, guilt, and forgiveness.",
  },
  {
    question: "What platforms will it be available on?",
    answer: "The game is being developed for PC and will be available on Steam. It's built using Unity Engine.",
  },
  {
    question: "When is the release date?",
    answer: "We're targeting Q1 2027 for the final launch. Alpha and closed playtest are planned for Q4 2026.",
  },
  {
    question: "How can I support the development?",
    answer: "You can wishlist the game on Steam, join our Discord community, subscribe to our newsletter, and share the game with others who might be interested!",
  },
  {
    question: "Will there be multiplayer?",
    answer: "Kishkindha Kand is designed as a single-player narrative experience where you alternate between playing as both brothers.",
  },
  {
    question: "What are the system requirements?",
    answer: "Detailed system requirements will be announced closer to launch. The game is being optimized for a wide range of PC configurations.",
  },
  {
    question: "How faithful is the story to the original Ramayana?",
    answer: "The game is based on Valmiki's Ramayana and has been thoroughly researched to be respectful and emotionally true to the source material while presenting it as an engaging interactive experience.",
  },
];

export const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="support" className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
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
            Support & FAQ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground">
            Find answers to common questions
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-none"
              >
                <ParchmentCard variant="dark" className="hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                  <AccordionTrigger className="text-left font-display text-base sm:text-lg text-primary hover:text-golden hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground pt-2 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </ParchmentCard>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ParchmentCard variant="dark">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-3 sm:mb-4">Contact Us</h3>
            <p className="text-foreground mb-3 sm:mb-4 text-sm sm:text-base px-2">
              Have more questions? We'd love to hear from you.
            </p>
            <a
              href="mailto:info@zenithstudio.live"
              className="text-primary hover:text-golden font-medium transition-colors text-sm sm:text-base break-all"
            >
              info@zenithstudio.live
            </a>
           
          </ParchmentCard>
        </motion.div>
      </div>
    </section>
  );
};
