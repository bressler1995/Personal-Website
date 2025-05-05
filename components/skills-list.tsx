"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJest,
  SiTestinglibrary,
  SiGit,
  SiGithubactions,
  SiAmazon
} from "react-icons/si"

const skills = [
  { name: "React", icon: SiReact, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "from-black to-gray-800" },
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-teal-400 to-teal-600" },
  { name: "Redux", icon: SiRedux, color: "from-purple-500 to-purple-700" },
  { name: "GraphQL", icon: SiGraphql, color: "from-pink-500 to-pink-700" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-green-700" },
  { name: "Express", icon: SiExpress, color: "from-gray-500 to-gray-700" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-500 to-blue-700" },
  { name: "Jest", icon: SiJest, color: "from-red-500 to-red-700" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "from-red-600 to-red-800" },
  { name: "Git", icon: SiGit, color: "from-orange-500 to-orange-700" },
  { name: "CI/CD", icon: SiGithubactions, color: "from-indigo-500 to-indigo-700" },
  { name: "AWS", icon: SiAmazon, color: "from-yellow-500 to-yellow-700" },
]

const SkillsList = () => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Badge
            variant="outline"
            className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-r ${skill.color} text-white transition-all duration-300 rounded-lg shadow-md hover:shadow-lg`}
          >
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <skill.icon className="w-8 h-8 mb-2" />
            </motion.div>
            <span className="text-sm font-semibold">{skill.name}</span>
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SkillsList

