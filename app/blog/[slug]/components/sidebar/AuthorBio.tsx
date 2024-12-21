// app/blog/[slug]/components/sidebar/AuthorBio.tsx
'use client';

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { PortableText } from "@portabletext/react"

interface AuthorBioProps {
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: any;
  }
}

export function AuthorBio({ author }: AuthorBioProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-card rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6">About the Author</h3>
        <div className="flex items-start gap-6">
          <Image
            src={author.avatar}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-xl"
          />
          <div>
            <h4 className="text-xl font-semibold text-foreground">{author.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{author.role}</p>
            <div className="text-muted-foreground mt-2">
              <div className="line-clamp-3 text-sm leading-relaxed">
                <PortableText value={author.bio} />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary hover:text-primary/80 text-sm font-medium mt-2"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">{author.name}</h2>
            <p className="text-lg text-muted-foreground">{author.role}</p>
          </div>
          <div className="prose prose-gray max-w-none">
            <PortableText value={author.bio} />
          </div>
        </div>
      </Modal>
    </>
  )
}
