'use client';

import Hero from '@/components/Hero'
import CompareSection from '@/components/CompareSection'
import HealthImpact from '@/components/HealthImpact'
import PodcastSection from '@/components/PodcastSection'
import CallToAction from '@/components/CallToAction'
import FishBackground from '@/components/FishBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <FishBackground />
      <Hero />
      <CompareSection />
      <HealthImpact />
      <PodcastSection />
      <CallToAction />
    </main>
  )
}