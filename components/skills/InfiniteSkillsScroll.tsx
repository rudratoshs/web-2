import { TechnologyCard } from './TechnologyCard'
import type { Technology } from '@/lib/skills-data'

interface InfiniteSkillsScrollProps {
  technologies: Technology[]
}

export function InfiniteSkillsScroll({ technologies }: InfiniteSkillsScrollProps) {
  const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2))
  const secondHalf = technologies.slice(Math.ceil(technologies.length / 2))

  return (
    <div className="relative py-4">
      {/* First Row - Left to Right */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...firstHalf, ...firstHalf].map((tech, index) => (
            <TechnologyCard key={`${tech.name}-${index}`} {...tech} index={index} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...firstHalf, ...firstHalf].map((tech, index) => (
            <TechnologyCard key={`${tech.name}-copy-${index}`} {...tech} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="marquee-container mt-8">
        <div className="marquee-content-reverse">
          {[...secondHalf, ...secondHalf].map((tech, index) => (
            <TechnologyCard key={`${tech.name}-${index}`} {...tech} index={index} />
          ))}
        </div>
        <div className="marquee-content-reverse" aria-hidden="true">
          {[...secondHalf, ...secondHalf].map((tech, index) => (
            <TechnologyCard key={`${tech.name}-copy-${index}`} {...tech} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}