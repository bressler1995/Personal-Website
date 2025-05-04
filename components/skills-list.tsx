"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  CodepenIcon as ReactIcon,
  CodepenIcon as NextJs,
  FileTypeIcon as FileTypeTypescript,
  Paintbrush2,
  Atom,
  GitGraphIcon as GraphQl,
  CodepenIcon as NodeJs,
  Server,
  Database,
  FileTypeIcon as FileTypeTest,
  GitBranch,
  Workflow,
  Cloud,
} from "lucide-react"

const skills = [
  { name: "React", icon: ReactIcon, color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: NextJs, color: "from-black to-gray-800" },
  { name: "TypeScript", icon: FileTypeTypescript, color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", icon: Paintbrush2, color: "from-teal-400 to-teal-600" },
  { name: "Redux", icon: Atom, color: "from-purple-500 to-purple-700" },
  { name: "GraphQL", icon: GraphQl, color: "from-pink-500 to-pink-700" },
  { name: "Node.js", icon: NodeJs, color: "from-green-500 to-green-700" },
  { name: "Express", icon: Server, color: "from-gray-500 to-gray-700" },
  { name: "MongoDB", icon: Database, color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-blue-700" },
  { name: "Jest", icon: FileTypeTest, color: "from-red-500 to-red-700" },
  { name: "React Testing Library", icon: FileTypeTest, color: "from-red-600 to-red-800" },
  { name: "Git", icon: GitBranch, color: "from-orange-500 to-orange-700" },
  { name: "CI/CD", icon: Workflow, color: "from-indigo-500 to-indigo-700" },
  { name: "AWS", icon: Cloud, color: "from-yellow-500 to-yellow-700" },
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

