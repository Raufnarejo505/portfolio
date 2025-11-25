"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Calendar, MessageSquare, Paperclip } from "lucide-react"
import { motion } from "framer-motion"

import { sendMessage, type ContactFormState } from "@/app/actions/send-message"
import { CALENDLY_URL } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const initialState: ContactFormState = {
  status: "idle",
  message: "",
}

type GetStartedFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  engagementModel?: string
}

export function GetStartedForm({
  open,
  onOpenChange,
  engagementModel,
}: GetStartedFormProps) {
  const [state, formAction] = useActionState(sendMessage, initialState)

  // Close dialog on successful submission
  if (state.status === "success" && open) {
    setTimeout(() => {
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Let's Start Your Project
          </DialogTitle>
          <DialogDescription>
            Share your project requirements and I'll get back to you within 24
            hours with a detailed proposal.
          </DialogDescription>
          {engagementModel && (
            <div className="pt-2">
              <Badge variant="outline" className="text-xs">
                Selected: {engagementModel}
              </Badge>
            </div>
          )}
        </DialogHeader>

        <form action={formAction} className="space-y-6">
          {/* Hidden field for engagement model */}
          {engagementModel && (
            <input type="hidden" name="engagementModel" value={engagementModel} />
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="john@company.com"
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company/Organization
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium">
              Project Type
            </label>
            <Input
              id="projectType"
              name="projectType"
              placeholder="e.g., ML Model Development, Data Pipeline, Dashboard"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="requirements" className="text-sm font-medium">
              Project Requirements & Goals *
            </label>
            <Textarea
              id="requirements"
              name="message"
              placeholder="Describe your project goals, technical requirements, expected outcomes, timeline, and budget range..."
              rows={6}
              required
              className="w-full resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Include: objectives, data sources, expected deliverables, timeline,
              and budget considerations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-medium">
                Preferred Timeline
              </label>
              <Input
                id="timeline"
                name="timeline"
                placeholder="e.g., 4-6 weeks, ASAP"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium">
                Budget Range
              </label>
              <Input
                id="budget"
                name="budget"
                placeholder="e.g., $5K-$10K, Flexible"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Paperclip className="h-4 w-4" />
              Attach Project Documents (Optional)
            </label>
            <Input
              type="file"
              name="files"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-primary hover:file:bg-primary/20"
            />
            <p className="text-xs text-muted-foreground">
              PDF, DOC, DOCX, XLS, XLSX - Max 5MB each, 20MB total
            </p>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-3">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
              <div className="flex-1 space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Next Steps
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>I'll review your requirements within 24 hours</li>
                  <li>We'll schedule a discovery call to discuss details</li>
                  <li>You'll receive a detailed proposal with timeline & pricing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <SubmitButton />
            <Button
              type="button"
              variant="outline"
              className="rounded-full"
              onClick={() => {
                window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Call Instead
            </Button>
          </div>

          {state.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-lg p-3 text-sm ${
                state.status === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-destructive/10 text-destructive border border-destructive/20"
              }`}
            >
              {state.message}
            </motion.div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="flex-1 rounded-full"
    >
      {pending ? (
        <>
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Sending...
        </>
      ) : (
        <>
          <MessageSquare className="mr-2 h-4 w-4" />
          Send Requirements
        </>
      )}
    </Button>
  )
}

