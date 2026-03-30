import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { CoverageSection } from "@/components/home/coverage-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { RoadsideSection } from "@/components/home/roadside-section"
import { TransportSection } from "@/components/home/transport-section"
import { HappyClientsSection } from "@/components/home/happy-clients-section"
import { AboutPreviewSection } from "@/components/home/about-preview-section"
import { CampaignsSection } from "@/components/home/campaigns-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <IntroSection />
      <CoverageSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <RoadsideSection />
      <TransportSection />
      <HappyClientsSection />
      <AboutPreviewSection />
      <CampaignsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
