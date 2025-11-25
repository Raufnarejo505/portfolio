import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/sections/about"
import { AvailabilitySection } from "@/components/sections/availability"
import { BlogSection } from "@/components/sections/blog"
import { ContactSection } from "@/components/sections/contact"
import { CTASection } from "@/components/sections/cta"
import { EngagementSection } from "@/components/sections/engagement"
import { ExperienceSection } from "@/components/sections/experience"
import { FAQSection } from "@/components/sections/faq"
import { HeroSection } from "@/components/sections/hero"
import { ProcessSection } from "@/components/sections/process"
import { ProjectsSection } from "@/components/sections/projects"
import { ResultsSection } from "@/components/sections/results"
import { ServicesSection } from "@/components/sections/services"
import { SkillsSection } from "@/components/sections/skills"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { TrustSection } from "@/components/sections/trust"

export default async function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <main className="space-y-6">
        <HeroSection />
        <AvailabilitySection />
        <TrustSection />
        <ResultsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <EngagementSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
