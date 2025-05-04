"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

type TransitionContextType = {
  isTransitioning: boolean
  setIsTransitioning: (isTransitioning: boolean) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioningState] = useState(false)
  const [transitionTimer, setTransitionTimer] = useState<NodeJS.Timeout | null>(null)

  const setIsTransitioning = useCallback(
    (value: boolean) => {
      if (transitionTimer) {
        clearTimeout(transitionTimer)
      }

      if (value) {
        setIsTransitioningState(true)
      } else {
        const timer = setTimeout(() => {
          setIsTransitioningState(false)
        }, 300) // Match this with the transition duration
        setTransitionTimer(timer)
      }
    },
    [transitionTimer],
  )

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>{children}</TransitionContext.Provider>
  )
}

export const useTransition = () => {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider")
  }
  return context
}

