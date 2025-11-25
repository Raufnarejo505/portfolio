"use server"

import { revalidatePath } from "next/cache"
import { Resend } from "resend"
import { z } from "zod"

const messageSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(12, "Tell me a little more about your project."),
})

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB per file
const MAX_TOTAL_SIZE = 20 * 1024 * 1024 // 20MB total for all attachments
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message: string
  timestamp?: string
}

async function sendEmail(
  name: string,
  email: string,
  message: string,
  attachments?: Array<{ filename: string; content: Buffer }>,
  additionalFields?: {
    engagementModel?: string
    company?: string
    projectType?: string
    timeline?: string
    budget?: string
  }
) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured")
  }

  const isGetStartedForm = additionalFields && Object.keys(additionalFields).length > 0
  const formType = isGetStartedForm ? "Get Started Form" : "Contact Form"

  let emailContent = `
    <h2>New ${formType} Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
  `

  if (additionalFields) {
    if (additionalFields.company) {
      emailContent += `<p><strong>Company:</strong> ${additionalFields.company}</p>`
    }
    if (additionalFields.engagementModel) {
      emailContent += `<p><strong>Engagement Model:</strong> ${additionalFields.engagementModel}</p>`
    }
    if (additionalFields.projectType) {
      emailContent += `<p><strong>Project Type:</strong> ${additionalFields.projectType}</p>`
    }
    if (additionalFields.timeline) {
      emailContent += `<p><strong>Timeline:</strong> ${additionalFields.timeline}</p>`
    }
    if (additionalFields.budget) {
      emailContent += `<p><strong>Budget:</strong> ${additionalFields.budget}</p>`
    }
  }

  emailContent += `
    <p><strong>Requirements/Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
    ${attachments && attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.map(a => a.filename).join(", ")}</p>` : ""}
  `

  const emailData: {
    from: string
    to: string
    replyTo: string
    subject: string
    html: string
    attachments?: Array<{ filename: string; content: Buffer }>
  } = {
    from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
    to: "raufa0742@gmail.com",
    replyTo: email,
    subject: isGetStartedForm ? `New Project Inquiry: ${name} - ${additionalFields?.engagementModel || "General"}` : `New Contact Form: ${name}`,
    html: emailContent,
  }

  if (attachments && attachments.length > 0) {
    emailData.attachments = attachments
  }

  const { data, error } = await resend.emails.send(emailData)

  if (error) {
    console.error("Resend API error:", error)
    throw new Error(`Failed to send email: ${error.message || "Unknown error"}`)
  }

  return data
}

export async function sendMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = messageSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    }
  }

  try {
    // Handle file uploads
    const files = formData.getAll("files") as File[]
    const attachments: Array<{ filename: string; content: Buffer }> = []
    let totalSize = 0

    for (const file of files) {
      if (file.size === 0) continue

      if (file.size > MAX_FILE_SIZE) {
        return {
          status: "error",
          message: `File "${file.name}" is too large. Maximum size is 5MB per file.`,
        }
      }

      totalSize += file.size
      if (totalSize > MAX_TOTAL_SIZE) {
        return {
          status: "error",
          message: `Total attachment size exceeds 20MB. Please reduce the number or size of files.`,
        }
      }

      // Check file type - allow empty type for some files
      if (file.type && !ALLOWED_FILE_TYPES.includes(file.type)) {
        // Also check by extension as fallback
        const extension = file.name.split(".").pop()?.toLowerCase()
        const allowedExtensions = ["pdf", "doc", "docx", "xls", "xlsx"]
        if (!extension || !allowedExtensions.includes(extension)) {
          return {
            status: "error",
            message: `File "${file.name}" is not allowed. Please upload PDF, DOC, DOCX, XLS, or XLSX files only.`,
          }
        }
      }

      // Convert file to Buffer for Resend API
      try {
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        
        attachments.push({
          filename: file.name,
          content: buffer,
        })
      } catch (fileError) {
        console.error(`Error processing file ${file.name}:`, fileError)
        return {
          status: "error",
          message: `Error processing file "${file.name}". Please try again.`,
        }
      }
    }

    // Extract additional fields
    const engagementModel = formData.get("engagementModel")?.toString()
    const company = formData.get("company")?.toString()
    const projectType = formData.get("projectType")?.toString()
    const timeline = formData.get("timeline")?.toString()
    const budget = formData.get("budget")?.toString()

    const additionalFields = engagementModel || company || projectType || timeline || budget
      ? {
          engagementModel,
          company,
          projectType,
          timeline,
          budget,
        }
      : undefined

    const payload = {
      ...parsed.data,
      ...(additionalFields || {}),
      receivedAt: new Date().toISOString(),
      source: additionalFields ? "get-started-form" : "portfolio-contact-form",
      attachmentsCount: attachments.length,
    }

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await sendEmail(
          parsed.data.name,
          parsed.data.email,
          parsed.data.message,
          attachments.length > 0 ? attachments : undefined,
          additionalFields
        )
      } catch (emailError) {
        // If email with attachments fails, try without attachments and log the issue
        if (attachments.length > 0) {
          console.error("Failed to send email with attachments, trying without:", emailError)
          // Try sending without attachments as fallback
          try {
            await sendEmail(parsed.data.name, parsed.data.email, `${parsed.data.message}\n\nNote: ${attachments.length} attachment(s) could not be included due to technical limitations.`, undefined)
            console.log("Email sent without attachments as fallback")
          } catch (fallbackError) {
            throw emailError // Throw original error if fallback also fails
          }
        } else {
          throw emailError
        }
      }
    } else {
      console.warn("RESEND_API_KEY not configured. Email not sent.")
      console.log("Contact message received:", payload)
    }

    // Optional Supabase hook (configure SUPABASE_URL & SUPABASE_SERVICE_ROLE_KEY)
    if (
      process.env.SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY &&
      process.env.SUPABASE_CONTACT_TABLE
    ) {
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/${process.env.SUPABASE_CONTACT_TABLE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      })
    }

    revalidatePath("/")

    return {
      status: "success",
      message: "Thanks! I'll reply within 24 hours.",
      timestamp: payload.receivedAt,
    }
  } catch (error) {
    console.error("Contact form submission failed", error)
    return {
      status: "error",
      message:
        error instanceof Error
          ? `Failed to send message: ${error.message}`
          : "Something went wrong while sending your message. Please try again shortly.",
    }
  }
}

