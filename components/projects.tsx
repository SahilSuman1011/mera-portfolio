"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, ExternalLink, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "StudyNotion",
    description:
      "An Edtech Platform with course management and learning features. Complete platform for online education with course creation, enrollment, and learning management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    demo: "https://studynotion-frontend.vercel.app/",
  },
  {
    title: "AutoComm",
    description:
      "Community Engagement Platform with real-time chat and AI integration. Built for seamless communication and automated responses using advanced AI.",
    techStack: ["Next.js", "Kestra", "MongoDB", "Clerk", "Tailwind CSS"],
    demo: "https://kestra-autocomm.vercel.app/",
  },
  {
    title: "Personal Expense Tracker",
    description:
      "Full-stack Application to Track Personal expenses, able to Export expenses to CSV with Advanced filtering and search with Real-time updates",
    techStack: ["React", "FastAPI", "Shadcn UI", "Tailwind", "SQLAlchemy"],
    github: "https://github.com/SahilSuman1011/Expense-Tracker-Project",
  },
  {
    title: "URL Shortener API",
    description:
      "URL shortening service with analytics tracking. Features include custom short URLs, click tracking, and geographic analytics using GeoIP.",
    techStack: ["TypeScript", "Node.js", "GeoIP", "Express", "MongoDB"],
    github: "https://github.com/SahilSuman1011/url-shortener",
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
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.demo && i < 2 && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-full hover:bg-muted/50"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && i >= 2 && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-full hover:bg-muted/50"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted/50 text-xs hover:bg-muted">
                        {tech}
                      </Badge>
                    ))}
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

