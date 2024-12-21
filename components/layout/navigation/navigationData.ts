import {
    Code,
    Laptop,
    Cloud,
    Building2,
    Cpu,
    Shield,
    Stethoscope,
    Banknote,
    ShoppingCart,
    GraduationCap,
    Wifi,
    Blocks,
    Box,
    Layers,
    Settings,
    Users,
    BarChart,
    FileText,
    Newspaper,
    BookOpen,
    Video,
    Lightbulb,
    type LucideIcon
  } from 'lucide-react'
  
  export interface NavigationItem {
    title: string;
    sections?: {
      title: string;
      items: {
        title: string;
        href: string;
        description?: string;
        icon?: LucideIcon;
      }[];
    }[];
    featured?: {
      title: string;
      description: string;
      image: string;
      href: string;
    };
  }
  
  export const navigationItems: NavigationItem[] = [
    {
      title: "Products",
      sections: [
        {
          title: "Core Products",
          items: [
            {
              title: "Cloud Platform",
              href: "/products/cloud-platform",
              description: "Scalable and secure cloud infrastructure",
              icon: Cloud
            },
            {
              title: "Enterprise Suite",
              href: "/products/enterprise-suite",
              description: "Complete business solution package",
              icon: Building2
            },
            {
              title: "Developer Tools",
              href: "/products/developer-tools",
              description: "Professional development toolkit",
              icon: Code
            }
          ]
        },
        {
          title: "Solutions",
          items: [
            {
              title: "Analytics Platform",
              href: "/products/analytics",
              description: "Data analytics and visualization",
              icon: BarChart
            },
            {
              title: "Security Suite",
              href: "/products/security",
              description: "Advanced security solutions",
              icon: Shield
            },
            {
              title: "Integration Hub",
              href: "/products/integration",
              description: "Seamless system integration",
              icon: Settings
            }
          ]
        }
      ],
      featured: {
        title: "New Release: AI Platform",
        description: "Harness the power of artificial intelligence for your business",
        image: "/images/products/ai-platform.jpg",
        href: "/products/ai-platform"
      }
    },
    {
      title: "Solutions",
      sections: [
        {
          title: "Development",
          items: [
            {
              title: "Web Development",
              href: "/solutions/web-development",
              description: "Custom web applications",
              icon: Laptop
            },
            {
              title: "Mobile Development",
              href: "/solutions/mobile-development",
              description: "Native and cross-platform apps",
              icon: Box
            },
            {
              title: "Cloud Solutions",
              href: "/solutions/cloud",
              description: "Scalable infrastructure",
              icon: Cloud
            }
          ]
        },
        {
          title: "Enterprise",
          items: [
            {
              title: "Digital Transformation",
              href: "/solutions/digital-transformation",
              description: "Business modernization",
              icon: Layers
            },
            {
              title: "AI & Machine Learning",
              href: "/solutions/ai-ml",
              description: "Intelligent automation",
              icon: Cpu
            },
            {
              title: "Cybersecurity",
              href: "/solutions/security",
              description: "Digital protection",
              icon: Shield
            }
          ]
        }
      ],
      featured: {
        title: "Cloud Migration Services",
        description: "Seamlessly move your infrastructure to the cloud",
        image: "/images/solutions/cloud-migration.jpg",
        href: "/solutions/cloud-migration"
      }
    },
    {
      title: "Industries",
      sections: [
        {
          title: "Key Sectors",
          items: [
            {
              title: "Healthcare",
              href: "/industries/healthcare",
              description: "Digital healthcare solutions",
              icon: Stethoscope
            },
            {
              title: "Finance",
              href: "/industries/finance",
              description: "Fintech solutions",
              icon: Banknote
            },
            {
              title: "E-commerce",
              href: "/industries/ecommerce",
              description: "Online retail solutions",
              icon: ShoppingCart
            }
          ]
        },
        {
          title: "Emerging Markets",
          items: [
            {
              title: "EdTech",
              href: "/industries/edtech",
              description: "Educational technology",
              icon: GraduationCap
            },
            {
              title: "IoT",
              href: "/industries/iot",
              description: "Connected devices",
              icon: Wifi
            },
            {
              title: "Blockchain",
              href: "/industries/blockchain",
              description: "Decentralized apps",
              icon: Blocks
            }
          ]
        }
      ],
      featured: {
        title: "Healthcare Innovation",
        description: "Transforming healthcare with AI and IoT",
        image: "/images/industries/healthcare-innovation.jpg",
        href: "/industries/healthcare-case-study"
      }
    },
    {
      title: "Blog",
      sections: [
        {
          title: "Categories",
          items: [
            {
              title: "Technology Trends",
              href: "/blog/category/technology",
              description: "Latest in tech",
              icon: Lightbulb
            },
            {
              title: "Development",
              href: "/blog/category/development",
              description: "Coding and architecture",
              icon: Code
            },
            {
              title: "Case Studies",
              href: "/blog/category/case-studies",
              description: "Success stories",
              icon: FileText
            }
          ]
        },
        {
          title: "Resources",
          items: [
            {
              title: "Tutorials",
              href: "/blog/tutorials",
              description: "Step-by-step guides",
              icon: BookOpen
            },
            {
              title: "News",
              href: "/blog/news",
              description: "Industry updates",
              icon: Newspaper
            },
            {
              title: "Video Content",
              href: "/blog/videos",
              description: "Technical workshops",
              icon: Video
            }
          ]
        }
      ],
      featured: {
        title: "The Future of AI",
        description: "Exploring the latest developments in artificial intelligence",
        image: "/images/blog/ai-future.jpg",
        href: "/blog/ai-future"
      }
    }
  ]