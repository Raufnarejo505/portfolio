"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Case Studies" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#engagement", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const desktopLinks = (
    <div className="hidden items-center gap-1 text-sm font-medium md:flex">
      {NAV_LINKS.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          whileHover={{ y: -1 }}
          className="rounded-full px-3 py-1 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
        >
          {link.label}
        </motion.a>
      ))}
    </div>
  )

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-br from-primary/80 to-secondary/80 shadow-lg shadow-primary/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-display text-base font-semibold leading-none">
              Abdul Rauf
            </p>
            <p className="text-xs text-muted-foreground">
              Machine Learning Engineer
            </p>
          </div>
        </Link>

        {desktopLinks}

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full border border-primary/20 bg-primary/10 font-medium text-primary shadow-sm shadow-primary/30 transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <a href="#contact">Hire Me</a>
          </Button>
          <ThemeToggle />

          {mounted && (
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full border border-border/60"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <SheetHeader className="text-left">
                    <p className="font-display text-lg font-semibold">
                      Navigate
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Explore Abdul&apos;s work
                    </p>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-3">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-xl border border-border/60 px-4 py-2 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:bg-primary/5"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button asChild className="mt-2">
                      <a href="#contact">Let&apos;s Collaborate</a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
          {!mounted && (
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-border/60"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

