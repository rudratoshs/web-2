import { BlogContent } from "./BlogContent"
import { BlogSidebar } from "./BlogSidebar"
import { BlogHeader } from "./BlogHeader"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
    return (
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <BlogHeader post={post} />
        
        {/* Add align-start classes to grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Blog Content */}
          <div className="lg:col-span-8">
            <BlogContent post={post} />
          </div>
        </div>
      </div>
    );
  }