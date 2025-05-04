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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectsShowcase />
      </div>
    </PageTransitionLayout>
  )
}

