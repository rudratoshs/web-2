
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(139, 92, 246, 0.1)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(14, 165, 233, 0.1)' }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r={Math.random() * 2 + 1}
            fill={Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(14, 165, 233, 0.3)'}
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default AnimatedBackground
