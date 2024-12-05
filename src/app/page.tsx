'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <Image
            src="/ocean-bg.jpg"
            alt="Ocean background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-blue-900/50"></div>
        </div>

        {/* Animated Waves */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-[url('/wave.svg')] bg-repeat-x animate-wave-slow opacity-50 -scale-x-100"></div>
        </div>

        {/* Content */}
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

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explorer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <span>Explorer maintenant</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:bg-white/10 transition-all hover:border-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span>En savoir plus</span>
            </Link>
          </div>

          {/* Stats */}
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
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Découvrez nos Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explorer</h3>
              <p className="text-gray-600">
                Découvrez les parallèles fascinants entre l'océan et le corps humain
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apprendre</h3>
              <p className="text-gray-600">
                Articles et ressources pour comprendre l'importance des océans
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agir</h3>
              <p className="text-gray-600">
                Suivez vos actions éco-responsables et leur impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à découvrir ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez-nous dans cette aventure pour mieux comprendre et protéger nos océans.
          </p>
          <Link href="/explorer" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block">
            Commencer l'exploration
          </Link>
        </div>
      </section>
    </div>
  );
}
