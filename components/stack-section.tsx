"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function StackSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 section-mid">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="border border-border bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs sm:text-sm font-semibold text-primary mb-2">Agent reasoning layer</div>
              <div className="text-xs font-mono text-muted-foreground">LLMs, planners, orchestration frameworks</div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary/40" />
            </div>

            <div className="border border-primary/40 bg-surface-elevated p-4 sm:p-6 rounded-lg relative overflow-hidden shadow-md hover:shadow-lg transition-all group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative">
                <div className="text-xs sm:text-sm font-semibold text-primary flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Norven runtime enforcement layer
                </div>
                <div className="text-xs font-mono text-muted-foreground">
                  Identity, policy, execution control, provenance
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary/40" />
            </div>

            <div className="border border-border bg-card p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs sm:text-sm font-semibold text-primary mb-2">Enterprise infrastructure</div>
              <div className="text-xs font-mono text-muted-foreground">APIs, databases, internal services</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
              Agent reasoning remains probabilistic. Execution is deterministic, enforced, and attributable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
