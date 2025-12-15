import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, FileCheck, Workflow, Archive, ArrowDown } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-6">Runtime enforcement architecture</h1>

          <div className="space-y-12">
            <section>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                Norven operates as a runtime enforcement layer between agent reasoning and enterprise systems. It
                intercepts execution requests and applies identity verification, policy evaluation, and provenance
                recording before any action reaches downstream infrastructure.
              </p>

              <div className="bg-surface border border-border rounded-lg p-6 font-mono text-sm space-y-4">
                <div className="text-center">
                  <div className="text-foreground font-semibold">Agent reasoning layer</div>
                  <div className="text-muted-foreground text-xs">LLMs, planners, orchestration frameworks</div>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-primary/40" />
                </div>
                <div className="text-center border border-primary/40 rounded-lg p-4 bg-surface-elevated">
                  <div className="text-primary font-semibold">Norven runtime enforcement layer</div>
                  <div className="text-muted-foreground text-xs">Identity, policy, execution control, provenance</div>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-primary/40" />
                </div>
                <div className="text-center">
                  <div className="text-foreground font-semibold">Enterprise infrastructure</div>
                  <div className="text-muted-foreground text-xs">APIs, databases, internal services</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">What Norven is not</h2>
              <ul className="space-y-2 text-foreground-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Not a workflow engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Not an agent framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Not prompt governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Not a replacement for IAM or cloud security</span>
                </li>
              </ul>
            </section>

            {/* Original sections */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Core Components</h2>

              <div className="space-y-6">
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Workload Identity</h3>
                  </div>
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    Every agent runs with a cryptographically verifiable workload identity. Identity is scoped to
                    purpose, propagated across multi-step workflows, and bound to downstream service calls. No anonymous
                    execution. No static API keys.
                  </p>
                  <div className="bg-background border border-primary/40 rounded p-3 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Workload ID:</span>
                      <span className="text-foreground font-medium">agent-3xf-prod</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Scope:</span>
                      <span className="text-primary font-semibold">customer:read</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Attestation:</span>
                      <span className="text-foreground">spiffe://norven/...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expires:</span>
                      <span className="text-success font-semibold">3600s</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Runtime Policy</h3>
                  </div>
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    Agent actions are evaluated against versioned policy at runtime. Violations halt execution
                    immediately. Policies are hard constraints, not advisory rules, and take effect without redeploying
                    agents or modifying prompts.
                  </p>
                  <div className="bg-background border border-primary/40 rounded p-3 space-y-2">
                    <div className="text-xs font-mono text-primary mb-2">{'enforce(action.type == "write") {'}</div>
                    <div className="pl-4 space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-success/10 text-success text-xs font-medium border border-success/20">
                          ALLOW
                        </span>
                        <span className="text-muted-foreground font-mono">if scope.includes(resource)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-danger/10 text-danger text-xs font-medium border border-danger/20">
                          HALT
                        </span>
                        <span className="text-muted-foreground font-mono">otherwise</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-primary">{"}"}</div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Durable Execution</h3>
                  </div>
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    Agent workflows are long-running and failure-prone. Norven supports deterministic execution,
                    retries, compensation, and state recovery. Reasoning failures do not produce unintended side
                    effects.
                  </p>
                  <div className="bg-background border border-primary/40 rounded p-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      <span className="font-mono text-foreground">identity.verify</span>
                      <span className="ml-auto text-muted-foreground">2ms</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      <span className="font-mono text-foreground">policy.enforce</span>
                      <span className="ml-auto text-muted-foreground">8ms</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-foreground">action.execute</span>
                      <span className="ml-auto text-muted-foreground">running</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs opacity-50">
                      <div className="w-2 h-2 rounded-full border border-muted-foreground" />
                      <span className="font-mono text-muted-foreground">provenance.record</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Archive className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Execution Provenance</h3>
                  </div>
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    Every decision is recorded with full context including identity, inputs, policy version, and
                    outcome. Records are tamper-evident and replayable for incident response, audits, and compliance
                    review.
                  </p>
                  <div className="bg-background border border-primary/40 rounded p-3 space-y-2 text-xs font-mono">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-muted-foreground">Input Hash</div>
                        <div className="text-foreground">7a4f9c2...</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Policy Ver</div>
                        <div className="text-primary">v2.4.1</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-muted-foreground">Identity</div>
                        <div className="text-foreground">agent-3xf</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Outcome</div>
                        <div className="text-success">Executed</div>
                      </div>
                    </div>
                    <div className="pt-1 border-t border-border text-muted-foreground">
                      Cryptographically signed, tamper-evident
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Integration Model</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Norven integrates via SDK at the agent framework level. Agent code invokes Norven-wrapped actions
                instead of direct API calls. The runtime handles identity, policy, execution guarantees, and provenance
                transparently. No changes to downstream systems are required.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
