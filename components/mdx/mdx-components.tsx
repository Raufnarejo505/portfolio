import type { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 scroll-m-20 font-display text-4xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 scroll-m-20 font-display text-3xl tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-m-20 font-semibold text-2xl tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-4" {...props} />
  ),
  ul: (props) => (
    <ul
      className="my-6 ml-6 list-disc space-y-2 text-muted-foreground marker:text-primary"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground marker:text-primary"
      {...props}
    />
  ),
  li: (props) => (
    <li className="leading-7 text-muted-foreground" {...props} />
  ),
  code: (props) => {
    const { children, className } = props
    const isInline = !className
    if (isInline) {
      return (
        <code
          className="rounded-md bg-muted px-2 py-1 text-sm font-semibold text-foreground"
          {...props}
        />
      )
    }
    return (
      <code
        className="block rounded-lg bg-muted p-4 text-sm font-mono text-foreground"
        {...props}
      />
    )
  },
  a: (props) => (
    <a
      className="text-primary underline-offset-4 hover:underline"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-primary pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
}

