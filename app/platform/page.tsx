import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">Platform</h1>

          <div className="space-y-6">
            <p className="text-foreground-secondary leading-relaxed">
              Norven is a runtime enforcement layer for enterprise agent systems. It sits between agent reasoning and
              enterprise infrastructure, ensuring every action is attributable, authorized, and recorded before
              execution.
            </p>

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground">
                Detailed platform documentation is in progress. For architecture details, see the{" "}
                <a href="/architecture" className="text-primary hover:underline">
                  Architecture
                </a>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
