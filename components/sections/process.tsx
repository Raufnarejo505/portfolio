"use client"

import { motion } from "framer-motion"
import { CheckCircle2, FileText, Rocket, Settings } from "lucide-react"

import { WORK_PROCESS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stepIcons = [FileText, Settings, Rocket, CheckCircle2]

export function ProcessSection() {
  return (
    <section id="process" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            How I Work
          </p>
          <h2 className="font-display text-4xl">
            A Proven Process That Delivers Results
          </h2>
          <p className="text-muted-foreground">
            Transparent workflow from discovery to deployment. You're always in the loop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WORK_PROCESS.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/60 bg-background/80 transition hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {step.step}
                      </Badge>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="pt-4 border-t border-border/60 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Deliverables
                      </p>
                      <ul className="space-y-1.5">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="text-xs text-muted-foreground flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
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

