"use client"

import { motion } from "framer-motion"
import { Calendar, MessageSquare, ArrowRight, Clock } from "lucide-react"

import { CALENDLY_URL } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <Card className="border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background">
          <CardContent className="p-12">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="font-display text-4xl text-foreground">
                  Ready to Transform Your Data into Business Value?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Let's discuss how machine learning and data science can solve your business challenges. 
                  Free consultation call to explore your needs and potential solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  asChild
                >
                  <a href="#contact">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-dashed px-8"
                  asChild
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  <span>No commitment required</span>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

