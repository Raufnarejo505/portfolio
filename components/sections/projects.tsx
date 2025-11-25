import Image from "next/image"

import { FEATURED_PROJECTS } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Case Studies
          </p>
          <h2 className="font-display text-4xl">
            Production-grade Projects & FYP
          </h2>
          <p className="text-muted-foreground">
            Predictive modeling, Transformers, CNNs, end-to-end pipelines, and data-driven solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden border border-border/70 bg-background/80 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {project.image && (
                <div className="relative h-56 w-full overflow-hidden bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl">{project.title}</h3>
                  <Badge variant="outline">Case Study</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                {project.businessImpact && (
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Business Impact
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <p className="font-medium text-foreground">
                        {project.businessImpact.metric}
                      </p>
                      <p className="text-muted-foreground">
                        {project.businessImpact.savings}
                      </p>
                      <p className="text-xs text-primary">
                        {project.businessImpact.roi}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

