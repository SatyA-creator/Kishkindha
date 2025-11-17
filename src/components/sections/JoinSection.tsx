import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageCircle, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ParchmentCard } from "@/components/ui/parchment-card";
import { ForestBackground } from "@/components/ForestBackground";

export const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/subscription/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          preferences: {
            gameUpdates: true,
            betaAccess: true,
            newsletter: true
          },
          metadata: {
            source: 'website',
            campaign: 'join-section'
          }
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "🎮 Welcome to Kishkindha Kand!",
          description: "Check your email for a welcome message with exclusive updates!",
        });
        setEmail("");
      } else {
        // Handle specific error cases
        if (response.status === 409) {
          toast({
            title: "Already Subscribed",
            description: "You're already part of our community! Check your email for updates.",
            variant: "default",
          });
        } else {
          throw new Error(data.message || 'Failed to subscribe');
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact support if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="relative py-16 sm:py-20 md:py-32 gradient-jungle overflow-hidden" ref={ref}>
      {/* Forest Background */}
      <ForestBackground variant="dark" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-8 sm:mb-12">
            Let's create something amazing together
          </p>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <ParchmentCard variant="dark">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-display text-xl sm:text-2xl text-primary mb-3 sm:mb-4">Stay Updated</h3>
              <p className="text-foreground mb-4 sm:mb-6 text-sm sm:text-base px-2">
                Get exclusive development updates, behind-the-scenes content, and early access opportunities
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background border-primary/30 focus:border-primary text-sm sm:text-base"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="gradient-gold text-primary-foreground font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </ParchmentCard>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display text-xl sm:text-2xl text-primary mb-4 sm:mb-6">Connect With Us</h3>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              {[
                { icon: MessageCircle, label: "Discord", color: "hover:text-[#5865F2]" },
                { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
                { icon: Youtube, label: "YouTube", color: "hover:text-[#FF0000]" },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex-1 min-w-[120px] max-w-[150px]"
                >
                  <ParchmentCard variant="dark" className={`cursor-pointer hover:shadow-xl transition-all ${social.color}`}>
                    <social.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                    <span className="text-xs sm:text-sm font-medium">{social.label}</span>
                  </ParchmentCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
