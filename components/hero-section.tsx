"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ConsoleCard } from "./console-card"
import { Terminal, Copy, Check } from "lucide-react"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install norven-ai")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 section-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/4 w-full h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-md border border-primary/30 font-semibold">
                Runtime Enforcement Layer
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1] text-balance">
              Runtime enforcement for AI agents in production
            </h1>

            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed text-pretty max-w-xl">
              Enterprises already run agents against real systems. The challenge is no longer model capability, but
              controlling execution. Norven is a runtime enforcement layer that verifies agent identity, evaluates
              policy, and records execution context before actions reach production infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                asChild
              >
                <a href="/pricing">Join the waitlist</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-border/60 text-foreground hover:bg-surface hover:border-primary/50 bg-card shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
                asChild
              >
                <a href="/architecture">Read the technical brief</a>
              </Button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-surface border border-border/60 rounded-lg px-4 py-2.5 shadow-sm max-w-fit hover:border-primary/40 transition-colors group"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">npm install norven-ai</span>
              {copied ? (
                <Check className="w-4 h-4 text-success ml-2" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground ml-2 group-hover:text-primary transition-colors" />
              )}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-lg blur-2xl opacity-50" />
            <div className="relative">
              <ConsoleCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
