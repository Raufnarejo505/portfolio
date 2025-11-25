import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { getAllPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export async function BlogSection() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <section id="blog" className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">
              Blogs
            </p>
            <h2 className="font-display text-4xl">
              Tutorials, case studies, learning journey
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-primary underline-offset-4 hover:underline"
          >
            View all posts
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="border border-border/60 bg-background/80 transition hover:border-primary/60"
            >
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    {post.readingTime}
                  </Badge>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-xs text-primary">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  Read article
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

