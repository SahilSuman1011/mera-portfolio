"use client"

import { motion } from "framer-motion"
import { Code2, FileCode2, Database, Layout, Server, Terminal, Cpu, Globe, Box } from "lucide-react"

const techIcons = [
  { Icon: Code2, name: "React", color: "#61DAFB" },
  { Icon: FileCode2, name: "Next.js", color: "#000000" },
  { Icon: Terminal, name: "TypeScript", color: "#3178C6" },
  { Icon: Globe, name: "JavaScript", color: "#F7DF1E" },
  { Icon: Layout, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: Server, name: "Node.js", color: "#339933" },
  { Icon: Database, name: "MongoDB", color: "#47A248" },
  { Icon: Box, name: "Express", color: "#000000" },
  { Icon: Cpu, name: "Nest.js", color: "#E0234E" },
]

export function TechScroll() {
  return (
    <div className="w-full overflow-hidden bg-black py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1035],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-8">
            <tech.Icon className="w-12 h-12" style={{ color: tech.color }} />
            <span className="mt-2 text-sm text-gray-500">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

