"use client"

import type { ComponentType, SVGProps } from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Paperclip, Phone } from "lucide-react"

import { sendMessage, type ContactFormState } from "@/app/actions/send-message"
import { CONTACT_LINKS } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactFormState = {
  status: "idle",
  message: "",
}

export function ContactSection() {
  const [state, formAction] = useActionState(sendMessage, initialState)

  return (
    <section id="contact" className="py-20">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h2 className="font-display text-4xl">
            Tell me about your ML or data challenge
          </h2>
          <p className="text-muted-foreground">
            Server actions store your note securely. Optionally connect Supabase for archiving by setting the env variables.
          </p>

          <div className="grid gap-3 text-sm">
            <ContactLine icon={Mail} label="Email" value="raufa0742@gmail.com" />
            <ContactLine icon={Phone} label="WhatsApp" value="+92 3493101505" />
            <ContactLine icon={Linkedin} label="LinkedIn" value="/in/abdul-r-254241168" />
            <ContactLine icon={Github} label="GitHub" value="Raufnarejo505" />
          </div>

          <div className="flex flex-wrap gap-3">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                className="rounded-full border border-border/50 px-4 py-1 text-sm text-muted-foreground transition hover:border-primary/60 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Card className="border border-border/60 bg-background/80 shadow-2xl shadow-primary/10">
          <CardContent className="p-6">
            <form action={formAction} className="space-y-4">
              <Input name="name" placeholder="Your name" required />
              <Input
                type="email"
                name="email"
                placeholder="Email for reply"
                required
              />
              <Textarea
                name="message"
                placeholder="Project goals, timelines, budgets..."
                rows={5}
                required
              />
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Paperclip className="h-4 w-4" />
                  Attach files (PDF, DOC, DOCX, XLS, XLSX - Max 5MB each, 20MB total)
                </label>
                <Input
                  type="file"
                  name="files"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary hover:file:bg-primary/20"
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                Response within 24 hours.
              </div>
              <SubmitButton />
              {state.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-sm ${
                    state.status === "success"
                      ? "text-emerald-400"
                      : "text-destructive"
                  }`}
                >
                  {state.message}
                </motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full rounded-full">
      {pending ? "Sending..." : "Work With Me"}
    </Button>
  )
}

type ContactLineProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
}

function ContactLine({ icon: Icon, label, value }: ContactLineProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/60 px-4 py-2">
      <Icon className="h-4 w-4 text-primary" />
      <div>
        <p className="text-xs uppercase text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}

