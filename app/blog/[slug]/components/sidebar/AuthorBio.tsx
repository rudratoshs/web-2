'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { STRAPI_URL } from "@/lib/config/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface AuthorBioProps {
  authorId: string; // Pass the author ID as a prop
}

export function AuthorBio({ authorId }: AuthorBioProps) {
  const [author, setAuthor] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch author details on mount
  useEffect(() => {
    async function fetchAuthor() {
      try {
        const response = await fetch(
          `${STRAPI_URL}/api/authors/${authorId}?populate=*`
        );
        const data = await response.json();
        console.log('data', data)

        if (data?.data) {
          setAuthor(data.data);
        }
      } catch (error) {
        console.error("Error fetching author data:", error);
      }
    }

    fetchAuthor();
  }, [authorId]);

  if (!author) {
    return <p>Loading author details...</p>;
  }

  const authorAvatarUrl = author.avatar?.formats?.thumbnail?.url
    ? `${STRAPI_URL}${author.avatar.formats.thumbnail.url}`
    : "/default-avatar.jpg";

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
            src={authorAvatarUrl}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-xl"
          />
          <div>
            <h4 className="text-xl font-semibold text-foreground">{author.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{author.role || "Author"}</p>
            <div className="text-muted-foreground mt-2">
              <div className="line-clamp-3 text-sm leading-relaxed">
              {author.bio ? (
              <BlocksRenderer content={author.bio} />
            ) : (
              <p className="text-sm text-muted-foreground">Bio not available.</p>
            )}
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src={authorAvatarUrl}
                alt={author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2">{author.name}</h2>
            <p className="text-lg text-muted-foreground">{author.role || "Author"}</p>
          </div>
          <div className="prose prose-gray max-w-none">
            {author.bio ? (
              <BlocksRenderer content={author.bio} />
            ) : (
              <p className="text-sm text-muted-foreground">Bio not available.</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}