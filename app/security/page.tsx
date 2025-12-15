import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">Security</h1>

          <div className="bg-surface border border-border rounded-lg p-8">
            <p className="text-foreground-secondary leading-relaxed">
              Norven security documentation will be published as the platform matures.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
