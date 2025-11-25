"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, DollarSign } from "lucide-react"

import { ENGAGEMENT_MODELS } from "@/lib/data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GetStartedForm } from "@/components/get-started-form"

const modelIcons = [Calendar, Clock, DollarSign]

export function EngagementSection() {
  const [selectedModel, setSelectedModel] = useState<string | undefined>()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleGetStarted = (modelTitle: string) => {
    setSelectedModel(modelTitle)
    setIsDialogOpen(true)
  }

  return (
    <>
      <section id="engagement" className="py-20">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Flexible Engagement
            </p>
            <h2 className="font-display text-4xl">
              Choose the Model That Fits Your Needs
            </h2>
            <p className="text-muted-foreground">
              From one-off projects to ongoing partnerships, I adapt to your business requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const Icon = modelIcons[index]
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col border border-border/60 bg-background/80 transition hover:border-primary/50 hover:shadow-xl">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {model.timeline}
                        </Badge>
                      </div>
                      <h3 className="font-display text-2xl">{model.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {model.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <div className="space-y-2 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Best For
                        </p>
                        <p className="text-sm text-foreground">
                          {model.bestFor}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border/60">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                          Pricing
                        </p>
                        <p className="font-display text-xl font-semibold text-primary">
                          {model.pricing}
                        </p>
                      </div>
                      <Button
                        className="w-full rounded-full"
                        variant={index === 1 ? "default" : "outline"}
                        onClick={() => handleGetStarted(model.title)}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <GetStartedForm
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        engagementModel={selectedModel}
      />
    </>
  )
}

