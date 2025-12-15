import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Norven Labs - Enterprise AI Agent Trust Infrastructure",
  description:
    "The control plane for enterprise AI agents. Identity, authorization, policy enforcement, and immutable audit logs. Deploy agents safely in production with Norven Labs.",
  metadataBase: new URL("https://norven.io"),
  canonical: "https://norven.io",
  openGraph: {
    title: "Norven Labs - Enterprise AI Agent Trust Infrastructure",
    description:
      "The control plane for enterprise AI agents. Identity, authorization, policy enforcement, and audit logs.",
    url: "https://norven.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norven Labs - Enterprise AI Agent Trust Infrastructure",
    description: "Deploy agents safely with identity, policy, and audit infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/norven-logo-mark.svg",
    apple: "/norven-logo-mark.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Norven Labs",
              url: "https://norven.io",
              logo: "https://norven.io/norven-logo-full.png",
              description: "Enterprise AI agent trust infrastructure platform",
              sameAs: ["https://twitter.com/norvenlabs"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://norven.io",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://norven.io/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${geistSans.className}`}>
        {children}
      </body>
    </html>
  )
}
