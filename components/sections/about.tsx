 "use client"

import { motion } from "framer-motion"
import { GraduationCap, Workflow } from "lucide-react"

import { ABOUT_COPY } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const focusAreas = [
  "ML pipelines",
  "Deep learning",
  "Clean data workflows",
  "End-to-end analytics",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="bg-secondary/20 text-secondary">
            About Abdul
          </Badge>
          <h2 className="font-display text-3xl text-foreground">
            {ABOUT_COPY.title}
          </h2>
          {ABOUT_COPY.content.map((paragraph) => (
            <p key={paragraph} className="text-lg text-muted-foreground">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {ABOUT_COPY.stats.map((stat) => (
              <Card key={stat.label} className="border border-border/60 bg-background/80">
                <CardContent className="p-5">
                  <p className="font-display text-2xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur">
          <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 p-4">
            <GraduationCap className="h-10 w-10 rounded-2xl border border-border/60 p-2 text-primary" />
            <div>
              <p className="font-display text-lg">
                {ABOUT_COPY.education?.degree || "BS Computer Science"}
              </p>
              <p className="text-sm text-muted-foreground">
                {ABOUT_COPY.education?.university || "Sukkur IBA University"}
              </p>
              <p className="text-xs text-muted-foreground/80">
                {ABOUT_COPY.education?.timeline || "Sep 2020 — Apr 2024"}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <Workflow className="h-4 w-4" />
              Core Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/60 px-4 py-1 text-sm text-foreground/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

