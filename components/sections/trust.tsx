"use client"

import { motion } from "framer-motion"
import { Award, Clock, Star, TrendingUp } from "lucide-react"

import { TRUST_BADGES } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

const trustIcons = [TrendingUp, Award, Star, Clock]

export function TrustSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((badge, index) => {
            const Icon = trustIcons[index]
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-border/60 bg-background/80 text-center transition hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <p className="font-display text-2xl font-semibold">
                      {badge.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
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

