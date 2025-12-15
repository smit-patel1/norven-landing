import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhatIsNorven } from "@/components/what-is-norven"
import { StackSection } from "@/components/stack-section"
import { PillarsSection } from "@/components/pillars-section"
import { HowItWorks } from "@/components/how-it-works"
import { DeveloperExperience } from "@/components/developer-experience"
import { UseCases } from "@/components/use-cases"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsNorven />
        <StackSection />
        <PillarsSection />
        <HowItWorks />
        <DeveloperExperience />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
