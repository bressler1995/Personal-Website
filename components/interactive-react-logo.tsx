"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const InteractiveReactLogo = () => {
  const [rotation, setRotation] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotate: rotation,
      transition: { duration: 1, type: "spring" },
    })
  }, [rotation, controls])

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const angle = Math.atan2(y, x) * (180 / Math.PI)
    setRotation(angle)
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width="300"
      height="300"
      onMouseMove={handleMouseMove}
      animate={controls}
      className="cursor-pointer"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </motion.svg>
  )
}

export default InteractiveReactLogo

