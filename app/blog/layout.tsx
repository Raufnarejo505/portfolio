import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog · Abdul Rauf",
  description:
    "Machine learning tutorials and data science case studies.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container py-16">{children}</div>
}

