"use client"

import Link from "next/link"
import AnimatedCodeAbstraction from "@/components/animated-shape"
import PageTransitionLayout from "@/components/page-transition-layout"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <PageTransitionLayout>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 225deg at 120% -20%, #1E1235 0deg, #A11A98 90deg, #c0357a 180deg, #A11A98 270deg, #1E1235 360deg),
              radial-gradient(circle at 20% 20%, #A11A98 0%, transparent 45%),
              radial-gradient(circle at 80% 30%, #c0357a 0%, transparent 45%),
              radial-gradient(circle at 70% 70%, #A11A98 0%, transparent 45%),
              radial-gradient(circle at 30% 80%, #c0357a 0%, transparent 45%)
            `,
            backgroundBlendMode: 'overlay',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%)",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.2)",
          }}
        />
        <div className="text-center text-white flex flex-col items-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Brian Ressler
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

