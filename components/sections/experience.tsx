"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { ExperienceCard } from "@/components/ui/experience-card"
import { SectionHeading } from "@/components/ui/section-heading"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-8 mt-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}