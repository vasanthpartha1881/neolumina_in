import React from "react";

interface HeroBannerProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroBanner({ children, className = '' }: HeroBannerProps) {
  return (
    <div className={`w-full relative ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hero-home-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        {children}
      </div>
    </div>
  );
} 