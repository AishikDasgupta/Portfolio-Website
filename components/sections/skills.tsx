"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { SkillCard } from "@/components/ui/skill-card"
import { SectionHeading } from "@/components/ui/section-heading"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeading>Skills & Technologies</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}