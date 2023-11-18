import SectionArticles from '@/components/sections/articles'
import SectionFaqs from '@/components/sections/faqs'
import SectionFeatures from '@/components/sections/features'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import SectionMarkers from '@/components/sections/icon-markers'
import SectionPrograms from '@/components/sections/programs'
import SectionTwoColumns from '@/components/sections/two-columns'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <SectionFeatures />
      <SectionMarkers />
      <SectionPrograms />
      <SectionTwoColumns />
      <SectionArticles />
      <SectionFaqs />
      <Footer />
    </main>
  )
}
