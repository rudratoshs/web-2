import type { BlogPost } from "@/lib/blog-data";
import { BlogContent } from "./BlogContent";
import { BlogSidebar } from "../../[slug]/components/BlogSidebar";
import { BlogHeader } from "./BlogHeader";
import { Modal } from "@/components/ui/modal";

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
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
      </div>
    </div>
  );
}