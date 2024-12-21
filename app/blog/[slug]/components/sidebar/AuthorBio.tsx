'use client';

import Image from "next/image"
import { motion } from "framer-motion"

interface AuthorBioProps {
    author: {
        name: string;
        role: string;
        avatar: string;
        bio: string;
    }
}

export function AuthorBio({ author }: AuthorBioProps) {
    console.log('Author data:', author);
    if (!author) {
        return null; // Add error handling
      }
    return (
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
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                        {author.bio}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}