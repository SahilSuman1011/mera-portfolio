"use client"

import { motion } from "framer-motion"
import { CardHoverEffect } from "../components/card-hover-effect"

const experiences = [
  {
    title: "Web Development Intern",
    company: "Webstack Academy",
    companyLink: "https://www.linkedin.com/company/webstackacademyit/",
    period: "February 2024 - April 2024",
    description: [
      "Spearheaded frontend development of a home-buying website using React.js",
      "Optimized database efficiency with MongoDB integration",
      "Applied responsive design techniques with CSS",
    ],
  },
  {
    title: "Graphic and UI/UX Design Intern",
    company: "Starplayers",
    companyLink: "https://www.linkedin.com/company/starplayers/",
    period: "March 2023 - May 2023",
    description: [
      "Collaborated with engineering and design teams to enhance user interfaces",
      "Optimized operational workflows by designing user-friendly templates",
      "Boosted user engagement through strategic social media campaigns",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-4 relative">
      {/* Workflow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container max-w-3xl space-y-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Experience
        </motion.h2>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardHoverEffect className="border border-primary/20">
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {experience.company}
                    </a>
                    <p className="text-sm text-muted-foreground">{experience.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

