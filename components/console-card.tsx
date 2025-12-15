"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface AgentAction {
  id: string
  agent: string
  action: string
  policy: string
  decision: "Authorized" | "Blocked"
  latency: string
  identity: string
  policySnippet: string
  reason: string
}

const authorizedActions: AgentAction[] = [
  {
    id: "1",
    agent: "analytics-agent-01",
    action: "Read customer data",
    policy: "data-access-v2",
    decision: "Authorized",
    latency: "12ms",
    identity: "analytics-agent-01@prod.norven",
    policySnippet: 'allow(agent.role == "analytics") { resources: ["customer.*"] }',
    reason: "Agent has analytics role with customer data scope",
  },
  {
    id: "2",
    agent: "payment-agent-03",
    action: "Process refund",
    policy: "financial-ops-v3",
    decision: "Authorized",
    latency: "18ms",
    identity: "payment-agent-03@prod.norven",
    policySnippet: "allow(agent.budget < limit && amount < 5000)",
    reason: "Within budget cap and transaction limit",
  },
]

const blockedActions: AgentAction[] = [
  {
    id: "1",
    agent: "support-agent-12",
    action: "Delete user account",
    policy: "user-mgmt-v1",
    decision: "Blocked",
    latency: "8ms",
    identity: "support-agent-12@prod.norven",
    policySnippet: 'deny(action == "delete" && agent.role != "admin")',
    reason: "Insufficient permissions for destructive operations",
  },
  {
    id: "2",
    agent: "external-bot-94",
    action: "Export financial data",
    policy: "data-export-v2",
    decision: "Blocked",
    latency: "6ms",
    identity: "external-bot-94@prod.norven",
    policySnippet: "deny(data.sensitivity == 'high' && agent.trust_level < 3)",
    reason: "Trust level insufficient for sensitive data export",
  },
]

export function ConsoleCard() {
  const [selectedRow, setSelectedRow] = useState<string | null>("1")
  const [activeTab, setActiveTab] = useState<"agents" | "policies" | "activity">("activity")
  const [flowState, setFlowState] = useState<"authorized" | "blocked">("authorized")
  const [flashingRows, setFlashingRows] = useState<Set<string>>(new Set())

  const actions = flowState === "authorized" ? authorizedActions : blockedActions
  const selectedAction = actions.find((a) => a.id === selectedRow)

  const handleFlowStateToggle = () => {
    const newFlowState = flowState === "authorized" ? "blocked" : "authorized"
    setFlowState(newFlowState)
    setSelectedRow("1")

    const allIds = new Set(actions.map((a) => a.id))
    setFlashingRows(allIds)
    setTimeout(() => setFlashingRows(new Set()), 600)
  }

  const renderTabContent = () => {
    if (activeTab === "agents") {
      return (
        <div className="p-4 space-y-3">
          <div className="text-sm font-semibold text-primary mb-3">Active Agents</div>
          {actions.map((action) => (
            <div key={action.id} className="bg-surface border border-border rounded p-3 space-y-1">
              <div className="text-sm font-mono text-primary">{action.agent}</div>
              <div className="text-xs text-muted-foreground">Identity: {action.identity}</div>
              <div className="text-xs text-muted-foreground">Policy: {action.policy}</div>
            </div>
          ))}
        </div>
      )
    }

    if (activeTab === "policies") {
      return (
        <div className="p-4 space-y-4">
          <div className="text-sm font-semibold text-primary mb-3">Active Policies</div>
          {selectedAction && (
            <div className="bg-surface border border-border rounded p-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">Policy: {selectedAction.policy}</div>
              <div
                className={`px-3 py-2 rounded text-xs font-mono border code-block ${
                  flowState === "authorized"
                    ? "bg-success/5 text-success border-success/20"
                    : "bg-danger/5 text-danger border-danger/20"
                }`}
              >
                {selectedAction.policySnippet}
              </div>
              <div className="mt-3 text-sm text-foreground/80">
                <span className="font-semibold">Outcome:</span> {selectedAction.reason}
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <>
        <div className="px-4 pt-4 pb-2">
          <div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <div className="col-span-3">Agent</div>
            <div className="col-span-3">Action</div>
            <div className="col-span-2">Policy</div>
            <div className="col-span-2">Decision</div>
            <div className="col-span-2 text-right">Latency</div>
          </div>
        </div>

        <div className="px-4 pb-4 space-y-1">
          <AnimatePresence mode="wait">
            {actions.map((action, index) => (
              <motion.div
                key={`${flowState}-${action.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedRow(action.id === selectedRow ? null : action.id)}
                  className={`w-full grid grid-cols-12 gap-2 px-3 py-2.5 rounded-md text-left transition-all relative overflow-hidden ${
                    selectedRow === action.id
                      ? "bg-primary/10 border border-primary/40 shadow-md"
                      : "hover:bg-surface/80 hover:border-primary/20 border border-transparent"
                  } ${
                    flashingRows.has(action.id)
                      ? flowState === "authorized"
                        ? "animate-flash-green"
                        : "animate-flash-red"
                      : ""
                  }`}
                >
                  <div className="col-span-3 text-sm font-mono text-primary truncate">{action.agent}</div>
                  <div className="col-span-3 text-sm text-foreground/80 truncate">{action.action}</div>
                  <div className="col-span-2 text-xs font-mono text-muted-foreground">{action.policy}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                        action.decision === "Authorized"
                          ? "bg-success/15 text-success border border-success/30"
                          : "bg-danger/15 text-danger border border-danger/30"
                      }`}
                    >
                      {action.decision}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm font-mono text-muted-foreground text-right">{action.latency}</div>
                </button>

                <AnimatePresence>
                  {selectedRow === action.id && selectedAction && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 p-4 bg-surface border border-border rounded-md space-y-3"
                    >
                      <div>
                        <div className="text-xs font-mono text-muted-foreground mb-1">Agent Identity</div>
                        <div className="text-sm font-mono text-primary">{selectedAction.identity}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-muted-foreground mb-1">Evaluated Policy</div>
                        <div
                          className={`px-3 py-2 rounded text-xs font-mono border code-block ${
                            flowState === "authorized"
                              ? "bg-success/5 text-success border-success/20"
                              : "bg-danger/5 text-danger border-danger/20"
                          }`}
                        >
                          {selectedAction.policySnippet}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-muted-foreground mb-1">Decision Reason</div>
                        <div className="text-sm text-foreground/80">{selectedAction.reason}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-xl relative border-t-4 border-t-primary hover:shadow-2xl transition-shadow">
      <div className="border-b border-border bg-primary/8 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success status-dot-success" />
          <span className="text-sm font-semibold text-primary">Norven Console</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground">
            {flowState === "authorized" ? "Authorized" : "Blocked"} flow
          </span>
          <button
            onClick={handleFlowStateToggle}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 shadow-lg ${
              flowState === "authorized"
                ? "bg-primary shadow-primary/40 ring-2 ring-primary/30"
                : "bg-danger shadow-danger/40 ring-2 ring-danger/30"
            }`}
            aria-label="Toggle flow state"
          >
            <motion.div
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-background"
              animate={{
                x: flowState === "authorized" ? 0 : 24,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border bg-surface px-4 flex gap-6">
        {(["agents", "policies", "activity"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-3 text-sm font-medium transition-colors ${
              activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <motion.div
                layoutId="consoleTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  )
}
