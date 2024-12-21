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
  };
  recentPosts: any[];
  categories: any[];
}

export function BlogSidebar({ currentPost, recentPosts, categories }: BlogSidebarProps) {
  return (
    <div className="space-y-8 lg:mt-[-19.5rem]">
      <RecentPosts posts={recentPosts} />
      <AuthorBio author={currentPost.author} />
      <CategoryList categories={categories} />
    </div>
  )
}
