import Link from "next/link"
import AnimatedCodeAbstraction from "@/components/animated-shape"
import PageTransitionLayout from "@/components/page-transition-layout"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <PageTransitionLayout>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="text-center text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Jane Doe</h1>
          <p className="text-xl md:text-2xl mb-8">React Developer Extraordinaire</p>
          <AnimatedCodeAbstraction />
          <div className="mt-8">
            <Button asChild className="bg-white text-blue-900 hover:bg-blue-100 transition-colors">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransitionLayout>
  )
}

