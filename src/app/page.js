import AboutMeSection from '@/components/AboutMeSection'
import ContactMeSection from '@/components/ContactMeSection'
import DaisyThemePreview from '@/components/DaisyThemePreview'
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection'
import HeroSection from '@/components/HeroSection'
import MissionStatementSection from '@/components/MissionStatementSection'
import NavBar from '@/components/NavBar'
import NightContainer from '@/components/NightContainer'
import PastWorkSection from '@/components/PastWorkSection'
import { SunsetBackgroundBottom } from '@/components/StyledSunsetBackground'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MissionStatementSection />
      <FeaturedProjectsSection />
      <PastWorkSection />
      <AboutMeSection />
    </>
  )
}
