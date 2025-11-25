"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { FAQ_ITEMS } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            FAQ
          </p>
          <h2 className="font-display text-4xl">
            Common Questions from Clients
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border border-border/60 bg-background/80 transition hover:border-primary/50">
      <CardContent className="p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-6 text-left"
        >
          <h3 className="font-semibold text-foreground">{question}</h3>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="border-t border-border/60 px-6 pb-6 pt-4">
            <p className="text-muted-foreground leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

