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
    };
  };
}

export function BlogSidebar({ currentPost }: BlogSidebarProps) {
  console.log('currentPost', currentPost);

  // Ensure `currentPost.documentId` exists
  const currentPostId = currentPost?.documentId || "unknown-id";

  // Extract category from the current post
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
      <AuthorBio author={currentPost.author} />
      <CategoryList categories={categories} />
    </div>
  );
}