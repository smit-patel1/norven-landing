import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">Documentation</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">SDK Installation</h2>
              <div className="bg-surface border border-border rounded-lg p-4 font-mono text-sm">
                <code className="text-foreground">npm install @norven/sdk</code>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">Hello World</h2>
              <div className="bg-surface border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground-secondary">{`import { Norven } from '@norven/sdk'

const norven = new Norven({
  workloadId: 'my-agent'
})

// Wrap your agent action with enforcement
const result = await norven.enforce({
  action: 'database.query',
  scope: 'customer:read',
  execute: async () => {
    return await db.query('SELECT * FROM customers')
  }
})`}</pre>
              </div>
            </section>

            <div className="bg-surface border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground">
                Norven is currently in active development. Full documentation will be available at launch.{" "}
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
