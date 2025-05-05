"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedCodeAbstraction = () => {
  const lineCount = 7
  const dotCount = 12
  const [mounted, setMounted] = useState(false)

  // Predefined positions for dots to ensure consistency between server and client
  const dotPositions = [
    { x: 200, y: 100 },
    { x: 250, y: 150 },
    { x: 200, y: 200 },
    { x: 100, y: 200 },
    { x: 50, y: 150 },
    { x: 100, y: 100 },
    { x: 150, y: 50 },
    { x: 150, y: 250 },
    { x: 200, y: 150 },
    { x: 100, y: 150 },
    { x: 150, y: 100 },
    { x: 150, y: 200 }
  ]

  // Define dot colors using our brand colors
  const dotColors = [
    "#ED408B", // Pink
    "#A11A98", // Magenta
    "#1E1235", // Deep Purple
    "#ED408B",
    "#A11A98",
    "#281847",
    "#ED408B",
    "#A11A98",
    "#281847",
    "#ED408B",
    "#A11A98",
    "#281847"
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex justify-center items-center">
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Circular background */}
        <defs>
          <clipPath id="circleClip">
            <circle cx="150" cy="150" r="150" />
          </clipPath>
        </defs>
        <circle cx="150" cy="150" r="150" fill="#1E1235" />

        {/* Container for grid lines with overflow hidden */}
        <g clipPath="url(#circleClip)">
          {/* Animated grid lines */}
          {[...Array(lineCount)].map((_, i) => (
            <g key={`grid-${i}`}>
              {/* Horizontal line */}
              <motion.line
                x1="0"
                y1={i * 50}
                x2="300"
                y2={i * 50}
                stroke="#C13AB8"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0.2, 0.4, 0.4, 0.2],
                  y1: [i * 50, i * 50 + 5, i * 50 - 5, i * 50],
                  y2: [i * 50, i * 50 - 5, i * 50 + 5, i * 50],
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.4, 0.6, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
              {/* Vertical line */}
              <motion.line
                x1={i * 50}
                y1="0"
                x2={i * 50}
                y2="300"
                stroke="#C13AB8"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0.2, 0.4, 0.4, 0.2],
                  x1: [i * 50, i * 50 + 5, i * 50 - 5, i * 50],
                  x2: [i * 50, i * 50 - 5, i * 50 + 5, i * 50],
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.4, 0.6, 1],
                  delay: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}
        </g>

        {/* Animated dots */}
        {dotPositions.map((pos, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill={dotColors[i]}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.8, 1],
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central shape */}
        <motion.path
          d="M150 75 L225 150 L150 225 L75 150 Z"
          fill="none"
          stroke="#ED408B"
          strokeWidth="4"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        {/* Pulsating circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="70"
          fill="none"
          stroke="#A11A98"
          strokeWidth="2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Additional dynamic lines */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={`dynamic-line-${i}`}
            d={`M${75 + i * 75} 75 Q150 ${150 + i * 25} ${225 - i * 75} 225`}
            fill="none"
            stroke="#ED408B"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1],
              pathOffset: [0, 1],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.6, 1],
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default AnimatedCodeAbstraction

