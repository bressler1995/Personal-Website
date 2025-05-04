import ProjectsShowcase from "@/components/projects-showcase"
import PageTransitionLayout from "@/components/page-transition-layout"
import PageHero from "@/components/page-hero"

export default function Projects() {
  return (
    <PageTransitionLayout>
      <PageHero
        title="My Projects"
        description="Explore a collection of my best work, demonstrating my skills and creativity in React development."
      />
      <div className="min-h-screen p-8 overflow-auto">
        <ProjectsShowcase />
      </div>
    </PageTransitionLayout>
  )
}

