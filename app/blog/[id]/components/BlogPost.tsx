'use client';

import Image from "next/image"
import { useState } from "react"
import { BlogContent } from "./BlogContent"
import { BlogSidebar } from "../../[slug]/components/BlogSidebar"
import { BlogHeader } from "./BlogHeader"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"
import { Modal } from "@/components/ui/modal"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <BlogHeader post={post} />

      <div className="grid lg:grid-cols-12 gap-8 mb-10">
        <div className="lg:col-span-8">
          <BlogContent post={post} />
        </div>
        <div className="lg:col-span-4">
          <BlogSidebar currentPost={post} />
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="text-primary hover:text-primary/80 text-sm font-medium mt-2"
        >
          Read more
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-8">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative w-32 h-32 mb-6">
              </div>
              <h2 className="text-3xl font-bold mb-2">Name</h2>
              <p className="text-lg text-muted-foreground">role</p>
            </div>
            <div className="prose prose-gray max-w-none">
              bio
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}