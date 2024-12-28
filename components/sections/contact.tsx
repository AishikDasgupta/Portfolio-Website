"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/ui/contact-form"
import { SectionHeading } from "@/components/ui/section-heading"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 mb-20">
      <SectionHeading>Get in Touch</SectionHeading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto mt-8"
      >
        <ContactForm />
      </motion.div>
    </section>
  )
}