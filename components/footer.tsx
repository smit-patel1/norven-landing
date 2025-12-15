import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/platform" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Solutions</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/solutions" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Overview
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/security" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-muted-foreground">© 2025 Norven Labs. All rights reserved.</div>
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-transparent"
          >
            <img
              src="/norven-logo-full.png"
              alt="Norven Labs logo"
              style={{ background: "transparent", height: "32px", width: "auto" }}
              className="sm:h-10"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
