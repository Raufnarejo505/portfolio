"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

import { TESTIMONIALS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Client Success Stories
          </p>
          <h2 className="font-display text-4xl">
            Trusted by Business Leaders
          </h2>
          <p className="text-muted-foreground">
            Real results from real clients. See how I've helped businesses solve their data challenges.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/60 bg-background/80 transition hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary/40" />
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border/60">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

