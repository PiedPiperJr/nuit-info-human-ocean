'use client'

import Link from 'next/link'

export default function CompareSection() {
  const comparisons = [
    "Les courants marins comme des vaisseaux sanguins",
    "Le rôle du plancton comparable aux globules blancs",
    "La régulation thermique similaire",
    "Le transport des nutriments"
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comparez et Comprenez</h2>
            <ul className="space-y-4">
              {comparisons.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/explorer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span>Explorer en 3D</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-xl bg-white">
                {/* Placeholder for 3D visualization */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
