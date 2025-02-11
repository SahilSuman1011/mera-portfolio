"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"
import Image from "next/image"

const techStack = [
  // Languages
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    category: "language",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "language",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "language",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "language",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "language",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "language",
  },
  // Frameworks & Libraries
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "framework",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "framework",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "framework",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "framework",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    category: "framework",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    category: "framework",
  },
  // Databases
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "database",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "database",
  },
  // Tools
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tool",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "tool",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "tool",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    category: "tool",
  },
]

export function TechStack() {
  return (
    <section className="py-4">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center mb-8"
        >
          Tech Stack
        </motion.h2>
        <CardHoverEffect className="relative p-6 overflow-hidden bg-background/50 backdrop-blur-sm">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden">
            {/* First Row */}
            <div className="relative flex overflow-x-hidden py-4">
              <motion.div
                className="flex gap-8 animate-scroll"
                style={{
                  width: "max-content",
                  animationDuration: "30s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                }}
              >
                {[...techStack, ...techStack].map((tech, idx) => (
                  <div key={`${tech.name}-1-${idx}`} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-muted/30 backdrop-blur-sm border border-muted/50 hover:border-primary/50 transition-colors">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="transition-all hover:scale-110"
                        style={{ filter: "brightness(1.2) contrast(1.2)" }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="relative flex overflow-x-hidden py-4">
              <motion.div
                className="flex gap-8 animate-scroll-reverse"
                style={{
                  width: "max-content",
                  animationDuration: "25s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                }}
              >
                {[...techStack.reverse(), ...techStack].map((tech, idx) => (
                  <div key={`${tech.name}-2-${idx}`} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-muted/30 backdrop-blur-sm border border-muted/50 hover:border-primary/50 transition-colors">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="transition-all hover:scale-110"
                        style={{ filter: "brightness(1.2) contrast(1.2)" }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </CardHoverEffect>
      </div>
    </section>
  )
}

