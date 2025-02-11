import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Blogs } from "@/components/blogs"
import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      <section id="home">
        <Hero />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

