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
    <aside className="w-16 md:w-64 h-screen bg-deep-purple border-r-2 border-[#4D2E8A] flex flex-col shadow-[4px_0_8px_-2px_rgba(0,0,0,0.3)] z-10">
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
                className={`flex items-center p-4 relative group ${
                  pathname === item.href 
                    ? "bg-gradient-to-r from-[#A11A98]/20 to-transparent" 
                    : "hover:bg-white/5"
                }`}
              >
                <motion.div
                  className={`absolute inset-0 border-l-2 ${
                    pathname === item.href 
                      ? "border-[#A11A98]" 
                      : "border-transparent group-hover:border-white/20"
                  }`}
                  initial={false}
                  animate={{
                    scale: pathname === item.href ? 1 : 0.95,
                    opacity: pathname === item.href ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <motion.div
                  className="flex items-center"
                  animate={{
                    x: pathname === item.href ? 4 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <item.icon className={`w-6 h-6 mr-4 ${
                    pathname === item.href ? "text-[#A11A98]" : "text-white/70 group-hover:text-white"
                  }`} />
                  <span className={`hidden md:inline-block ${
                    pathname === item.href ? "text-white" : "text-white/70 group-hover:text-white"
                  }`}>{item.name}</span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

