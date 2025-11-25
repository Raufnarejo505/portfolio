import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { getAllPosts, getPost } from "@/lib/mdx"

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const params = await props.params
  const post = await getPost(params.slug).catch(() => null)
  if (!post) return {}

  return {
    title: `${post.metadata.title} · Blog · Abdul Rauf`,
    description: post.metadata.excerpt,
  }
}

export default async function BlogArticle(props: BlogPageProps) {
  const params = await props.params
  const post = await getPost(params.slug).catch(() => null)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-16">
      <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          {new Date(post.metadata.date).toLocaleDateString()}
        </p>
        <h1 className="font-display text-4xl text-foreground !mb-4">{post.metadata.title}</h1>
        <p className="text-muted-foreground !mt-0">{post.metadata.excerpt}</p>
        <div className="my-4 flex flex-wrap gap-2 text-xs uppercase text-primary">
          {post.metadata.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10 prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-primary prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground">
          {post.content}
        </div>
      </article>
    </div>
  )
}

