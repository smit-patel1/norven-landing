"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, FileCheck, Workflow, Archive, ChevronDown } from "lucide-react"

const pillars = [
  {
    number: "01",
    icon: Shield,
    title: "Workload Identity",
    summary: "Every agent action is bound to a verifiable workload identity.",
    details: {
      description:
        "Every agent runs with a cryptographically verifiable workload identity. Identity is scoped to purpose, propagated across multi-step workflows, and bound to downstream service calls.",
    },
    uiElement: (
      <div className="bg-surface border border-primary/40 rounded p-3 space-y-2 text-xs font-mono">
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
      </div>
    ),
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Runtime Policy",
    summary: "Actions are evaluated against active policy at execution time.",
    details: {
      description:
        "Agent actions are evaluated against versioned policy at runtime. Violations halt execution immediately. Policies are hard constraints, not advisory rules.",
    },
    uiElement: (
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
    ),
  },
  {
    number: "03",
    icon: Workflow,
    title: "Durable Execution",
    summary: "Failures are handled deterministically with retry and rollback support.",
    details: {
      description:
        "Agent workflows are long-running and failure-prone. Norven supports deterministic execution, retries, compensation, and state recovery.",
    },
    uiElement: (
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
      </div>
    ),
  },
  {
    number: "04",
    icon: Archive,
    title: "Execution Provenance",
    summary: "Each decision produces a tamper-evident execution record.",
    details: {
      description:
        "Every decision is recorded with full context including identity, inputs, policy version, and outcome. Records are tamper-evident and replayable.",
    },
    uiElement: (
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
      </div>
    ),
  },
]

export function PillarsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 section-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground text-balance">Execution guarantees</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const isExpanded = expandedIndex === index
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-surface-elevated border border-primary/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all overflow-hidden">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-sm font-mono text-primary font-semibold">{pillar.number}</span>
                    <pillar.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{pillar.summary}</p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="mt-4 flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Details</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          <p className="text-sm text-foreground-secondary">{pillar.details.description}</p>
                          <div className="mt-4">{pillar.uiElement}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
