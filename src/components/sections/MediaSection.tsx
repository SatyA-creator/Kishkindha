import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

export const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ Replace with your own image filenames placed in /public/screenshots/
  const images = [
    "/IMG_0635.PNG",
    "/IMG_0636.PNG",
    "/IMG_0649.PNG",
    "/IMG_0650.PNG",
    "/IMG_0659.PNG",
    "/IMG_0692.PNG",
    "/IMG_0694.PNG",
  ];

  return (
    <section id="media" className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 jungle-title">
            Experience Kishkindha
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm italic">
            Images are from engine and alpha build
          </p>
        </motion.div>

        {/* 🎥 Trailer Video */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ParchmentCard
            variant="dark"
            className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
          >
            <div className="aspect-video -m-6 md:-m-8">
             <video 
  className="w-full h-full object-cover"
  src="/trailer-1.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline 
/>

            </div>
          </ParchmentCard>
        </motion.div>

        {/* 🖼️ Screenshot / Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ParchmentCard
                      variant="dark"
                      className="group cursor-pointer hover:shadow-xl hover:shadow-golden/20 transition-all duration-500"
                    >
                      <div className="aspect-video relative overflow-hidden -m-6 md:-m-8">
                        <img
                          src={src}
                          alt={`Kishkindha Scene ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
                      </div>
                    </ParchmentCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>

        <p className="text-center text-muted-foreground mt-6 sm:mt-8 text-xs sm:text-sm px-4">
          More gameplay footage and screenshots coming soon as development progresses
        </p>
      </div>
    </section>
  );
};
