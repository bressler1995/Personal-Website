"use client"

import type React from "react"

import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  description: string
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1E1235] via-[#A11A98] to-[#c0357a] text-white h-[300px] sm:h-[350px] lg:h-[400px]">
      <div className="absolute inset-0">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="rgba(192, 53, 122, 0.2)"  /* #c0357a with 20% opacity */
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,192C672,192,768,160,864,149.3C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-lg mx-auto text-center text-xl sm:max-w-3xl">{description}</p>
      </div>
    </div>
  )
}

export default PageHero

