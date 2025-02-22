import { Project, Skill, Experience } from './types'

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Showcase the offerings of EHP, including categories like Neutraceuticals, Cosmetics, and Ayurvedic Medicines.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600",
    tags: ["HTML", "JavaScript", "Bootstrap CSS", "Prisma","Netlify", "JQuery"],
    demoUrl: "https://ehpindia.co.in/",
    githubUrl: "https://github.com/AishikDasgupta/Economic-Homeo-Pharmacy"
  },
  {
    id: "2",
    title: "Gym Membership WebApp",
    description: "A platform for Gyms to advertise themselves online and expand customer reach.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React.js","Typescript", "Tailwind CSS", "Shadcn", "Framer-motion", "Jotform","Netlify","RazorPay"],
    demoUrl: "https://hustlemania.netlify.app/",
    githubUrl: "https://github.com/AishikDasgupta/hustlemania_fitness_studio"
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A dynamic full-stack portfolio showcasing my skills in building modern, responsive web applications with seamless user experiences.",
    image: "https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js" ,"Typescript", "Tailwind CSS", "Shadcn", "Framer-motion"],
    demoUrl: "https://hustlemania.netlify.app/",
    githubUrl: "https://github.com/AishikDasgupta/hustlemania_fitness_studio"
  },
  {
    id: "4",
    title: "Animation Track",
    description: "A minimalist image carousel built with HTML5, CSS3, and JavaScript.It features a smooth animation effect and is fully responsive.",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML" ,"Javascript", "Vanilla CSS"],
    demoUrl: "https://github.com/AishikDasgupta/Animation-Track",
    githubUrl: "https://github.com/AishikDasgupta/Animation-Track"
  },
  {
    id: "5",
    title: "Menu-Animations",
    description: "A sleek, responsive animated menu with fluid hover effects and modern transitions to enhance user interaction.",
    image: "https://images.pexels.com/photos/29308673/pexels-photo-29308673/free-photo-of-smartphone-screen-with-app-interface-in-focus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["HTML" ,"Javascript", "Vanilla CSS"],
    demoUrl: "https://github.com/AishikDasgupta/Menu-Animations",
    githubUrl: "https://github.com/AishikDasgupta/Menu-Animations"
  },
  {
    id: "6",
    title: "ATS-Simulator",
    description: "A Python-based simulator for experiencing the hiring process from a candidate's perspective, including applications, interviews, and scheduling.",
    image: "https://media.istockphoto.com/id/2016578758/photo/wireless-mouse-and-wooden-stick-with-the-word-applicant-tracking-system.jpg?s=1024x1024&w=is&k=20&c=KLMyKeXcuBN5uHur_XDw41JSBUrH_z_YtJjm8EZ9UWE=",
    tags: ["HTML" ,"Javascript", "Vanilla CSS", "Python","Streamlit","Spacy","PyPDF2"],
    demoUrl: "https://github.com/AishikDasgupta/SimRecruit",
    githubUrl: "https://github.com/AishikDasgupta/SimRecruit"
  },
  {
    id: "7",
    title: "School Management System",
    description: "A comprehensive platform designed to streamline administrative tasks, enhance communication, and improve the overall educational experience for students, teachers, and parents.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js" ,"Typescript", "Tailwind CSS", "Postgres SQL","Prisma","React"],
    demoUrl: "https://github.com/AishikDasgupta/school-managment-system",
    githubUrl: "https://github.com/AishikDasgupta/school-managment-system"
  },
  // Add more projects...
]

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    level: 90
  },
  {
    name: "NextJS",
    icon: "next",
    level: 85
  },
  {
    name: "React Native",
    icon: "react native",
    level: 80
  },
  {
    name: "Python",
    icon: "python",
    level: 90
  },
  {
    name: "C/C++",
    icon: "C++",
    level: 75
  },
  {
    name: "Express",
    icon: "express",
    level: 60
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: 80
  },
  {
    name: "Docker",
    icon: "docker",
    level: 70
  },
  {
    name: "Postgres",
    icon: "postgres",
    level: 60
  },

  // Add more skills...
]

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Data Reserach & Analyst Intern",
    company: "Vaave",
    duration: "2023 - 2024",
    description: [
      "Designed and maintained responsive websites with Tailwind CSS, HTML, and JavaScript, improving user experience by 80%.",
      "Streamlined development workflows by integrating AI tools, increasing productivity by 90% and reducing manual tasks.",
      "Enhanced website performance, cutting load times by 30%, which improved user retention and client satisfaction."
    ]
  },
  {
    id: "2",
    role: "Gym Web-App",
    company: "Freelance",
    duration: "2024 - 2025",
    description: [
      "Developed and deployed a responsive website for a Gym with cutting-edge animations using React, Vite, TypeScript, and Tailwind CSS, hosted on Netlify.",
      "Integrated Jotform for seamless client inquiries and Razorpay for secure online payments, reducing manual workflows by 30%.",
      "Proposed a scalable full-stack solution for client management and membership renewals, streamlining operations for over 200+ clients.",
      "Improved the overall user experience by 80% and reduced the time taken to complete tasks by 40%.",
      "Enhanced user engagement with interactive UI/UX powered by Framer Motion, increasing visitor retention by 40%.",
      "Boosted membership sign-ups by 25% within the first month through improved online accessibility and payment integration.",
    ]
  },
  {
    id: "3",
    role: "EHP E-commerce Website",
    company: "Freelance",
    duration: "2024 - 2025",
    description: [
      "Designed and developed a responsive e-commerce website for a pharmacy, showcasing Neutraceuticals, Cosmetics, and Ayurvedic Medicines.",
      "Integrated features like Google Maps, dynamic product categories, and a dark mode toggle for enhanced user accessibility.",
      "Utilized HTML5, CSS3, JavaScript, Bootstrap, and jQuery, with deployment on GitHub Pages.",
      "Improved the overall user experience by 80% and reduced the time taken to complete tasks by 40%.",
      "Delivered this freelance project to a client, meeting their business requirements and boosting their online presence.",
      "Demonstrated end-to-end project ownership, including design, development, and client delivery.",
    ]
  },
  // Add more experiences...
]