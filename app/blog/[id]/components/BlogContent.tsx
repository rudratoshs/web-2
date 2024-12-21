import Image from "next/image"
import type { BlogPost } from "@/lib/blog-data"

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-gray max-w-none">
      <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="lead">{post.excerpt}</p>

      {/* Sample content - you should replace this with actual blog content */}
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2>Key Points</h2>
      <ul>
        <li>First important point about the topic</li>
        <li>Second key consideration to keep in mind</li>
        <li>Third major aspect of the discussion</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
        in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </article>
  )
}