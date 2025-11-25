 "use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { EXPERIENCES } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary">
            Experience
          </p>
          <h2 className="font-display text-4xl">Career Timeline</h2>
          <p className="text-muted-foreground">
            Forecasting models, ETL automation, and analytics initiatives delivered across industries.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/0 via-primary/50 to-secondary/0 md:block" />
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:pl-16"
              >
                <Card className="border border-border/60 bg-background/80 shadow-lg shadow-primary/5">
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-xl">{exp.title}</p>
                        {exp.company && (
                          <p className="text-sm font-medium text-foreground">
                            {exp.company}
                            {exp.location && ` · ${exp.location}`}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {exp.timeline}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="grid gap-3 text-sm text-muted-foreground">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-border/50 bg-card/40 px-4 py-2 text-foreground/80"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

