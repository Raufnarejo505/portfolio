 "use client"

import { motion } from "framer-motion"
import { Brain, Code, Database, Terminal } from "lucide-react"

import { SKILL_CATEGORIES } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

const icons = [Brain, Database, Code, Terminal]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Skills & Stack
          </p>
          <h2 className="font-display text-4xl">Interactive Skill Radar</h2>
          <p className="text-muted-foreground">
            Production-ready ML pipelines, analytics, and modern web engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = icons[index] ?? Brain
            return (
              <motion.div
                key={category.title}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card className="h-full border border-border/60 bg-background/80">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-border/60 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 px-3 py-1 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

