import React from 'react';
import Image from 'next/image';
import logoImg from './LOGO RADAMED.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'on-navy';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-9 w-auto', variant = 'default' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoImg}
        alt="PT RADAMED - PT Rahardia Abadi Medika"
        priority
        className={`h-9 w-auto object-contain ${variant === 'on-navy' ? 'brightness-105' : ''}`}
      />
    </div>
  );
};
