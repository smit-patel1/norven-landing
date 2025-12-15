"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-background/80 backdrop-blur-sm py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="relative flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/norven-logo-full.png"
            alt="Norven Labs"
            className={`hidden sm:block transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
            style={{
              background: "transparent",
              position: isScrolled ? "absolute" : "relative",
              left: 0,
              top: 0,
              height: "56px",
              width: "auto",
            }}
          />
          <img
            src="/norven-logo-mark.png"
            alt="Norven Labs"
            className={`transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 sm:opacity-0"}`}
            style={{
              background: "transparent",
              position: isScrolled ? "relative" : "absolute",
              left: 0,
              top: 0,
              height: "40px",
              width: "auto",
            }}
          />
          <img
            src="/norven-logo-mark.png"
            alt="Norven Labs"
            className={`sm:hidden transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
            style={{
              background: "transparent",
              position: isScrolled ? "absolute" : "relative",
              left: 0,
              top: 0,
              height: "40px",
              width: "auto",
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/platform", label: "Platform" },
            { href: "/solutions", label: "Solutions" },
            { href: "/architecture", label: "Architecture" },
            { href: "/docs", label: "Docs" },
            { href: "/pricing", label: "Pricing" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex text-primary hover:text-primary/80 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-all"
          >
            Login
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all rounded-lg text-xs sm:text-sm px-3 sm:px-4"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
