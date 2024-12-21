export interface Testimonial {
    name: string
    role: string
    company: string
    quote: string
    image: string
    rating: number
  }
  
  export const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate Inc.",
      quote: "The team's expertise in cloud solutions transformed our infrastructure. Their dedication to quality and innovative approach exceeded our expectations.",
      image: "/testimonials/sarah.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Director",
      company: "DataDrive Solutions",
      quote: "The AI-powered analytics platform they developed has revolutionized our decision-making process. Their technical prowess is truly impressive.",
      image: "/testimonials/michael.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "GreenTech Innovations",
      quote: "Working with them on our IoT project was a game-changer. Their ability to navigate complex technical challenges while maintaining clear communication was outstanding.",
      image: "/testimonials/emily.jpg",
      rating: 5
    }
  ]