import AboutMeSection from '@/components/AboutMeSection'
import CreativeProjectsSection from '@/components/CreativeProjectsSection'
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection'
import HeroSection from '@/components/HeroSection'
import MissionStatementSection from '@/components/MissionStatementSection'
import NavBar from '@/components/NavBar'
import PastWorkSection from '@/components/PastWorkSection'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MissionStatementSection />
      <FeaturedProjectsSection />
      <CreativeProjectsSection />
      <PastWorkSection />
      <AboutMeSection />
    </>
  )
}
