"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, ExternalLink, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "StudyNotion",
    description:
      "An Edtech Platform with course management and learning features. Complete platform for online education with course creation, enrollment, and learning management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    demo: "https://studynotion-frontend.vercel.app/",
    github: "https://github.com/SahilSuman1011/StudyNotion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20003015-fnAA10GYsFxFv1TBOU4FLH4COvcPjx.png",
  },
  
  {
    title: "Promptopia",
    description:
      "A AI Prompt Sharing Application along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing Google Next-Auth authentication.",
    techStack: ["Next.js", "Tailwind CSS", "Next-Auth", "MongoDB"],
    demo: "https://promptopia-prompt-sharing-project.vercel.app/",
    github: "https://github.com/SahilSuman1011/Promptopia",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20003056-Hq7sKZcKBe8M4idlazyArCeKOozK1w.png",
  },
  {
    title: "AutoComm",
    description:
      "Community Engagement Platform with real-time chat and AI integration. Built for seamless communication and automated responses using advanced AI.",
    techStack: ["Next.js", "Kestra", "MongoDB", "Clerk", "Tailwind CSS"],
    demo: "https://kestra-autocomm.vercel.app/",
    github: "https://github.com/SahilSuman1011/kestra-hackfrost-24",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20003037-jjYVLrTg1TKE64jServj3FXNQedpfV.png",
  },
  {
    title: "Polygon Mapper App",
    description:
      "An Interactive mapping application using React 18, OpenLayers, and Tailwind CSS, enabling users to create, edit, and delete polygons with an intuitive UI.",
    techStack: ["React", "React Router", "Openlayers", "Tailwind CSS"],
    github: "https://github.com/SahilSuman1011/Polygon-mapper-main",
    demo: "https://polygon-mapper-main.vercel.app/",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20010720-jHnj5SrAj3zuRqivyQQrCK3JNMPXW1.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-4">
      <div className="container max-w-3xl space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Projects
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <CardHoverEffect className="border border-primary/20">
                <div className="group relative">
                  {/* Image Container with Hover Effect */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {/* Links that appear on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="h-6 w-6 text-white" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-6 w-6 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted/50 text-xs hover:bg-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="https://github.com/SahilSuman1011" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="group relative px-4 py-2 rounded-full overflow-hidden bg-background border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                View More <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

