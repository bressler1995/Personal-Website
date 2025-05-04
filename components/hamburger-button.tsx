"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/contexts/sidebar-context"

const HamburgerButton = () => {
  const { toggleSidebar, isOpen } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 left-4 z-[60]"
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      <Menu className="h-6 w-6" />
    </Button>
  )
}

export default HamburgerButton

