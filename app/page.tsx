import Link from "next/link"
import AnimatedCodeAbstraction from "@/components/animated-shape"
import PageTransitionLayout from "@/components/page-transition-layout"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <PageTransitionLayout>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-[#281847] via-[#A11A98] to-[#c0357a]">
        <div className="text-center text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Jane Doe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">React Developer Extraordinaire</p>
          <AnimatedCodeAbstraction />
          <div className="mt-8">
            <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransitionLayout>
  )
}

