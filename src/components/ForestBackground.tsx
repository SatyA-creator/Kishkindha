import { motion } from "framer-motion";

interface ForestBackgroundProps {
  variant?: "dark" | "light";
}

export const ForestBackground = ({ variant = "dark" }: ForestBackgroundProps) => {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layered Forest Silhouettes */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-15'}`}>
        {/* Back layer - distant trees */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[40%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <svg
            viewBox="0 0 1200 300"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="tree-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 36%, 12%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(150, 36%, 17%)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Distant tree line */}
            <path
              d="M0,200 Q50,180 100,200 T200,200 T300,200 T400,200 T500,200 T600,200 T700,200 T800,200 T900,200 T1000,200 T1100,200 T1200,200 L1200,300 L0,300 Z"
              fill="url(#tree-gradient-1)"
            />
          </svg>
        </motion.div>

        {/* Middle layer - medium trees */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[55%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <svg
            viewBox="0 0 1200 400"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="tree-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 36%, 15%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(150, 36%, 20%)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {/* Medium tree silhouettes */}
            <path
              d="M0,250 L50,250 L60,180 L55,250 L80,250 L90,160 L85,250 L120,250 L135,140 L125,250 L170,250 L185,170 L175,250 L220,250 L235,150 L225,250 L280,250 L295,180 L285,250 L340,250 L355,160 L345,250 L400,250 L415,140 L405,250 L460,250 L475,170 L465,250 L520,250 L535,150 L525,250 L580,250 L595,180 L585,250 L640,250 L655,160 L645,250 L700,250 L715,140 L705,250 L760,250 L775,170 L765,250 L820,250 L835,150 L825,250 L880,250 L895,180 L885,250 L940,250 L955,160 L945,250 L1000,250 L1015,140 L1005,250 L1060,250 L1075,170 L1065,250 L1120,250 L1135,150 L1125,250 L1200,250 L1200,400 L0,400 Z"
              fill="url(#tree-gradient-2)"
            />
          </svg>
        </motion.div>

        {/* Front layer - close trees */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[70%]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <svg
            viewBox="0 0 1200 500"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="tree-gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 36%, 17%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(150, 36%, 22%)" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            {/* Front tree silhouettes with more detail */}
            <path
              d="M0,300 L30,300 L40,200 L35,300 L60,300 L70,180 L65,300 L100,300 L115,160 L105,300 L150,300 L165,220 L155,300 L200,300 L215,190 L205,300 L260,300 L275,210 L265,300 L320,300 L335,180 L325,300 L380,300 L395,200 L385,300 L440,300 L455,170 L445,300 L500,300 L515,190 L505,300 L560,300 L575,210 L565,300 L620,300 L635,180 L625,300 L680,300 L695,200 L685,300 L740,300 L755,170 L745,300 L800,300 L815,190 L805,300 L860,300 L875,210 L865,300 L920,300 L935,180 L925,300 L980,300 L995,200 L985,300 L1040,300 L1055,170 L1045,300 L1100,300 L1115,190 L1105,300 L1160,300 L1175,210 L1165,300 L1200,300 L1200,500 L0,500 Z"
              fill="url(#tree-gradient-3)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated fireflies/particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating leaves */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-20 + Math.random() * 20}%`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      {/* Subtle vines overlay */}
      <div className="absolute top-0 left-0 right-0 h-[30%] opacity-10">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q30,50 60,30 T120,40 T180,20 T240,35 T300,25 T360,40 T420,20 T480,35 T540,25 T600,40 T660,20 T720,35 T780,25 T840,40 T900,20 T960,35 T1020,25 T1080,40 T1140,20 L1200,0 L1200,0 L0,0 Z"
            fill="hsl(150, 36%, 17%)"
            opacity="0.3"
          />
          {/* Hanging vines */}
          <path
            d="M100,0 Q95,30 100,60 T100,120"
            stroke="hsl(150, 36%, 17%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M300,0 Q305,25 300,50 T300,100"
            stroke="hsl(150, 36%, 17%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M600,0 Q595,35 600,70 T600,140"
            stroke="hsl(150, 36%, 17%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M900,0 Q905,28 900,56 T900,112"
            stroke="hsl(150, 36%, 17%)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Ambient light rays */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-32 h-full bg-gradient-to-b from-primary/30 to-transparent"
            style={{
              left: `${i * 20 + 10}%`,
              transform: "skewX(-15deg)",
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
