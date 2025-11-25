 "use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownRight, Play, Sparkles } from "lucide-react"

import { HERO_COPY } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const heroStats = [
  { label: "Years shipping ML systems", value: "4+" },
  { label: "Automations delivered", value: "40+" },
  { label: "Dashboards in production", value: "30+" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-12" id="home">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 blur-[1px] dark:bg-grid-light" />
      <div className="container relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <Badge className="w-fit bg-primary/20 text-primary">
            Machine Learning Engineer
          </Badge>
          <h1 className="font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            {HERO_COPY.tagline}
          </h1>
          <p className="text-lg text-muted-foreground">
            {HERO_COPY.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-6" asChild>
              <a href={HERO_COPY.ctas[0].href}>
                {HERO_COPY.ctas[0].label} <ArrowDownRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-dashed px-6"
              asChild
            >
              <a href={HERO_COPY.ctas[1].href}>
                <Play className="mr-2 h-4 w-4" />
                {HERO_COPY.ctas[1].label}
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border border-transparent px-6 text-foreground/70"
              asChild
            >
              <a href={HERO_COPY.ctas[2].href}>
                {HERO_COPY.ctas[2].label}
              </a>
            </Button>
          </div>

          <div className="grid gap-4 border border-border/70 bg-card/50 p-6 backdrop-blur md:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -inset-4 animate-blob rounded-[32px] bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-3xl" />
          <div className="relative rounded-[32px] border border-border/80 bg-background/80 p-1 shadow-xl shadow-primary/20">
            <div className="rounded-[28px] border border-border/80 bg-gradient-to-br from-background to-muted/20 p-8 text-center backdrop-blur">
              <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-3xl border border-border/80">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=350&q=80"
                  alt="Abdul Rauf"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-display text-2xl text-foreground">Abdul Rauf</p>
              <p className="text-sm text-muted-foreground">
                Machine Learning Engineer
              </p>
              <div className="mt-6 flex flex-col gap-3 text-left text-sm">
                <FeatureRow title="ML Pipelines" value="ETL → Feature Store" />
                <FeatureRow title="Analytics" value="Power BI · Python" />
                <FeatureRow title="Automation" value="SQL + Python Ops" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-2">
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {title}
        </p>
        <p className="font-medium">{value}</p>
      </div>
      <Sparkles className="h-4 w-4 text-primary" />
    </div>
  )
}

