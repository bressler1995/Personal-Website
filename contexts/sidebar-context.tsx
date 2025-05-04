"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

type SidebarContextType = {
  isOpen: boolean
  isExpanded: boolean
  toggleSidebar: () => void
  toggleExpand: () => void
  closeSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = useCallback(() => setIsOpen((prev) => !prev), [])
  const toggleExpand = useCallback(() => setIsExpanded((prev) => !prev), [])
  const closeSidebar = useCallback(() => setIsOpen(false), [])

  return (
    <SidebarContext.Provider value={{ isOpen, isExpanded, toggleSidebar, toggleExpand, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

