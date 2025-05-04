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
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1E1235] via-[#A11A98] to-[#c0357a]"
          animate={{
            background: [
              "linear-gradient(145deg, #1E1235 0%, #A11A98 35%, #c0357a 100%)",
              "linear-gradient(165deg, #1E1235 0%, #c0357a 45%, #A11A98 100%)",
              "linear-gradient(195deg, #A11A98 0%, #1E1235 40%, #c0357a 100%)",
              "linear-gradient(215deg, #c0357a 0%, #A11A98 50%, #1E1235 100%)",
              "linear-gradient(235deg, #1E1235 0%, #c0357a 60%, #A11A98 100%)",
              "linear-gradient(255deg, #A11A98 0%, #1E1235 55%, #c0357a 100%)",
              "linear-gradient(275deg, #c0357a 0%, #A11A98 45%, #1E1235 100%)",
              "linear-gradient(295deg, #1E1235 0%, #c0357a 40%, #A11A98 100%)",
              "linear-gradient(315deg, #A11A98 0%, #1E1235 35%, #c0357a 100%)",
            ],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 10% 20%, rgba(237, 64, 139, 0.15) 0%, transparent 30%), radial-gradient(circle at 80% 30%, rgba(237, 64, 139, 0.1) 0%, transparent 25%), radial-gradient(circle at 30% 70%, rgba(237, 64, 139, 0.2) 0%, transparent 35%)",
              "radial-gradient(circle at 20% 40%, rgba(237, 64, 139, 0.1) 0%, transparent 25%), radial-gradient(circle at 70% 50%, rgba(237, 64, 139, 0.15) 0%, transparent 30%), radial-gradient(circle at 40% 80%, rgba(237, 64, 139, 0.2) 0%, transparent 35%)",
              "radial-gradient(circle at 30% 60%, rgba(237, 64, 139, 0.2) 0%, transparent 35%), radial-gradient(circle at 60% 70%, rgba(237, 64, 139, 0.1) 0%, transparent 25%), radial-gradient(circle at 50% 30%, rgba(237, 64, 139, 0.15) 0%, transparent 30%)",
              "radial-gradient(circle at 40% 80%, rgba(237, 64, 139, 0.15) 0%, transparent 30%), radial-gradient(circle at 50% 20%, rgba(237, 64, 139, 0.2) 0%, transparent 35%), radial-gradient(circle at 70% 40%, rgba(237, 64, 139, 0.1) 0%, transparent 25%)",
              "radial-gradient(circle at 10% 20%, rgba(237, 64, 139, 0.15) 0%, transparent 30%), radial-gradient(circle at 80% 30%, rgba(237, 64, 139, 0.1) 0%, transparent 25%), radial-gradient(circle at 30% 70%, rgba(237, 64, 139, 0.2) 0%, transparent 35%)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
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

