"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

import { RESULTS_METRICS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

const iconMap = {
  TrendingUp,
  DollarSign,
  Clock,
  Users,
}

export function ResultsSection() {
  return (
    <section id="results" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Proven Results
          </p>
          <h2 className="font-display text-4xl">
            Real Impact, Measurable Outcomes
          </h2>
          <p className="text-muted-foreground">
            Quantifiable results that drive business growth and operational efficiency
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RESULTS_METRICS.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border border-border/60 bg-background/80 text-center transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <p className="font-display text-3xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                    {metric.description && (
                      <p className="mt-2 text-xs text-muted-foreground/80">
                        {metric.description}
                      </p>
                    )}
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

