import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

import { getAllPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Blog
          </p>
          <h1 className="font-display text-4xl">Machine Learning Notes</h1>
          <p className="text-muted-foreground">
            Tutorials, case studies, and Abdul&apos;s learning journey.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="border border-border/60 bg-background/80">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline">{post.readingTime}</Badge>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="font-display text-2xl">{post.title}</h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs uppercase text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                Read article
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

