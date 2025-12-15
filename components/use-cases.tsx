"use client"

import { motion } from "framer-motion"
import { Server, Shield, Code } from "lucide-react"
import { useState } from "react"

const personas = [
  {
    icon: Server,
    role: "Platform Engineering",
    label: "PLATFORM VIEW",
    description: "Standardize agent identity and execution guarantees across all internal agent deployments",
    example: "View integration patterns →",
    accentColor: "rgb(139 92 246)",
    overlayClass: "via-violet-500/10",
    logs: [
      { time: "22:41:03", message: "workload.bind agent-3xf-prod" },
      { time: "22:41:05", message: "policy.enforce data-access-v3", accent: true },
      { time: "22:41:06", message: "action.authorized latency=14ms" },
    ],
  },
  {
    icon: Shield,
    role: "Security Architecture",
    label: "SECURITY VIEW",
    description: "Enforce execution boundaries and provide audit-grade records for compliance review",
    example: "View enforcement model →",
    accentColor: "rgb(217 119 6)",
    overlayClass: "via-amber-500/10",
    logs: [
      { time: "09:12:10", message: "provenance.record agent-3xf › refund" },
      { time: "09:12:11", message: "policy.version 4.2.1 applied", accent: true },
      { time: "09:12:11", message: "evidence.export format=SOC2" },
    ],
  },
  {
    icon: Code,
    role: "Application Teams",
    label: "APPLICATION VIEW",
    description: "Ship agent features without owning infrastructure concerns. Enforcement handled upstream.",
    example: "View SDK documentation →",
    accentColor: "rgb(34 197 94)",
    overlayClass: "via-green-500/10",
    logs: [
      { time: "15:03:22", message: "agent.deploy scope=customer.read" },
      { time: "15:03:23", message: "norven.authorize action=query", accent: true },
      { time: "15:03:24", message: "response.200 enforcement=active" },
    ],
  },
]

export function UseCases() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 section-mid">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Designed for internal platform teams</h2>
          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            Infrastructure that platform, security, and application teams can rely on for agent deployments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <motion.div
                animate={{
                  y: hoveredCard === index ? -6 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative bg-surface-elevated border border-border rounded-lg p-4 sm:p-6 h-full shadow-md hover:shadow-xl hover:border-primary/30 transition-all overflow-hidden`}
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${persona.accentColor}08, transparent)`,
                }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                  style={{ backgroundColor: persona.accentColor }}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="mb-4">
                  <persona.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3" style={{ color: persona.accentColor }} />
                  <div className="text-xs font-mono tracking-wide text-muted-foreground mb-2 uppercase font-semibold">
                    {persona.label}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{persona.role}</h3>
                  <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed mb-4">{persona.description}</p>
                </div>

                <div className="bg-background border border-border/50 rounded p-2 sm:p-3 mb-4 space-y-1.5">
                  {persona.logs?.map((log, logIndex) => (
                    <motion.div
                      key={logIndex}
                      animate={{
                        x: hoveredCard === index ? 4 : 0,
                      }}
                      transition={{ duration: 0.2, delay: logIndex * 0.03, ease: "easeOut" }}
                      className="flex items-start gap-1 sm:gap-2 text-xs font-mono"
                    >
                      <span className="text-muted-foreground/60 text-[10px] sm:text-xs">[{log.time}]</span>
                      <span className={`text-[10px] sm:text-xs ${log.accent ? "text-primary" : "text-muted-foreground"}`}>{log.message}</span>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  {persona.example}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
