export interface Project {
    id: number
    title: string
    description: string
    category: string
    image: string
    technologies: string[]
    color: string
    link: string
    date: string
    team: string
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "A next-generation e-commerce platform featuring AI-driven product recommendations, real-time inventory management, and seamless payment integration. Built with scalability and performance in mind.",
      category: "Web Development",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "React", "Node.js", "TensorFlow", "AWS"],
      color: "from-primary to-secondary",
      link: "#",
      date: "March 2024",
      team: "6 members"
    },
    {
      id: 2,
      title: "Fintech Mobile Banking",
      description: "Revolutionary mobile banking application with blockchain integration, AI-driven fraud detection, and real-time transaction processing. Features biometric authentication and encrypted data storage.",
      category: "Mobile Apps",
      image: "/projects/banking.jpg",
      technologies: ["React Native", "TypeScript", "AWS", "Blockchain"],
      color: "from-purple-500 to-primary",
      link: "#",
      date: "February 2024",
      team: "8 members"
    },
    {
      id: 3,
      title: "Healthcare Analytics Dashboard",
      description: "Advanced healthcare analytics platform providing real-time patient monitoring, predictive diagnostics, and data visualization. Helps medical professionals make informed decisions quickly.",
      category: "UI/UX Design",
      image: "/projects/healthcare.jpg",
      technologies: ["Vue.js", "D3.js", "Python", "TensorFlow"],
      color: "from-secondary to-blue-400",
      link: "#",
      date: "January 2024",
      team: "5 members"
    }
  ]