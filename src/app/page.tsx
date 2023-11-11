import SectionFeatures from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import SectionMarkers from '@/components/sections/icon-markers'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SectionFeatures />
      <SectionMarkers />
    </main>
  )
}
