'use client';

import React from 'react';
import Image from 'next/image';

const FishBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Première rangée de poissons */}
      <div className="fish-row" style={{ top: '20%' }}>
        <div className="fish fish-1">
          <Image src="/fish.svg" alt="fish" width={100} height={50} className="opacity-30" />
        </div>
        <div className="fish fish-2">
          <Image src="/fish.svg" alt="fish" width={80} height={40} className="opacity-20" />
        </div>
        <div className="fish fish-3">
          <Image src="/fish.svg" alt="fish" width={120} height={60} className="opacity-25" />
        </div>
      </div>

      {/* Deuxième rangée de poissons */}
      <div className="fish-row" style={{ top: '50%' }}>
        <div className="fish fish-4">
          <Image src="/fish.svg" alt="fish" width={90} height={45} className="opacity-20" />
        </div>
        <div className="fish fish-5">
          <Image src="/fish.svg" alt="fish" width={110} height={55} className="opacity-30" />
        </div>
        <div className="fish fish-6">
          <Image src="/fish.svg" alt="fish" width={70} height={35} className="opacity-15" />
        </div>
      </div>

      {/* Troisième rangée de poissons */}
      <div className="fish-row" style={{ top: '80%' }}>
        <div className="fish fish-7">
          <Image src="/fish.svg" alt="fish" width={100} height={50} className="opacity-25" />
        </div>
        <div className="fish fish-8">
          <Image src="/fish.svg" alt="fish" width={85} height={42} className="opacity-20" />
        </div>
        <div className="fish fish-9">
          <Image src="/fish.svg" alt="fish" width={95} height={47} className="opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default FishBackground;
