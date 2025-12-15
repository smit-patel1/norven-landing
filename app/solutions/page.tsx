import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">Solutions</h1>

          <div className="space-y-8">
            <p className="text-foreground-secondary leading-relaxed">
              Example enterprise scenarios where Norven provides runtime enforcement guarantees.
            </p>

            <div className="space-y-6">
              <div className="bg-surface border border-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">Internal data access agents</h2>
                <p className="text-sm text-foreground-secondary">
                  Agents that query internal databases, APIs, or document stores on behalf of employees. Norven enforces
                  identity propagation, scope constraints, and access logging.
                </p>
                <p className="text-xs text-muted-foreground mt-3 italic">Illustrative example</p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">Automated operational workflows</h2>
                <p className="text-sm text-foreground-secondary">
                  Agents that perform multi-step operations across infrastructure systems. Norven provides durable
                  execution, compensation on failure, and complete audit trails.
                </p>
                <p className="text-xs text-muted-foreground mt-3 italic">Illustrative example</p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground">
                Detailed solution workflows are in development.{" "}
                <a href="/pricing" className="text-primary hover:underline">
                  Join the waitlist
                </a>{" "}
                to be notified when we launch.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
