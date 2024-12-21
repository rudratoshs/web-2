import { motion } from "framer-motion"

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </>
  )
}