"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { CardHoverEffect } from "./card-hover-effect"
import { motion } from "framer-motion"

export function ProfileCard() {
  const socialLinks = [
    {
      href: "https://github.com/SahilSuman1011",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sahilsuman11/",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/SahilSuman1111",
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
    },
  ]

  return (
    <CardHoverEffect className="h-[calc(100%_-_1rem)] p-6">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Socials</h3>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  delay: i * 0.1,
                }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {link.icon}
                  <span className="text-xs text-muted-foreground">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CardHoverEffect>
  )
}

