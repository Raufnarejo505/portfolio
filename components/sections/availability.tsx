"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Calendar } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AvailabilitySection() {
  return (
    <section className="py-12">
      <div className="container">
        <Card className="border border-emerald-500/30 bg-emerald-500/5">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">
                      Available for New Projects
                    </h3>
                    <Badge className="bg-emerald-500/20 text-emerald-500">
                      Open
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new clients and ready to start immediately
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Response: 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Start: Within 1 week</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

