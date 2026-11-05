import React from 'react';
import Link from 'next/link';
import {
  PortableText as BasePortableText,
  type PortableTextComponents,
} from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-600 leading-relaxed mb-4 font-normal text-base">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1
        className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mt-8 mb-4"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mt-6 mb-3"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mt-5 mb-2.5"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#04467A] pl-4 py-1 italic text-slate-700 my-4 bg-[#F5F8FD] rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 text-base leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2 text-slate-600 text-base leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      return (
        <Link
          href={value?.href || '#'}
          target={target}
          rel={rel}
          className="text-[#04467A] font-medium underline underline-offset-4 decoration-[#04467A]/30 hover:decoration-[#04467A] transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

interface PortableTextProps {
  value: PortableTextBlock[] | PortableTextBlock | null | undefined;
  className?: string;
}

export function PortableText({ value, className = '' }: PortableTextProps) {
  if (!value) return null;

  return (
    <div className={`prose-clean ${className}`}>
      <BasePortableText value={value} components={components} />
    </div>
  );
}
