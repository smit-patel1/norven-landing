"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Action request",
    description: "Agent submits a signed request with intent and context.",
  },
  {
    number: "2",
    title: "Policy evaluation",
    description: "Request is evaluated against the active policy set.",
  },
  {
    number: "3",
    title: "Enforcement",
    description: "Action is authorized or halted deterministically.",
  },
  {
    number: "4",
    title: "Provenance",
    description: "An immutable execution record is written.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 section-hero">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Agent execution lifecycle</h2>
        </motion.div>

        <div className="relative space-y-4 sm:space-y-6">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-4 sm:left-6 top-0 w-px bg-gradient-to-b from-primary via-primary to-cyan-400 origin-top"
            style={{
              scaleY: scrollYProgress,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-elevated border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20 group"
                >
                  <span className="text-base sm:text-lg font-bold text-primary">{step.number}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  />
                </motion.div>

                <div className="flex-1 bg-surface-elevated border border-border rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-md hover:shadow-lg transition-all group">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary/40 flex-shrink-0 mt-1" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
