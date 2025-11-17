import { useEffect, useRef, useState } from "react";

export const GlobalBackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Show video after hero section (start showing when user scrolls)
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > heroHeight * 0.1); // Show when 10% through hero
    };

    // Show video immediately
    setIsVisible(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed inset-0 w-full h-full z-0 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ opacity: 0.8 }}
      >
        <source src="/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Lighter overlay to maintain text readability while showing video */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/30" />
      <div className="absolute inset-0 bg-jungle-green/10" />
    </div>
  );
};