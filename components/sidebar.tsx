"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Code, Briefcase, User, BookOpen } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-16 md:w-64 h-screen bg-deep-purple border-r flex flex-col">
      <div className="p-4 flex justify-center md:justify-start items-center">
        <span className="hidden md:inline-block text-2xl font-bold">JD</span>
        <span className="md:hidden text-2xl font-bold">J</span>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-4 hover:bg-muted transition-colors relative ${
                  pathname === item.href ? "text-accent" : ""
                }`}
              >
                <item.icon className="w-6 h-6 mr-4" />
                <span className="hidden md:inline-block">{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1 bg-accent"
                    layoutId="sidebar-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

