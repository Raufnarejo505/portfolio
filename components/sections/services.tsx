import { SERVICES } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Services
          </p>
          <h2 className="font-display text-4xl">Data Science Services</h2>
          <p className="text-muted-foreground">
            Productized offers for data cleaning, dashboards, SQL automation, ML models, and business insights.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="border border-border/60 bg-background/80 transition hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    Work With Me
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/50 bg-card/50 px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

