'use client';

import { RecentPosts } from "./sidebar/RecentPosts";
import { AuthorBio } from "./sidebar/AuthorBio";
import { CategoryList } from "./sidebar/CategoryList";

interface BlogSidebarProps {
  currentPost: {
    id?: number;
    documentId?: string;
    category?: {
      id: number;
      name: string;
      slug: string;
    };
    author: {
      name: string;
      role: string;
      avatar: string;
      bio: string;
      documentId: string; // Author's document ID
    };
  };
}

export function BlogSidebar({ currentPost }: BlogSidebarProps) {
  const currentPostId = currentPost?.documentId || "unknown-id";
  const categories = currentPost?.category
    ? [
        {
          id: currentPost.category.id,
          title: currentPost.category.name,
          slug: currentPost.category.slug,
        },
      ]
    : [];

  return (
    <div className="space-y-8 lg:mt-[-11.5rem]">
      <RecentPosts currentPostId={currentPostId} />
      <AuthorBio authorId={currentPost.author.documentId} />
      <CategoryList categories={categories} />
    </div>
  );
}