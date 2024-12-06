'use client';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import HumanModel from '@/components/HumanModel';

export default function ExplorerPage() {
  const [showHumanSystem, setShowHumanSystem] = useState(false);

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Image de fond */}
        <Image
          src="/ocean-bg.jpg"
          alt="Ocean background"
          fill
          className="object-cover"
          priority
        />
        {/* Dégradés par-dessus l'image */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-blue-900/50"></div>
        {/* Vagues animées */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave-slow opacity-50 -scale-x-100"></div>
      </div>

      <div className="min-h-screen text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Parallelisme</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Et si l'Océan était un Humain?
            </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Bloc système océanique */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 h-[500px]">
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-4">Système Océanique</h2>
                  <div className="flex-1 relative overflow-hidden rounded-xl">
                    {/* Ici nous pouvons ajouter une autre visualisation pour l'océan */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bloc système humain */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 h-[500px]">
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Système Humain</h2>
                  <div className="flex-1 relative overflow-hidden rounded-xl">
                    <HumanModel className="absolute inset-0" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* Section de description */}
          <div className="mt-12 md:mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-blue-400">Comprendre les Connexions</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              Découvrez comment le corps humain et l'océan partagent des mécanismes similaires pour maintenir l'équilibre et la vie.
              Explorez les parallèles fascinants entre ces deux systèmes complexes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
