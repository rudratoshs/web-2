export interface Technology {
    name: string
    icon: string
    category: string
  }
  
  export const technologies: Technology[] = [
    // Frontend
    { name: "React", icon: "/icons/react.svg", category: "Frontend" },
    { name: "Next.js", icon: "/icons/nextjs.svg", category: "Frontend" },
    { name: "Vue.js", icon: "/icons/vuejs.svg", category: "Frontend" },
    { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "Frontend" },
  
    // Backend
    { name: "Node.js", icon: "/icons/nodejs.svg", category: "Backend" },
    { name: "GraphQL", icon: "/icons/graphql.svg", category: "Backend" },
    { name: "Go", icon: "/icons/go.svg", category: "Backend" },
    { name: "Rust", icon: "/icons/rust.svg", category: "Backend" },
    { name: "Python", icon: "/icons/python.svg", category: "Backend" },
  
    // Database
    { name: "MongoDB", icon: "/icons/mongodb.svg", category: "Database" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
    { name: "Redis", icon: "/icons/redis.svg", category: "Database" },
  
    // DevOps
    { name: "Docker", icon: "/icons/docker.svg", category: "DevOps" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg", category: "DevOps" },
    { name: "AWS", icon: "/icons/aws.svg", category: "DevOps" }
  ]