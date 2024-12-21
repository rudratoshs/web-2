'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

interface AuthorBioProps {
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: any; // Change this to match the type of your rich text data
  };
}

export function AuthorBio({ author }: AuthorBioProps) {
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
          {/* Render the rich text using PortableText */}
          <div className="text-muted-foreground mt-2 leading-relaxed">
            <PortableText
              value={author.bio}
              components={{
                types: {
                  // Define custom serializers if needed for specific rich text types
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}