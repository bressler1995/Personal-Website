"use client"

import { useState, useEffect } from "react"

export const useScrollbarVisibility = () => {
  const [showScrollbar, setShowScrollbar] = useState(false)

  useEffect(() => {
    const checkScrollbar = () => {
      const hasScrollbar = document.documentElement.scrollHeight > window.innerHeight
      setShowScrollbar(hasScrollbar)
    }

    // Initial check
    checkScrollbar()

    // Check on resize
    window.addEventListener("resize", checkScrollbar)

    // Cleanup
    return () => window.removeEventListener("resize", checkScrollbar)
  }, [])

  return showScrollbar
}

