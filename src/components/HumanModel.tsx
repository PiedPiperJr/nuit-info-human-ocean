'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface HumanModelProps {
  className?: string;
}

export default function HumanModel({ className = '' }: HumanModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Le script sera déjà chargé grâce au composant Script
    const container = containerRef.current;
    if (container && (window as any).initHumanModel) {
      (window as any).initHumanModel(container);
    }
  }, []);

  return (
    <>
      <Script 
        src="/assets/index-D-AlSnTf.js" 
        strategy="afterInteractive"
      />
      <div 
        ref={containerRef} 
        className={`w-full h-full ${className}`}
      />
    </>
  );
}
