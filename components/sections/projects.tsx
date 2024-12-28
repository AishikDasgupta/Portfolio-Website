"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/ui/project-card"
import { SectionHeading } from "@/components/ui/section-heading"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}