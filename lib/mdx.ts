import fs from "node:fs/promises"
import path from "node:path"

import { compileMDX } from "next-mdx-remote/rsc"
import matter from "gray-matter"
import remarkGfm from "remark-gfm"

import { mdxComponents } from "@/components/mdx/mdx-components"

const BLOG_PATH = path.join(process.cwd(), "content", "blog")

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
}

export type BlogSummary = BlogFrontmatter & {
  slug: string
}

export async function getAllPosts(): Promise<BlogSummary[]> {
  const files = await fs.readdir(BLOG_PATH)

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "")
        const raw = await fs.readFile(path.join(BLOG_PATH, file), "utf8")
        const { data } = matter(raw)
        const metadata = data as BlogFrontmatter
        return {
          ...metadata,
          slug,
        }
      })
  )

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getPost(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
  const source = await fs.readFile(filePath, "utf8")

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return {
    metadata: frontmatter,
    content,
  }
}

