import SkillsList from "@/components/skills-list"
import PageTransitionLayout from "@/components/page-transition-layout"
import PageHero from "@/components/page-hero"

export default function Skills() {
  return (
    <PageTransitionLayout>
      <PageHero
        title="My Skills"
        description="A showcase of the technologies and tools I've mastered in my journey as a React developer."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">Individual Skills</h2>
          <SkillsList />
        </section>
      </div>
    </PageTransitionLayout>
  )
}

