"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Code, Briefcase, User, BookOpen, ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
]

const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isTextVisible = isMobile ? isExpanded : isOpen

  return (
    <>
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
      <aside className={`fixed top-0 left-0 h-screen bg-deep-purple border-r-2 border-[#4D2E8A] flex flex-col shadow-[4px_0_8px_-2px_rgba(0,0,0,0.3)] z-20 transition-all duration-300 
        ${isMobile ? (isExpanded ? 'w-64' : 'w-16') : (isOpen ? 'w-64' : 'w-16')}`}>
        <div className="w-full h-full overflow-hidden">
          <div className="w-64 flex flex-col h-full">
            <div className="p-4 flex justify-center md:justify-start items-center">
              <span className={`text-2xl font-bold ${isTextVisible ? 'inline-block' : 'hidden'}`}>BR</span>
            </div>
            <nav className="flex-1">
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-4 relative group ${
                        pathname === item.href 
                          ? "bg-gradient-to-r from-[#A11A98]/40 via-[#A11A98]/20 to-transparent" 
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
                        <div className="flex items-center justify-center w-6">
                          <item.icon className={`w-6 h-6 ${
                            pathname === item.href ? "text-[#A11A98]" : "text-white/70 group-hover:text-white"
                          }`} />
                        </div>
                        <div className={`ml-8 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
                          <span className={`${
                            pathname === item.href ? "text-white font-medium" : "text-white/70 group-hover:text-white"
                          }`}>
                            {item.name}
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t border-white/10">
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
          <motion.button
            onClick={() => {
              if (isMobile) {
                setIsExpanded(!isExpanded)
              } else {
                setIsOpen(!isOpen)
              }
            }}
            className="p-2 rounded-full bg-deep-purple hover:bg-[#2A1B4A] border border-[#4D2E8A] shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isTextVisible ? (
              <ChevronLeft className="w-5 h-5 text-white/70" />
            ) : (
              <ChevronRight className="w-5 h-5 text-white/70" />
            )}
          </motion.button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

