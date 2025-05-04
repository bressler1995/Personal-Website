import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Next.js, and Stripe integration.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Next.js", "Stripe", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Task Management App",
    description: "A Trello-like task management application with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Redux", "Socket.io", "Express"],
    demoUrl: "#",
    codeUrl: "#",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "OpenWeatherMap API", "Mapbox"],
    demoUrl: "#",
    codeUrl: "#",
    color: "from-yellow-500 to-orange-500",
  },
]

const ProjectsShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.title} className={`flex flex-col bg-gradient-to-br ${project.color} text-white`}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="text-gray-200">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 text-white">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProjectsShowcase

