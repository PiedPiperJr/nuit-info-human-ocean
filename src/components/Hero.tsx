'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import FishBackground from './FishBackground';

export default function Hero() {
  const [jingleAudio] = useState(() => new Audio('/jingle_final.mp3'));
  const [podcastAudio] = useState(() => new Audio('/podcast.mp3'));
  const [userInteracted, setUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
      jingleAudio.play().catch(() => {
        console.error("Le jingle n'a pas pu être lu immédiatement.");
      });
    }
  };

  const handleJingleClick = () => {
    if (jingleAudio.paused) {
      jingleAudio.play();
    } else {
      jingleAudio.pause();
    }
  };

  const handlePodcastClick = () => {
    if (podcastAudio.paused) {
      podcastAudio.play();
    } else {
      podcastAudio.pause();
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onClick={handleUserInteraction} // Capture une interaction utilisateur
    >
      {/* Background avec dégradé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-900/80 to-blue-900/60"></div>
      </div>

      {/* Animation des poissons */}
      <FishBackground />

      {/* Vagues animées */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave-slow opacity-50 -scale-x-100"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block">Découvrez le lien entre</span>
          <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            l'Océan et Vous
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Une expérience interactive pour comprendre les parallèles fascinants entre l'océan et le corps humain
        </p>

        {/* Boutons CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#explorer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span>Explorer maintenant</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#podcast"
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:bg-white/10 transition-all hover:border-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span>En savoir plus</span>
          </Link>
        </div>

        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '71%', label: 'de la surface terrestre est couverte par les océans' },
            { number: '50%', label: "de l'oxygène provient des océans" },
            { number: '97%', label: "de l'eau sur Terre est dans les océans" }
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 transform hover:scale-105 transition-all"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/90 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Icônes audio */}
      <div className="absolute bottom-12 right-4 flex flex-col gap-2">
      <div className="absolute -top-10 right-2 bottom-2 text-white opacity-80 text-sm">Écoutez le jingle</div>
        <button
          onClick={handleJingleClick}
          className="w-10 h-10 flex items-center right-5 justify-center rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600"
        >
          🎵
        </button>
        <button
          onClick={handlePodcastClick}
          className="w-10 h-10 flex items-center right-5 justify-center rounded-full bg-white-500 text-white shadow-md hover:bg-white-600"
        >
          🎙️
        </button>
      </div>
    </section>
  );
}
