import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TechBubble } from "./TechBubble"
import { HeroBackground } from "./HeroBackground"

export function HeroSection() {
  const techBubbles = [
    { name: "React", x: "10%", y: "20%", delay: 0 },
    { name: "Node.js", x: "85%", y: "15%", delay: 0.2 },
    { name: "TypeScript", x: "75%", y: "65%", delay: 0.4 },
    { name: "Next.js", x: "15%", y: "75%", delay: 0.6 },
    { name: "AWS", x: "50%", y: "85%", delay: 0.8 },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      <HeroBackground />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Transforming Ideas into Reality
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient">
                Building the Future
              </span>
              <br />
              <span className="text-foreground">
                One Line of Code at a Time
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              We craft cutting-edge solutions using the latest technologies to help businesses thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              View Our Work
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>

      {techBubbles.map((bubble, index) => (
        <TechBubble
          key={bubble.name}
          name={bubble.name}
          x={bubble.x}
          y={bubble.y}
          delay={bubble.delay}
        />
      ))}
    </section>
  )
}