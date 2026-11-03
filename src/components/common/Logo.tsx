import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'on-navy';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-9 w-auto', variant = 'default' }) => {
  const isNavy = variant === 'on-navy';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Medical Cross & Precision Emblem */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
          isNavy ? 'bg-white shadow-sm' : 'bg-[#04467A]'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Medical Precision Cross */}
          <rect
            x="11"
            y="5"
            width="6"
            height="18"
            rx="1.5"
            fill={isNavy ? '#04467A' : '#FFFFFF'}
          />
          <rect
            x="5"
            y="11"
            width="18"
            height="6"
            rx="1.5"
            fill={isNavy ? '#04467A' : '#FFFFFF'}
          />
          {/* Central Precision Core */}
          <circle
            cx="14"
            cy="14"
            r="2.5"
            fill={isNavy ? '#1E5C94' : '#EAF1FC'}
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight text-[19px] ${
            isNavy ? 'text-white' : 'text-[#0B2343]'
          }`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          RADAMED
        </span>
        <span
          className={`text-[9.5px] font-semibold tracking-wider uppercase mt-0.5 ${
            isNavy ? 'text-slate-300' : 'text-slate-500'
          }`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          PT Rahardia Abadi Medika
        </span>
      </div>
    </div>
  );
};

