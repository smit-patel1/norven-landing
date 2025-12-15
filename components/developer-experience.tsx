"use client"

import { motion } from "framer-motion"
import { Copy, Check, Terminal, CheckCircle } from "lucide-react"
import { useState } from "react"

const codeExamples = {
  go: `package main

import "github.com/norven-ai/sdk-go"

// Bind agent workload identity
norven := sdk.NewClient(sdk.Config{
  WorkloadID: "agent-3xf-prod",
  PrivateKey: os.Getenv("AGENT_KEY"),
})

// Enforce policy before execution
result, err := norven.Enforce(ctx, sdk.Request{
  Action: "customer.read",
  Resource: "customer:12345",
  Context: map[string]string{"workflow": "quarterly_report"},
}, func() (interface{}, error) {
  return db.Customers.FindByID("12345")
})`,
  typescript: `import { NorvenClient } from 'norven-ai'

// Bind agent workload identity
const norven = new NorvenClient({
  workloadId: 'agent-3xf-prod',
  privateKey: process.env.AGENT_KEY
})

// Enforce policy before execution
const result = await norven.enforce({
  action: 'customer.read',
  resource: 'customer:12345',
  context: { workflow: 'quarterly_report' }
}, async () => {
  return await db.customers.findById('12345')
})`,
  python: `from norven_ai import NorvenClient

# Bind agent workload identity
norven = NorvenClient(
    workload_id="agent-3xf-prod",
    private_key=os.getenv("AGENT_KEY")
)

# Enforce policy before execution
result = await norven.enforce(
    action="customer.read",
    resource="customer:12345",
    context={"workflow": "quarterly_report"}
)(lambda: db.customers.find_by_id("12345"))`,
}

export function DeveloperExperience() {
  const [copied, setCopied] = useState(false)
  const [copiedCli, setCopiedCli] = useState(false)
  const [selectedLang, setSelectedLang] = useState<"typescript" | "python" | "go">("go")

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExamples[selectedLang])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npm install norven-ai")
    setCopiedCli(true)
    setTimeout(() => setCopiedCli(false), 2000)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 section-mid">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left - Code with tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow code-block relative">
              {/* Vertical accent strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

              <div className="bg-surface px-3 sm:px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex gap-1 sm:gap-2">
                  {(["go", "typescript", "python"] as const).map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => setSelectedLang(lang)}
                      className={`relative px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                        selectedLang === lang
                          ? "text-primary-foreground bg-primary shadow-lg shadow-primary/50"
                          : "text-muted-foreground hover:text-primary hover:bg-surface-elevated"
                      }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      {lang === "typescript" ? "TypeScript" : lang === "python" ? "Python" : "Go"}
                    </motion.button>
                  ))}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 hover:bg-primary/15 hover:ring-2 hover:ring-primary/30 rounded transition-all"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>
              </div>
              <motion.div
                key={selectedLang}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-3 sm:p-5 overflow-x-auto bg-background"
              >
                <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                  <code className="text-foreground">{codeExamples[selectedLang]}</code>
                </pre>
              </motion.div>
            </div>

            <div className="terminal-window bg-background border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative bg-surface px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success status-dot-success" />
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase">$ terminal</span>
                </div>
                <button
                  onClick={handleCopyCli}
                  className="p-1 hover:bg-primary/15 hover:ring-2 hover:ring-primary/30 rounded transition-all"
                  aria-label="Copy command"
                >
                  {copiedCli ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>
              </div>
              <div className="p-4 bg-gradient-to-br from-background to-surface font-mono text-sm space-y-2 relative">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-foreground flex items-center gap-2"
                >
                  <span className="text-success font-bold">❯</span>
                  <span>npm install norven-ai</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-success flex items-center gap-2 font-semibold"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Ready</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Drop-in enforcement for existing agent systems
            </h2>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-foreground-secondary leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>TypeScript, Python, and Go SDKs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>REST and gRPC APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Works with planner-based and workflow-based agents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Deployable as shared infrastructure</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
