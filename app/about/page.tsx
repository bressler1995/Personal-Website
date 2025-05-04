import PageTransitionLayout from "@/components/page-transition-layout"
import PageHero from "@/components/page-hero"

export default function About() {
  return (
    <PageTransitionLayout>
      <PageHero title="About Me" description="Discover the journey and passion behind my work as a React developer." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="mb-4">
          Hi, I'm Brian Ressler, a passionate React developer with 5 years of experience building modern web applications. I
          specialize in creating responsive, user-friendly interfaces and robust, scalable backend solutions.
        </p>
        <p className="mb-4">
          My journey in web development started with a fascination for creating interactive user experiences. Over the
          years, I've honed my skills in React, Next.js, and various other technologies in the JavaScript ecosystem.
        </p>
        <p className="mb-4">
          When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or
          sharing my knowledge through tech blogs and community meetups.
        </p>
        {/* Additional content to ensure scrolling */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
          <p className="mb-4">
            I believe in writing clean, maintainable code that solves real-world problems. My approach to development is
            always user-centric, focusing on creating intuitive interfaces and smooth user experiences.
          </p>
          <p className="mb-4">
            I'm passionate about staying up-to-date with the latest web technologies and best practices. This allows me
            to bring innovative solutions to every project I work on.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
          <p className="mb-4">
            Throughout my career, I've had the opportunity to work on a diverse range of projects, from small startups
            to large enterprise applications. This experience has given me a broad perspective on different development
            approaches and methodologies.
          </p>
          <p className="mb-4">
            I've led teams, mentored junior developers, and collaborated with designers and product managers to deliver
            high-quality software solutions. My ability to communicate complex technical concepts to non-technical
            stakeholders has been crucial in bridging the gap between development teams and business objectives.
          </p>
        </div>
      </div>
    </PageTransitionLayout>
  )
}

