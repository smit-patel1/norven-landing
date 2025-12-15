"use client"

import { motion } from "framer-motion"

const companies = [
  "Global Bank",
  "Fortune 500 Manufacturer",
  "Digital Health Company",
  "Enterprise SaaS",
  "Financial Services",
  "Healthcare System",
]

export function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 border-y border-border bg-surface/50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <p className="text-sm text-muted-foreground font-medium">Built for teams shipping agents into production</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {companies.map((company) => (
              <span
                key={company}
                className="text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
