"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgb(4 8 20) 0%, rgb(15 30 60) 100%)`,
      }}
    >
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Built for enterprises running agents in production
          </h2>

          <p className="text-base sm:text-lg text-foreground-secondary max-w-xl mx-auto">
            Norven applies the guarantees enterprises already expect from internal infrastructure to AI agent execution.
            Identity, enforcement, recovery, and provenance are required once agents act on real systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all rounded-lg"
              asChild
            >
              <a href="/pricing">Join the waitlist</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-border/60 text-foreground hover:bg-surface/50 hover:border-primary/50 bg-surface/30 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all rounded-lg"
              asChild
            >
              <a href="/architecture">Read the technical brief</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
