export interface BlogPost {
    id: number
    title: string
    excerpt: string
    category: string
    author: {
      name: string
      role: string
      avatar: string
    }
    coverImage: string
    date: string
    readTime: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain software applications.",
      category: "Technology",
      author: {
        name: "Alex Morgan",
        role: "Tech Lead",
        avatar: "/team/alex.jpg"
      },
      coverImage: "/blog/ai-development.jpg",
      date: "Mar 16, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn the best practices for designing and implementing microservices that can scale with your business.",
      category: "Architecture",
      author: {
        name: "Sarah Chen",
        role: "Solutions Architect",
        avatar: "/team/sarah.jpg"
      },
      coverImage: "/blog/microservices.jpg",
      date: "Mar 14, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Rise of Edge Computing",
      excerpt: "Discover how edge computing is transforming data processing and improving application performance.",
      category: "Infrastructure",
      author: {
        name: "James Wilson",
        role: "Cloud Engineer",
        avatar: "/team/james.jpg"
      },
      coverImage: "/blog/edge-computing.jpg",
      date: "Mar 12, 2024",
      readTime: "6 min read"
    }
  ]