import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground mb-6">Pricing</h1>

          <div className="bg-surface border border-border rounded-lg p-8 space-y-6">
            <p className="text-foreground-secondary leading-relaxed">
              Norven is currently in active development. Join the waitlist to be notified when we launch and to discuss
              early access opportunities.
            </p>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="mailto:contact@norvenlabs.com">Join the waitlist</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
