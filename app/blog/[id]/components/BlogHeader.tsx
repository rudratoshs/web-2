import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { BlogSidebar } from "./BlogSidebar" // Import the sidebar component

interface BlogHeaderProps {
  post: BlogPost
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <div className="relative py-10 lg:py-16">
      {/* Grid layout for heading and sidebar */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Main Blog Header Content */}
        <div className="lg:col-span-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-primary/10 text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold lg:text-5xl lg:leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative size-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}