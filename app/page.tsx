'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Code2, Cpu, Database, Globe, LayoutGrid, MessageSquare, Phone, Mail, MapPin, Star, CheckCircle2, ExternalLink } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedBackground from "@/components/AnimatedBackground"
import { SkillsSection } from "@/components/skills/SkillsSection"
import { HeroSection } from "@/components/hero/HeroSection"
import { PortfolioSection } from "@/components/portfolio/PortfolioSection"
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection"
import { ContactSection } from "@/components/contact/ContactSection"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/layout/Header"
import BlogSection from "@/components/blog/BlogSection"
import { Logo } from "@/components/layout/Logo"
export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Blockchain", "Solidity"],
      link: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics platform leveraging machine learning algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "TensorFlow", "Elasticsearch"],
      link: "#"
    },
    {
      title: "IoT Smart Home",
      description: "Integrated smart home solution with IoT device management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MQTT"],
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechInnovate Inc.",
      image: "/placeholder.svg?height=100&width=100",
      quote: "X Innovation Code Stack's expertise in cloud solutions transformed our infrastructure. Their team's dedication and innovative approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataDrive Solutions",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The AI-powered analytics platform X Innovation Code Stack developed for us has revolutionized our decision-making process. Their technical prowess is truly impressive.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "GreenTech Innovations",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Working with X Innovation Code Stack on our IoT project was a game-changer. Their ability to navigate complex technical challenges while maintaining clear communication was outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 max-w-screen-2xl mx-auto">
      <Header />
      <main>
        <HeroSection />

        <SkillsSection />

        <PortfolioSection />

        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}