import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
})

const siteUrl = "https://abdulrauf.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdul Rauf · Machine Learning Engineer",
    template: "%s · Abdul Rauf",
  },
  description:
    "Graduated ML Engineer and Data Science Professional helping startups and enterprises with machine learning models, dashboards, and analytics workflows.",
  keywords: [
    "Machine Learning Engineer",
    "Data Scientist",
    "Power BI",
    "Python automation",
    "Next.js portfolio",
  ],
  openGraph: {
    title: "Abdul Rauf · Machine Learning Engineer",
    description:
      "Helping teams deploy ML models, dashboards, and analytics workflows.",
    url: siteUrl,
    siteName: "Abdul Rauf",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rauf · Machine Learning Engineer",
    description:
      "Modern ML and analytics portfolio powered by Next.js 14, Tailwind, and MDX.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
