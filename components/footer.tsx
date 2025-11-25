import { Github, Linkedin, Phone, Send } from "lucide-react"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/abdul-r-254241168/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/Raufnarejo505", label: "GitHub", icon: Github },
  { href: "https://wa.me/923493101505", label: "WhatsApp", icon: Phone },
  { href: "mailto:raufa0742@gmail.com", label: "Email", icon: Send },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-foreground">
            Abdul Rauf
          </p>
          <p>Building intelligent data products since 2020.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-wide text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              <link.icon className="h-3.5 w-3.5" />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abdul Rauf. Crafted for Vercel.
        </p>
      </div>
    </footer>
  )
}

