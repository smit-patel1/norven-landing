import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">About</h1>

          <div className="space-y-4">
            <p className="text-foreground-secondary leading-relaxed">
              Norven Labs builds runtime enforcement infrastructure for enterprise agent systems.
            </p>
            <p className="text-foreground-secondary leading-relaxed">Based in San Francisco.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
