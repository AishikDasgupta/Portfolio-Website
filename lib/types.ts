export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

export interface Skill {
  name: string
  icon: string
  level: number
}

export interface Experience {
  id: string
  role: string
  company: string
  duration: string
  description: string[]
}