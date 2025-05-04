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
      <div className="min-h-screen p-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">Individual Skills</h2>
          <SkillsList />
        </section>
      </div>
    </PageTransitionLayout>
  )
}

