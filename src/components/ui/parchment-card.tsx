import React from 'react';

interface ParchmentCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'primary';
}

export const ParchmentCard: React.FC<ParchmentCardProps> = ({ 
  children, 
  className = "",
  variant = 'light'
}) => {
  const bgColors = {
    light: 'bg-[#f5f1e8]',
    dark: 'bg-[#2a2520]',
    primary: 'bg-gradient-to-br from-jungle-green/40 to-background/60'
  };

  const textColors = {
    light: 'text-gray-900',
    dark: 'text-foreground',
    primary: 'text-foreground'
  };

  return (
    <div className={`relative ${className}`}>
      {/* SVG for torn edges */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <defs>
          {/* Top edge pattern */}
          <pattern id="torn-top" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
            <path 
              d="M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10" 
              fill={variant === 'light' ? '#f5f1e8' : variant === 'dark' ? '#2a2520' : 'hsl(var(--jungle-green))'}
              opacity="0.9"
            />
          </pattern>
          
          {/* Bottom edge pattern */}
          <pattern id="torn-bottom" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
            <path 
              d="M0,10 Q5,15 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10" 
              fill={variant === 'light' ? '#f5f1e8' : variant === 'dark' ? '#2a2520' : 'hsl(var(--jungle-green))'}
              opacity="0.9"
            />
          </pattern>
        </defs>
        
        {/* Top torn edge */}
        <rect width="100%" height="15" fill="url(#torn-top)" />
        
        {/* Bottom torn edge */}
        <rect y="calc(100% - 15px)" width="100%" height="15" fill="url(#torn-bottom)" />
      </svg>

      {/* Main content container */}
      <div 
        className={`relative ${bgColors[variant]} ${textColors[variant]} shadow-2xl`}
        style={{
          clipPath: 'polygon(0 1%, 2% 0, 5% 1%, 8% 0, 11% 1%, 14% 0, 17% 1%, 20% 0, 23% 1%, 26% 0, 29% 1%, 32% 0, 35% 1%, 38% 0, 41% 1%, 44% 0, 47% 1%, 50% 0, 53% 1%, 56% 0, 59% 1%, 62% 0, 65% 1%, 68% 0, 71% 1%, 74% 0, 77% 1%, 80% 0, 83% 1%, 86% 0, 89% 1%, 92% 0, 95% 1%, 98% 0, 100% 1%, 100% 99%, 98% 100%, 95% 99%, 92% 100%, 89% 99%, 86% 100%, 83% 99%, 80% 100%, 77% 99%, 74% 100%, 71% 99%, 68% 100%, 65% 99%, 62% 100%, 59% 99%, 56% 100%, 53% 99%, 50% 100%, 47% 99%, 44% 100%, 41% 99%, 38% 100%, 35% 99%, 32% 100%, 29% 99%, 26% 100%, 23% 99%, 20% 100%, 17% 99%, 14% 100%, 11% 99%, 8% 100%, 5% 99%, 2% 100%, 0 99%)'
        }}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4' /%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Inner border */}
        <div className="absolute inset-2 border border-current opacity-10 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
