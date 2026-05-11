import React from 'react';
import logoImg from '../../imgs/logo.webp';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImg} 
        alt="ACELIE Logo" 
        width={size} 
        height={size}
        className="shrink-0 object-contain"
        style={{ height: size, width: 'auto' }}
      />
      {showText && (
        <span className="font-display text-white text-xl tracking-tight hidden sm:block">
          ACELIE
        </span>
      )}
    </div>
  );
}
