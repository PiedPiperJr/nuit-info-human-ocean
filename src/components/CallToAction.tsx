'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Add wave pattern or background decoration here if needed */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Prêt à Plonger Plus Profond ?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Créez votre profil éco-responsable et découvrez comment vos actions quotidiennes
            impactent nos océans.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/profile"
              className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium transition-all hover:scale-105"
            >
              Créer mon profil
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-medium transition-all hover:scale-105"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
