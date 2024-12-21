'use client';
import { RecentPosts } from "./sidebar/RecentPosts"
import { AuthorBio } from "./sidebar/AuthorBio"
import { CategoryList } from "./sidebar/CategoryList"

interface BlogSidebarProps {
  currentPost: {
    _id: string;
    author: {
      name: string;
      role: string;
      avatar: string;
      bio: string;
    };
  }
}

export function BlogSidebar({ currentPost }: BlogSidebarProps) {
  return (
    <div className="space-y-8 lg:mt-[-19.5rem]">
      <RecentPosts currentPostId={currentPost._id} />
      <AuthorBio author={currentPost.author} />
      <CategoryList />
    </div>
  )
}