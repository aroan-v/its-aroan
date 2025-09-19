import AboutMeSection from '@/components/AboutMeSection'
import DaisyThemePreview from '@/components/DaisyThemePreview'
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import NightContainer from '@/components/NightContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <NavBar />

      <HeroSection />
      <FeaturedProjectsSection />
      <AboutMeSection />
    </div>
  )
}
